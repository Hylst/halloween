import React from 'react';
import { GameCategory } from '../types';
import { CATEGORIES, GAMES_DATA } from '../data/gamesData';
import { playClickSfx } from '../utils/audio';

interface CategoryFilterProps {
  activeCategory: GameCategory;
  onSelectCategory: (cat: GameCategory) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  const getCount = (catId: GameCategory) => {
    if (catId === 'all') return GAMES_DATA.length;
    return GAMES_DATA.filter((g) => g.category === catId).length;
  };

  const handleSelect = (catId: GameCategory) => {
    playClickSfx();
    onSelectCategory(catId);
  };

  return (
    <nav className="w-full max-w-5xl mx-auto px-4 mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3" aria-label="Filtres thématiques">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.id;
        const count = getCount(cat.id);

        return (
          <button
            key={cat.id}
            onClick={() => handleSelect(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none border backdrop-blur ${
              isActive
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.25)] scale-105'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-900/80'
            }`}
          >
            <span className="text-base">{cat.icon}</span>
            <span>{cat.label}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                isActive ? 'bg-amber-400/30 text-amber-200' : 'bg-slate-800 text-slate-500'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
