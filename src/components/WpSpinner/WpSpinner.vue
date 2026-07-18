<script setup lang="ts">
import { computed } from 'vue'

/**
 * WpSpinner — the single loading indicator for all Waypoint360 surfaces.
 *
 * A ring of brand-blue (sky) dots fading around the circle, rotating as a whole. Theme-safe on
 * both dark and light surfaces: the dots are the sky accent and the trail fades via opacity, not
 * a fixed light/dark colour, so it reads the same on #10192C and on white. Self-contained
 * keyframes (never depends on a global `@keyframes` in the consumer). Decorative by default
 * (aria-hidden); pass `label` to expose it as an accessible live status (role="status").
 *
 * Canonical usage inside an empty/loading block:
 *   <div class="empty-state">
 *     <div class="empty-state-icon"><WpSpinner /></div>
 *     <p class="empty-state-title">{{ t('common.loading') }}</p>
 *   </div>
 */
const props = withDefaults(defineProps<{
  /** Diameter in pixels */
  size?: number
  /** Accessible label; when set the spinner is announced (role="status") instead of decorative */
  label?: string
}>(), { size: 32 })

const COUNT = 12

// Leading dot fully opaque, trailing dots fade around the ring — the "different blues" cue.
const dots = computed(() =>
  Array.from({ length: COUNT }, (_, i) => ({
    angle: (360 / COUNT) * i,
    opacity: 0.12 + 0.88 * ((i + 1) / COUNT),
  })),
)
const radius = computed(() => props.size * 0.38)
const dotSize = computed(() => Math.max(2, props.size * 0.16))
</script>

<template>
  <div
    class="wp-spinner"
    :style="{ width: `${size}px`, height: `${size}px` }"
    :role="label ? 'status' : undefined"
    :aria-label="label || undefined"
    :aria-hidden="label ? undefined : true"
  >
    <span
      v-for="(d, i) in dots"
      :key="i"
      class="wp-spinner-dot"
      :style="{
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        opacity: d.opacity,
        transform: `translate(-50%, -50%) rotate(${d.angle}deg) translateY(-${radius}px)`,
      }"
    />
  </div>
</template>

<style scoped>
.wp-spinner {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  animation: wp-spin 1.1s linear infinite;
}
.wp-spinner-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background: var(--wp-color-sky, #00aaef);
}
@keyframes wp-spin {
  to { transform: rotate(360deg); }
}
/* Keep the motion cue but slow it right down for users who ask for reduced motion. */
@media (prefers-reduced-motion: reduce) {
  .wp-spinner { animation-duration: 2.2s; }
}
</style>
