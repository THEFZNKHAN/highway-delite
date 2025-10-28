import { Header } from '@/components/Header';
import { ExperienceCard } from '@/components/ExperienceCard';
import { experiences } from '@/data/experiences';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Home = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const searchQuery = searchParams.get('q') || '';
    const [searchValue, setSearchValue] = useState(searchQuery);

    const filteredExperiences = experiences.filter((exp) =>
        searchQuery
            ? exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              exp.location.toLowerCase().includes(searchQuery.toLowerCase())
            : true,
    );

    const handleSearch = (query: string) => {
        setSearchValue(query);
        if (query.trim()) {
            navigate(`/?q=${encodeURIComponent(query)}`);
        } else {
            navigate('/');
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Header onSearch={handleSearch} searchValue={searchValue} />
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredExperiences.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            id={exp.id}
                            title={exp.title}
                            location={exp.location}
                            description={exp.description}
                            price={exp.price}
                            image={exp.image}
                        />
                    ))}
                </div>
                {filteredExperiences.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted text-lg">
                            No experiences found matching "{searchQuery}"
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Home;
