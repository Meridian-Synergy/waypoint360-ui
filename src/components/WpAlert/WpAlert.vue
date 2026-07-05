<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'info' | 'success' | 'warning' | 'error' | 'navy'
  title?:   string
  action?:  string
}>(), {
  variant: 'info',
})

const emit = defineEmits<{ action: [] }>()

const icons: Record<string, string> = {
  info:    'ℹ',
  success: '✓',
  warning: '⚠',
  error:   '✕',
  navy:    '★',
}
</script>

<template>
  <div :class="['wp-alert', `wp-alert--${variant}`]">
    <span class="wp-alert__icon">{{ icons[variant] }}</span>
    <div class="wp-alert__content">
      <div v-if="title" class="wp-alert__title">{{ title }}</div>
      <div v-if="$slots.default" class="wp-alert__body">
        <slot></slot>
      </div>
    </div>
    <span v-if="action" class="wp-alert__action" @click="emit('action')">{{ action }}</span>
  </div>
</template>

<style scoped>
.wp-alert {
  display:     flex;
  align-items: flex-start;
  gap:         var(--wp-space-sm);
  padding:     var(--wp-space-sm) var(--wp-space-md);
  border-radius: var(--wp-radius-md);
  border:      1px solid transparent;
  font-family: var(--wp-font-body);
  font-size:   0.8125rem;
  line-height: 1.5;
}
.wp-alert__icon    { font-size: 0.9375rem; flex-shrink: 0; margin-top: 1px; }
.wp-alert__content { flex: 1; }
.wp-alert__title   { font-weight: 600; font-size: 0.8125rem; margin-bottom: 2px; }
.wp-alert__body    { font-size: 0.75rem; opacity: 0.85; }
.wp-alert__action  {
  font-weight: 600; font-size: 0.75rem; text-decoration: underline;
  cursor: pointer; margin-left: auto; padding-left: var(--wp-space-sm);
  flex-shrink: 0; align-self: center; opacity: 0.85;
}

.wp-alert--info    { background: #e6f6fd; border-color: #bae8fb; color: #0369a1; }
.wp-alert--success { background: #dcfce7; border-color: #bbf7d0; color: #166534; }
.wp-alert--warning { background: #fef9c3; border-color: #fde68a; color: #854d0e; }
.wp-alert--error   { background: #fde9e4; border-color: #fcd3c8; color: #991b1b; }
.wp-alert--navy    { background: var(--wp-color-navy); border-color: transparent; color: var(--wp-color-white); }
.wp-alert--navy .wp-alert__icon   { color: var(--wp-color-gold); }
.wp-alert--navy .wp-alert__action { color: var(--wp-color-gold); }
</style>
