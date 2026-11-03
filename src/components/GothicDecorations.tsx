import React, { useState } from 'react';

export const GothicDecorations: React.FC = () => {
  // Interactibilite avec les araignees (remontent si on les touche)
  const [spider1Scared, setSpider1Scared] = useState(false);
  const [spider2Scared, setSpider2Scared] = useState(false);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden select-none" aria-hidden="true">
      {/* 1. PLEINE LUNE ET SILHOUETTE DE SORCIERE */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 -z-10 opacity-70">
        {/* Lune lumineuse */}
        <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-100/20 via-purple-300/10 to-transparent blur-md shadow-[0_0_80px_rgba(245,200,120,0.25)]" />
        <div className="absolute inset-4 rounded-full bg-[#fef08a]/10 border border-amber-200/20 backdrop-blur-[1px]" />
        
        {/* Silhouette de sorciere volante traversant l horizon */}
        <div className="witch-flight absolute top-12 left-0 w-16 sm:w-20 h-10 text-amber-200/70">
          <svg viewBox="0 0 100 60" className="w-full h-full drop-shadow-[0_0_8px_rgba(254,240,138,0.5)]">
            {/* Balai */}
            <path d="M 5 45 L 85 15 L 92 14" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 85 15 C 92 10, 98 12, 95 22 C 92 20, 88 18, 85 15 Z" fill="#b45309" />
            {/* Corps & robe flottante */}
            <path d="M 35 34 C 25 45, 18 42, 28 35 C 32 32, 42 28, 48 30 Z" fill="#3b0764" />
            <path d="M 40 32 L 55 24 L 52 35 Z" fill="#1e1b4b" />
            {/* Chapeau pointu */}
            <path d="M 42 22 L 68 18 L 48 5 Z" fill="#0f172a" />
            <ellipse cx="50" cy="20" rx="14" ry="3" fill="#0f172a" transform="rotate(-12, 50, 20)" />
            {/* Nez crochu & visage */}
            <circle cx="53" cy="21" r="3" fill="#a7f3d0" />
            <path d="M 56 22 L 60 23 L 56 24 Z" fill="#6ee7b7" />
            {/* Chat noir assis sur le manche */}
            <ellipse cx="25" cy="36" rx="4" ry="3" fill="#0f172a" />
            <polygon points="22,34 24,30 25,33" fill="#0f172a" />
            <polygon points="26,34 28,30 29,33" fill="#0f172a" />
          </svg>
        </div>
      </div>

      {/* 2. CHAUVES-SOURIS EN VOL */}
      <div className="bat-flock absolute inset-0">
        <div className="bat bat-1 absolute top-20 text-purple-300/60">
          <svg viewBox="0 0 50 30" className="w-8 sm:w-10 h-5">
            <path d="M 25 15 C 22 5, 12 2, 2 8 C 8 16, 18 16, 22 22 C 24 18, 26 18, 28 22 C 32 16, 42 16, 48 8 C 38 2, 28 5, 25 15 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="bat bat-2 absolute top-36 text-amber-400/50">
          <svg viewBox="0 0 50 30" className="w-6 sm:w-8 h-4">
            <path d="M 25 15 C 22 5, 12 2, 2 8 C 8 16, 18 16, 22 22 C 24 18, 26 18, 28 22 C 32 16, 42 16, 48 8 C 38 2, 28 5, 25 15 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="bat bat-3 absolute top-14 text-red-400/40">
          <svg viewBox="0 0 50 30" className="w-5 sm:w-7 h-3.5">
            <path d="M 25 15 C 22 5, 12 2, 2 8 C 8 16, 18 16, 22 22 C 24 18, 26 18, 28 22 C 32 16, 42 16, 48 8 C 38 2, 28 5, 25 15 Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* 3. TOILES D ARAIGNEE DANS LES COINS SUPERIEURS */}
      <div className="absolute top-0 left-0 w-28 sm:w-44 h-28 sm:h-44 text-purple-400/25">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="0" y1="0" x2="100" y2="40" />
          <line x1="0" y1="0" x2="40" y2="100" />
          <line x1="0" y1="0" x2="100" y2="70" />
          <line x1="0" y1="0" x2="70" y2="100" />
          <path d="M 15 0 Q 15 15 0 15" />
          <path d="M 30 0 Q 30 30 0 30" />
          <path d="M 50 0 Q 50 50 0 50" />
          <path d="M 75 0 Q 75 75 0 75" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-28 sm:w-44 h-28 sm:h-44 text-purple-400/25 -scale-x-100">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-current" fill="none" strokeWidth="1.2">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="0" y1="0" x2="100" y2="40" />
          <line x1="0" y1="0" x2="40" y2="100" />
          <line x1="0" y1="0" x2="100" y2="70" />
          <line x1="0" y1="0" x2="70" y2="100" />
          <path d="M 15 0 Q 15 15 0 15" />
          <path d="M 30 0 Q 30 30 0 30" />
          <path d="M 50 0 Q 50 50 0 50" />
          <path d="M 75 0 Q 75 75 0 75" />
        </svg>
      </div>

      {/* 4. ARAIGNEES INTERACTIVES QUI DESCENDENT LE LONG DE LEUR FIL */}
      <div
        className={`pointer-events-auto absolute top-0 left-12 sm:left-24 transition-all duration-700 cursor-pointer ${
          spider1Scared ? '-translate-y-24' : 'spider-bounce-1'
        }`}
        onMouseEnter={() => setSpider1Scared(true)}
        onMouseLeave={() => setTimeout(() => setSpider1Scared(false), 2000)}
        title="Une araignee tisse sa toile !"
      >
        <div className="w-[1.5px] h-28 sm:h-40 bg-gradient-to-b from-purple-300/40 via-purple-200/60 to-purple-100/90 mx-auto" />
        <div className="relative -mt-1 w-6 h-6 text-purple-200 hover:scale-125 transition-transform">
          <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <circle cx="20" cy="20" r="6" fill="#1e1035" stroke="#a855f7" strokeWidth="1.5" />
            <circle cx="20" cy="14" r="4" fill="#120822" />
            {/* Yeux rouges */}
            <circle cx="18" cy="13" r="1" fill="#ef4444" />
            <circle cx="22" cy="13" r="1" fill="#ef4444" />
            {/* Pattes */}
            <path d="M 16 16 C 10 12, 6 18, 4 24" stroke="#c084fc" strokeWidth="1.5" fill="none" />
            <path d="M 16 20 C 10 20, 6 26, 4 32" stroke="#c084fc" strokeWidth="1.5" fill="none" />
            <path d="M 24 16 C 30 12, 34 18, 36 24" stroke="#c084fc" strokeWidth="1.5" fill="none" />
            <path d="M 24 20 C 30 20, 34 26, 36 32" stroke="#c084fc" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>

      <div
        className={`pointer-events-auto absolute top-0 right-12 sm:right-28 transition-all duration-700 cursor-pointer ${
          spider2Scared ? '-translate-y-28' : 'spider-bounce-2'
        }`}
        onMouseEnter={() => setSpider2Scared(true)}
        onMouseLeave={() => setTimeout(() => setSpider2Scared(false), 2000)}
        title="Attention au fil de soie !"
      >
        <div className="w-[1.5px] h-36 sm:h-52 bg-gradient-to-b from-amber-300/40 via-amber-200/60 to-amber-100/90 mx-auto" />
        <div className="relative -mt-1 w-7 h-7 text-amber-200 hover:scale-125 transition-transform">
          <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <circle cx="20" cy="20" r="7" fill="#261205" stroke="#f59e0b" strokeWidth="1.5" />
            <circle cx="20" cy="13" r="4.5" fill="#180b03" />
            {/* Yeux jaunes */}
            <circle cx="18" cy="12" r="1.2" fill="#fbbf24" />
            <circle cx="22" cy="12" r="1.2" fill="#fbbf24" />
            {/* Pattes */}
            <path d="M 15 16 C 8 12, 5 18, 3 24" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
            <path d="M 15 20 C 8 20, 5 26, 3 32" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
            <path d="M 25 16 C 32 12, 35 18, 37 24" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
            <path d="M 25 20 C 32 20, 35 26, 37 32" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>

      {/* 5. CITROUILLES REBONDISSANTES DANS LES COINS INFERIEURS */}
      <div className="pointer-events-auto absolute bottom-4 left-3 sm:left-8 pumpkin-bounce cursor-pointer group" title="Joyeux Halloween !">
        <svg viewBox="0 0 60 50" className="w-12 sm:w-16 h-10 sm:h-14 filter drop-shadow-[0_0_12px_rgba(249,115,22,0.4)] group-hover:scale-110 transition-transform">
          {/* Tige verte */}
          <path d="M 28 10 Q 30 2, 36 4" stroke="#22c55e" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Corps de citrouille */}
          <ellipse cx="30" cy="28" rx="24" ry="18" fill="#ea580c" stroke="#c2410c" strokeWidth="2" />
          <ellipse cx="30" cy="28" rx="16" ry="18" fill="#f97316" />
          <ellipse cx="30" cy="28" rx="8" ry="18" fill="#fb923c" />
          {/* Yeux triangulaires sculptes */}
          <polygon points="20,24 25,27 20,30" fill="#1e0c03" className="group-hover:fill-amber-300 transition-colors" />
          <polygon points="40,24 35,27 40,30" fill="#1e0c03" className="group-hover:fill-amber-300 transition-colors" />
          {/* Nez */}
          <polygon points="30,28 28,32 32,32" fill="#1e0c03" className="group-hover:fill-amber-300 transition-colors" />
          {/* Bouche dentelee */}
          <path d="M 18 36 Q 30 46 42 36 Q 38 41 34 38 Q 30 42 26 38 Q 22 41 18 36 Z" fill="#1e0c03" className="group-hover:fill-amber-300 transition-colors" />
        </svg>
      </div>

      <div className="pointer-events-auto absolute bottom-4 right-3 sm:right-8 pumpkin-bounce-delayed cursor-pointer group" title="Des bonbons ou un sort !">
        <svg viewBox="0 0 60 50" className="w-12 sm:w-16 h-10 sm:h-14 filter drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] group-hover:scale-110 transition-transform">
          {/* Tige */}
          <path d="M 32 10 Q 30 2, 24 4" stroke="#a855f7" strokeWidth="3.5" fill="none" strokeLinecap="round" />
          {/* Corps violet malicieux */}
          <ellipse cx="30" cy="28" rx="24" ry="18" fill="#7c3aed" stroke="#581c87" strokeWidth="2" />
          <ellipse cx="30" cy="28" rx="16" ry="18" fill="#9333ea" />
          <ellipse cx="30" cy="28" rx="8" ry="18" fill="#a855f7" />
          {/* Visage */}
          <polygon points="22,23 27,28 20,29" fill="#17062e" className="group-hover:fill-purple-200 transition-colors" />
          <polygon points="38,23 40,29 33,28" fill="#17062e" className="group-hover:fill-purple-200 transition-colors" />
          <path d="M 19 35 Q 30 45 41 35 L 37 38 L 33 35 L 30 39 L 27 35 L 23 38 Z" fill="#17062e" className="group-hover:fill-purple-200 transition-colors" />
        </svg>
      </div>
    </div>
  );
};
