import React, { useState, useEffect } from 'react';
import { isAudioMuted, setAudioMuted, getAudioVolume, setAudioVolume, startBgm, playClickSfx } from '../utils/audio';

interface HeaderProps {
  onOpenInfo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInfo }) => {
  const [muted, setMuted] = useState(isAudioMuted());
  const [volume, setVolume] = useState(getAudioVolume());
  const [hasStartedAudio, setHasStartedAudio] = useState(false);

  useEffect(() => {
    // Attempt BGM when user first interacts
    const onUserGesture = () => {
      if (!hasStartedAudio) {
        startBgm();
        setHasStartedAudio(true);
      }
    };
    window.addEventListener('click', onUserGesture, { once: true });
    window.addEventListener('keydown', onUserGesture, { once: true });
    window.addEventListener('touchstart', onUserGesture, { once: true });
  }, [hasStartedAudio]);

  const handleToggleMute = () => {
    playClickSfx();
    const next = !muted;
    setMuted(next);
    setAudioMuted(next);
    if (!hasStartedAudio) {
      startBgm();
      setHasStartedAudio(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setAudioVolume(val);
    if (muted) {
      setMuted(false);
      setAudioMuted(false);
    }
    if (!hasStartedAudio) {
      startBgm();
      setHasStartedAudio(true);
    }
  };

  return (
    <header className="relative w-full max-w-7xl mx-auto pt-6 sm:pt-10 pb-6 px-4 flex flex-col items-center text-center">
      {/* Barre d actions superieure */}
      <div className="w-full flex items-center justify-between mb-4 sm:mb-6 text-xs sm:text-sm">
        {/* Lien retour hub principal */}
        <a
          href="/"
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-700/60 bg-slate-900/80 text-slate-300 hover:text-white hover:border-amber-500/50 transition backdrop-blur shadow-md select-none"
          title="Retourner au catalogue complet Hylst.Games"
        >
          <span className="transition-transform group-hover:-translate-x-0.5">◀</span>
          <span className="font-serif">Hub Hylst.Games</span>
        </a>

        {/* Commandes audio & modale Infos */}
        <div className="flex items-center gap-2">
          {/* Controleur de son */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-slate-700/60 bg-slate-900/80 text-amber-200 backdrop-blur shadow-md">
            <button
              onClick={handleToggleMute}
              className="text-base sm:text-lg cursor-pointer hover:scale-110 transition select-none"
              title={muted ? 'Activer la musique gothique' : 'Couper le son'}
              aria-label={muted ? 'Activer le son' : 'Couper le son'}
            >
              {muted ? '🔇' : '🔊'}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-14 sm:w-20 h-1.5 accent-amber-500 cursor-pointer"
              title="Volume de l ambiance sonore"
              aria-label="Volume de l ambiance sonore"
            />
          </div>

          {/* Bouton Infos technique */}
          <button
            onClick={() => { playClickSfx(); onOpenInfo(); }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-purple-500/40 bg-slate-900/80 text-purple-200 hover:bg-purple-950/60 transition backdrop-blur shadow-md cursor-pointer select-none"
            title="A propos de ce launcher"
            aria-label="Infos sur le launcher"
          >
            <span>ℹ️</span>
            <span className="hidden sm:inline">Infos</span>
          </button>
        </div>
      </div>

      {/* Blason & Titre Principal */}
      <div className="inline-flex items-center justify-center p-2 rounded-full mb-2">
        <span className="text-3xl sm:text-5xl filter drop-shadow-[0_0_15px_rgba(245,158,11,0.6)] animate-pulse">
          🦇
        </span>
      </div>

      <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-wider text-amber-400 drop-shadow-[0_0_25px_rgba(245,158,11,0.4)]">
        L Antre d Halloween
      </h1>

      <p className="mt-2 sm:mt-3 font-serif italic text-base sm:text-xl text-purple-200/90 max-w-2xl drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]">
        Le Grimoire de Minuit : 8 sortilèges d arcade, de survie et de mystères
      </p>

      <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400 font-mono">
        <span className="w-8 h-px bg-gradient-to-r from-transparent to-amber-500/50" />
        <span>100% FRONTEND · ZERO TRACKER · SANS SERVEUR</span>
        <span className="w-8 h-px bg-gradient-to-l from-transparent to-amber-500/50" />
      </div>
    </header>
  );
};
