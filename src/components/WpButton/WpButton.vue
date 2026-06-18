<script setup lang="ts">
import type { Component } from 'vue'

withDefaults(defineProps<{
  label:    string
  variant?: 'primary' | 'secondary' | 'cta' | 'critical' | 'outline'
  size?:    'sm' | 'md' | 'lg'
  disabled?: boolean
  /** Dark-surface styling (navy backgrounds) — currently affects the `outline` variant. */
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
  font-family:    var(--wp-font-body);
  font-weight:    600;
  border:         none;
  cursor:         pointer;
  border-radius:  var(--wp-radius-md);
  display:        inline-flex;
  align-items:    center;
  justify-content: center;
  gap:            6px;
  white-space:    nowrap;
  line-height:    1;
  text-decoration: none;
  transition:     opacity var(--wp-transition-base), transform var(--wp-transition-fast);
}
.wp-btn:hover:not(:disabled) { opacity: 0.88; }
.wp-btn:active:not(:disabled) { transform: scale(0.98); }
.wp-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Sizes */
.wp-btn--sm { padding: 6px 12px;  font-size: 13px; }
.wp-btn--md { padding: var(--wp-space-sm) var(--wp-space-md);  font-size: 15px; }
.wp-btn--lg { padding: var(--wp-space-md) var(--wp-space-lg);  font-size: 17px; }

/* Variants */
.wp-btn--primary   { background: var(--wp-color-navy);   color: var(--wp-color-white); }
.wp-btn--secondary { background: transparent;            color: var(--wp-color-navy);  border: 2px solid var(--wp-color-navy); }
.wp-btn--cta       { background: var(--wp-color-gold);   color: var(--wp-color-navy); }
.wp-btn--critical  { background: var(--wp-color-orange); color: var(--wp-color-white); }

/* Outline — ghost button with a sky accent on hover (mirrors WpShareButton) */
.wp-btn--outline {
  background:   transparent;
  color:        var(--wp-color-navy, #1B2B56);
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
