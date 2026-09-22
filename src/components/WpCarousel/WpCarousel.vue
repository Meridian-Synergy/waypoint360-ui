<script setup lang="ts">
import { computed, ref, useSlots, onMounted, onBeforeUnmount, nextTick, type VNode } from 'vue'
import { Comment, Fragment, Text } from 'vue'

/**
 * A horizontal scrolling rail — a carousel that never moves on its own.
 *
 * No auto-scrolling, and that is not an omission. Content that moves unasked
 * shifts the target under the finger, breaks the reading of anyone who reads
 * slowly, and triggers vestibular disorders. WCAG 2.2 covers it under 2.2.2;
 * this component spares itself the problem by never starting.
 *
 * The scrolling is NATIVE, not simulated. A `transform` rail with an internal
 * index loses touch gestures, horizontal wheel and scroll restoration on the
 * way back. `overflow-x: auto` + `scroll-snap` give all three for free, and the
 * two buttons only issue a `scrollBy`.
 *
 * A scrollable container must be reachable by keyboard. Without `tabindex`
 * nobody can scroll it with the arrow keys: the off-screen content then exists
 * only for the mouse and the finger.
 *
 * The design system does not translate: every label comes from the caller.
 */
const props = withDefaults(defineProps<{
  /** Accessible name of the rail. Required in practice: "carousel" says nothing. */
  ariaLabel: string
  /** Accessible name of the previous button. */
  prevLabel?: string
  /** Accessible name of the next button. */
  nextLabel?: string
  /** Minimum card width. The rail fits as many as the space allows. */
  itemMinWidth?: string
}>(), {
  prevLabel: 'Previous',
  nextLabel: 'Next',
  itemMinWidth: '260px',
})

const slots = useSlots()

/**
 * An empty rail removes itself; it does not render as a hollow.
 *
 * The decision lives HERE rather than in the caller, deliberately: a `v-if` to
 * copy onto every page ends up forgotten on one of them, and that day the site
 * shows an empty rail, which says it is dead.
 *
 * Comments and whitespace do not count: a false `v-if` leaves a Comment node,
 * and an empty `v-for` leaves a childless Fragment. Counting them would render
 * the component empty but present, which is what we are avoiding.
 */
function hasContent(nodes: VNode[] | undefined): boolean {
  if (!nodes) return false
  return nodes.some((n) => {
    if (n.type === Comment) return false
    if (n.type === Text) return String(n.children ?? '').trim().length > 0
    if (n.type === Fragment) return hasContent(n.children as VNode[] | undefined)
    return true
  })
}
const isEmpty = computed(() => !hasContent(slots.default?.()))

const rail = ref<HTMLElement | null>(null)
const atStart = ref(true)
const atEnd = ref(true)

/**
 * Two dead arrows beside a single card, and that is the commonest case when a
 * list opens. Measured 2026-09-22: when the rail does not overflow, `atStart`
 * and `atEnd` are both true, so the buttons were rendered then disabled. Two
 * switched-off buttons announce content that does not exist.
 */
const overflows = ref(false)

/**
 * The 2 px margin is not decorative. `scrollLeft` is fractional as soon as the
 * page is zoomed or the screen has a non-integer ratio: a strict equality
 * leaves the "next" button active at the end of the run, and clicking it does
 * nothing. A button that does nothing is worse than a button switched off.
 */
const MARGIN = 2

function measure() {
  const el = rail.value
  if (!el) return
  overflows.value = el.scrollWidth > el.clientWidth + MARGIN
  atStart.value = el.scrollLeft <= MARGIN
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - MARGIN
}

/**
 * Smooth scrolling is switched off for anyone who asked for less animation. It
 * is the same discomfort that rules out auto-scrolling, and a CSS rule would
 * not do: the behaviour is requested here, in JavaScript, so a stylesheet
 * `scroll-behavior` would never be consulted.
 */
function scrollSmoothness(): ScrollBehavior {
  if (typeof matchMedia !== 'function') return 'smooth'
  return matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
}

function scrollByPage(direction: -1 | 1) {
  const el = rail.value
  if (!el) return
  // One visible width minus an overlap: a card stays on screen so the eye knows
  // it moved forward rather than changed page.
  el.scrollBy({ left: direction * Math.max(el.clientWidth - 80, 120), behavior: scrollSmoothness() })
}

let resizeObserver: ResizeObserver | null = null
onMounted(async () => {
  await nextTick()
  measure()
  if (typeof ResizeObserver !== 'undefined' && rail.value) {
    resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(rail.value)
  }
})
onBeforeUnmount(() => resizeObserver?.disconnect())
</script>

<template>
  <section v-if="!isEmpty" class="wp-carousel" :aria-label="ariaLabel">
    <div
      ref="rail"
      class="wp-carousel__rail"
      tabindex="0"
      :style="{ '--wp-carousel-item': itemMinWidth }"
      @scroll="measure"
    >
      <slot />
    </div>

    <!-- `aria-hidden` on both buttons: the rail is already keyboard reachable
         and scrolls with the arrow keys. Announcing them would add two stops
         that do no more than the arrow key already does. They stay clickable
         with mouse and finger. -->
    <div v-if="overflows" class="wp-carousel__controls" aria-hidden="true">
      <button
        type="button" class="wp-carousel__nav" tabindex="-1"
        :disabled="auDebut" :aria-label="prevLabel" @click="scrollByPage(-1)"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M10 3L5 8l5 5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <button
        type="button" class="wp-carousel__nav" tabindex="-1"
        :disabled="aLaFin" :aria-label="nextLabel" @click="scrollByPage(1)"
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
  /* The rail carries its own vertical padding: without it the cards' shadow is
     clipped by the scrolling container. */
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
