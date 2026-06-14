<script setup lang="ts">
import WpButton from '../WpButton/WpButton.vue'

defineProps<{
  title: string
  desc:  string
  label: string
  href:  string
}>()
</script>

<template>
  <section class="wp-cta-banner">
    <div class="wp-cta-banner__inner">
      <div class="wp-cta-banner__text">
        <h2 class="wp-cta-banner__title">{{ title }}</h2>
        <p class="wp-cta-banner__desc">{{ desc }}</p>
      </div>
      <a :href="href" class="wp-cta-banner__action">
        <WpButton :label="label" variant="cta" size="lg" tag="span" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.wp-cta-banner {
  background: var(--wp-color-navy);
  padding: 64px 0;
}

.wp-cta-banner__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.wp-cta-banner__text {
  flex: 1;
  min-width: 260px;
}

.wp-cta-banner__title {
  font-family: var(--wp-font-display);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--wp-color-white);
  letter-spacing: -0.02em;
  margin: 0 0 10px;
}

.wp-cta-banner__desc {
  font-size: 1rem;
  color: var(--wp-color-muted);
  margin: 0;
  opacity: 0.8;
}

.wp-cta-banner__action {
  text-decoration: none;
  flex-shrink: 0;
}
</style>
