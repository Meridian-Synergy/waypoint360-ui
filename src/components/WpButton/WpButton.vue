<script setup lang="ts">
import type { Component } from 'vue'

withDefaults(defineProps<{
  label:    string
  /**
   * `accent` et `danger` existent pour ce que l'application utilise vraiment.
   *
   * ⚠️ Ils ne remplacent PAS `primary` et `critical` : ce sont d'autres
   * intentions, pas d'autres teintes. `primary` inverse le fond selon le thème
   * — c'est un correctif d'incident, pas un choix esthétique — tandis que
   * l'application veut un bouton bleu constant. Repeindre `primary` en bleu
   * défairait la correction et rendrait le bouton invisible là où la surface
   * est déjà claire.
   */
  variant?: 'primary' | 'secondary' | 'cta' | 'critical' | 'accent' | 'danger' | 'ghost' | 'soft' | 'outline'
  size?:    'sm' | 'md' | 'lg'
  disabled?: boolean
  /** Dark-surface styling for fixed navy backgrounds — affects the `primary` and `outline` variants. */
  dark?:    boolean
  /** Render as another tag/component (e.g. 'a' or NuxtLink) to use the button as a navigation link. */
  as?:      string | Component
}>(), {
  variant:  'primary',
  size:     'md',
  disabled: false,
  dark:     false,
  as:       'button',
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <component
    :is="as"
    :class="['wp-btn', `wp-btn--${variant}`, `wp-btn--${size}`, { 'wp-btn--dark': dark }]"
    :disabled="as === 'button' ? disabled : undefined"
    @click="emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </component>
</template>

<style scoped>
.wp-btn {
  font-family:    var(--wp-font-body, 'Barlow', sans-serif);
  font-weight:    600;
  /* Bordure TOUJOURS présente, transparente par défaut : les variantes ne
     changent que sa couleur.
     Sans ça, `primary` n'avait aucune bordure, `outline` 1px et `secondary` 2px
     pour un padding identique — soit trois hauteurs (31 / 33 / 35 px). Sur une
     rangée, l'étirement du flex le masque à l'échelle 1 ; à une échelle d'écran
     fractionnaire (Windows à 125 %), ces bordures s'arrondissent différemment et
     les boutons cessent d'être alignés. Mesuré le 2026-08-01. */
  border:         2px solid transparent;
  cursor:         pointer;
  border-radius:  var(--wp-radius-md, 8px);
  display:        inline-flex;
  align-items:    center;
  justify-content: center;
  gap:            var(--wp-space-sm, 8px);
  white-space:    nowrap;
  line-height:    1;
  text-decoration: none;
  transition:     opacity var(--wp-transition-base, 0.2s ease), transform var(--wp-transition-fast, 0.1s ease);
}
.wp-btn:hover:not(:disabled) { opacity: 0.88; }
.wp-btn:active:not(:disabled) { transform: scale(0.98); }
.wp-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Sizes */
.wp-btn--sm { padding: 6px 12px;  font-size: 0.8125rem; }
.wp-btn--md { padding: var(--wp-space-sm, 8px) var(--wp-space-md, 16px);  font-size: 0.9375rem; }
.wp-btn--lg { padding: var(--wp-space-md, 16px) var(--wp-space-lg, 24px);  font-size: 1.0625rem; }

/* Variants */
/* Theme-adaptive filled button: the fill follows the consumer's --wp-color-text
   token (dark on a light theme, light on a dark theme) and the label takes its
   inverse (--wp-color-bg). Falls back to navy fill / white label where those
   tokens are undefined (light-only vitrine), preserving the original look.
   Without this, a fixed navy fill is invisible on the app's dark navy surface. */
.wp-btn--primary   { background: var(--wp-color-text, var(--wp-color-navy, #1B2B56)); color: var(--wp-color-bg, var(--wp-color-white, #FFFFFF)); }
/* Genuinely dark fixed surfaces (navy hero) via the `dark` prop — force a light fill. */
.wp-btn--primary.wp-btn--dark { background: var(--wp-color-white, #FFFFFF); color: var(--wp-color-navy, #1B2B56); }
/* Theme-adaptive comme `outline` : le navy en dur rendait ce bouton INVISIBLE
   sur une surface sombre, où la surface EST le navy — texte navy et bordure navy
   sur fond navy. Constaté au rendu le 2026-08-01 dans Sync : le CTA « Publier
   dans Waypoint360 » n'existait tout simplement pas en thème sombre. */
.wp-btn--secondary { background: transparent;                     color: var(--wp-color-text, var(--wp-color-navy, #1B2B56)); border-color: currentColor; }
.wp-btn--cta       { background: var(--wp-color-gold, #C9A84C);   color: var(--wp-color-navy, #1B2B56); }
.wp-btn--critical  { background: var(--wp-color-orange, #F05A28); color: var(--wp-color-white, #FFFFFF); }

/* ── Variantes reprises de l'application ──────────────────────────────────────
   Elles existaient en classes locales (`.btn-primary`, `.btn-danger`,
   `.btn-ghost`), écrites une seconde fois hors du design system. Elles sont
   reprises ICI à l'identique pour qu'une migration ne change RIEN à l'écran :
   une migration qui repeint 200 boutons n'est pas une migration, c'est une
   refonte — et aucun test ne voit une régression visuelle.
   ─────────────────────────────────────────────────────────────────────────── */

/* Bleu constant, indépendant du thème : c'est une couleur de marque, elle ne
   s'inverse pas. Lisible sur clair comme sur sombre, le libellé restant blanc. */
.wp-btn--accent    { background: var(--wp-color-sky-btn, var(--wp-color-sky, #0077A8)); color: var(--wp-color-white, #FFFFFF); }

/* Destructif DISCRET : contour, pas aplat. Le rouge plein de `critical` réclame
   l'attention en permanence ; dans une liste où chaque ligne porte un
   « Supprimer », il la réclamerait pour chaque ligne. */
.wp-btn--danger {
  background:   transparent;
  color:        var(--wp-color-error, #f87171);
  border-color: color-mix(in srgb, var(--wp-color-error, #f87171) 30%, transparent);
}
.wp-btn--danger:not(:disabled):hover { background: color-mix(in srgb, var(--wp-color-error, #f87171) 8%, transparent); }

/* Secondaire à fond léger — le « btn-secondary » de l'application.
 *
 * ⚠️ La base porte les valeurs du thème CLAIR, et le thème sombre les remplace,
 * alors que l'application faisait l'inverse. C'est délibéré : un composant de
 * design system doit s'afficher correctement « nu », sans attribut de thème —
 * dans Storybook, sur la vitrine, et pendant le rendu serveur avant que le
 * sélecteur de thème ne soit posé. Avec les valeurs sombres en base, un fond
 * blanc à 7 % sur du blanc donne un bouton invisible.
 *
 * En sombre, la teinte est un ÉCLAIRCISSEMENT au-dessus de la surface, pas la
 * surface elle-même : `--wp-color-surface` y vaut le navy sur lequel le bouton
 * est posé, et le bouton disparaîtrait dans son propre fond.
 */
.wp-btn--soft {
  background:   var(--wp-color-surface, var(--wp-color-white, #FFFFFF));
  color:        var(--wp-color-text, var(--wp-color-navy, #1B2B56));
  border-color: var(--wp-color-border, #D8DEE9);
}
[data-theme="dark"] .wp-btn--soft {
  background:   rgba(255, 255, 255, 0.07);
  border-color: rgba(255, 255, 255, 0.18);
}

/* Neutre, en retrait : le bord suit le thème, le texte est le gris secondaire. */
.wp-btn--ghost {
  background:   transparent;
  color:        var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
  border-color: var(--wp-color-border, rgba(255, 255, 255, 0.18));
}

/* Outline — ghost button with a sky accent on hover (mirrors WpShareButton) */
.wp-btn--outline {
  background:   transparent;
  /* Theme-adaptive: follows the consumer's semantic text token (flips with
     light/dark theme); falls back to navy where it is undefined (e.g. the
     light-only vitrine). Use the `dark` modifier only for genuinely dark
     surfaces (navy heroes), not for theme switching. */
  color:        var(--wp-color-text, var(--wp-color-navy, #1B2B56));
  border-color: var(--wp-color-border, #D5D9E4);
  transition:   border-color var(--wp-transition-fast, 0.1s ease),
                background var(--wp-transition-fast, 0.1s ease),
                color var(--wp-transition-fast, 0.1s ease);
}
.wp-btn--outline:hover:not(:disabled) {
  opacity:      1;
  border-color: var(--wp-color-sky, #00AAEF);
  color:        var(--wp-color-sky-dark, #0074A8);
}
.wp-btn--outline.wp-btn--dark {
  border-color: rgba(255, 255, 255, 0.12);
  color:        var(--wp-color-white, #FFFFFF);
}
.wp-btn--outline.wp-btn--dark:hover:not(:disabled) {
  border-color: var(--wp-color-sky, #00AAEF);
  color:        var(--wp-color-sky, #00AAEF);
  background:    rgba(255, 255, 255, 0.06);
}
</style>
