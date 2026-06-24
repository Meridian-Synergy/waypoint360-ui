# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language rule — ABSOLUTE

**All code must be written in English, no exception:**
- Comments (`//`, `/* */`) in JS, TS, and Vue `<script>` blocks
- CSS/SCSS comments and class names
- Variable names, function names, method names
- TypeScript interfaces, types, enums and their properties
- HTML `id`, `data-*` attributes and any developer-facing identifiers

The only content allowed in French (or other languages):
- User-facing text inside i18n files
- String literals displayed to end users

---

## Working method — ABSOLUTE

Before any non-trivial implementation, always:
1. **Present the plan**: list the files to be changed, the approach, and any trade-offs worth noting
2. **Ask for confirmation**: explicitly wait for a go-ahead before writing any code
3. **Only then implement**: start coding only after the user confirms

This applies to all features, refactors, and multi-file changes — regardless of complexity.

---

## Projet

**Waypoint360** — Plateforme communautaire grand public (B2C) du domaine drone.
Ce repo (`waypoint360-ui`) est le **Design System dédié à Waypoint360**, distinct de
`meridian-synergy-ui` (qui reste la charte pro/institutionnelle de Meridian Synergy).

Consommé par :
- Le site vitrine (`waypoint360-web`)
- Le portail communautaire (`waypoint360-app`)

Les consommateurs importent directement la **source** (`waypoint360-ui/src/components/.../*.vue`)
avec `transpile: ['waypoint360-ui']` côté Nuxt — pas d'étape de build du package.

> **État actuel (iso-charte)** : les tokens `--wp-*` reprennent pour l'instant les
> valeurs visuelles de Meridian. La charte propre à Waypoint360 (palette, typo, badges
> communauté) sera définie lors d'une **revue de charte dédiée**. Tant que cette revue
> n'a pas eu lieu, ne pas inventer de nouvelles couleurs/typos.

---

## Versioning — ABSOLUTE

Version numbers follow `a.b.c` (major.minor.patch). **Versioning is automated by release-please — never bump `package.json` or edit `CHANGELOG.md` by hand.**

- **Conventional Commits are mandatory** on `main`: `feat:` → minor, `fix:` → patch, `feat!:`/`BREAKING CHANGE:` → major, `chore:`/`ci:`/`docs:` → no release. The subject becomes the changelog line.
- release-please maintains a **Release PR** (bumps `package.json` + writes `CHANGELOG.md`). Merging it creates the tag `vX.Y.Z`.
- Storybook is published to GitHub Pages on **every** `main` push (`storybook.yml`), independent of releases — this DS is consumed off `main`, so docs stay current; the tag is just the version marker.
- Baseline lives in `.release-please-manifest.json`.

## Git workflow — ABSOLUTE

**Never push directly to `main`.** Every change goes through a branch → PR → merge cycle:

**Branch types:** `feat/[topic]`, `fix/[topic]`, `hotfix/[topic]`, `quickfix/[topic]`

1. Create a branch
2. Work and accumulate commits on that branch
3. **Before committing**: present a summary of files changed and why, then wait for explicit **"Go commit"**
4. After push: user reviews the diff on the GitHub PR
5. Wait for explicit **"Go merge"** before merging to `main`
6. After merge: `git checkout main && git pull origin main`

---

## Component contract — Backward compatibility — ABSOLUTE

This package is consumed by `waypoint360-web` and `waypoint360-app`. A breaking change
forces simultaneous updates in every consumer.

- **Never remove or rename a prop or event** — mark `@deprecated`, keep it functional
- **Never restrict a prop's type** (e.g. `string | number` → `string` is breaking)
- **All new props must have a default value**
- **Additive-first**: add optional props with defaults — never add required props to an existing component

When a breaking change is unavoidable: bump major, document the migration in `CHANGELOG.md`,
coordinate updates in all consumers before publishing.

---

## Règle absolue : source de vérité des composants

Tous les composants UI visuels de Waypoint360 sont créés **ici uniquement**.
`waypoint360-web` et `waypoint360-app` n'ont jamais de composants UI locaux — ils importent
uniquement depuis `waypoint360-ui`.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework composants | Vue 3 (Composition API + `<script setup>`) |
| Bundler | Vite 7 |
| Documentation | Storybook 10 |
| Langage | TypeScript strict |
| Package manager | pnpm 10 |
| Tests | Vitest + `@storybook/addon-vitest` (Playwright/Chromium) |
| CI/CD | GitHub Actions → GitHub Pages (`storybook.yml`) |

---

## Services & outils tiers

| Outil | Rôle |
|---|---|
| **Atlassian Confluence** | Spécifications design system (espace **Waypoint36**) |

---

## Commandes

```bash
pnpm storybook          # Dev → localhost:6006
pnpm build-storybook    # Build statique
pnpm vitest             # Tests (stories via addon-vitest + Playwright headless)
```

---

## Design System — Tokens

Les tokens sont définis dans `src/tokens/tokens.css` et importés globalement via
`.storybook/preview.ts`. **Ne jamais utiliser de valeurs en dur** — toujours les variables CSS.

Préfixe des tokens : `--wp-*`. Valeurs actuelles = iso-charte Meridian (voir note "État actuel").

---

## Conventions de code

### Nommage composants
- Préfixe `Wp` obligatoire : `WpLogo`, `WpButton`, `WpBadge`…
- Un dossier par composant dans `src/components/`
- Fichier Vue en PascalCase : `WpLogo.vue`
- Classes CSS : `.wp-[composant]--[modifier]`

### Structure d'un composant Vue

```vue
<script setup lang="ts">
withDefaults(defineProps<{ /* props typées */ }>(), { /* défauts */ })
const emit = defineEmits<{ /* ... */ }>()
</script>

<template>
  <!-- Une seule racine -->
</template>

<style scoped>
/* Toujours scoped — toujours des variables CSS tokens */
</style>
```

### Export dans `src/index.ts`

```typescript
export { default as WpLogo } from './components/WpLogo/WpLogo.vue'
```

---

## Storybook

Storybook ne scanne que `src/**/*.stories.@(ts|tsx)` (voir `.storybook/main.ts`).
Backgrounds disponibles : `light` (#FFFFFF), `dark` (#10192C), `navy` (#1B2B56).
Toujours ajouter une story Dark avec background explicite pour les composants concernés.

---

## Composants existants

| Composant | Variants / Props notables | Stories |
|---|---|---|
| `WpLogo` | `horizontal`, `vertical`, `icon` / `color: navy\|white` / `width` | ✅ |

---

## Backlog (itérations suivantes)

| Priorité | Sujet | Description |
|---|---|---|
| 1 | Revue de charte Waypoint360 | Palette, typo, identité propre (remplace l'iso-charte) |
| 2 | Badges communauté | Redesign visuel des badges (tiers/niveaux gamifiés) |
| 3 | Portage composants | `WpButton`, `WpCard`, `WpBadge`… + branchement des consommateurs |
