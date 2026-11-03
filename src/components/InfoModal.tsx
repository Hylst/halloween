import React from 'react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 p-3 sm:p-4 backdrop-blur-md select-none">
      <div className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-purple-500/40 bg-slate-900 shadow-2xl shadow-purple-500/10">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 p-4 sm:p-5 text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-xl sm:text-2xl">ℹ️</span>
            <h2 className="text-lg sm:text-xl font-bold tracking-wide">Comment ce launcher a été fait</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition cursor-pointer"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        <div className="overflow-y-auto p-4 sm:p-6 space-y-3.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
          <p>
            <strong className="text-purple-400">Stack :</strong> React 19, TypeScript 5.9, Tailwind CSS 4, Vite 7, compilé en un seul fichier HTML autonome, zéro dépendance externe au runtime.
          </p>
          <p>
            <strong className="text-purple-400">Graphismes :</strong> Arrière-plan animé en Canvas 2D avec brume volumétrique par dégradés radiaux mouvants et particules de braises ascendantes, budget de particules adapté selon le terminal (mobile/bureau).
          </p>
          <p>
            <strong className="text-purple-400">Musique &amp; sons :</strong> Nappe musicale d orgue gothique et violoncelles synthétisée en direct par l API Web Audio (progression d accords de Ré mineur polyphonique), avec bruitages procéduraux au survol et au clic. Zéro fichier audio externe téléchargé.
          </p>
          <p>
            <strong className="text-purple-400">Interactions :</strong> Navigation responsive fluide, filtres par catégorie d ambiance, contrôle de volume et muet avec persistance en localStorage, liens de lancement direct vers les 8 jeux et retour vers le hub.
          </p>
          <p>
            <strong className="text-purple-400">Architecture :</strong> Découpage modulaire par composants (FogCanvas, Header, CategoryFilter, GameCard, GameGrid), données de jeux typées et extensibles prêtes pour l accueil futur des livres interactifs.
          </p>
          <p>
            <strong className="text-purple-400">Algorithmes notables :</strong> Générateur de particules de brume à boucle torique infinie (wrap des coordonnées d écran), gestionnaire de gain audio progressif pour transitions sans claquement numérique.
          </p>
        </div>

        <div className="bg-slate-950 p-3 sm:p-4 text-center border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-500 transition cursor-pointer text-sm shadow-md"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
