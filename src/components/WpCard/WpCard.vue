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
  background:    var(--wp-color-white);
  border:        1px solid var(--wp-color-border);
  border-radius: var(--wp-radius-lg);
  box-shadow:    var(--wp-shadow-sm);
  overflow:      hidden;
  display:       flex;
  flex-direction: column;
}
.wp-card--dark {
  background:  var(--wp-color-dark-bg);
  border-color: rgba(255, 255, 255, 0.08);
}

.wp-card__header {
  padding:       var(--wp-space-sm) var(--wp-space-md);
  border-bottom: 1px solid var(--wp-color-border);
  display:       flex;
  align-items:   center;
  justify-content: space-between;
  gap:           var(--wp-space-sm);
}
.wp-card--dark .wp-card__header { border-color: rgba(255, 255, 255, 0.08); }

.wp-card__title {
  font-family: var(--wp-font-display);
  font-size:   14px;
  font-weight: 600;
  color:       var(--wp-color-navy);
}
.wp-card--dark .wp-card__title { color: var(--wp-color-white); }

.wp-card__body { padding: var(--wp-space-md); flex: 1; }

.wp-card__footer {
  padding:      var(--wp-space-sm) var(--wp-space-md);
  border-top:   1px solid var(--wp-color-border);
  display:      flex;
  justify-content: flex-end;
  gap:          var(--wp-space-sm);
}
.wp-card--dark .wp-card__footer { border-color: rgba(255, 255, 255, 0.08); }
</style>
