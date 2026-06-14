<script setup lang="ts">
withDefaults(defineProps<{
  label:    string
  variant?: 'primary' | 'secondary' | 'cta' | 'critical'
  size?:    'sm' | 'md' | 'lg'
  disabled?: boolean
}>(), {
  variant:  'primary',
  size:     'md',
  disabled: false,
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()
</script>

<template>
  <button
    :class="['wp-btn', `wp-btn--${variant}`, `wp-btn--${size}`]"
    :disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<style scoped>
.wp-btn {
  font-family:    var(--wp-font-body);
  font-weight:    600;
  border:         none;
  cursor:         pointer;
  border-radius:  var(--wp-radius-md);
  display:        inline-flex;
  align-items:    center;
  justify-content: center;
  gap:            6px;
  white-space:    nowrap;
  line-height:    1;
  transition:     opacity var(--wp-transition-base), transform var(--wp-transition-fast);
}
.wp-btn:hover:not(:disabled) { opacity: 0.88; }
.wp-btn:active:not(:disabled) { transform: scale(0.98); }
.wp-btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* Sizes */
.wp-btn--sm { padding: 6px 12px;  font-size: 13px; }
.wp-btn--md { padding: var(--wp-space-sm) var(--wp-space-md);  font-size: 15px; }
.wp-btn--lg { padding: var(--wp-space-md) var(--wp-space-lg);  font-size: 17px; }

/* Variants */
.wp-btn--primary   { background: var(--wp-color-navy);   color: var(--wp-color-white); }
.wp-btn--secondary { background: transparent;            color: var(--wp-color-navy);  border: 2px solid var(--wp-color-navy); }
.wp-btn--cta       { background: var(--wp-color-gold);   color: var(--wp-color-navy); }
.wp-btn--critical  { background: var(--wp-color-orange); color: var(--wp-color-white); }
</style>
