import React from 'react';
import { GameEntry } from '../types';
import { playHoverSfx, playLaunchSfx } from '../utils/audio';

interface GameCardProps {
  game: GameEntry;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const handleLaunch = () => {
    if (game.isTeaser) return;
    playLaunchSfx();
  };

  if (game.isTeaser) {
    return (
      <article
        className="relative flex flex-col overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-b from-slate-950/80 to-[#120810]/90 p-4 sm:p-5 shadow-xl opacity-75 select-none"
      >
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/60 mb-4 border border-red-950 flex items-center justify-center">
          <img
            src={game.coverPath}
            alt={game.title}
            className="w-full h-full object-cover filter grayscale contrast-125 opacity-40"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
            <span className="text-3xl mb-1 filter drop-shadow">🔒</span>
            <span className="px-2.5 py-1 rounded-full bg-red-900/60 border border-red-700/50 text-[11px] font-mono text-red-200">
              {game.badge}
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="font-display text-lg sm:text-xl font-bold text-red-300">
              {game.title}
            </h2>
          </div>
          <p className="font-serif italic text-xs text-red-400/80 mb-2">
            {game.subtitle}
          </p>
          <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">
            {game.desc}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {game.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-slate-900/70 text-[10px] text-slate-400 border border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="w-full py-2.5 rounded-xl border border-slate-800 bg-slate-900/40 text-center text-xs font-mono text-slate-500 cursor-not-allowed">
            Reliure en cours · Bientôt disponible
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      onMouseEnter={playHoverSfx}
      className="group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-slate-900/90 to-[#0e071c]/95 p-4 sm:p-5 shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_35px_rgba(0,0,0,0.6)]"
      style={{ borderColor: game.borderColor }}
    >
      {/* Halo de lueur diffuse en arriere-plan au survol */}
      <div
        className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-2xl"
        style={{ background: game.accentColor }}
      />

      {/* Illustration 16:9 avec badge de categorie */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black mb-4 border border-slate-800/80">
        <img
          src={game.coverPath}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Badge de style de jeu */}
        <div className="absolute top-2.5 left-2.5">
          <span
            className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold font-mono tracking-wide shadow-md backdrop-blur border"
            style={{
              backgroundColor: 'rgba(15, 10, 28, 0.85)',
              borderColor: game.accentColor,
              color: game.accentColor,
            }}
          >
            {game.badge}
          </span>
        </div>

        {/* Icone miniature dans le coin inferieur droit */}
        <div className="absolute bottom-2 right-2 w-9 h-9 rounded-lg overflow-hidden border border-slate-700/80 shadow-md">
          <img
            src={game.iconPath}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Corps descriptif */}
      <div className="flex-1 flex flex-col">
        <h2 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
          {game.title}
        </h2>

        <p
          className="font-serif italic text-xs sm:text-sm font-medium mb-2.5"
          style={{ color: game.accentColor }}
        >
          {game.subtitle}
        </p>

        <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-4 flex-1">
          {game.desc}
        </p>

        {/* Mots-cles */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {game.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2 py-0.5 rounded-md bg-slate-950/60 text-[10px] sm:text-xs text-slate-400 border border-slate-800 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bouton de lancement */}
        <a
          href={`/${game.slug}/`}
          onClick={handleLaunch}
          className="group/btn relative w-full py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white text-center transition-all duration-200 shadow-lg flex items-center justify-center gap-2 overflow-hidden select-none"
          style={{
            backgroundColor: 'rgba(20, 12, 38, 0.9)',
            border: `1px solid ${game.borderColor}`,
          }}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"
            style={{
              background: `linear-gradient(135deg, ${game.accentColor}cc, #1a0b2e)`,
            }}
          />
          <span className="relative z-10 flex items-center gap-1.5 tracking-wider font-serif">
            <span>Invoquer le Jeu</span>
            <span className="transition-transform group-hover/btn:translate-x-1">▶</span>
          </span>
        </a>
      </div>
    </article>
  );
};
