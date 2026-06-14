# waypoint360-ui

Design system de **Waypoint360** — bibliothèque de composants partagée (Vue 3 + Storybook).

Consommé par `waypoint360-web` et `waypoint360-app` via import direct de la source
(`waypoint360-ui/src/components/...`), avec `transpile: ['waypoint360-ui']` côté Nuxt.

> Itération initiale : fondation du package indépendant (tokens `--wp-*` à iso-charte
> Meridian) + nouveau logo `WpLogo`. La charte propre à Waypoint360 (palette, typo,
> badges) sera définie dans une itération dédiée.

```bash
pnpm install
pnpm storybook   # → localhost:6006
```
