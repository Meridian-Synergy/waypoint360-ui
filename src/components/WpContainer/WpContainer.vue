<script setup lang="ts">
/**
 * WpContainer — the shared horizontal content rail.
 *
 * Single source of truth for content max-width + inline padding. Use it for a
 * page hero's inner block AND the page body so their left edges align
 * vertically, and so every page shares the same left edge. Reading width
 * (prose measure) is constrained independently inside the rail, not by it.
 */
withDefaults(defineProps<{
  /** Rendered element. `div` (default) for body sections, `section` for landmarks. */
  as?: 'div' | 'section'
}>(), {
  as: 'div',
})
</script>

<template>
  <component :is="as" class="wp-container">
    <slot />
  </component>
</template>

<style scoped>
.wp-container {
  max-width: var(--wp-rail-max, 1280px);
  margin: 0 auto;
  padding-inline: var(--wp-rail-pad, 24px);
}

@media (max-width: 640px) {
  .wp-container {
    padding-inline: var(--wp-rail-pad-mobile, 16px);
  }
}
</style>
