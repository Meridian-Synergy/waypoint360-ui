<script setup lang="ts">
export interface WpSpecItem {
  label: string
  value: string
  icon:  string  // inner SVG content (paths, circles, rects — viewBox 0 0 24 24)
}

withDefaults(defineProps<{
  items:  WpSpecItem[]
  label?: string
}>(), {
  label: '',
})
</script>

<template>
  <section class="wp-spec-grid">
    <div class="wp-spec-grid__container">
      <p v-if="label" class="wp-spec-grid__label">{{ label }}</p>
      <div class="wp-spec-grid__grid">
        <div v-for="item in items" :key="item.label" class="wp-spec-grid__card">
          <svg
            class="wp-spec-grid__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            v-html="item.icon"
          />
          <span class="wp-spec-grid__key">{{ item.label }}</span>
          <span class="wp-spec-grid__val">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wp-spec-grid {
  background: var(--wp-color-navy);
  padding: 40px 0;
}

.wp-spec-grid__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.wp-spec-grid__label {
  font-family: var(--wp-font-condensed);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  margin: 0 0 20px;
}

.wp-spec-grid__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (min-width: 768px) {
  .wp-spec-grid__grid { grid-template-columns: repeat(4, 1fr); }
}

.wp-spec-grid__card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--wp-radius-md);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wp-spec-grid__icon {
  width: 20px;
  height: 20px;
  color: var(--wp-color-sky);
  flex-shrink: 0;
  stroke: currentColor;
  stroke-width: 1.75;
}

.wp-spec-grid__key {
  font-family: var(--wp-font-condensed);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
}

.wp-spec-grid__val {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--wp-color-white);
  line-height: 1.45;
}
</style>
