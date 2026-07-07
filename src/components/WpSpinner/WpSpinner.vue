<script setup lang="ts">
/**
 * WpSpinner — the single loading indicator for all Waypoint360 surfaces.
 *
 * Self-contained: carries its own keyframes so it never depends on a global
 * `@keyframes spin` in the consumer app. Decorative by default (aria-hidden);
 * pass `label` to expose it as an accessible live status (role="status").
 *
 * Canonical usage inside an empty/loading block:
 *   <div class="empty-state">
 *     <div class="empty-state-icon"><WpSpinner /></div>
 *     <p class="empty-state-title">{{ t('common.loading') }}</p>
 *   </div>
 */
withDefaults(defineProps<{
  /** Diameter in pixels */
  size?: number
  /** Accessible label; when set the spinner is announced (role="status") instead of decorative */
  label?: string
}>(), { size: 32 })
</script>

<template>
  <svg
    class="wp-spinner"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :role="label ? 'status' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : true"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="28 56" />
  </svg>
</template>

<style scoped>
.wp-spinner {
  animation: wp-spin 0.9s linear infinite;
  color: var(--wp-color-text-sub, currentColor);
  opacity: 0.5;
  flex-shrink: 0;
}
@keyframes wp-spin {
  to { transform: rotate(360deg); }
}
/* Keep the motion cue but slow it down for users who ask for reduced motion. */
@media (prefers-reduced-motion: reduce) {
  .wp-spinner { animation-duration: 1.8s; }
}
</style>
