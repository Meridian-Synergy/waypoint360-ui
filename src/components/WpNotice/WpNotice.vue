<script setup lang="ts">
withDefaults(defineProps<{
  /** Visual tone. `info` and `beta` share the sky accent. */
  tone?: 'info' | 'beta' | 'warning' | 'danger'
  /** Show the leading icon */
  icon?: boolean
}>(), {
  tone: 'info',
  icon: true,
})
</script>

<template>
  <div :class="['wp-notice', `wp-notice--${tone}`]">
    <svg
      v-if="icon"
      class="wp-notice__icon"
      width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"
    >
      <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
      <path d="M10 9v5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"/>
      <circle cx="10" cy="6.5" r="0.75" fill="currentColor"/>
    </svg>
    <span class="wp-notice__text"><slot></slot></span>
  </div>
</template>

<style scoped>
.wp-notice {
  display:       flex;
  align-items:   flex-start;
  gap:           10px;
  padding:       12px 16px;
  border:        1px solid;
  border-radius: var(--wp-radius-md, 8px);
  font-size:     0.8125rem;
  line-height:   1.5;
  color:         var(--wp-color-silver);
}

.wp-notice__icon {
  flex-shrink: 0;
  margin-top:  1px;
}

/* info / beta — sky accent */
.wp-notice--info,
.wp-notice--beta {
  background:    rgba(0, 170, 239, 0.06);
  border-color:  rgba(0, 170, 239, 0.2);
}
.wp-notice--info .wp-notice__icon,
.wp-notice--beta .wp-notice__icon { color: var(--wp-color-sky); }

/* warning — gold/amber accent */
.wp-notice--warning {
  background:    rgba(201, 168, 76, 0.08);
  border-color:  rgba(201, 168, 76, 0.28);
}
.wp-notice--warning .wp-notice__icon { color: var(--wp-color-gold); }

/* danger — orange accent */
.wp-notice--danger {
  background:    rgba(240, 90, 40, 0.07);
  border-color:  rgba(240, 90, 40, 0.25);
}
.wp-notice--danger .wp-notice__icon { color: var(--wp-color-orange); }
</style>
