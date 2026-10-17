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
  color: var(--wp-color-muted, #8C95AA);
  text-decoration: none;
  white-space: nowrap;
  transition: color var(--wp-transition-fast, 0.1s ease);
}
.wp-bc-link:hover { color: var(--wp-color-navy, #1B2B56); }

.wp-bc-sep {
  color: var(--wp-color-border, #D5D9E4);
  font-size: 0.875rem;
  line-height: 1;
}

/* ⛔ LE MAILLON COURANT PASSE À LA LIGNE, LES LIENS NON. C'est le titre de la
   page, donc le plus long : en `nowrap`, il faisait déborder 10 guides sur 29 de
   waypoint360.eu à 390 px (2026-10-17), la page entière défilant de côté.
   `min-width: 0` lui permet de rétrécir dans le flex ; `overflow-wrap` coupe un
   mot sans espace plus large que l'écran. Les liens restent sur une ligne :
   ils sont courts, et un « Accueil » coupé en deux se lirait mal. */
.wp-bc-current {
  font-size: 0.8125rem;
  color: var(--wp-color-navy, #1B2B56);
  font-weight: 500;
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: nowrap;
}
</style>
