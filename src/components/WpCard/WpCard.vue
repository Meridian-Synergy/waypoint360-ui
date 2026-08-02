<script setup lang="ts">
withDefaults(defineProps<{
  title?:  string
  dark?:   boolean
}>(), {
  dark: false,
})
</script>

<template>
  <div :class="['wp-card', { 'wp-card--dark': dark }]">
    <div v-if="title || $slots.badge" class="wp-card__header">
      <span v-if="title" class="wp-card__title">{{ title }}</span>
      <slot name="badge"></slot>
    </div>
    <div class="wp-card__body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="wp-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.wp-card {
  background:    var(--wp-color-white, #FFFFFF);
  border:        1px solid var(--wp-color-border, #D5D9E4);
  border-radius: var(--wp-radius-lg, 16px);
  box-shadow:    var(--wp-shadow-sm, 0 2px 12px rgba(27, 43, 86, 0.06));
  overflow:      hidden;
  display:       flex;
  flex-direction: column;
}
.wp-card--dark {
  background:  var(--wp-color-dark-bg, #10192C);
  border-color: rgba(255, 255, 255, 0.08);
}

.wp-card__header {
  padding:       var(--wp-space-sm, 8px) var(--wp-space-md, 16px);
  border-bottom: 1px solid var(--wp-color-border, #D5D9E4);
  display:       flex;
  align-items:   center;
  justify-content: space-between;
  gap:           var(--wp-space-sm, 8px);
}
.wp-card--dark .wp-card__header { border-color: rgba(255, 255, 255, 0.08); }

.wp-card__title {
  font-family: var(--wp-font-display, 'Barlow', sans-serif);
  font-size:   0.875rem;
  font-weight: 600;
  color:       var(--wp-color-navy, #1B2B56);
}
.wp-card--dark .wp-card__title { color: var(--wp-color-white, #FFFFFF); }

.wp-card__body { padding: var(--wp-space-md, 16px); flex: 1; }

.wp-card__footer {
  padding:      var(--wp-space-sm, 8px) var(--wp-space-md, 16px);
  border-top:   1px solid var(--wp-color-border, #D5D9E4);
  display:      flex;
  justify-content: flex-end;
  gap:          var(--wp-space-sm, 8px);
}
.wp-card--dark .wp-card__footer { border-color: rgba(255, 255, 255, 0.08); }
</style>
