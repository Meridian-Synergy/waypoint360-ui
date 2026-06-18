# Changelog

## 0.5.16

- **`WpSocialCard` (fix)** : ajout des icônes manquantes `twitter` (logo X) et `telegram`. Le type `SocialNetwork` les déclarait déjà (et `WpSocialLinks` les gérait), mais `WpSocialCard` n'avait pas de branche SVG correspondante → icône vide (`<!---->`) sur la carte X de la page contact.

## 0.5.15

- **`WpButton` (fix)** : ajout des fallbacks `var(--token, valeur)` sur tous les tokens de base (`--wp-font-body`, `--wp-radius-md`, `--wp-space-*`, `--wp-transition-*`, couleurs des variantes). Sans ça, le bouton s'affichait **écrasé** (padding/rayon/typo nuls) chez un consommateur qui ne déclare pas ces tokens (cas `waypoint360-app`). `gap` aligné sur `--wp-space-sm` (8px) pour matcher le `WpShareButton`.

## 0.5.14

- **`WpButton`** : ajouts additifs (rétro-compatibles).
  - Nouvelle variante `outline` — bouton fantôme avec accent **sky** au survol (bordure + texte), reprenant le style hover du `WpShareButton`. Prop `dark` pour les fonds navy (texte blanc → sky + léger fond au survol).
  - Prop polymorphe `as` (défaut `'button'`) : permet de rendre le bouton comme `<a>` ou `NuxtLink` pour l'utiliser en lien de navigation. `disabled` n'est appliqué qu'en rendu `button`.
  - Stories `Outline`, `OutlineDark`, `AsLink`. Tokens via `var(--token, fallback)`.

## 0.5.13

- **`WpContainer`** : nouveau primitif de mise en page — le **rail de contenu unique**
  (max-width + padding inline) partagé par les heros et les corps de page. Sert à aligner
  verticalement le bord gauche des titres avec le contenu en-dessous, et à garantir le même
  bord gauche d'une page à l'autre. Prop `as` (`div` \| `section`, défaut `div`). Nouveaux
  tokens `--wp-rail-max` (1280px), `--wp-rail-pad` (24px) et `--wp-rail-pad-mobile` (16px),
  via `var(--token, fallback)`.
- **`WpPageHero`** : son conteneur interne consomme désormais les tokens de rail
  `--wp-rail-*` (au lieu des valeurs en dur 1280/24px). Aucun changement d'API ni de rendu.

## 0.5.12

- **`WpStatCard`** : nouvelle tuile KPI de tableau de bord, source unique remplaçant les
  classes locales `.dash-stat` (app) et `.stat-card` (admin/stats). Props `label`, `value`,
  `sub`, `link`, `loading`, `interactive` + prop **`tone`** (`neutral` \| `sky` \| `gold` \|
  `warn` \| `ok`) qui teinte subtilement la surface (`color-mix` ~9 %) et colore la valeur —
  reprend le test « tuile colorée » validé (gold = heures de vol, sky = identité/users,
  warn = expirations, ok = conformité). Slots `#value` / `#sub`. Tokens via
  `var(--token, fallback)` ; le ton `gold` utilise le token brand `--wp-color-gold` (et non
  le `#facc15` du prototype admin) pour rester dans la charte.

## 0.5.11

- **`WpPageHero`** : nouvelle prop **`tone`** (`navy` \| `light`, défaut **`navy`**) pour
  unifier les bandeaux Hero de la vitrine — le `navy` reproduit le bandeau sombre déjà en
  ligne (badge sky translucide + fil d'Ariane clair lisibles sur navy), le `light` conserve
  l'ancien rendu clair. Ajout d'un **slot `#actions`** pour les CTA (landings). Alignement
  **toujours à gauche** (`text-align: start`) pour la robustesse i18n / RTL. Tokens via
  `var(--token, fallback)` + `color-mix`. Additif, rétro-compatible (seul le défaut visuel
  passe de clair à navy ; aucun consommateur n'utilisait encore le composant).

## 0.5.10

- **`WpShareButton`** + **`WpShareSheet`** (nouveaux) : bouton de partage social natif.
  `WpShareButton` privilégie l'API **Web Share** (`navigator.share`) → feuille de partage OS
  native (mobile + navigateurs desktop compatibles) ; à défaut il ouvre `WpShareSheet`, un
  panneau de repli avec intents LinkedIn / X / WhatsApp / Facebook / Email + copie du lien.
  Props : `url` (requis), `title`, `text`, `networks`, `variant` (`icon`\|`labeled`), `dark`,
  labels i18n (`label`, `sheetTitle`, `sheetLabels`, `copiedLabel`). Aucun script tiers /
  tracker (équivalent ShareThis maison). SVG inline (pas de `v-html`), tokens avec fallback.
  Additif.

- `WpCertifications` : ajout d'une **date de fin de validité** saisissable par cert (le brevet
  DGAC imprime l'expiration, pas l'obtention). `CertEntry` accepte désormais `expires?` ;
  l'expiration explicite est **prioritaire**, sinon dérivée de `obtained + validité`. Nouveaux
  `dateLabels.expiresInput` (label du champ) et `dateLabels.validityInfo` (ligne « Validité : {years} ans »),
  tous deux **optionnels** (rétrocompatible). Additif.

## 0.5.8

- `WpLogo` : « WAYPOINT » passe en **800 (ExtraBold)** (horizontal + vertical) pour donner plus
  de présence au nom de marque ; « 360 » reste en 700 → hiérarchie nette. Le logo garde ses
  **2 couleurs** (navy + sky). **Consommateurs** : charger le poids **Barlow 800** (ajouté à
  l'URL Google Fonts) sinon le navigateur retombe sur 700.

## 0.5.7

- `WpPatch` (fix) : rendu des icônes via `<component :is>` sur des descripteurs d'éléments
  SVG, au lieu de `v-html`. `v-html` ne crée pas de façon fiable des nœuds dans le namespace
  SVG → les emblèmes pouvaient ne pas s'afficher (patchs identiques au sein d'une catégorie).
  Mêmes icônes, rendu garanti.

## 0.5.6

- `WpPatch` : **bibliothèque d'icônes** étendue (6 → 25) pour que **chaque badge ait une icône
  distincte** et soit identifiable au premier coup d'œil. Nouvelles : `takeoff`, `medal`,
  `compass`, `route`, `stopwatch`, `mountain`, `flame`, `double_check`, `clock`, `user_plus`,
  `users`, `podium`, `verified`, `crown`, `wings`, `sunrise`, `rocket`, `trophy`, `calendar`.
  Le rendu de l'emblème passe par un **registre** (markup injecté), plus simple à étendre que
  l'ancienne chaîne de `v-if`. Additif (`WpPatchIcon` élargi, valeurs existantes conservées).

## 0.5.5

- `WpPatch` (fix) : suppression des « queues de ruban » de la rosette (Communauté/Soutien) —
  illisibles à petite taille, elles ressemblaient à des éléments qui dépassent sans sens.
  Le bord plissé suffit à signer la rosette ; la couleur d'accent + l'icône différencient déjà
  les catégories. (Un vrai ruban pourra être réintroduit plus tard si besoin.)

## 0.5.4

- `WpPatch` (lisibilité) : emblème agrandi (~×1,3, ce qui épaissit aussi les icônes à traits
  fins comme l'hélice et le globe), **hélice plus franche**, et **texte de bannière plus grand**
  (9 → 11 px, gras) avec un ruban légèrement plus haut — le nom (ex. pays sur le rocker) se lit
  sans zoomer. Corrige le rendu « tassé / illisible » des patchs Vols & Communauté.

## 0.5.3

- `WpPatch` : nouvelle prop **`accent`** (couleur CSS) qui surcharge la couleur d'anneau/
  ruban/pastille — permet une couleur par catégorie sans casser la sémantique des tiers.
- `WpPatch` (fix) : l'emblème (icône/drapeau) est désormais **centré verticalement quand il
  n'y a pas de bannière** (avant : toujours remonté pour réserver la place du ruban → rendu
  « tassé vers le haut » sur les patchs sans bannière). Remonté seulement si `bannerText`.

## 0.5.2

- `WpPatch` (fix) : rendu cassé chez les consommateurs qui ne déclarent pas les tokens
  **provisoires** `--wp-tier-*` (anneau/ruban/pastille tombaient en noir → invisibles sur
  fond sombre). Toutes les `var()` du composant ont désormais une **valeur de repli**
  (couleurs métal des tiers, navy/white/silver, polices, ombre/transition). Le patch est
  autoporteur et s'affiche correctement même sans tokens DS importés ; un thème peut
  toujours surcharger en définissant les tokens. Aucun changement visuel quand les tokens
  sont présents.

## 0.5.1

- `WpPatch` (nouveau) : composant d'écusson communauté (achievement patch) en SVG
  paramétrique — 5 formes catégorielles (`circle`/`shield`/`rocker`/`rosette`/`hexagon`),
  4 paliers métal (`bronze`/`silver`/`gold`/`platinum` + `none`), emblème central
  (registre d'icônes flat de départ), bannière en arc, pastille chiffrée et état `locked`
  (grisé — non débloqué ou abo récurrent expiré). La bannière texte est un **ruban plein**
  (fond métal + texte navy) pour rester lisible et détaché du liseré. Prop `flag` (code
  pays ISO alpha-2) → médaillon drapeau en emblème pour les patchs géographie (rocker),
  via `flag-icons` (la CSS est chargée par l'app consommatrice, comme `WpLocaleSwitcher` ;
  ajoutée ici en devDependency pour Storybook). Ajoute les tokens **provisoires**
  `--wp-tier-*` (palette badge, à valider en revue de charte). Première brique du système
  de badges (cf `WAYPOINT360_BADGES_CADRAGE.md`).

## 0.5.0

- `WpLogo` (horizontal) : resserrage du lockup pour rendre le wordmark lisible à taille
  raisonnable. Le pin est calé à gauche, le texte rapproché (x 92 → 58) et le viewBox
  recadré sur le contenu (`0 0 320 82` → `0 14 205 56`, ratio 3,9 → 3,66 avec ~25 % de
  vide en moins). À largeur de rendu égale, la capitale du wordmark passe de ~7 px à
  ~13 px. **Note consommateurs** : le ratio largeur/hauteur du variant `horizontal` change
  (hauteur rendue un peu plus grande à largeur égale) → réajuster les largeurs si besoin.

## 0.4.1

- `WpLogo` (horizontal) : rééquilibrage du pin. Il faisait 62,5u de haut contre ~40u
  pour le wordmark (ratio 1,57:1) et débordait le texte en haut comme en bas, avec son
  centre optique ~4u trop haut. Le pin est désormais mis à l'échelle ~×0,68 (hauteur ≈
  bloc « WAYPOINT / 360 ») et recentré sur l'axe optique du texte (y≈43). Aucun changement
  de prop ni de viewBox — purement visuel.

## 0.4.0

- `WpCertifications` : nouvelle prop `validityByKey?: Partial<Record<CertKey, number>>` —
  durée de validité par certification, avec repli sur le scalaire `validityYears` pour toute
  clé non fournie. Permet de piloter l'expiration affichée depuis un référentiel central
  (table `cert_validity`) au lieu du 5 ans codé en dur. Additif et rétrocompatible.

## 0.3.0

- Nouveau composant `WpNotice` : bloc notice discret (icône ⓘ au trait + texte), tones
  `info` / `beta` / `warning` / `danger`. Extrait du pattern `.beta-notice` dupliqué dans
  les apps. Slot par défaut pour le contenu, prop `icon` pour masquer l'icône.

## 0.2.0

- Portage de 18 composants depuis meridian-synergy-ui, renommés `Ms*` → `Wp*` (classes
  `.wp-*`, tokens `--wp-*`, types `Wp*`) : WpAlert, WpBadge, WpBreadcrumb, WpButton,
  WpCard, WpCertifications, WpContactBanner, WpContactChannel, WpCtaBanner, WpInput,
  WpLocaleSwitcher, WpModal, WpPageHero, WpSocialCard, WpSocialLinks, WpSpecGrid,
  WpThemeToggle, WpValueCard. Stories portées, `src/index.ts` complété.
- Permet à waypoint360-app / waypoint360-web de se découpler de meridian-synergy-ui.

## 0.1.1

- `WpLogo` redessiné autour du pin de localisation (inspiré du favicon waypoint360.eu) :
  pin sky-blue + ouverture blanche + point navy. `360` passe en sky. Pin constant sur
  tout fond ; seul le wordmark suit la prop `color`.

## 0.1.0

- Bootstrap du design system Waypoint360 en package indépendant (`waypoint360-ui`).
- Tokens `--wp-*` (copie iso-charte des valeurs Meridian, en attendant la charte dédiée).
- Nouveau logo `WpLogo` (concept boussole/waypoint dans anneau 360) — variants
  horizontal / vertical / icon, couleurs navy / white.
- Story « Charte » (palette / typo / spacing) dans Storybook.
