<script setup lang="ts">
import WpField from '../WpField/WpField.vue'

withDefaults(defineProps<{
  modelValue?:  string
  label?:       string
  placeholder?: string
  hint?:        string
  error?:       string
  disabled?:    boolean
  required?:    boolean
  rows?:        number
}>(), {
  disabled: false,
  required: false,
  rows:     3,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <WpField :label="label" :required="required" :hint="hint" :error="error">
    <textarea
      :class="['wp-textarea', { 'wp-textarea--error': error }]"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :rows="rows"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    ></textarea>
  </WpField>
</template>

<style scoped>
.wp-textarea {
  font-family:   var(--wp-font-body, 'Barlow', sans-serif);
  font-size:     14px;
  font-weight:   400;
  color:         var(--wp-color-input-text, var(--wp-color-navy, #1B2B56));
  background:    var(--wp-color-input-bg, var(--wp-color-white, #FFFFFF));
  border:        1.5px solid var(--wp-color-border, #D5D9E4);
  border-radius: var(--wp-radius-md, 8px);
  padding:       var(--wp-space-sm, 8px) var(--wp-space-md, 16px);
  outline:       none;
  width:         100%;
  resize:        vertical;
  transition:    border-color var(--wp-transition-base, 0.2s ease), box-shadow var(--wp-transition-base, 0.2s ease);
}
.wp-textarea::placeholder { color: var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA)); }
.wp-textarea:focus {
  border-color: var(--wp-color-sky, #00AAEF);
  box-shadow:   0 0 0 3px rgba(0, 170, 239, 0.15);
}
.wp-textarea--error {
  border-color: var(--wp-color-error, #ef4444);
  box-shadow:   0 0 0 3px rgba(239, 68, 68, 0.12);
}
.wp-textarea:disabled {
  background: var(--wp-color-bg, #ECEEF3);
  color:      var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
  cursor:     not-allowed;
}
</style>
