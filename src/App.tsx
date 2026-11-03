import React, { useState } from 'react';
import { GameCategory } from './types';
import { FogCanvas } from './components/FogCanvas';
import { Header } from './components/Header';
import { CategoryFilter } from './components/CategoryFilter';
import { GameGrid } from './components/GameGrid';
import { InfoModal } from './components/InfoModal';
import { GothicDecorations } from './components/GothicDecorations';
import { GothicFrame } from './components/GothicFrame';
import { GothicCursor } from './components/GothicCursor';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<GameCategory>('all');
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative min-h-dvh w-full bg-[#07040d] text-slate-100 flex flex-col justify-between overflow-x-hidden">
      {/* Brume et particules Canvas 2D en arriere-plan */}
      <FogCanvas />

      {/* Trainee magique et burst au curseur */}
      <GothicCursor />

      {/* Elements gothiques vivants (lune, sorciere, chauves-souris, araignees, citrouilles) */}
      <GothicDecorations />

      {/* Contenu principal */}
      <div className="relative z-10 flex-1 flex flex-col">
        <Header onOpenInfo={() => setShowInfo(true)} />

        {/* Cadre orne en grilles de fer forge victorien */}
        <GothicFrame>
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          <GameGrid activeCategory={activeCategory} />
        </GothicFrame>
      </div>

      {/* Pied de page avec mention exacte de creation IA */}
      <footer className="relative z-10 w-full py-6 px-4 border-t border-purple-950/50 bg-black/75 backdrop-blur text-center text-xs text-slate-400 font-serif">
        <p className="text-slate-300">
          Créé par <strong className="text-amber-400 font-sans">Geoffroy Streit</strong> (alias <strong className="text-purple-300 font-sans">Hylst</strong>) avec assistance IA. Images générées par IA.
        </p>
        <p className="mt-1 text-slate-500 font-mono text-[11px]">
          React 19 · TypeScript · Tailwind CSS 4 · Web Audio API · 100% Statique
        </p>
        <div className="mt-2.5 flex items-center justify-center gap-3 text-[11px]">
          <a href="/" className="text-amber-400/80 hover:text-amber-300 transition underline underline-offset-2">
            Retour au Hub Hylst.Games
          </a>
          <span>·</span>
          <button
            onClick={() => setShowInfo(true)}
            className="text-purple-400 hover:text-purple-300 transition underline underline-offset-2 cursor-pointer"
          >
            Infos techniques
          </button>
        </div>
      </footer>

      {/* Modale Infos technique */}
      <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
    </div>
  );
}
