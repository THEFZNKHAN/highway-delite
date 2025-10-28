import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const bookingData = location.state;

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [discount, setDiscount] = useState(0);

    if (!bookingData) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        No booking data found
                    </h1>
                    <Button asChild>
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const { experience, date, time, quantity, subtotal, taxes } = bookingData;
    const discountedTotal = bookingData.total - discount;

    const handleApplyPromo = () => {
        const code = promoCode.toUpperCase();
        if (code === 'SAVE10') {
            const discountAmount = Math.round(subtotal * 0.1);
            setDiscount(discountAmount);
            toast.success('Promo code applied! 10% discount added.');
        } else if (code === 'FLAT100') {
            setDiscount(100);
            toast.success('Promo code applied! ₹100 discount added.');
        } else {
            toast.error('Invalid promo code');
            setDiscount(0);
        }
    };

    const handlePayment = () => {
        if (!fullName.trim()) {
            toast.error('Please enter your full name');
            return;
        }
        if (!email.trim() || !email.includes('@')) {
            toast.error('Please enter a valid email address');
            return;
        }
        if (!agreedToTerms) {
            toast.error('Please agree to the terms and safety policy');
            return;
        }

        const bookingRef =
            'HUF' + Math.random().toString(36).substring(2, 8).toUpperCase();
        navigate('/confirmation', {
            state: {
                bookingRef,
                fullName,
                email,
                experience,
                date,
                time,
                quantity,
                total: discountedTotal,
            },
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Link
                    to={`/experience/${experience.toLowerCase().replace(/ /g, '-')}`}
                    className="inline-flex items-center gap-2 text-foreground hover:text-muted mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium">Checkout</span>
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-card rounded-xl p-6 shadow-sm mb-6">
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-muted mb-2">
                                        Full name
                                    </label>
                                    <Input
                                        placeholder="John Doe"
                                        value={fullName}
                                        onChange={(e) =>
                                            setFullName(e.target.value)
                                        }
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-muted mb-2">
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="test@test.com"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-muted mb-2">
                                    Promo code
                                </label>
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Enter code"
                                        value={promoCode}
                                        onChange={(e) =>
                                            setPromoCode(e.target.value)
                                        }
                                        className="flex-1"
                                    />
                                    <Button
                                        onClick={handleApplyPromo}
                                        variant="secondary"
                                    >
                                        Apply
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-start gap-2">
                                <Checkbox
                                    id="terms"
                                    checked={agreedToTerms}
                                    onCheckedChange={(checked) =>
                                        setAgreedToTerms(checked as boolean)
                                    }
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm text-foreground cursor-pointer"
                                >
                                    I agree to the terms and safety policy
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-card rounded-xl p-6 shadow-lg sticky top-24">
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted">
                                        Experience
                                    </span>
                                    <span className="font-semibold text-foreground">
                                        {experience}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted">Date</span>
                                    <span className="font-semibold text-foreground">
                                        {date}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted">Time</span>
                                    <span className="font-semibold text-foreground">
                                        {time}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-border">
                                    <span className="text-muted">Qty</span>
                                    <span className="font-semibold text-foreground">
                                        {quantity}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted">Subtotal</span>
                                    <span className="font-semibold text-foreground">
                                        ₹{subtotal}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-border">
                                    <span className="text-muted">Taxes</span>
                                    <span className="font-semibold text-foreground">
                                        ₹{taxes}
                                    </span>
                                </div>
                                {discount > 0 && (
                                    <div className="flex justify-between items-center text-accent pb-3 border-b border-border">
                                        <span className="font-medium">
                                            Discount
                                        </span>
                                        <span className="font-semibold">
                                            -₹{discount}
                                        </span>
                                    </div>
                                )}
                                <div className="flex justify-between items-center text-lg pt-2">
                                    <span className="font-bold text-foreground">
                                        Total
                                    </span>
                                    <span className="font-bold text-foreground">
                                        ₹{discountedTotal}
                                    </span>
                                </div>
                            </div>
                            <Button
                                className="w-full"
                                size="lg"
                                onClick={handlePayment}
                            >
                                Pay and Confirm
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Checkout;
