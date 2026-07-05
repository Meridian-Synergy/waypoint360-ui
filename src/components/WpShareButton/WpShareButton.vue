<script setup lang="ts">
import { ref } from 'vue'
import WpShareSheet, { type ShareNetwork } from '../WpShareSheet/WpShareSheet.vue'

const props = withDefaults(defineProps<{
  /** Canonical public URL to share. */
  url: string
  /** Short title — native share title + email subject. */
  title?: string
  /** Message that accompanies the link. */
  text?: string
  /** Networks shown in the fallback sheet. */
  networks?: ShareNetwork[]
  /** Visual style: compact icon button, or icon + label. */
  variant?: 'icon' | 'labeled'
  /** Button label (also the accessible name of the icon variant). */
  label?: string
  /** Sheet heading + per-network labels passed through to WpShareSheet. */
  sheetTitle?: string
  sheetLabels?: Partial<Record<ShareNetwork, string>>
  copiedLabel?: string
  /** Dark surface variant. */
  dark?: boolean
}>(), {
  title:    '',
  text:     '',
  networks: () => ['linkedin', 'twitter', 'whatsapp', 'facebook', 'email', 'copy'],
  variant:  'icon',
  label:    'Share',
  sheetTitle: 'Share',
  sheetLabels: () => ({}),
  copiedLabel: 'Link copied!',
  dark:     false,
})

const sheetOpen = ref(false)

async function onClick() {
  // Prefer the native OS share sheet (mobile + supporting desktop browsers).
  if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
    try {
      await navigator.share({ title: props.title, text: props.text, url: props.url })
      return
    } catch (err) {
      // AbortError = user dismissed the native sheet — do nothing.
      if ((err as DOMException)?.name === 'AbortError') return
      // Any other failure (unsupported payload, etc.) → fall back to the sheet.
    }
  }
  sheetOpen.value = true
}
</script>

<template>
  <button
    type="button"
    :class="['wp-share-button', `wp-share-button--${variant}`, { 'wp-share-button--dark': dark }]"
    :aria-label="label"
    @click="onClick"
  >
    <svg class="wp-share-button__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3"/>
      <circle cx="6" cy="12" r="3"/>
      <circle cx="18" cy="19" r="3"/>
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
    <span v-if="variant === 'labeled'" class="wp-share-button__label">{{ label }}</span>
  </button>

  <WpShareSheet
    v-if="sheetOpen"
    :url="url"
    :title="title"
    :text="text"
    :networks="networks"
    :share-title="sheetTitle"
    :labels="sheetLabels"
    :copied-label="copiedLabel"
    :dark="dark"
    @close="sheetOpen = false"
  />
</template>

<style scoped>
.wp-share-button {
  display:         inline-flex;
  align-items:     center;
  justify-content: center;
  gap:             var(--wp-space-sm, 8px);
  border:          1px solid var(--wp-color-border, #D5D9E4);
  border-radius:   var(--wp-radius-md, 8px);
  background:      transparent;
  color:           var(--wp-color-navy, #1B2B56);
  cursor:          pointer;
  font-family:     var(--wp-font-body, 'Barlow', sans-serif);
  font-size:       0.875rem;
  font-weight:     600;
  transition:      border-color var(--wp-transition-fast, 0.1s ease),
                   background var(--wp-transition-fast, 0.1s ease),
                   color var(--wp-transition-fast, 0.1s ease);
}
.wp-share-button:hover {
  border-color: var(--wp-color-sky, #00AAEF);
  color:        var(--wp-color-sky-dark, #0074A8);
}

.wp-share-button--icon { width: 38px; height: 38px; padding: 0; }
.wp-share-button--labeled { padding: var(--wp-space-sm, 8px) var(--wp-space-md, 16px); }

.wp-share-button__icon { width: 18px; height: 18px; display: block; flex-shrink: 0; }

.wp-share-button--dark {
  border-color: rgba(255, 255, 255, 0.12);
  color:        var(--wp-color-white, #FFFFFF);
}
.wp-share-button--dark:hover {
  border-color: var(--wp-color-sky, #00AAEF);
  color:        var(--wp-color-sky, #00AAEF);
  background:    rgba(255, 255, 255, 0.06);
}
</style>
