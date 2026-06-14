<script setup lang="ts">
withDefaults(defineProps<{
  mode?: 'dark' | 'light'
}>(), { mode: 'dark' })

const emit = defineEmits<{ toggle: [] }>()
</script>

<template>
  <button
    class="wp-theme-toggle"
    :aria-label="mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="emit('toggle')"
  >
    <!-- Sun — shown in dark mode to switch to light -->
    <svg v-if="mode === 'dark'" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
    <!-- Moon — shown in light mode to switch to dark -->
    <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </button>
</template>

<style scoped>
.wp-theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: inherit;
  transition: background 0.15s ease, color 0.15s ease;
  flex-shrink: 0;
}
.wp-theme-toggle:hover {
  background: rgba(127, 127, 127, 0.15);
}
</style>
