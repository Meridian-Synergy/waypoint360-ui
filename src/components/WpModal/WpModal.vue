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
.wp-modal-overlay {
  position:        fixed;
  inset:           0;
  background:      rgba(16, 25, 44, 0.6);
  display:         flex;
  align-items:     center;
  justify-content: center;
  z-index:         200;
  padding:         var(--wp-space-lg);
  animation:       wp-fade-in 0.15s ease;
}
@keyframes wp-fade-in { from { opacity: 0; } to { opacity: 1; } }

.wp-modal {
  background:    var(--wp-color-white);
  border-radius: var(--wp-radius-lg);
  box-shadow:    var(--wp-shadow-lg);
  width:         100%;
  overflow:      hidden;
  animation:     wp-slide-up 0.2s ease;
}
@keyframes wp-slide-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: none; }
}
.wp-modal--dark { background: var(--wp-color-dark-bg); }

.wp-modal__header {
  padding:       var(--wp-space-md) var(--wp-space-lg);
  border-bottom: 1px solid var(--wp-color-border);
  display:       flex;
  align-items:   center;
  justify-content: space-between;
}
.wp-modal--dark .wp-modal__header { border-color: rgba(255, 255, 255, 0.08); }

.wp-modal__title {
  font-family: var(--wp-font-display);
  font-size:   16px;
  font-weight: 600;
  color:       var(--wp-color-navy);
}
.wp-modal--dark .wp-modal__title { color: var(--wp-color-white); }

.wp-modal__close {
  width:         26px;
  height:        26px;
  border-radius: var(--wp-radius-sm);
  border:        none;
  background:    var(--wp-color-bg);
  color:         var(--wp-color-muted);
  cursor:        pointer;
  font-size:     13px;
  display:       flex;
  align-items:   center;
  justify-content: center;
  transition:    background var(--wp-transition-fast);
}
.wp-modal__close:hover { background: var(--wp-color-border); }
.wp-modal--dark .wp-modal__close { background: rgba(255,255,255,0.08); color: #a8b0c4; }

.wp-modal__body {
  padding:     var(--wp-space-md) var(--wp-space-lg);
  font-family: var(--wp-font-body);
  font-size:   13.5px;
  color:       var(--wp-color-silver);
  line-height: 1.6;
}
.wp-modal--dark .wp-modal__body { color: #a8b0c4; }

.wp-modal__footer {
  padding:         var(--wp-space-sm) var(--wp-space-lg);
  border-top:      1px solid var(--wp-color-border);
  display:         flex;
  justify-content: flex-end;
  gap:             var(--wp-space-sm);
}
.wp-modal--dark .wp-modal__footer { border-color: rgba(255, 255, 255, 0.08); }
</style>
