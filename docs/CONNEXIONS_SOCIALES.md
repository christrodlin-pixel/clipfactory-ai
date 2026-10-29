# ClipFactory AI — Connexions officielles (backend)

Cette documentation décrit le travail restant pour une publication automatique **réelle**. La PWA GitHub Pages est statique et ne peut pas stocker des secrets OAuth.

## Architecture
- PWA GitHub Pages : interface, préparation des clips, partage natif iOS.
- Backend sécurisé (à créer) : connexion OAuth avec PKCE/state, échange des codes, rafraîchissement des jetons et stockage chiffré.
- Stockage privé : fichiers MP4 temporaires et tâches de publication. Ne jamais stocker les vidéos ou jetons dans GitHub Pages.
- Workers : traitement FFmpeg, sous-titrage, sélection IA et rendu 9:16. Traitement d'une vidéo d'une heure sur iPhone seul : mémoire, batterie et restrictions iOS importantes.

## Plateformes
- Instagram : Instagram Platform / Graph API ; comptes et autorisations éligibles, permissions de publication, conteneur média puis publication.
- Facebook : Pages API, permissions approuvées, publication vidéo/Reels sur une Page autorisée.
- TikTok : Login Kit + Content Posting API ; approbation, scopes et limites selon l'app et le compte.
- YouTube : Google OAuth 2.0 et YouTube Data API videos.insert ; scopes, vérification OAuth et quotas.

## Sécurité et conformité
- Jamais de client secret ni de refresh token dans HTML, JavaScript public ou git.
- Le navigateur reçoit uniquement des états de connexion, jamais les jetons des plateformes.
- Authentifier l'utilisateur de ClipFactory, associer chaque compte au propriétaire, limiter les accès par RLS et vérifier les scopes.
- Prévoir suppression/déconnexion, rétention limitée des fichiers, consentement explicite avant publication.
- Ne pas déclarer une connexion réussie tant qu'un OAuth complet n'a pas été effectué et vérifié.

## Blocages externes
La configuration nécessite des identifiants développeur Meta, TikTok et Google, des URL de redirection, un domaine et parfois des validations de plateformes. Aucun de ces identifiants ne peut être inventé. Un backend et un worker sont nécessaires pour une publication et un rendu automatisés. L'app ne doit pas afficher de faux boutons « connecter » qui simulent une autorisation.
