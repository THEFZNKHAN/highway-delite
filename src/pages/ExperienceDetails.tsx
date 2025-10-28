import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { experiences } from '@/data/experiences';
import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ExperienceDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const experience = experiences.find((exp) => exp.id === id);

    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    if (!experience) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">
                        Experience not found
                    </h1>
                    <Button asChild>
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </div>
        );
    }

    const subtotal = experience.price * quantity;
    const taxes = Math.round(subtotal * 0.06);
    const total = subtotal + taxes;

    const handleConfirm = () => {
        if (!selectedDate || !selectedTime) {
            return;
        }
        navigate('/checkout', {
            state: {
                experience: experience.title,
                date: selectedDate,
                time: selectedTime,
                quantity,
                subtotal,
                taxes,
                total,
            },
        });
    };

    const selectedSlot = experience.timeSlots.find(
        (slot) => slot.time === selectedTime,
    );
    const isConfirmDisabled =
        !selectedDate || !selectedTime || selectedSlot?.available === 0;

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-foreground hover:text-muted mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium">Details</span>
                </Link>

                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="aspect-video rounded-xl overflow-hidden mb-6">
                            <img
                                src={experience.image}
                                alt={experience.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h1 className="text-3xl font-bold text-foreground mb-4">
                            {experience.title}
                        </h1>
                        <p className="text-muted mb-6">
                            {experience.description}
                        </p>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Choose date
                            </h2>
                            <div className="flex gap-2 flex-wrap">
                                {experience.dates.map((date) => (
                                    <Button
                                        key={date}
                                        variant={
                                            selectedDate === date
                                                ? 'default'
                                                : 'outline'
                                        }
                                        onClick={() => setSelectedDate(date)}
                                        className="min-w-[80px]"
                                    >
                                        {date}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-foreground mb-3">
                                Choose time
                            </h2>
                            <div className="flex gap-2 flex-wrap">
                                {experience.timeSlots.map((slot) => (
                                    <Button
                                        key={slot.time}
                                        variant={
                                            selectedTime === slot.time
                                                ? 'default'
                                                : 'outline'
                                        }
                                        onClick={() =>
                                            setSelectedTime(slot.time)
                                        }
                                        disabled={slot.available === 0}
                                        className="min-w-[120px] relative"
                                    >
                                        <span>{slot.time}</span>
                                        {slot.available > 0 && (
                                            <span className="ml-2 text-xs opacity-70">
                                                {slot.available} left
                                            </span>
                                        )}
                                        {slot.available === 0 && (
                                            <span className="ml-2 text-xs opacity-70">
                                                Sold out
                                            </span>
                                        )}
                                    </Button>
                                ))}
                            </div>
                            <p className="text-xs text-muted mt-2">
                                All times are in IST (GMT +5:30)
                            </p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4">
                            <h3 className="font-semibold text-foreground mb-2">
                                About
                            </h3>
                            <p className="text-sm text-muted">
                                {experience.about}
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-card rounded-xl p-6 shadow-lg sticky top-24">
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center pb-3 border-b border-border">
                                    <span className="text-muted">
                                        Starts at
                                    </span>
                                    <span className="text-xl font-bold text-foreground">
                                        ₹{experience.price}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-border">
                                    <span className="text-muted">Quantity</span>
                                    <div className="flex items-center gap-3">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() =>
                                                setQuantity(
                                                    Math.max(1, quantity - 1),
                                                )
                                            }
                                            disabled={quantity <= 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </Button>
                                        <span className="font-semibold w-8 text-center">
                                            {quantity}
                                        </span>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() =>
                                                setQuantity(quantity + 1)
                                            }
                                        >
                                            <Plus className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-border">
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
                                <div className="flex justify-between items-center text-lg">
                                    <span className="font-bold text-foreground">
                                        Total
                                    </span>
                                    <span className="font-bold text-foreground">
                                        ₹{total}
                                    </span>
                                </div>
                            </div>
                            <Button
                                className="w-full"
                                size="lg"
                                onClick={handleConfirm}
                                disabled={isConfirmDisabled}
                            >
                                Confirm
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ExperienceDetails;
