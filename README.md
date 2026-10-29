# ClipFactory AI

Prototype V1 web responsive, autonome et gratuit. Ouvrir `index.html` depuis un serveur HTTPS (GitHub Pages, par exemple).

## Fonctionnalités actuelles
- Import et lecture de vidéo dans le navigateur sans transfert cloud.
- Génération de segments chronologiques configurables.
- Modification des points de coupe, lecture des extraits et export CSV.

## Non implémenté
- Analyse IA et sélection des 60 meilleurs passages.
- Rendu MP4, sous-titres automatiques.
- Connexions et publication sur TikTok, Instagram, Facebook.

## Architecture économique envisagée
Interface statique hébergée gratuitement, worker local sur Mac avec Python, faster-whisper, Ollama et FFmpeg. Sécuriser les échanges et les fichiers avant tout traitement distant. Les API sociales nécessitent OAuth et parfois approbation.

## Mise en ligne
Dans GitHub : Settings → Pages → Deploy from a branch → main / root. Le dépôt est actuellement public : ne jamais y déposer de vidéos privées, de secrets ni de jetons d'accès.
