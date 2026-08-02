<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  dark?: boolean
  maxWidth?: string
}>(), {
  dark:     false,
  maxWidth: '440px',
})

const emit = defineEmits<{ close: [] }>()

const onOverlayClick = (e: MouseEvent) => {
  if (e.target === e.currentTarget) emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div class="wp-modal-overlay" @click="onOverlayClick">
      <div :class="['wp-modal', { 'wp-modal--dark': dark }]" :style="{ maxWidth }">
        <div class="wp-modal__header">
          <span class="wp-modal__title">{{ title }}</span>
          <button class="wp-modal__close" @click="emit('close')">✕</button>
        </div>
        <div class="wp-modal__body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="wp-modal__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
/* Chaque `var()` porte son repli. Sans lui, un consommateur qui n'importe pas
   `tokens.css` voit tous les espacements s'évaporer : la modale se retrouve
   sans marge, titre collé au bord et boutons contre l'angle. Constaté le
   2026-08-02 dans waypoint360-app, qui ne définit aucun jeton d'espacement. */
.wp-modal-overlay {
  position:        fixed;
  inset:           0;
  background:      rgba(16, 25, 44, 0.6);
  display:         flex;
  align-items:     center;
  justify-content: center;
  z-index:         200;
  padding:         var(--wp-space-lg, 24px);
  animation:       wp-fade-in 0.15s ease;
}
@keyframes wp-fade-in { from { opacity: 0; } to { opacity: 1; } }

.wp-modal {
  background:    var(--wp-color-white, #FFFFFF);
  border-radius: var(--wp-radius-lg, 16px);
  box-shadow:    var(--wp-shadow-lg, 0 8px 40px rgba(27, 43, 86, 0.14));
  width:         100%;
  overflow:      hidden;
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
