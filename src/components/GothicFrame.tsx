import React from 'react';

export const GothicFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 my-2">
      {/* Grille superieure en fer forge ornee (Crest) */}
      <div className="w-full flex items-center justify-between text-amber-500/40 px-2 sm:px-6 mb-2 pointer-events-none select-none" aria-hidden="true">
        {/* Volute gauche */}
        <svg viewBox="0 0 120 28" className="h-5 sm:h-7 w-auto fill-none stroke-current stroke-[1.8]">
          <path d="M 0 24 C 30 24, 45 4, 75 14 C 95 20, 110 8, 120 4" />
          <circle cx="15" cy="20" r="3" fill="currentColor" />
          <circle cx="75" cy="14" r="2.5" fill="currentColor" />
          <path d="M 40 18 Q 45 6 52 14" />
        </svg>

        {/* Fleche / Fleur de lys centrale gothique */}
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="w-12 sm:w-28 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-amber-500/80" />
          <svg viewBox="0 0 30 35" className="h-7 sm:h-9 w-auto fill-current text-amber-400/70 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
            <path d="M 15 2 L 18 12 L 28 14 L 19 20 L 22 30 L 15 24 L 8 30 L 11 20 L 2 14 L 12 12 Z" />
          </svg>
          <span className="w-12 sm:w-28 h-px bg-gradient-to-l from-transparent via-amber-500/40 to-amber-500/80" />
        </div>

        {/* Volute droite */}
        <svg viewBox="0 0 120 28" className="h-5 sm:h-7 w-auto fill-none stroke-current stroke-[1.8] -scale-x-100">
          <path d="M 0 24 C 30 24, 45 4, 75 14 C 95 20, 110 8, 120 4" />
          <circle cx="15" cy="20" r="3" fill="currentColor" />
          <circle cx="75" cy="14" r="2.5" fill="currentColor" />
          <path d="M 40 18 Q 45 6 52 14" />
        </svg>
      </div>

      {/* Cadre en fer forge entourant le contenu */}
      <div className="relative rounded-3xl border-2 border-purple-950/60 bg-[#0a0514]/70 backdrop-blur-sm p-3 sm:p-6 shadow-[0_0_50px_rgba(15,5,30,0.8),inset_0_0_30px_rgba(30,10,50,0.4)]">
        {/* Coins en fer forge orne */}
        <div className="pointer-events-none absolute top-1 left-1 w-8 sm:w-12 h-8 sm:h-12 text-amber-500/50" aria-hidden="true">
          <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current stroke-2">
            <path d="M 4 36 L 4 12 C 4 7, 7 4, 12 4 L 36 4" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M 4 20 C 12 20, 20 12, 20 4" />
          </svg>
        </div>

        <div className="pointer-events-none absolute top-1 right-1 w-8 sm:w-12 h-8 sm:h-12 text-amber-500/50 -scale-x-100" aria-hidden="true">
          <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current stroke-2">
            <path d="M 4 36 L 4 12 C 4 7, 7 4, 12 4 L 36 4" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M 4 20 C 12 20, 20 12, 20 4" />
          </svg>
        </div>

        <div className="pointer-events-none absolute bottom-1 left-1 w-8 sm:w-12 h-8 sm:h-12 text-amber-500/50 -scale-y-100" aria-hidden="true">
          <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current stroke-2">
            <path d="M 4 36 L 4 12 C 4 7, 7 4, 12 4 L 36 4" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M 4 20 C 12 20, 20 12, 20 4" />
          </svg>
        </div>

        <div className="pointer-events-none absolute bottom-1 right-1 w-8 sm:w-12 h-8 sm:h-12 text-amber-500/50 -scale-x-100 -scale-y-100" aria-hidden="true">
          <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current stroke-2">
            <path d="M 4 36 L 4 12 C 4 7, 7 4, 12 4 L 36 4" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path d="M 4 20 C 12 20, 20 12, 20 4" />
          </svg>
        </div>

        {/* Contenu interne */}
        {children}
      </div>

      {/* Barre inferieure de fer forge */}
      <div className="w-full flex items-center justify-center gap-3 text-purple-800/40 my-3 pointer-events-none select-none" aria-hidden="true">
        <span className="w-20 sm:w-48 h-[1.5px] bg-gradient-to-r from-transparent via-purple-700/40 to-purple-600/70" />
        <span className="text-amber-500/60 text-xs sm:text-sm">⬥ ⚰️ ⬥</span>
        <span className="w-20 sm:w-48 h-[1.5px] bg-gradient-to-l from-transparent via-purple-700/40 to-purple-600/70" />
      </div>
    </div>
  );
};
