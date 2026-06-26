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
  color:        var(--wp-color-text, var(--wp-color-navy, #1B2B56));
}

.wp-field__hint  { font-size: 11px; color: var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA)); }
.wp-field__error { font-size: 11px; color: var(--wp-color-error, #ef4444); }

/* Theme-adaptive: consumer semantic token first (app dark theme), then DS token,
   then hardcoded value (same layering as WpStatCard). */
.wp-input {
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
  transition:    border-color var(--wp-transition-base, 0.2s ease), box-shadow var(--wp-transition-base, 0.2s ease);
}
.wp-input::placeholder { color: var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA)); }
.wp-input:focus {
  border-color: var(--wp-color-sky, #00AAEF);
  box-shadow:   0 0 0 3px rgba(0, 170, 239, 0.15);
}
.wp-input--error {
  border-color: var(--wp-color-error, #ef4444);
  box-shadow:   0 0 0 3px rgba(239, 68, 68, 0.12);
}
.wp-input:disabled {
  background: var(--wp-color-bg, #ECEEF3);
  color:      var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
  cursor:     not-allowed;
}
</style>
