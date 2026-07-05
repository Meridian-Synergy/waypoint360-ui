<script setup lang="ts">
import WpField from '../WpField/WpField.vue'

export interface WpSelectOption {
  value:     string
  label:     string
  disabled?: boolean
}

withDefaults(defineProps<{
  modelValue?:  string
  options:      WpSelectOption[]
  label?:       string
  placeholder?: string
  hint?:        string
  error?:       string
  disabled?:    boolean
  required?:    boolean
}>(), {
  disabled: false,
  required: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <WpField :label="label" :required="required" :hint="hint" :error="error">
    <select
      :class="['wp-select', { 'wp-select--error': error }]"
      :value="modelValue"
      :disabled="disabled"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-if="placeholder" value="" disabled :selected="!modelValue">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value" :disabled="opt.disabled">{{ opt.label }}</option>
    </select>
  </WpField>
</template>

<style scoped>
.wp-select {
  font-family:   var(--wp-font-body, 'Barlow', sans-serif);
  font-size:     0.875rem;
  font-weight:   400;
  color:         var(--wp-color-input-text, var(--wp-color-navy, #1B2B56));
  background:    var(--wp-color-input-bg, var(--wp-color-white, #FFFFFF));
  border:        1.5px solid var(--wp-color-border, #D5D9E4);
  border-radius: var(--wp-radius-md, 8px);
  padding:       var(--wp-space-sm, 8px) var(--wp-space-md, 16px);
  outline:       none;
  width:         100%;
  cursor:        pointer;
  transition:    border-color var(--wp-transition-base, 0.2s ease), box-shadow var(--wp-transition-base, 0.2s ease);
}
.wp-select:focus {
  border-color: var(--wp-color-sky, #00AAEF);
  box-shadow:   0 0 0 3px rgba(0, 170, 239, 0.15);
}
.wp-select--error {
  border-color: var(--wp-color-error, #ef4444);
  box-shadow:   0 0 0 3px rgba(239, 68, 68, 0.12);
}
.wp-select:disabled {
  background: var(--wp-color-bg, #ECEEF3);
  color:      var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
  cursor:     not-allowed;
}
</style>
