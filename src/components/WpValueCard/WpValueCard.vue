<script setup lang="ts">
defineProps<{
  title: string
  desc:  string
  icon:  string  // inner SVG content (viewBox 0 0 24 24)
}>()
</script>

<template>
  <div class="wp-value-card">
    <div class="wp-value-card__icon" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" v-html="icon" />
    </div>
    <h3 class="wp-value-card__title">{{ title }}</h3>
    <p class="wp-value-card__desc">{{ desc }}</p>
  </div>
</template>

<style scoped>
.wp-value-card {
  background: var(--wp-color-white, #FFFFFF);
  border: 1px solid var(--wp-color-border, #D5D9E4);
  border-radius: var(--wp-radius-lg, 16px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.wp-value-card__icon {
  width: 40px;
  height: 40px;
  background: rgba(0, 170, 239, 0.08);
  border-radius: var(--wp-radius-md, 8px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wp-color-sky, #00AAEF);
}

.wp-value-card__title {
  font-family: var(--wp-font-display, 'Barlow', sans-serif);
  font-size: 1rem;
  font-weight: 700;
  color: var(--wp-color-navy, #1B2B56);
  margin: 0;
}

.wp-value-card__desc {
  font-size: 0.875rem;
  color: var(--wp-color-muted, #8C95AA);
  line-height: 1.65;
  margin: 0;
}
</style>
