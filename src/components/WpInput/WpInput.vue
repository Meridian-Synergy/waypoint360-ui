<script setup lang="ts">
withDefaults(defineProps<{
  modelValue?: string
  label?:      string
  placeholder?: string
  hint?:       string
  error?:      string
  disabled?:   boolean
  type?:       string
}>(), {
  type:     'text',
  disabled: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <div class="wp-field">
    <label v-if="label" class="wp-field__label">{{ label }}</label>
    <input
      :class="['wp-input', { 'wp-input--error': error }]"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="error" class="wp-field__error">{{ error }}</span>
    <span v-else-if="hint" class="wp-field__hint">{{ hint }}</span>
  </div>
</template>

<style scoped>
.wp-field { display: flex; flex-direction: column; gap: 5px; }

.wp-field__label {
  font-family:  var(--wp-font-body);
  font-size:    12px;
  font-weight:  600;
  color:        var(--wp-color-navy);
}

.wp-field__hint  { font-size: 11px; color: var(--wp-color-muted); }
.wp-field__error { font-size: 11px; color: var(--wp-color-error); }

.wp-input {
  font-family:   var(--wp-font-body);
  font-size:     14px;
  font-weight:   400;
  color:         var(--wp-color-navy);
  background:    var(--wp-color-white);
  border:        1.5px solid var(--wp-color-border);
  border-radius: var(--wp-radius-md);
  padding:       var(--wp-space-sm) var(--wp-space-md);
  outline:       none;
  width:         100%;
  transition:    border-color var(--wp-transition-base), box-shadow var(--wp-transition-base);
}
.wp-input::placeholder { color: var(--wp-color-muted); }
.wp-input:focus {
  border-color: var(--wp-color-sky);
  box-shadow:   0 0 0 3px rgba(0, 170, 239, 0.15);
}
.wp-input--error {
  border-color: var(--wp-color-error);
  box-shadow:   0 0 0 3px rgba(239, 68, 68, 0.12);
}
.wp-input:disabled {
  background: var(--wp-color-bg);
  color:      var(--wp-color-muted);
  cursor:     not-allowed;
}
</style>
