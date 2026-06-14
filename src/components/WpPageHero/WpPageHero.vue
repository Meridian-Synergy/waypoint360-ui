<script setup lang="ts">
import WpBadge from '../WpBadge/WpBadge.vue'
import WpBreadcrumb from '../WpBreadcrumb/WpBreadcrumb.vue'
import type { BreadcrumbItem } from '../WpBreadcrumb/WpBreadcrumb.vue'

withDefaults(defineProps<{
  title:         string
  desc?:         string
  badge?:        string
  badgeVariant?: 'sky' | 'navy' | 'orange'
  crumbs?:       BreadcrumbItem[]
  size?:         'lg' | 'md'
}>(), {
  badgeVariant: 'sky',
  size:         'lg',
})
</script>

<template>
  <section class="wp-page-hero">
    <div class="wp-page-hero__container">
      <WpBreadcrumb v-if="crumbs?.length" :crumbs="crumbs" />
      <WpBadge v-if="badge" :label="badge" :variant="badgeVariant" />
      <h1 :class="['wp-page-hero__title', `wp-page-hero__title--${size}`]">{{ title }}</h1>
      <p v-if="desc" class="wp-page-hero__desc">{{ desc }}</p>
    </div>
  </section>
</template>

<style scoped>
.wp-page-hero {
  background: var(--wp-color-bg);
  padding: 56px 0;
  border-bottom: 1px solid var(--wp-color-border);
}

.wp-page-hero__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.wp-page-hero__title {
  font-family: var(--wp-font-display);
  font-weight: 800;
  color: var(--wp-color-navy);
  letter-spacing: -0.03em;
  margin: 16px 0 0;
}
.wp-page-hero__title--lg { font-size: clamp(2rem,   4vw,   3rem); }
.wp-page-hero__title--md { font-size: clamp(1.75rem, 3.5vw, 2.75rem); }

.wp-page-hero__desc {
  font-size: 1.0625rem;
  color: var(--wp-color-muted);
  max-width: 560px;
  line-height: 1.7;
  margin: 16px 0 0;
}
</style>
