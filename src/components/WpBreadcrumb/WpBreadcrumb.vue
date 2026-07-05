<script setup lang="ts">
export interface BreadcrumbItem {
  label: string
  href?: string
}

defineProps<{
  crumbs: BreadcrumbItem[]
}>()
</script>

<template>
  <nav class="wp-breadcrumb" aria-label="Fil d'Ariane">
    <template v-for="(crumb, i) in crumbs" :key="i">
      <span v-if="i > 0" class="wp-bc-sep" aria-hidden="true">›</span>
      <a
        v-if="crumb.href"
        :href="crumb.href"
        class="wp-bc-link"
      >{{ crumb.label }}</a>
      <span
        v-else
        class="wp-bc-current"
        aria-current="page"
      >{{ crumb.label }}</span>
    </template>
  </nav>
</template>

<style scoped>
.wp-breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.wp-bc-link {
  font-size: 0.8125rem;
  color: var(--wp-color-muted);
  text-decoration: none;
  white-space: nowrap;
  transition: color var(--wp-transition-fast);
}
.wp-bc-link:hover { color: var(--wp-color-navy); }

.wp-bc-sep {
  color: var(--wp-color-border);
  font-size: 0.875rem;
  line-height: 1;
}

.wp-bc-current {
  font-size: 0.8125rem;
  color: var(--wp-color-navy);
  font-weight: 500;
  white-space: nowrap;
}
</style>
