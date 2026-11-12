<script setup lang="ts">
/**
 * Marks content produced or transformed by the platform's AI assistant.
 *
 * Two forms, because the two situations are read differently:
 * - `badge`: next to a text the AI wrote. A soft gradient pill with a sparkle, loud
 *   enough to be noticed, quieter than the solid status badges set beside it.
 * - `inline`: under a machine translation. Repeated on every message of a thread, so
 *   it stays a muted line; the default slot carries the caller's "see original" link.
 *
 * The review advice lives in `hint` and is rendered twice on purpose: as `title` for
 * the mouse, and as visually hidden text, because a native tooltip opens neither on
 * touch nor from the keyboard.
 */
withDefaults(defineProps<{
  label?:   string
  hint?:    string
  variant?: 'badge' | 'inline'
}>(), {
  label:   'WP360 AI',
  hint:    '',
  variant: 'badge',
})
</script>

<template>
  <span
    :class="['wp-ai-mark', `wp-ai-mark--${variant}`]"
    :title="hint || undefined"
    :tabindex="variant === 'badge' && hint ? 0 : undefined"
  >
    <svg class="wp-ai-mark__spark" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M8 1.5l1.6 4.9 4.9 1.6-4.9 1.6L8 14.5l-1.6-4.9L1.5 8l4.9-1.6z" fill="currentColor" />
      <path d="M13 1l.5 1.5L15 3l-1.5.5L13 5l-.5-1.5L11 3l1.5-.5z" fill="currentColor" />
    </svg>
    <span class="wp-ai-mark__label">{{ label }}</span>
    <span v-if="hint" class="wp-ai-mark__sr">{{ hint }}</span>
    <slot />
  </span>
</template>

<style scoped>
.wp-ai-mark {
  display:     inline-flex;
  align-items: center;
  gap:         5px;
  cursor:      help;
}

.wp-ai-mark__spark { width: 11px; height: 11px; flex-shrink: 0; }

.wp-ai-mark__sr {
  position:    absolute;
  width:       1px;
  height:      1px;
  overflow:    hidden;
  clip:        rect(0 0 0 0);
  white-space: nowrap;
}

/* Same geometry as WpBadge, so both sit on one baseline in a header row.
   Text uses sky-dark on light (5.2:1); bright sky on a pale gradient falls under 3:1. */
.wp-ai-mark--badge {
  font-family:    var(--wp-font-condensed, 'Barlow Condensed', sans-serif);
  font-weight:    600;
  font-size:      0.6875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding:        3px 10px;
  border-radius:  var(--wp-radius-sm, 4px);
  border:         1px solid color-mix(in srgb, var(--wp-color-sky, #00AAEF) 35%, transparent);
  white-space:    nowrap;
  background:     linear-gradient(120deg,
    color-mix(in srgb, var(--wp-color-sky, #00AAEF) 16%, var(--wp-color-surface, #FFFFFF)),
    color-mix(in srgb, var(--wp-color-gold, #C9A84C) 16%, var(--wp-color-surface, #FFFFFF)));
  color:          var(--wp-color-sky-dark, #0074A8);
}
.wp-ai-mark--badge .wp-ai-mark__spark { color: var(--wp-color-gold, #C9A84C); }
.wp-ai-mark--badge:focus-visible { outline: 2px solid var(--wp-color-sky, #00AAEF); outline-offset: 2px; }
[data-theme="dark"] .wp-ai-mark--badge { color: var(--wp-color-sky, #00AAEF); }

.wp-ai-mark--inline {
  flex-wrap: wrap;
  font-size: 0.76rem;
  color:     var(--wp-color-text-sub, var(--wp-color-muted-strong, #636B82));
}
.wp-ai-mark--inline .wp-ai-mark__spark { color: var(--wp-color-sky, #00AAEF); }
</style>
