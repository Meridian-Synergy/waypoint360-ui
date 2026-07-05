<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  /** Accessible labels — pass localized strings; English fallbacks provided. */
  decreaseLabel?: string
  resetLabel?: string
  increaseLabel?: string
  /** localStorage key holding the chosen scale (shared across pages). */
  storageKey?: string
  /** Compact form: hide the middle reset button (A- / A+ only). For tight bars. */
  compact?: boolean
}>(), {
  decreaseLabel: 'Decrease text size',
  resetLabel: 'Reset text size',
  increaseLabel: 'Increase text size',
  storageKey: 'wp-font-scale',
  compact: false,
})

const emit = defineEmits<{ change: [scale: number] }>()

// Discrete steps; index 1 (scale 1) is the default / reset target.
const STEPS = [0.9, 1, 1.15, 1.3]
const DEFAULT_INDEX = 1

const index = ref(DEFAULT_INDEX)

function apply(i: number) {
  index.value = i
  const scale = STEPS[i]
  // Runtime-only: base.css multiplies the root font-size by this var.
  document.documentElement.style.setProperty('--wp-font-scale', String(scale))
  try {
    localStorage.setItem(props.storageKey, String(scale))
  } catch {
    // Private mode / storage disabled — the scale still applies for this session.
  }
  emit('change', scale)
}

function decrease() { if (index.value > 0) apply(index.value - 1) }
function increase() { if (index.value < STEPS.length - 1) apply(index.value + 1) }
function reset() { apply(DEFAULT_INDEX) }

onMounted(() => {
  let stored: string | null = null
  try { stored = localStorage.getItem(props.storageKey) } catch { /* ignore */ }
  const i = stored ? STEPS.indexOf(Number(stored)) : -1
  apply(i >= 0 ? i : DEFAULT_INDEX)
})
</script>

<template>
  <div class="wp-text-size" role="group" :aria-label="resetLabel">
    <button
      type="button"
      class="wp-text-size__btn"
      :aria-label="decreaseLabel"
      :title="decreaseLabel"
      :disabled="index === 0"
      @click="decrease"
    >
      A<span class="wp-text-size__sign" aria-hidden="true">−</span>
    </button>
    <button
      v-if="!compact"
      type="button"
      class="wp-text-size__btn wp-text-size__btn--reset"
      :aria-label="resetLabel"
      :title="resetLabel"
      :aria-pressed="index === DEFAULT_INDEX"
      @click="reset"
    >A</button>
    <button
      type="button"
      class="wp-text-size__btn"
      :aria-label="increaseLabel"
      :title="increaseLabel"
      :disabled="index === STEPS.length - 1"
      @click="increase"
    >
      A<span class="wp-text-size__sign" aria-hidden="true">+</span>
    </button>
  </div>
</template>

<style scoped>
.wp-text-size {
  display: inline-flex;
  align-items: stretch;
  gap: 2px;
  border-radius: var(--wp-radius-md, 8px);
}
.wp-text-size__btn {
  display: inline-flex;
  align-items: baseline;
  justify-content: center;
  min-width: 34px;
  height: 34px;
  padding: 0 6px;
  border: none;
  border-radius: var(--wp-radius-md, 8px);
  background: transparent;
  color: inherit;
  font-family: inherit;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1;
  cursor: pointer;
  transition: background var(--wp-transition-fast, 0.1s ease);
  flex-shrink: 0;
}
.wp-text-size__btn--reset { font-size: 1rem; }
.wp-text-size__sign {
  font-size: 0.7em;
  margin-left: 1px;
}
.wp-text-size__btn:hover:not(:disabled) {
  background: rgba(127, 127, 127, 0.15);
}
.wp-text-size__btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
