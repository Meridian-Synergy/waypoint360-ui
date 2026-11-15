<script setup lang="ts">
import { nextTick, onMounted, ref, watch, type Component } from 'vue'

/**
 * Navigation tabs: each tab is a link to its own address, so a tab can be bookmarked,
 * shared and opened in a new browser tab. This is a navigation landmark (`<nav>` +
 * `aria-current="page"`), not the WAI-ARIA `tablist` pattern, which is meant for panels
 * switched in place without changing the address.
 *
 * Without `to`, a tab renders as a button and emits `select`: the same look for a page
 * that switches panels itself.
 */
export interface WpTabItem {
  key:    string
  label:  string
  /** Address of the tab. Rendered through `as` (e.g. NuxtLink) when set. */
  to?:    string
  /** Short counter shown after the label, e.g. "12/48". */
  count?: string | number
}

const props = withDefaults(defineProps<{
  items:      WpTabItem[]
  /** Key of the current tab. */
  current?:   string
  /** Accessible name of the navigation landmark. */
  ariaLabel?: string
  /** Link component for tabs with `to` (e.g. NuxtLink). Plain `a` with `href` by default. */
  as?:        string | Component
}>(), {
  current:   '',
  ariaLabel: 'Tabs',
  as:        'a',
})

const emit = defineEmits<{ select: [key: string] }>()

const bar = ref<HTMLElement | null>(null)

// On a narrow screen the bar scrolls sideways: bring the current tab into view.
function revealCurrent() {
  const el = bar.value?.querySelector<HTMLElement>('[aria-current="page"]')
  const box = bar.value
  if (!el || !box) return
  const left = el.offsetLeft - box.offsetLeft
  if (left < box.scrollLeft || left + el.offsetWidth > box.scrollLeft + box.clientWidth) {
    box.scrollLeft = Math.max(0, left - 16)
  }
}
onMounted(revealCurrent)
// Counters often arrive after the first render and widen the tabs, pushing the current one out of view again.
watch([() => props.current, () => props.items], () => nextTick(revealCurrent), { deep: true })

const linkProps = (item: WpTabItem) => (props.as === 'a' ? { href: item.to } : { to: item.to })
</script>

<template>
  <nav class="wp-tabs" :aria-label="ariaLabel">
    <ul ref="bar" class="wp-tabs__bar">
      <li v-for="item in items" :key="item.key" class="wp-tabs__item">
        <component
          :is="as"
          v-if="item.to"
          v-bind="linkProps(item)"
          class="wp-tabs__tab"
          :class="{ 'wp-tabs__tab--current': item.key === current }"
          :aria-current="item.key === current ? 'page' : undefined"
          :data-tab="item.key"
        >
          <span class="wp-tabs__label">{{ item.label }}</span>
          <span v-if="item.count !== undefined && item.count !== ''" class="wp-tabs__count">{{ item.count }}</span>
        </component>
        <button
          v-else
          type="button"
          class="wp-tabs__tab"
          :class="{ 'wp-tabs__tab--current': item.key === current }"
          :aria-current="item.key === current ? 'page' : undefined"
          :data-tab="item.key"
          @click="emit('select', item.key)"
        >
          <span class="wp-tabs__label">{{ item.label }}</span>
          <span v-if="item.count !== undefined && item.count !== ''" class="wp-tabs__count">{{ item.count }}</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.wp-tabs {
  /* The bar may scroll sideways; the page around it must never do so. */
  min-width: 0;
  max-width: 100%;
}

.wp-tabs__bar {
  display:         flex;
  gap:             4px;
  margin:          0;
  padding:         0;
  list-style:      none;
  overflow-x:      auto;
  scrollbar-width: thin;
  border-bottom:   1px solid var(--wp-color-border, #D5D9E4);
}

.wp-tabs__item { flex: 0 0 auto; }

.wp-tabs__tab {
  display:         inline-flex;
  align-items:     center;
  gap:             8px;
  padding:         10px 14px;
  /* Overlaps the bar border so the current tab's underline replaces it. */
  margin-bottom:   -1px;
  border:          0;
  border-bottom:   2px solid transparent;
  background:      transparent;
  font-family:     var(--wp-font-body, 'Barlow', sans-serif);
  font-size:       0.9375rem;
  font-weight:     500;
  line-height:     1.2;
  white-space:     nowrap;
  color:           var(--wp-color-text-sub, var(--wp-color-silver, #7A7D8A));
  text-decoration: none;
  cursor:          pointer;
  transition:      color var(--wp-transition-fast, 0.1s ease), border-color var(--wp-transition-fast, 0.1s ease);
}
.wp-tabs__tab:hover { color: var(--wp-color-text, var(--wp-color-navy, #1B2B56)); }
.wp-tabs__tab:focus-visible {
  outline:        2px solid var(--wp-color-sky, #00AAEF);
  outline-offset: -2px;
  border-radius:  var(--wp-radius-sm, 4px);
}

.wp-tabs__tab--current {
  color:               var(--wp-color-text, var(--wp-color-navy, #1B2B56));
  font-weight:         600;
  border-bottom-color: var(--wp-color-sky, #00AAEF);
}

.wp-tabs__count {
  font-size:            0.75rem;
  font-weight:          600;
  font-variant-numeric: tabular-nums;
  padding:              2px 8px;
  border-radius:        999px;
  background:           rgba(0, 170, 239, 0.1);
  color:                var(--wp-color-sky-dark, var(--wp-color-sky, #00AAEF));
}
</style>
