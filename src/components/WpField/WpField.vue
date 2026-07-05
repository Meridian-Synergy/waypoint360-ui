<script setup lang="ts">
// Shared form-field chrome: label (+ required mark), default slot for the control,
// and a hint/error line. Reused by WpTextarea/WpSelect/WpRadioGroup/WpCheckbox so
// every form control shares the same anatomy as WpInput.
withDefaults(defineProps<{
  label?:    string
  required?: boolean
  hint?:     string
  error?:    string
}>(), {
  required: false,
})
</script>

<template>
  <div class="wp-field">
    <label v-if="label" class="wp-field__label">{{ label }}<span v-if="required" class="wp-field__req"> *</span></label>
    <slot />
    <span v-if="error" class="wp-field__error">{{ error }}</span>
    <span v-else-if="hint" class="wp-field__hint">{{ hint }}</span>
  </div>
</template>

<style scoped>
/* Theme-adaptive: consumer semantic token first (e.g. app dark theme), then DS
   token, then hardcoded value — same layering as WpStatCard so labels stay
   readable on dark surfaces. */
.wp-field { display: flex; flex-direction: column; gap: 5px; }
.wp-field__label {
  font-family: var(--wp-font-body, 'Barlow', sans-serif);
  font-size:   0.75rem;
  font-weight: 600;
  color:       var(--wp-color-text, var(--wp-color-navy, #1B2B56));
}
.wp-field__req   { color: var(--wp-color-error, #ef4444); }
.wp-field__hint  { font-size: 0.6875rem; color: var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA)); }
.wp-field__error { font-size: 0.6875rem; color: var(--wp-color-error, #ef4444); }
</style>
