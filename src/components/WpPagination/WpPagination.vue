<script setup lang="ts">
import { computed } from 'vue'

/**
 * Pagination — une fenêtre BORNÉE de numéros, pas la liste complète.
 *
 * ⚠️ Ce composant existe parce que l'application rendait un bouton par page :
 * 43 pour 1 053 organisations, et 200 le jour où la base en compte 5 000. Une
 * pagination qui grandit avec les données ne pagine plus rien.
 *
 * Le composant ne sait rien de l'URL ni du chargement : il émet la page
 * demandée, l'appelant décide ce qu'il en fait.
 *
 * Le design system ne traduit pas — il n'a pas de catalogue. Tous les libellés,
 * y compris les noms accessibles, sont fournis par l'appelant.
 */

const props = withDefaults(defineProps<{
  /** Page courante, à partir de 1. */
  page: number
  /** Nombre total de pages. En dessous de 2, le composant ne rend rien. */
  totalPages: number
  /** Numéros affichés de part et d'autre de la page courante. */
  siblings?: number
  /** Libellé du bouton précédent. */
  prevLabel?: string
  /** Libellé du bouton suivant. */
  nextLabel?: string
  /**
   * Nom accessible d'un numéro. `{page}` est remplacé — « page 7 » plutôt que
   * « 7 », qu'un lecteur d'écran annonce sans contexte.
   */
  pageLabel?: string
  /** Nom accessible de la navigation elle-même. */
  ariaLabel?: string
  /** Résumé affiché sur petit écran, où les numéros ne tiennent pas. */
  compactLabel?: string
}>(), {
  siblings: 1,
  prevLabel: 'Previous',
  nextLabel: 'Next',
  pageLabel: 'Page {page}',
  ariaLabel: 'Pagination',
  compactLabel: '',
})

const emit = defineEmits<{ (e: 'update:page', page: number): void }>()

const GAP = '…'

/**
 * Les extrémités restent toujours atteignables : sans la première et la
 * dernière page, revenir au début demande autant de clics qu'il y a de pages.
 */
const items = computed<(number | typeof GAP)[]>(() => {
  const total = Math.max(1, Math.floor(props.totalPages))
  const courante = Math.min(Math.max(1, Math.floor(props.page)), total)
  const s = Math.max(0, Math.floor(props.siblings))

  // Fenêtre + deux extrémités + deux ellipses : au-delà, tout tient, et rendre
  // une ellipse à la place d'UN numéro coûterait un clic pour rien.
  if (total <= s * 2 + 5) return Array.from({ length: total }, (_, i) => i + 1)

  const debut = Math.max(2, courante - s)
  const fin   = Math.min(total - 1, courante + s)
  const out: (number | typeof GAP)[] = [1]
  if (debut > 2) out.push(GAP)
  for (let p = debut; p <= fin; p++) out.push(p)
  if (fin < total - 1) out.push(GAP)
  out.push(total)
  return out
})

const resume = computed(() =>
  props.compactLabel || `${Math.min(props.page, props.totalPages)} / ${props.totalPages}`,
)

function aller(p: number) {
  if (p < 1 || p > props.totalPages || p === props.page) return
  emit('update:page', p)
}

function nom(p: number) {
  return props.pageLabel.replace('{page}', String(p))
}
</script>

<template>
  <nav v-if="totalPages > 1" class="wp-pagination" :aria-label="ariaLabel">
    <button
      type="button"
      class="wp-pagination__step"
      :disabled="page <= 1"
      @click="aller(page - 1)"
    >{{ prevLabel }}</button>

    <!-- Les numéros ne tiennent pas sur un téléphone : douze cibles de 32 px ne
         se visent pas au doigt. Le résumé prend le relais, jamais les deux. -->
    <span class="wp-pagination__summary" aria-hidden="true">{{ resume }}</span>

    <ol class="wp-pagination__list">
      <li v-for="(item, i) in items" :key="`${item}-${i}`">
        <span v-if="item === '…'" class="wp-pagination__gap" aria-hidden="true">…</span>
        <button
          v-else
          type="button"
          class="wp-pagination__page"
          :class="{ 'wp-pagination__page--current': item === page }"
          :aria-label="nom(item as number)"
          :aria-current="item === page ? 'page' : undefined"
          @click="aller(item as number)"
        >{{ item }}</button>
      </li>
    </ol>

    <button
      type="button"
      class="wp-pagination__step"
      :disabled="page >= totalPages"
      @click="aller(page + 1)"
    >{{ nextLabel }}</button>
  </nav>
</template>

<style scoped>
.wp-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 20px 0 8px;
}

.wp-pagination__step {
  height: 32px;
  padding: 0 12px;
  border-radius: var(--wp-radius, 10px);
  border: 1px solid var(--wp-color-border, #d5dced);
  background: var(--wp-color-surface, #fff);
  color: var(--wp-color-text-sub, #5b6684);
  font-size: 0.8125rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.wp-pagination__step:hover:not(:disabled) {
  background: var(--wp-color-hover, #eef2fb);
  color: var(--wp-color-text, #16203a);
}
.wp-pagination__step:disabled { opacity: 0.45; cursor: not-allowed; }

.wp-pagination__list {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.wp-pagination__page {
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border-radius: var(--wp-radius, 10px);
  border: 1px solid var(--wp-color-border, #d5dced);
  background: var(--wp-color-surface, #fff);
  color: var(--wp-color-text-sub, #5b6684);
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  cursor: pointer;
}
.wp-pagination__page:hover {
  background: var(--wp-color-hover, #eef2fb);
  color: var(--wp-color-text, #16203a);
}
.wp-pagination__page--current {
  background: var(--wp-color-sky, #0aa2e0);
  border-color: var(--wp-color-sky, #0aa2e0);
  color: #fff;
  font-weight: 700;
}

.wp-pagination__gap {
  display: inline-flex;
  justify-content: center;
  min-width: 20px;
  color: var(--wp-color-text-sub, #5b6684);
}

/* Le résumé remplace les numéros, il ne s'y ajoute jamais. */
.wp-pagination__summary { display: none; }

@media (max-width: 599px) {
  .wp-pagination__list { display: none; }
  .wp-pagination__summary {
    display: inline-block;
    font-size: 0.8125rem;
    font-variant-numeric: tabular-nums;
    color: var(--wp-color-text-sub, #5b6684);
  }
}
</style>
