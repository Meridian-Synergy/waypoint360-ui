<script setup lang="ts">
import type { Component } from 'vue'

withDefaults(defineProps<{
  label:    string
  variant?: 'primary' | 'secondary' | 'cta' | 'critical' | 'outline'
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
  border:         none;
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
.wp-btn--secondary { background: transparent;                     color: var(--wp-color-navy, #1B2B56);  border: 2px solid var(--wp-color-navy, #1B2B56); }
.wp-btn--cta       { background: var(--wp-color-gold, #C9A84C);   color: var(--wp-color-navy, #1B2B56); }
.wp-btn--critical  { background: var(--wp-color-orange, #F05A28); color: var(--wp-color-white, #FFFFFF); }

/* Outline — ghost button with a sky accent on hover (mirrors WpShareButton) */
.wp-btn--outline {
  background:   transparent;
  /* Theme-adaptive: follows the consumer's semantic text token (flips with
     light/dark theme); falls back to navy where it is undefined (e.g. the
     light-only vitrine). Use the `dark` modifier only for genuinely dark
     surfaces (navy heroes), not for theme switching. */
  color:        var(--wp-color-text, var(--wp-color-navy, #1B2B56));
  border:       1px solid var(--wp-color-border, #D5D9E4);
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
