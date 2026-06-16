# Changelog

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
