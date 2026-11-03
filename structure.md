# Structure technique : halloween-launcher

- `src/main.tsx` : point d entree React 19
- `src/App.tsx` : orchestrateur principal, layout et pied de page
- `src/types.ts` : definitions TypeScript des jeux et categories
- `src/data/gamesData.ts` : metadonnees des 8 jeux et du teaser narratif
- `src/utils/audio.ts` : moteur Web Audio API (BGM gothique + bruitages)
- `src/components/FogCanvas.tsx` : rendu Canvas 2D brume & particules
- `src/components/Header.tsx` : titre gothique, commandes audio et retour hub
- `src/components/CategoryFilter.tsx` : onglets de filtrage par categorie
- `src/components/GameCard.tsx` : carte individuelle d un jeu avec cover et lueurs
- `src/components/GameGrid.tsx` : grille responsive du catalogue
- `src/components/InfoModal.tsx` : modale technique sur la conception du launcher
- `index.html` : meta tags SEO et polices gothiques
- `vite.config.ts` : configuration de build single-file autonome
