<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useId } from 'vue'

/**
 * Une fenêtre modale sur l'élément natif `<dialog>`, ouvert par `showModal()`.
 *
 * Le navigateur fournit alors ce que l'ancien `<div>` superposé n'avait pas : la
 * couche supérieure, le reste de la page rendu inerte (ni clic ni tabulation),
 * le focus gardé dans la fenêtre, Échap, et le rôle de fenêtre annoncé aux
 * lecteurs d'écran. Le contrat ne change pas : la fenêtre est ouverte tant
 * qu'elle est montée (`v-if` chez l'appelant), et elle émet `close`.
 *
 * ⚠️ Échap n'est jamais laissé au navigateur : il fermerait le `<dialog>` alors
 * que l'appelant le croit encore ouvert. On l'intercepte et on émet `close`.
 */
withDefaults(defineProps<{
  title: string
  dark?: boolean
  maxWidth?: string
  /** Nom du bouton de fermeture, à traduire par l'appelant. */
  closeLabel?: string
}>(), {
  dark:       false,
  maxWidth:   '440px',
  closeLabel: 'Close',
})

const emit = defineEmits<{ close: [] }>()

const dialog = ref<HTMLDialogElement | null>(null)
const titleId = useId()
let previousOverflow = ''

// Le clic sur le `<dialog>` lui-même, hors de la carte, est un raccourci souris :
// Échap et le bouton restent les chemins clavier.
const onDialogClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) emit('close')
}

const onCancel = (e: Event) => {
  e.preventDefault()
  emit('close')
}

onMounted(() => {
  const el = dialog.value
  if (!el) return
  previousOverflow = document.documentElement.style.overflow
  // La page derrière ne défile plus pendant que la fenêtre est ouverte.
  document.documentElement.style.overflow = 'hidden'
  if (!el.open) el.showModal()
})

onBeforeUnmount(() => {
  document.documentElement.style.overflow = previousOverflow
  // `close()` AVANT le démontage : c'est lui qui rend le focus à l'élément qui avait ouvert la fenêtre.
  if (dialog.value?.open) dialog.value.close()
})

</script>

<template>
  <dialog
    ref="dialog"
    class="wp-modal-overlay"
    :aria-labelledby="titleId"
    @click="onDialogClick"
    @cancel="onCancel"
  >
    <div :class="['wp-modal', { 'wp-modal--dark': dark }]" :style="{ maxWidth }">
      <div class="wp-modal__header">
        <span :id="titleId" class="wp-modal__title">{{ title }}</span>
        <button type="button" class="wp-modal__close" :aria-label="closeLabel" @click="emit('close')">✕</button>
      </div>
      <div class="wp-modal__body">
        <slot></slot>
      </div>
      <div v-if="$slots.footer" class="wp-modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
/* Chaque `var()` porte son repli. Sans lui, un consommateur qui n'importe pas
   `tokens.css` voit tous les espacements s'évaporer : la modale se retrouve
   sans marge, titre collé au bord et boutons contre l'angle. Constaté le
   2026-08-02 dans waypoint360-app, qui ne définit aucun jeton d'espacement. */
/* Le `<dialog>` couvre l'écran, transparent, et centre la carte : c'est lui qui
   reçoit le clic « à côté ». Ses marges, bordure et tailles maximales par défaut
   sont neutralisées, sinon il s'afficherait comme une petite boîte encadrée. */
.wp-modal-overlay {
  position:   fixed;
  inset:      0;
  width:      100%;
  height:     100%;
  max-width:  none;
  max-height: none;
  margin:     0;
  border:     0;
  background: transparent;
  padding:    var(--wp-space-lg, 24px);
  overflow:   auto;
  color:      inherit;
}
.wp-modal-overlay[open] {
  display:         flex;
  align-items:     center;
  justify-content: center;
}
.wp-modal-overlay::backdrop {
  background: rgba(16, 25, 44, 0.6);
  animation:  wp-fade-in 0.15s ease;
}
@keyframes wp-fade-in { from { opacity: 0; } to { opacity: 1; } }

.wp-modal {
  background:    var(--wp-color-white, #FFFFFF);
  border-radius: var(--wp-radius-lg, 16px);
  box-shadow:    var(--wp-shadow-lg, 0 8px 40px rgba(27, 43, 86, 0.14));
  width:         100%;
  overflow:      hidden;
  margin:        auto;
  animation:     wp-slide-up 0.2s ease;
}
@keyframes wp-slide-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
.wp-modal--dark { background: var(--wp-color-dark-bg, #10192C); }

.wp-modal__header {
  padding:       var(--wp-space-md, 16px) var(--wp-space-lg, 24px);
  border-bottom: 1px solid var(--wp-color-border, #D5D9E4);
  display:       flex;
  align-items:   center;
  justify-content: space-between;
}
.wp-modal--dark .wp-modal__header { border-color: rgba(255, 255, 255, 0.08); }

.wp-modal__title {
  font-family: var(--wp-font-display, 'Barlow', sans-serif);
  font-size:   1rem;
  font-weight: 600;
  color:       var(--wp-color-navy, #1B2B56);
}
.wp-modal--dark .wp-modal__title { color: var(--wp-color-white, #FFFFFF); }

.wp-modal__close {
  width:         26px;
  height:        26px;
  border-radius: var(--wp-radius-sm, 4px);
  border:        none;
  background:    var(--wp-color-bg, #ECEEF3);
  color:         var(--wp-color-muted, #8C95AA);
  cursor:        pointer;
  font-size:     0.8125rem;
  display:       flex;
  align-items:   center;
  justify-content: center;
  transition:    background var(--wp-transition-fast, 0.1s ease);
}
.wp-modal__close:hover { background: var(--wp-color-border, #D5D9E4); }
.wp-modal__close:focus-visible { outline: 2px solid var(--wp-color-sky, #00AAEF); outline-offset: 2px; }
.wp-modal--dark .wp-modal__close { background: rgba(255,255,255,0.08); color: #a8b0c4; }

.wp-modal__body {
  padding:     var(--wp-space-md, 16px) var(--wp-space-lg, 24px);
  font-family: var(--wp-font-body, 'Barlow', sans-serif);
  font-size:   0.84375rem;
  color:       var(--wp-color-silver, #7A7D8A);
  line-height: 1.6;
}
.wp-modal--dark .wp-modal__body { color: #a8b0c4; }

.wp-modal__footer {
  padding:         var(--wp-space-sm, 8px) var(--wp-space-lg, 24px);
  border-top:      1px solid var(--wp-color-border, #D5D9E4);
  display:         flex;
  justify-content: flex-end;
  gap:             var(--wp-space-sm, 8px);
}
.wp-modal--dark .wp-modal__footer { border-color: rgba(255, 255, 255, 0.08); }
</style>
