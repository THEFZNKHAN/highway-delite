import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Confirmation = () => {
    const location = useLocation();
    const bookingData = location.state;

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

    const { bookingRef } = bookingData;

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-lg mx-auto text-center">
                    <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-12 h-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-foreground mb-4">
                        Booking Confirmed
                    </h1>
                    <Badge
                        variant="secondary"
                        className="text-base px-4 py-2 mb-8"
                    >
                        Ref ID: {bookingRef}
                    </Badge>
                    <Button asChild size="lg">
                        <Link to="/">Back to Home</Link>
                    </Button>
                </div>
            </main>
        </div>
    );
};

export default Confirmation;
