<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'info' | 'success' | 'warning' | 'error' | 'navy'
  title?:   string
  action?:  string
}>(), {
  variant: 'info',
})

const emit = defineEmits<{ action: [] }>()

/**
 * Icônes en SVG, jamais en caractères.
 *
 * Les glyphes « ℹ ✓ ⚠ ✕ » dépendaient de la police installée : ils changeaient
 * de dessin d'un système à l'autre, et certains sont rendus en emoji couleur par
 * le système — un pictogramme multicolore au milieu d'un message d'erreur.
 * Un tracé décrit ici rend la même chose partout et suit `currentColor`.
 */
const icons: Record<string, string> = {
  info:    'M12 8h.01M11 12h1v4h1',
  success: 'M20 6 9 17l-5-5',
  warning: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z',
  error:   'M15 9l-6 6M9 9l6 6',
  navy:    'm12 3 2.6 5.3 5.9.9-4.3 4.2 1 5.8-5.2-2.7-5.2 2.7 1-5.8L4.5 9.2l5.9-.9Z',
}
/** Les tracés qui ne portent pas leur propre contour ont besoin du cercle. */
const RINGED = new Set(['info', 'success', 'error'])
</script>

<template>
  <div :class="['wp-alert', `wp-alert--${variant}`]">
    <svg class="wp-alert__icon" width="16" height="16" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
         aria-hidden="true">
      <circle v-if="RINGED.has(variant)" cx="12" cy="12" r="10" />
      <path :d="icons[variant]" />
    </svg>
    <div class="wp-alert__content">
      <div v-if="title" class="wp-alert__title">{{ title }}</div>
      <div v-if="$slots.default" class="wp-alert__body">
        <slot></slot>
      </div>
    </div>
    <!-- Un `<span>` cliquable n'existe pas au clavier ni pour un lecteur d'écran :
         l'action était invisible pour qui ne tient pas de souris. -->
    <button v-if="action" type="button" class="wp-alert__action" @click="emit('action')">
      {{ action }}
    </button>
  </div>
</template>

<style scoped>
.wp-alert {
  display:     flex;
  align-items: flex-start;
  gap:         var(--wp-space-sm, 8px);
  padding:     var(--wp-space-sm, 8px) var(--wp-space-md, 16px);
  border-radius: var(--wp-radius-md, 8px);
  border:      1px solid transparent;
  font-family: var(--wp-font-body, 'Barlow', sans-serif);
  font-size:   0.8125rem;
  line-height: 1.5;
}
.wp-alert__icon    { flex-shrink: 0; margin-top: 1px; }
.wp-alert__content { flex: 1; }
.wp-alert__title   { font-weight: 600; font-size: 0.8125rem; margin-bottom: 2px; }
.wp-alert__body    { font-size: 0.75rem; opacity: 0.85; }
.wp-alert__action  {
  font-family: inherit; font-weight: 600; font-size: 0.75rem; text-decoration: underline;
  cursor: pointer; margin-left: auto; padding-left: var(--wp-space-sm, 8px);
  flex-shrink: 0; align-self: center; opacity: 0.85;
  /* Le bouton hérite la couleur de la variante, comme le faisait le span. */
  background: none; border: 0; color: inherit; padding-top: 0; padding-bottom: 0;
}
.wp-alert__action:hover { opacity: 1; }
/* `currentColor` : chaque variante a son fond, un anneau figé serait illisible
   sur l'une d'elles. */
.wp-alert__action:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
  border-radius: var(--wp-radius-sm, 4px);
  opacity: 1;
}

/* ⚠️ THÈME CLAIR **ET** SOMBRE, avec une seule règle par variante.
 *
 * Les fonds étaient des pastels EN DUR (#dcfce7, #fde9e4…) avec un texte foncé.
 * Posés sur la surface navy de l'application — sombre par défaut — ils formaient
 * des cartons clairs venus d'ailleurs. C'est le motif exact qui avait rendu les
 * champs de formulaire illisibles en thème sombre (DS PR #35).
 *
 * Le fond est donc MÉLANGÉ à la surface du consommateur : blanche en clair, navy
 * en sombre, la teinte suit sans qu'aucun bloc par thème soit nécessaire.
 *
 * ⚠️ Et le TEXTE reste `--wp-color-text`, pas la couleur de la variante. Un vert
 * #22c55e sur fond vert pâle plafonne à 2,3:1 — sous le minimum lisible. La
 * variante se dit par l'icône et le liseré ; le message, lui, doit se lire.
 */
.wp-alert          { color: var(--wp-color-text, var(--wp-color-navy, #1B2B56)); }
/* Repli sur l'information : une alerte rendue sans variante garde une couleur. */
.wp-alert__icon    { color: var(--wp-alert-accent, var(--wp-color-sky, #3BA9F4)); }
.wp-alert--info    { --wp-alert-accent: var(--wp-color-sky, #3BA9F4); }
.wp-alert--success { --wp-alert-accent: var(--wp-color-success, #22c55e); }
.wp-alert--warning { --wp-alert-accent: var(--wp-color-warning, #f59e0b); }
.wp-alert--error   { --wp-alert-accent: var(--wp-color-error, #ef4444); }
.wp-alert--info,
.wp-alert--success,
.wp-alert--warning,
.wp-alert--error {
  background:   color-mix(in srgb, var(--wp-alert-accent, var(--wp-color-sky, #3BA9F4)) 12%, var(--wp-color-surface, #FFFFFF));
  border-color: color-mix(in srgb, var(--wp-alert-accent, var(--wp-color-sky, #3BA9F4)) 38%, transparent);
}
.wp-alert--navy    { background: var(--wp-color-navy, #1B2B56); border-color: transparent; color: var(--wp-color-white, #FFFFFF); }
.wp-alert--navy .wp-alert__icon   { color: var(--wp-color-gold, #C9A84C); }
.wp-alert--navy .wp-alert__action { color: var(--wp-color-gold, #C9A84C); }
</style>
