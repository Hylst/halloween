import React, { useState, useEffect, useRef } from 'react';

export type InfoModalTab = 'tech' | 'privacy' | 'aiact';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: InfoModalTab;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose, initialTab = 'tech' }) => {
  const [activeTab, setActiveTab] = useState<InfoModalTab>(initialTab);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-3 sm:p-4 backdrop-blur-md select-none"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-purple-500/40 bg-slate-900 shadow-2xl shadow-purple-500/10">
        {/* Entete modale */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 p-4 sm:p-5 text-white">
          <div className="flex items-center gap-2.5">
            <span className="text-xl sm:text-2xl">ℹ️</span>
            <h2 className="text-lg sm:text-xl font-bold tracking-wide">
              {activeTab === 'tech' && 'Architecture & Stack Technique'}
              {activeTab === 'privacy' && 'RGPD & Protection de la Vie Privée'}
              {activeTab === 'aiact' && 'Transparence IA (AI Act UE 2024/1689)'}
            </h2>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="rounded-lg bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition cursor-pointer"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>

        {/* Barre d onglets */}
        <div className="flex border-b border-slate-800 bg-slate-950/70 text-xs sm:text-sm font-medium px-2 sm:px-4 pt-2 gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('tech')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg transition border-b-2 cursor-pointer ${
              activeTab === 'tech'
                ? 'border-purple-400 text-purple-300 bg-slate-900/90 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <span>🛠️</span>
            <span>Technique</span>
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg transition border-b-2 cursor-pointer ${
              activeTab === 'privacy'
                ? 'border-emerald-400 text-emerald-300 bg-slate-900/90 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <span>🛡️</span>
            <span>RGPD &amp; Vie Privée</span>
          </button>
          <button
            onClick={() => setActiveTab('aiact')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-t-lg transition border-b-2 cursor-pointer ${
              activeTab === 'aiact'
                ? 'border-sky-400 text-sky-300 bg-slate-900/90 font-semibold'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
            }`}
          >
            <span>🤖</span>
            <span>AI Act</span>
          </button>
        </div>

        {/* Corps modale */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'tech' && (
            <div className="space-y-3.5">
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
                <strong className="text-purple-400">Architecture :</strong> Découpage modulaire par composants (FogCanvas, Header, CategoryFilter, GameCard, GameGrid), données de jeux typées et extensibles prêtes pour l accueil futur des récits interactifs.
              </p>
              <p>
                <strong className="text-purple-400">Algorithmes notables :</strong> Générateur de particules de brume à boucle torique infinie (wrap des coordonnées d écran), gestionnaire de gain audio progressif pour transitions sans claquement numérique.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-3.5">
              <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 text-xs">
                <strong>Garantie de confidentialité intégrale :</strong> Ce launcher et l ensemble des 8 jeux d Halloween respectent scrupuleusement le Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679).
              </div>
              <p>
                <strong className="text-emerald-400">Zéro collecte de données personnelles :</strong> Aucun compte utilisateur n est requis, aucune inscription, aucun formulaire, aucun identifiant, aucune adresse IP n est collectée ni stockée sur un quelconque serveur.
              </p>
              <p>
                <strong className="text-emerald-400">Zéro traceur tiers :</strong> Aucun cookie publicitaire, aucun tracker de réseau social, aucun outil d analyse d audience tiers (pas de Google Analytics, pas de Meta Pixel).
              </p>
              <p>
                <strong className="text-emerald-400">Exécution 100% locale (Frontend) :</strong> Tout le code s exécute intégralement dans votre navigateur web. Aucun appel API vers un backend distant n a lieu pendant vos parties.
              </p>
              <p>
                <strong className="text-emerald-400">Stockage local exclusif (localStorage) :</strong> Seules vos préférences techniques de confort (réglage du volume sonore, statut muet) sont conservées localement dans votre propre navigateur. Ces valeurs ne quittent jamais votre appareil et peuvent être effacées à tout instant en vidant les données de site de votre navigateur.
              </p>
              <p>
                <strong className="text-emerald-400">Exercice de vos droits :</strong> En l absence totale de traitement de données nominatives, aucun droit d accès ou de rectification n est nécessaire ; le simple nettoyage du cache de votre navigateur supprime instantanément toute trace résiduelle.
              </p>
            </div>
          )}

          {activeTab === 'aiact' && (
            <div className="space-y-3.5">
              <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/30 text-sky-200 text-xs">
                <strong>Déclaration de transparence AI Act (Règlement UE 2024/1689) :</strong> Information loyale des utilisateurs conformément aux exigences de transparence de l article 50 du règlement européen sur l intelligence artificielle.
              </div>
              <p>
                <strong className="text-sky-400">Conception et Code source :</strong> Ce launcher et la collection des 8 jeux d Halloween ont été architecturés, programmés et optimisés par <strong>Geoffroy Streit (Hylst)</strong> avec l assistance d outils d intelligence artificielle générative (LLM pour le code source React / TypeScript).
              </p>
              <p>
                <strong className="text-sky-400">Illustrations et Médias visuels :</strong> Les vignettes, décors et visuels d illustration ont été générés à l aide de modèles d IA générative d images (FLUX, SDXL / Z-Image), sous supervision et direction artistique humaine.
              </p>
              <p>
                <strong className="text-sky-400">Son et Musique :</strong> Les nappes d orgue et bruitages sont synthétisés algorithmiquement en temps réel via l API standard Web Audio de votre navigateur (oscillateurs natifs sans modèle IA audio distant).
              </p>
              <p>
                <strong className="text-sky-400">Classification du système :</strong> Système interactif récréatif à risque minimal ou nul. Zéro système biométrique, zéro manipulation comportementale préjudiciable, zéro prise de décision automatisée.
              </p>
              <p>
                <strong className="text-sky-400">Paternité et Droits :</strong> Conçu et réalisé par Geoffroy Streit (Hylst). Tous droits réservés © 2026.
              </p>
            </div>
          )}
        </div>

        {/* Pied modale */}
        <div className="bg-slate-950 p-3 sm:p-4 flex items-center justify-between border-t border-slate-800 text-xs">
          <span className="text-slate-400 font-mono text-[11px] hidden sm:inline">
            Hylst.Games · Conforme RGPD &amp; AI Act UE
          </span>
          <button
            onClick={onClose}
            className="ml-auto px-6 py-2 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-500 transition cursor-pointer text-sm shadow-md"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
