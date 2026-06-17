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
  /**
   * Visual surface of the hero band.
   * `navy` (default) = dark band with light text — the canonical vitrine hero.
   * `light` = light surface with navy text (legacy look).
   */
  tone?:         'navy' | 'light'
}>(), {
  badgeVariant: 'sky',
  size:         'lg',
  tone:         'navy',
})
</script>

<template>
  <section :class="['wp-page-hero', `wp-page-hero--${tone}`]">
    <div class="wp-page-hero__container">
      <WpBreadcrumb v-if="crumbs?.length" :crumbs="crumbs" />
      <WpBadge v-if="badge" :label="badge" :variant="badgeVariant" class="wp-page-hero__badge" />
      <h1 :class="['wp-page-hero__title', `wp-page-hero__title--${size}`]">{{ title }}</h1>
      <p v-if="desc" class="wp-page-hero__desc">{{ desc }}</p>
      <div v-if="$slots.actions" class="wp-page-hero__actions">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.wp-page-hero {
  /* Content is always left-aligned (text-align: start) for i18n / RTL robustness. */
  padding: 56px 0 44px;
}

/* Shares the canonical content rail (--wp-rail-*) so the hero's left edge
 * aligns with the page body below it. See WpContainer. */
.wp-page-hero__container {
  max-width: var(--wp-rail-max, 1280px);
  margin: 0 auto;
  padding-inline: var(--wp-rail-pad, 24px);
}

@media (max-width: 640px) {
  .wp-page-hero__container {
    padding-inline: var(--wp-rail-pad-mobile, 16px);
  }
}

.wp-page-hero__badge { margin-bottom: 0; }

.wp-page-hero__title {
  font-family: var(--wp-font-display);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  margin: 16px 0 0;
}
.wp-page-hero__title--lg { font-size: clamp(2rem,   4vw,   3rem); }
.wp-page-hero__title--md { font-size: clamp(1.75rem, 3.5vw, 2.75rem); }

.wp-page-hero__desc {
  font-size: 1.0625rem;
  max-width: 620px;
  line-height: 1.6;
  margin: 16px 0 0;
}

.wp-page-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

/* ── Navy tone (default) — dark band, light text ───────────────────────── */
.wp-page-hero--navy {
  background: var(--wp-color-navy, #1B2B56);
}
.wp-page-hero--navy .wp-page-hero__title {
  color: var(--wp-color-white, #fff);
}
.wp-page-hero--navy .wp-page-hero__desc {
  color: var(--wp-color-white, #fff);
  opacity: 0.72;
}
/* Translucent sky badge + light breadcrumb so they read on the navy band. */
.wp-page-hero--navy :deep(.wp-badge) {
  background: color-mix(in srgb, var(--wp-color-sky, #00AAEF) 15%, transparent);
  border-color: color-mix(in srgb, var(--wp-color-sky, #00AAEF) 28%, transparent);
  color: var(--wp-color-sky, #00AAEF);
}
.wp-page-hero--navy :deep(.wp-bc-link)    { color: color-mix(in srgb, var(--wp-color-white, #fff) 55%, transparent); }
.wp-page-hero--navy :deep(.wp-bc-link:hover),
.wp-page-hero--navy :deep(.wp-bc-current) { color: color-mix(in srgb, var(--wp-color-white, #fff) 85%, transparent); }
.wp-page-hero--navy :deep(.wp-bc-sep)     { color: color-mix(in srgb, var(--wp-color-white, #fff) 35%, transparent); }

/* ── Light tone — light surface, navy text (legacy) ────────────────────── */
.wp-page-hero--light {
  background: var(--wp-color-bg, #ECEEF3);
  padding: 56px 0;
  border-bottom: 1px solid var(--wp-color-border, #d8dce4);
}
.wp-page-hero--light .wp-page-hero__title {
  color: var(--wp-color-navy, #1B2B56);
}
.wp-page-hero--light .wp-page-hero__desc {
  color: var(--wp-color-muted, #8C95AA);
}
</style>
