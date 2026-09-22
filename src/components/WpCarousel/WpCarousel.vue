<script setup lang="ts">
import { computed, ref, useSlots, onMounted, onBeforeUnmount, nextTick, type VNode } from 'vue'
import { Comment, Fragment, Text } from 'vue'

/**
 * Rail horizontal défilant — un carrousel qui ne tourne pas tout seul.
 *
 * ⛔ PAS DE DÉFILEMENT AUTOMATIQUE, ET CE N'EST PAS UNE OMISSION. Un contenu qui
 * bouge sans qu'on l'ait demandé déplace la cible sous le doigt, casse la
 * lecture de qui lit lentement, et déclenche les troubles vestibulaires. Le
 * WCAG 2.2 l'encadre au critère 2.2.2 : ce composant s'épargne le problème en
 * ne démarrant jamais.
 *
 * ⚠️ LE DÉFILEMENT EST NATIF, PAS SIMULÉ. Un rail en `transform` avec un index
 * interne perd le geste tactile, la molette horizontale et la restitution de
 * position au retour. `overflow-x: auto` + `scroll-snap` les rend gratuitement,
 * et les deux boutons ne font que poser un `scrollBy`.
 *
 * ⚠️ UN CONTENEUR DÉFILANT DOIT ÊTRE ATTEIGNABLE AU CLAVIER. Sans `tabindex`,
 * personne ne peut le faire défiler aux flèches : le contenu hors écran
 * n'existe alors que pour la souris et le doigt.
 *
 * Le design system ne traduit pas : tous les libellés viennent de l'appelant.
 */
const props = withDefaults(defineProps<{
  /** Nom accessible du rail. Obligatoire en pratique : « carrousel » ne dit rien. */
  ariaLabel: string
  /** Nom accessible du bouton précédent. */
  prevLabel?: string
  /** Nom accessible du bouton suivant. */
  nextLabel?: string
  /** Largeur minimale d'une carte. Le rail en place autant que la place permet. */
  itemMinWidth?: string
}>(), {
  prevLabel: 'Previous',
  nextLabel: 'Next',
  itemMinWidth: '260px',
})

const slots = useSlots()

/**
 * ⛔ UN RAIL VIDE SE RETIRE DE LUI-MÊME, il ne s'affiche pas en creux.
 *
 * ⚠️ La décision vit ICI plutôt que chez l'appelant, et c'est délibéré : un
 * `v-if` à recopier sur chaque page finit par être oublié sur l'une d'elles, et
 * ce jour-là la vitrine montre un rail vide, ce qui dit qu'elle est morte.
 *
 * ⚠️ Les commentaires et les textes blancs ne comptent pas : un `v-if` faux
 * laisse un nœud Comment, et un `v-for` vide laisse un Fragment sans enfant.
 * Les compter rendrait le composant vide mais présent, ce qu'on veut éviter.
 */
function porteDuContenu(noeuds: VNode[] | undefined): boolean {
  if (!noeuds) return false
  return noeuds.some((n) => {
    if (n.type === Comment) return false
    if (n.type === Text) return String(n.children ?? '').trim().length > 0
    if (n.type === Fragment) return porteDuContenu(n.children as VNode[] | undefined)
    return true
  })
}
const vide = computed(() => !porteDuContenu(slots.default?.()))

const rail = ref<HTMLElement | null>(null)
const auDebut = ref(true)
const aLaFin = ref(true)

/**
 * ⚠️ LA MARGE DE 2 px N'EST PAS DÉCORATIVE. `scrollLeft` est fractionnaire dès
 * que la page est zoomée ou que l'écran a un rapport non entier : une égalité
 * stricte laisse le bouton « suivant » actif en bout de course, et cliquer
 * dessus ne fait rien. Un bouton qui ne fait rien est pire qu'un bouton éteint.
 */
const MARGE = 2

function mesurer() {
  const el = rail.value
  if (!el) return
  auDebut.value = el.scrollLeft <= MARGE
  aLaFin.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - MARGE
}

/**
 * ⚠️ LE DÉFILEMENT DOUX SE COUPE POUR QUI A DEMANDÉ MOINS D'ANIMATION. C'est la
 * même gêne que celle qui fait refuser le défilement automatique, et une règle
 * CSS ne suffirait pas : le comportement est demandé ici, en JavaScript, donc
 * `scroll-behavior` dans une feuille de style ne serait jamais consulté.
 */
function douceur(): ScrollBehavior {
  if (typeof matchMedia !== 'function') return 'smooth'
  return matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

function defiler(sens: -1 | 1) {
  const el = rail.value
  if (!el) return
  // Une largeur visible moins un chevauchement : on garde une carte à l'écran
  // pour que l'œil sache qu'il a avancé plutôt que changé de page.
  el.scrollBy({ left: sens * Math.max(el.clientWidth - 80, 120), behavior: douceur() })
}

let observateur: ResizeObserver | null = null
onMounted(async () => {
  await nextTick()
  mesurer()
  if (typeof ResizeObserver !== 'undefined' && rail.value) {
    observateur = new ResizeObserver(mesurer)
    observateur.observe(rail.value)
  }
})
onBeforeUnmount(() => observateur?.disconnect())
</script>

<template>
  <section v-if="!vide" class="wp-carousel" :aria-label="ariaLabel">
    <div
      ref="rail"
      class="wp-carousel__rail"
      tabindex="0"
      :style="{ '--wp-carousel-item': itemMinWidth }"
      @scroll="mesurer"
    >
      <slot />
    </div>

    <!-- ⚠️ `aria-hidden` sur les deux boutons : le rail est déjà atteignable au
         clavier et défile aux flèches. Les annoncer ajouterait deux arrêts qui
         ne font rien de plus que ce que la flèche fait déjà. Ils restent
         cliquables à la souris et au doigt. -->
    <div class="wp-carousel__controls" aria-hidden="true">
      <button
        type="button" class="wp-carousel__nav" tabindex="-1"
        :disabled="auDebut" :aria-label="prevLabel" @click="defiler(-1)"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button
        type="button" class="wp-carousel__nav" tabindex="-1"
        :disabled="aLaFin" :aria-label="nextLabel" @click="defiler(1)"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.wp-carousel {
  position: relative;
}

.wp-carousel__rail {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(var(--wp-carousel-item, 260px), 1fr);
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  /* Le rail porte son propre rembourrage vertical : sans lui, l'ombre des
     cartes est rognée par le conteneur défilant. */
  padding: 4px 2px 12px;
  scrollbar-width: thin;
}
.wp-carousel__rail > * {
  scroll-snap-align: start;
}
.wp-carousel__rail:focus-visible {
  outline: 2px solid var(--wp-color-sky, #2f6fed);
  outline-offset: 2px;
  border-radius: var(--wp-radius, 10px);
}

.wp-carousel__controls {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
}

.wp-carousel__nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--wp-radius, 10px);
  border: 1px solid var(--wp-color-border, #d5dced);
  background: var(--wp-color-surface, #fff);
  color: var(--wp-color-text-sub, #5b6684);
  cursor: pointer;
  transition: var(--wp-transition, 150ms ease);
}
.wp-carousel__nav:hover:not(:disabled) {
  background: var(--wp-color-hover, #eef2fb);
  color: var(--wp-color-text, #16203a);
}
.wp-carousel__nav:disabled {
  opacity: 0.4;
  cursor: default;
}

</style>
