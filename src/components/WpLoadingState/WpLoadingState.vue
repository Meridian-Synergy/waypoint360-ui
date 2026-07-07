<script setup lang="ts">
/**
 * WpLoadingState — the canonical page/section loading block.
 *
 * Spinner + optional localized label, centered in a standard state container.
 * Built on WpSpinner (the atom). Use this for a page or section that is loading;
 * for a small inline/widget loader use WpSpinner directly.
 *
 * The label is passed by the consumer (the DS is i18n-agnostic):
 *   <WpLoadingState :label="t('common.loading')" />
 */
import WpSpinner from '../WpSpinner/WpSpinner.vue'

withDefaults(defineProps<{
  /** Localized loading text; omit for a spinner-only block */
  label?: string
  /** Spinner diameter in pixels */
  size?: number
}>(), { size: 32 })
</script>

<template>
  <div class="wp-loading-state" role="status">
    <div class="wp-loading-state__icon"><WpSpinner :size="size" /></div>
    <p v-if="label" class="wp-loading-state__label">{{ label }}</p>
  </div>
</template>

<style scoped>
.wp-loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 56px 24px;
  text-align: center;
}
.wp-loading-state__icon { opacity: 0.5; }
.wp-loading-state__label {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--wp-color-text, inherit);
  margin: 0;
}
</style>
