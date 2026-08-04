<script setup lang="ts">
import { ref, computed, nextTick, onMounted, onUnmounted, useId } from 'vue'

export interface LocaleOption {
  code: string
  name: string
  flag: string // ISO 3166-1 alpha-2 lowercase, used as fi-{flag} class from flag-icons CSS
}

const props = withDefaults(defineProps<{
  locales: LocaleOption[]
  currentLocale: string
  theme?: 'dark' | 'light'
  /** Nom de la liste pour les lecteurs d'écran. Anglais par défaut : le composant
   *  ne connaît pas la locale de l'application qui l'affiche. */
  listboxLabel?: string
}>(), { theme: 'dark', listboxLabel: 'Select language' })

const emit = defineEmits<{ select: [code: string] }>()

const open = ref(false)
const containerRef = ref<HTMLElement | null>(null)
const triggerRef   = ref<HTMLElement | null>(null)
const listboxRef   = ref<HTMLElement | null>(null)

// L'option PARCOURUE au clavier, distincte de l'option SÉLECTIONNÉE : on traverse
// la liste sans rien changer tant qu'on n'a pas validé.
const activeIndex = ref(-1)

const uid = useId()
const listboxId = `${uid}-listbox`
const optionId  = (index: number) => `${uid}-option-${index}`

const current = computed(() => props.locales.find(l => l.code === props.currentLocale))
const currentIndex = computed(() => props.locales.findIndex(l => l.code === props.currentLocale))

async function openList() {
  open.value = true
  // On entre sur la langue courante, pas en tête de liste : c'est le repère de
  // l'utilisateur, et avec 29 langues repartir du haut lui coûte le trajet entier.
  activeIndex.value = currentIndex.value >= 0 ? currentIndex.value : 0
  await nextTick()
  // Le focus passe DANS la liste : `aria-activedescendant` n'est annoncé que par
  // l'élément qui a réellement le focus.
  listboxRef.value?.focus()
  scrollActiveIntoView()
}

function closeList(returnFocus = true) {
  if (!open.value) return
  open.value = false
  activeIndex.value = -1
  if (returnFocus) triggerRef.value?.focus()
}

function toggle() {
  if (open.value) closeList()
  else openList()
}

function select(code: string) {
  closeList()
  emit('select', code)
}

function scrollActiveIntoView() {
  if (activeIndex.value < 0) return
  const el = listboxRef.value?.children[activeIndex.value] as HTMLElement | undefined
  // La liste défile (29 langues dans 340 px) : sans ça l'option parcourue sortirait
  // du cadre et le repère visuel disparaîtrait.
  el?.scrollIntoView({ block: 'nearest' })
}

function moveActive(delta: number) {
  const count = props.locales.length
  if (!count) return
  activeIndex.value = (activeIndex.value + delta + count) % count
  scrollActiveIntoView()
}

function onTriggerKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    openList()
  }
}

function onListboxKeydown(e: KeyboardEvent) {
  switch (e.key) {
    case 'ArrowDown': e.preventDefault(); moveActive(1); break
    case 'ArrowUp':   e.preventDefault(); moveActive(-1); break
    case 'Home':      e.preventDefault(); activeIndex.value = 0; scrollActiveIntoView(); break
    case 'End':       e.preventDefault(); activeIndex.value = props.locales.length - 1; scrollActiveIntoView(); break
    case 'Enter':
    case ' ':
      e.preventDefault()
      if (activeIndex.value >= 0) select(props.locales[activeIndex.value].code)
      break
    case 'Escape':
      e.preventDefault()
      closeList()
      break
    case 'Tab':
      // La liste disparaît en se fermant : laisser la tabulation suivre son cours
      // abandonnerait le focus au `<body>`. On le rend au déclencheur, d'où la
      // tabulation suivante repart normalement.
      e.preventDefault()
      closeList()
      break
  }
}

function onOutsideClick(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    // Sans retour de focus : l'utilisateur a cliqué ailleurs, le lui reprendre
    // contrarierait son geste.
    closeList(false)
  }
}

onMounted(() => document.addEventListener('click', onOutsideClick, true))
onUnmounted(() => document.removeEventListener('click', onOutsideClick, true))
</script>

<template>
  <div ref="containerRef" class="wp-ls" :class="`wp-ls--${theme}`">
    <button
      ref="triggerRef"
      type="button"
      class="wp-ls__trigger"
      :aria-expanded="open"
      aria-haspopup="listbox"
      :aria-controls="open ? listboxId : undefined"
      @click.stop="toggle"
      @keydown="onTriggerKeydown"
    >
      <!-- Le drapeau est décoratif : le nom de la langue est juste à côté, et
           l'annoncer deux fois n'apprend rien. -->
      <span class="fi" :class="`fi-${current?.flag}`" aria-hidden="true" />
      <span class="wp-ls__name">{{ current?.name }}</span>
      <svg
        class="wp-ls__chevron"
        :class="{ 'wp-ls__chevron--open': open }"
        width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"
      >
        <path d="M6 8 L1 3 L11 3 Z" />
      </svg>
    </button>

    <ul
      v-if="open"
      :id="listboxId"
      ref="listboxRef"
      class="wp-ls__dropdown"
      role="listbox"
      tabindex="-1"
      :aria-label="listboxLabel"
      :aria-activedescendant="activeIndex >= 0 ? optionId(activeIndex) : undefined"
      @keydown="onListboxKeydown"
    >
      <li
        v-for="(locale, index) in locales"
        :id="optionId(index)"
        :key="locale.code"
        role="option"
        :aria-selected="locale.code === currentLocale"
        class="wp-ls__option"
        :class="{
          'wp-ls__option--active':  locale.code === currentLocale,
          'wp-ls__option--focused': index === activeIndex,
        }"
        @click="select(locale.code)"
        @mousemove="activeIndex = index"
      >
        <span class="fi" :class="`fi-${locale.flag}`" aria-hidden="true" />
        <span class="wp-ls__option-name">{{ locale.name }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* flag-icons CSS must be imported globally by the consumer app:
   import 'flag-icons/css/flag-icons.min.css'
   or via nuxt.config.ts css: ['flag-icons/css/flag-icons.min.css'] */

.wp-ls {
  position: relative;
  display: inline-block;
  font-family: var(--wp-font-body, sans-serif);
}

/* Trigger */
.wp-ls__trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: var(--wp-radius-md, 8px);
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background var(--wp-transition-fast, 0.1s ease), border-color var(--wp-transition-fast, 0.1s ease);
}

/* Chevron */
.wp-ls__chevron {
  transition: transform var(--wp-transition-base, 0.2s ease);
  flex-shrink: 0;
}
.wp-ls__chevron--open { transform: rotate(180deg); }

/* Dropdown */
.wp-ls__dropdown {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 200px;
  max-height: 340px;
  overflow-y: auto;
  border-radius: var(--wp-radius-md, 8px);
  border: 1px solid;
  list-style: none;
  margin: 0;
  padding: 6px 0;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
/* La liste reçoit le focus sans être elle-même un contrôle : c'est l'option
   parcourue qui porte le repère, un anneau sur le cadre ferait doublon. */
.wp-ls__dropdown:focus { outline: none; }

/* Option */
.wp-ls__option {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: background var(--wp-transition-fast, 0.1s ease);
}

/* flag-icons sizing */
.wp-ls .fi {
  width: 20px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 2px;
  overflow: hidden;
  background-size: cover;
}

/* Le repère clavier doit se distinguer du survol : sans lui, l'option parcourue
   à la flèche et l'option sous la souris seraient indiscernables. */
.wp-ls__option--focused {
  box-shadow: inset 2px 0 0 var(--wp-color-sky, #00AAEF);
}

/* ── Dark theme (SaaS app) ───────────────────────────────────── */
.wp-ls--dark .wp-ls__trigger {
  color: var(--wp-color-silver, #7A7D8A);
}
.wp-ls--dark .wp-ls__trigger:hover {
  background: rgba(255,255,255,.06);
  border-color: rgba(255,255,255,.12);
  color: var(--wp-color-white, #fff);
}
.wp-ls--dark .wp-ls__dropdown {
  background: var(--wp-color-navy, #1B2B56);
  border-color: rgba(255,255,255,.1);
}
.wp-ls--dark .wp-ls__option {
  color: var(--wp-color-silver, #7A7D8A);
}
.wp-ls--dark .wp-ls__option:hover,
.wp-ls--dark .wp-ls__option--focused {
  background: rgba(255,255,255,.06);
  color: var(--wp-color-white, #fff);
}
.wp-ls--dark .wp-ls__option--active {
  color: var(--wp-color-sky, #00AAEF);
  font-weight: 700;
}

/* ── Light theme (marketing web) ────────────────────────────── */
.wp-ls--light .wp-ls__trigger {
  color: var(--wp-color-navy, #1B2B56);
}
.wp-ls--light .wp-ls__trigger:hover {
  background: rgba(27,43,86,.06);
  border-color: rgba(27,43,86,.15);
}
.wp-ls--light .wp-ls__dropdown {
  background: #fff;
  border-color: #e5e7eb;
}
.wp-ls--light .wp-ls__option {
  color: #444;
}
.wp-ls--light .wp-ls__option:hover,
.wp-ls--light .wp-ls__option--focused {
  background: #f3f4f6;
  color: var(--wp-color-navy, #1B2B56);
}
.wp-ls--light .wp-ls__option--active {
  color: var(--wp-color-sky, #00AAEF);
  font-weight: 700;
}
</style>
