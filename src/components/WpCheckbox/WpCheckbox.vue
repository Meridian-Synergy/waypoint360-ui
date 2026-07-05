<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: boolean
  label:       string
  disabled?:   boolean
}>(), {
  modelValue: false,
  disabled:   false,
})

const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>

<template>
  <label class="wp-checkbox" :class="{ 'wp-checkbox--disabled': disabled }">
    <input
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span>{{ label }}</span>
  </label>
</template>

<style scoped>
.wp-checkbox {
  display:     inline-flex;
  align-items: center;
  gap:         8px;
  font-family: var(--wp-font-body, 'Barlow', sans-serif);
  font-size:   0.875rem;
  color:       var(--wp-color-text, var(--wp-color-navy, #1B2B56));
  cursor:      pointer;
}
.wp-checkbox input { accent-color: var(--wp-color-sky, #00AAEF); cursor: pointer; }
.wp-checkbox--disabled { opacity: 0.45; cursor: not-allowed; }
.wp-checkbox--disabled input { cursor: not-allowed; }
</style>
