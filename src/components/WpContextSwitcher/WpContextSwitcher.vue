<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export type Universe = 'individual' | 'client' | 'pro_operator' | 'public_service'

export interface ContextOption {
  orgId: string
  name: string
  universe: Universe
  // Already-localized label for the universe (the app owns i18n).
  universeLabel: string
}

const props = withDefaults(defineProps<{
  contexts: ContextOption[]
  activeOrgId: string | null
  theme?: 'dark' | 'light'
}>(), { theme: 'dark' })

const emit = defineEmits<{ select: [orgId: string] }>()

const open = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const active = computed(() => props.contexts.find(ctx => ctx.orgId === props.activeOrgId))

// Stable universe ordering for the grouped list.
const UNIVERSE_ORDER: Universe[] = ['individual', 'pro_operator', 'public_service', 'client']

const groups = computed(() => {
  const byUniverse = new Map<Universe, ContextOption[]>()
  for (const ctx of props.contexts) {
    const list = byUniverse.get(ctx.universe) ?? []
    list.push(ctx)
    byUniverse.set(ctx.universe, list)
  }
  return UNIVERSE_ORDER
    .filter(u => byUniverse.has(u))
    .map(u => ({ universe: u, label: byUniverse.get(u)![0].universeLabel, contexts: byUniverse.get(u)! }))
})

function toggle() { open.value = !open.value }

function select(orgId: string) {
  open.value = false
  emit('select', orgId)
}

function onOutsideClick(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) open.value = false
}

onMounted(() => document.addEventListener('click', onOutsideClick, true))
onUnmounted(() => document.removeEventListener('click', onOutsideClick, true))
</script>

<template>
  <div ref="containerRef" class="wp-cs" :class="`wp-cs--${theme}`">
    <button
      class="wp-cs__trigger"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click.stop="toggle"
    >
      <span class="wp-cs__trigger-text">
        <span class="wp-cs__name">{{ active?.name }}</span>
        <span v-if="active" class="wp-cs__universe">{{ active.universeLabel }}</span>
      </span>
      <svg
        class="wp-cs__chevron"
        :class="{ 'wp-cs__chevron--open': open }"
        width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"
      >
        <path d="M6 8 L1 3 L11 3 Z" />
      </svg>
    </button>

    <div v-if="open" class="wp-cs__dropdown" role="listbox">
      <div v-for="group in groups" :key="group.universe" class="wp-cs__group">
        <p class="wp-cs__group-label">{{ group.label }}</p>
        <button
          v-for="ctx in group.contexts"
          :key="ctx.orgId"
          role="option"
          :aria-selected="ctx.orgId === activeOrgId"
          class="wp-cs__option"
          :class="{ 'wp-cs__option--active': ctx.orgId === activeOrgId }"
          @click="select(ctx.orgId)"
        >
          {{ ctx.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wp-cs {
  position: relative;
  display: inline-block;
  font-family: var(--wp-font-body, sans-serif);
}

.wp-cs__trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: var(--wp-radius-md, 8px);
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--wp-transition-fast, 0.1s ease), border-color var(--wp-transition-fast, 0.1s ease);
}
.wp-cs__trigger-text { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.15; }
.wp-cs__name { font-size: 0.8125rem; font-weight: 700; }
.wp-cs__universe { font-size: 0.625rem; font-weight: 600; text-transform: uppercase; letter-spacing: .04em; opacity: .8; }

.wp-cs__chevron { transition: transform var(--wp-transition-base, 0.2s ease); flex-shrink: 0; }
.wp-cs__chevron--open { transform: rotate(180deg); }

.wp-cs__dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 220px;
  max-height: 360px;
  overflow-y: auto;
  border-radius: var(--wp-radius-md, 8px);
  border: 1px solid;
  margin: 0;
  padding: 6px 0;
  z-index: 200;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.wp-cs__group + .wp-cs__group { margin-top: 4px; border-top: 1px solid rgba(128,128,128,.15); padding-top: 4px; }
.wp-cs__group-label {
  margin: 0;
  padding: 4px 16px;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  opacity: .5;
}

.wp-cs__option {
  display: block;
  width: 100%;
  text-align: left;
  border: 0;
  background: transparent;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.8125rem;
  font-weight: 500;
  transition: background var(--wp-transition-fast, 0.1s ease);
}

/* ── Dark theme (SaaS app) ───────────────────────────────────── */
.wp-cs--dark .wp-cs__trigger { color: var(--wp-color-silver, #7A7D8A); }
.wp-cs--dark .wp-cs__trigger:hover { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.12); color: var(--wp-color-white, #fff); }
.wp-cs--dark .wp-cs__dropdown { background: var(--wp-color-navy, #1B2B56); border-color: rgba(255,255,255,.1); }
.wp-cs--dark .wp-cs__option { color: var(--wp-color-silver, #7A7D8A); }
.wp-cs--dark .wp-cs__option:hover { background: rgba(255,255,255,.06); color: var(--wp-color-white, #fff); }
.wp-cs--dark .wp-cs__option--active { color: var(--wp-color-sky, #00AAEF); font-weight: 700; }

/* ── Light theme (marketing web) ────────────────────────────── */
.wp-cs--light .wp-cs__trigger { color: var(--wp-color-navy, #1B2B56); }
.wp-cs--light .wp-cs__trigger:hover { background: rgba(27,43,86,.06); border-color: rgba(27,43,86,.15); }
.wp-cs--light .wp-cs__dropdown { background: #fff; border-color: #e5e7eb; }
.wp-cs--light .wp-cs__option { color: #444; }
.wp-cs--light .wp-cs__option:hover { background: #f3f4f6; color: var(--wp-color-navy, #1B2B56); }
.wp-cs--light .wp-cs__option--active { color: var(--wp-color-sky, #00AAEF); font-weight: 700; }
</style>
