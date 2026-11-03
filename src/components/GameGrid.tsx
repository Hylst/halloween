import React from 'react';
import { GameCategory } from '../types';
import { GAMES_DATA, NARRATIVE_TEASER } from '../data/gamesData';
import { GameCard } from './GameCard';

interface GameGridProps {
  activeCategory: GameCategory;
}

export const GameGrid: React.FC<GameGridProps> = ({ activeCategory }) => {
  const filteredGames = activeCategory === 'all'
    ? GAMES_DATA
    : GAMES_DATA.filter((g) => g.category === activeCategory);

  return (
    <main className="w-full max-w-7xl mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}

        {/* Teaser des recits narratifs (affiche dans la vue globale) */}
        {activeCategory === 'all' && (
          <GameCard game={NARRATIVE_TEASER} />
        )}
      </div>
    </main>
  );
};
