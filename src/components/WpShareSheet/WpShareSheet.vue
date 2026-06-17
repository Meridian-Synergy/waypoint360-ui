<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export type ShareNetwork = 'linkedin' | 'twitter' | 'whatsapp' | 'facebook' | 'email' | 'copy'

const props = withDefaults(defineProps<{
  /** Canonical URL to share (must be a public, crawlable URL). */
  url: string
  /** Short title — used for email subject and as fallback text. */
  title?: string
  /** Message that accompanies the link (tweet/whatsapp/email body). */
  text?: string
  /** Networks to display, in order. */
  networks?: ShareNetwork[]
  /** Sheet heading. */
  shareTitle?: string
  /** Per-network button labels (brand names default to English). */
  labels?: Partial<Record<ShareNetwork, string>>
  /** Label shown after a successful copy. */
  copiedLabel?: string
  /** Dark surface variant (community portal). */
  dark?: boolean
}>(), {
  title:      '',
  text:       '',
  networks:   () => ['linkedin', 'twitter', 'whatsapp', 'facebook', 'email', 'copy'],
  shareTitle: 'Share',
  labels:     () => ({}),
  copiedLabel: 'Link copied!',
  dark:       false,
})

const emit = defineEmits<{ close: [] }>()

const copied = ref(false)

const defaultLabels: Record<ShareNetwork, string> = {
  linkedin: 'LinkedIn',
  twitter:  'X',
  whatsapp: 'WhatsApp',
  facebook: 'Facebook',
  email:    'Email',
  copy:     'Copy link',
}

const labelFor = (n: ShareNetwork) => props.labels[n] ?? defaultLabels[n]

// Intent URLs. NB: LinkedIn dropped title/summary params — only `url` is honoured.
const intentUrl = (n: ShareNetwork): string => {
  const u = encodeURIComponent(props.url)
  const t = encodeURIComponent(props.text || props.title)
  const full = encodeURIComponent(`${props.text || props.title} ${props.url}`.trim())
  switch (n) {
    case 'linkedin': return `https://www.linkedin.com/sharing/share-offsite/?url=${u}`
    case 'twitter':  return `https://twitter.com/intent/tweet?text=${t}&url=${u}`
    case 'whatsapp': return `https://wa.me/?text=${full}`
    case 'facebook': return `https://www.facebook.com/sharer/sharer.php?u=${u}`
    case 'email':    return `mailto:?subject=${encodeURIComponent(props.title)}&body=${full}`
    default:         return props.url
  }
}

const openIntent = (n: ShareNetwork) => {
  if (n === 'copy') { copyLink(); return }
  if (n === 'email') { window.location.href = intentUrl(n); emit('close'); return }
  window.open(intentUrl(n), '_blank', 'noopener,noreferrer,width=600,height=520')
  emit('close')
}

async function copyLink() {
  try {
    await navigator.clipboard.writeText(`${props.text || props.title} ${props.url}`.trim())
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Clipboard blocked (insecure context / permissions) — leave the link visible to copy manually.
  }
}

const onOverlayClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) emit('close')
}
const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close')
}
onMounted(() => document.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => document.removeEventListener('keydown', onKeydown))

const displayUrl = computed(() => props.url.replace(/^https?:\/\//, ''))
</script>

<template>
  <Teleport to="body">
    <div class="wp-share-overlay" @click="onOverlayClick">
      <div
        :class="['wp-share', { 'wp-share--dark': dark }]"
        role="dialog"
        aria-modal="true"
        :aria-label="shareTitle"
      >
        <div class="wp-share__header">
          <span class="wp-share__title">{{ shareTitle }}</span>
          <button class="wp-share__close" type="button" aria-label="Close" @click="emit('close')">✕</button>
        </div>

        <div class="wp-share__grid">
          <button
            v-for="n in networks"
            :key="n"
            type="button"
            :class="['wp-share__btn', `wp-share__btn--${n}`]"
            @click="openIntent(n)"
          >
            <span class="wp-share__icon" aria-hidden="true">
              <!-- LinkedIn -->
              <svg v-if="n === 'linkedin'" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
              <!-- X / Twitter -->
              <svg v-else-if="n === 'twitter'" viewBox="0 0 24 24" fill="currentColor"><path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.84-6.32L5.46 21H2.4l7.17-8.2L2 3h6.33l4.37 5.72L17.75 3zm-1.08 16.17h1.7L7.4 4.74H5.58l11.1 14.43z"/></svg>
              <!-- WhatsApp -->
              <svg v-else-if="n === 'whatsapp'" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.85 0-3.66-.5-5.23-1.44l-.37-.22-3.87 1.02 1.03-3.78-.24-.39A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.67 0 5.18 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.44-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.19-.24-.58-.48-.5-.67-.51H7.5c-.17 0-.45.06-.69.3C6.57 8.1 6 8.7 6 9.93c0 1.23.91 2.42 1.04 2.59.13.17 1.8 2.74 4.36 3.84.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.5-.61 1.71-1.2.21-.59.21-1.1.15-1.2-.07-.1-.27-.17-.57-.32z"/></svg>
              <!-- Facebook -->
              <svg v-else-if="n === 'facebook'" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z"/></svg>
              <!-- Email -->
              <svg v-else-if="n === 'email'" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" stroke-width="1.75"/><path d="M2 8l10 7 10-7" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg>
              <!-- Copy -->
              <svg v-else-if="n === 'copy' && !copied" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </span>
            <span class="wp-share__label">{{ n === 'copy' && copied ? copiedLabel : labelFor(n) }}</span>
          </button>
        </div>

        <div class="wp-share__url">{{ displayUrl }}</div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.wp-share-overlay {
  position:        fixed;
  inset:           0;
  background:      rgba(16, 25, 44, 0.6);
  display:         flex;
  align-items:     center;
  justify-content: center;
  z-index:         200;
  padding:         var(--wp-space-lg, 24px);
  animation:       wp-share-fade 0.15s ease;
}
@keyframes wp-share-fade { from { opacity: 0; } to { opacity: 1; } }

.wp-share {
  background:    var(--wp-color-white, #FFFFFF);
  border-radius: var(--wp-radius-lg, 16px);
  box-shadow:    var(--wp-shadow-lg, 0 8px 40px rgba(27, 43, 86, 0.14));
  width:         100%;
  max-width:     420px;
  overflow:      hidden;
  animation:     wp-share-up 0.2s ease;
}
@keyframes wp-share-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
.wp-share--dark { background: var(--wp-color-dark-bg, #10192C); }

.wp-share__header {
  padding:         var(--wp-space-md, 16px) var(--wp-space-lg, 24px);
  border-bottom:   1px solid var(--wp-color-border, #D5D9E4);
  display:         flex;
  align-items:     center;
  justify-content: space-between;
}
.wp-share--dark .wp-share__header { border-color: rgba(255, 255, 255, 0.08); }

.wp-share__title {
  font-family: var(--wp-font-display, 'Barlow', sans-serif);
  font-size:   16px;
  font-weight: 600;
  color:       var(--wp-color-navy, #1B2B56);
}
.wp-share--dark .wp-share__title { color: var(--wp-color-white, #FFFFFF); }

.wp-share__close {
  width:         26px;
  height:        26px;
  border-radius: var(--wp-radius-sm, 4px);
  border:        none;
  background:    var(--wp-color-bg, #ECEEF3);
  color:         var(--wp-color-muted, #8C95AA);
  cursor:        pointer;
  font-size:     13px;
  display:       flex;
  align-items:   center;
  justify-content: center;
  transition:    background var(--wp-transition-fast, 0.1s ease);
}
.wp-share__close:hover { background: var(--wp-color-border, #D5D9E4); }
.wp-share--dark .wp-share__close { background: rgba(255, 255, 255, 0.08); color: #a8b0c4; }

.wp-share__grid {
  display:               grid;
  grid-template-columns: repeat(3, 1fr);
  gap:                   var(--wp-space-sm, 8px);
  padding:               var(--wp-space-lg, 24px);
}

.wp-share__btn {
  display:         flex;
  flex-direction:  column;
  align-items:     center;
  justify-content: center;
  gap:             var(--wp-space-sm, 8px);
  padding:         var(--wp-space-md, 16px) var(--wp-space-sm, 8px);
  border:          1px solid var(--wp-color-border, #D5D9E4);
  border-radius:   var(--wp-radius-md, 8px);
  background:      transparent;
  color:           var(--wp-color-navy, #1B2B56);
  cursor:          pointer;
  transition:      border-color var(--wp-transition-fast, 0.1s ease),
                   background var(--wp-transition-fast, 0.1s ease);
}
.wp-share__btn:hover {
  border-color: var(--wp-color-sky, #00AAEF);
  background:    var(--wp-color-bg, #ECEEF3);
}
.wp-share--dark .wp-share__btn {
  border-color: rgba(255, 255, 255, 0.12);
  color:        var(--wp-color-white, #FFFFFF);
}
.wp-share--dark .wp-share__btn:hover {
  border-color: var(--wp-color-sky, #00AAEF);
  background:    rgba(255, 255, 255, 0.06);
}

.wp-share__icon { display: flex; }
.wp-share__icon svg { width: 22px; height: 22px; display: block; }

.wp-share__label {
  font-family: var(--wp-font-body, 'Barlow', sans-serif);
  font-size:   12px;
  font-weight: 600;
  text-align:  center;
}

.wp-share__url {
  margin:        0 var(--wp-space-lg, 24px) var(--wp-space-lg, 24px);
  padding:       var(--wp-space-sm, 8px) var(--wp-space-md, 16px);
  border-radius: var(--wp-radius-md, 8px);
  background:    var(--wp-color-bg, #ECEEF3);
  font-family:   var(--wp-font-data, 'Space Mono', monospace);
  font-size:     12px;
  color:         var(--wp-color-muted-strong, #636B82);
  overflow:      hidden;
  text-overflow: ellipsis;
  white-space:   nowrap;
}
.wp-share--dark .wp-share__url {
  background: rgba(255, 255, 255, 0.06);
  color:      #a8b0c4;
}
</style>
