import { MapPin, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
    onSearch?: (query: string) => void;
    searchValue?: string;
}

export const Header = ({ onSearch, searchValue = '' }: HeaderProps) => {
    const [query, setQuery] = useState(searchValue);

    const handleSearch = () => {
        onSearch?.(query);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <header className="bg-card border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between gap-4">
                    <Link
                        to="/"
                        className="flex items-center gap-2 flex-shrink-0"
                    >
                        <div className="w-10 h-10 bg-foreground rounded-full flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-background" />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-sm font-bold text-foreground">
                                highway
                            </span>
                            <span className="text-sm font-bold text-foreground">
                                delite
                            </span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2 flex-1 max-w-xl">
                        <Input
                            type="text"
                            placeholder="Search experiences"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="flex-1"
                        />
                        <Button
                            onClick={handleSearch}
                            className="flex-shrink-0"
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
