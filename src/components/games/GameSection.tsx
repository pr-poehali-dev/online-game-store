
import React from 'react';
import GameCard, { Game } from './GameCard';
import { Button } from '@/components/ui/button';

interface GameSectionProps {
  title: string;
  subtitle?: string;
  games: Game[];
  viewAllLink?: string;
  featured?: boolean;
}

const GameSection: React.FC<GameSectionProps> = ({
  title,
  subtitle,
  games,
  viewAllLink,
  featured = false,
}) => {
  return (
    <section className="my-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-montserrat">{title}</h2>
            {subtitle && <p className="mt-1 text-gray-400">{subtitle}</p>}
          </div>
          
          {viewAllLink && (
            <Button variant="link" className="text-game-primary hover:text-game-accent">
              Смотреть все
            </Button>
          )}
        </div>
        
        <div className={`grid gap-6 ${
          featured 
            ? 'grid-cols-1' 
            : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
        }`}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} featured={featured} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
