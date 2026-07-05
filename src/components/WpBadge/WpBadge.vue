<script setup lang="ts">
withDefaults(defineProps<{
  label:    string
  variant?: 'active' | 'inactive' | 'pending' | 'alert' | 'warning' | 'navy' | 'sky' | 'orange'
  dot?:     boolean
}>(), {
  variant: 'active',
  dot:     true,
})
</script>

<template>
  <span :class="['wp-badge', `wp-badge--${variant}`]">
    <span v-if="dot && isStatusVariant" class="wp-badge__dot"></span>
    <slot>{{ label }}</slot>
  </span>
</template>

<script lang="ts">
const STATUS_VARIANTS = ['active', 'inactive', 'pending', 'alert', 'warning']
</script>

<style scoped>
.wp-badge {
  display:         inline-flex;
  align-items:     center;
  gap:             5px;
  font-family:     var(--wp-font-condensed);
  font-weight:     600;
  font-size:       0.6875rem;
  letter-spacing:  0.06em;
  text-transform:  uppercase;
  padding:         3px 10px;
  border-radius:   var(--wp-radius-sm);
  border:          1px solid transparent;
  white-space:     nowrap;
}

.wp-badge__dot {
  width:         6px;
  height:        6px;
  border-radius: 50%;
  background:    currentColor;
  opacity:       0.7;
  flex-shrink:   0;
}

/* Status variants — light mode */
.wp-badge--active   { background: #dcfce7; color: #15803d; border-color: #bbf7d0; }
.wp-badge--inactive { background: #f3f4f6; color: #6b7280; border-color: #e5e7eb; }
.wp-badge--pending  { background: #e6f6fd; color: #0086be; border-color: #bae8fb; }
.wp-badge--alert    { background: #fde9e4; color: #c94820; border-color: #fcd3c8; }
.wp-badge--warning  { background: #fef9c3; color: #a16207; border-color: #fde68a; }

/* Solid variants */
.wp-badge--navy   { background: var(--wp-color-navy);   color: var(--wp-color-white); }
.wp-badge--sky    { background: var(--wp-color-sky);    color: var(--wp-color-white); }
.wp-badge--orange { background: var(--wp-color-orange); color: var(--wp-color-white); }
</style>
