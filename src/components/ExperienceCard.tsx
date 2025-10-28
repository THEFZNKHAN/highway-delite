import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

interface ExperienceCardProps {
    id: string;
    title: string;
    location: string;
    description: string;
    price: number;
    image: string;
}

export const ExperienceCard = ({
    id,
    title,
    location,
    description,
    price,
    image,
}: ExperienceCardProps) => {
    return (
        <div className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="aspect-video relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                        {title}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                        {location}
                    </Badge>
                </div>
                <p className="text-sm text-muted mb-4 line-clamp-2">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1">
                        <span className="text-xs text-muted">From</span>
                        <span className="text-xl font-bold text-foreground">
                            ₹{price}
                        </span>
                    </div>
                    <Button asChild size="sm">
                        <Link to={`/experience/${id}`}>View Details</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};
