<script setup lang="ts">
import { computed } from 'vue'
import WpField from '../WpField/WpField.vue'
import { wpCharCountLevel } from '../../utils/char-count'

const props = withDefaults(defineProps<{
  modelValue?:  string
  label?:       string
  placeholder?: string
  hint?:        string
  error?:       string
  disabled?:    boolean
  required?:    boolean
  rows?:        number
  /** Pose la limite de saisie ET affiche le compteur. */
  maxlength?:   number
  /**
   * Texte du palier haut, dans la langue du consommateur — « limite atteinte ».
   *
   * ⚠️ Sans lui, il ne reste que la couleur : elle échoue au critère WCAG 1.4.1
   * et n'existe pas pour un lecteur d'écran. Le composant ne peut pas traduire
   * à la place de l'application, mais il peut refuser de faire semblant.
   */
  limitLabel?:  string
}>(), {
  disabled: false,
  required: false,
  rows:     3,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const length = computed(() => (props.modelValue ?? '').length)
const level  = computed(() => wpCharCountLevel(length.value, props.maxlength ?? 0))
</script>

<template>
  <WpField :label="label" :required="required" :hint="hint" :error="error">
    <textarea
      :class="['wp-textarea', { 'wp-textarea--error': error }]"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :rows="rows"
      :maxlength="maxlength"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    ></textarea>
    <span
      v-if="maxlength"
      :class="['wp-textarea__count', `wp-textarea__count--${level}`]"
      aria-live="polite"
    >
      {{ length }}/{{ maxlength }}<template v-if="level === 'max' && limitLabel"> — {{ limitLabel }}</template>
    </span>
  </WpField>
</template>

<style scoped>
.wp-textarea {
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
  resize:        vertical;
  transition:    border-color var(--wp-transition-base, 0.2s ease), box-shadow var(--wp-transition-base, 0.2s ease);
  /* Scrollbar and resize grip are browser-drawn — same reason as WpInput/WpSelect. */
  color-scheme:  var(--wp-scheme, light);
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
.wp-textarea__count {
  display:     block;
  text-align:  right;
  margin-top:  var(--wp-space-xs, 4px);
  font-family: var(--wp-font-body, 'Barlow', sans-serif);
  font-size:   0.6875rem;
  color:       var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
  transition:  color var(--wp-transition-base, 0.2s ease);
}
.wp-textarea__count--ok   { color: var(--wp-color-success, #22c55e); }
.wp-textarea__count--warn { color: var(--wp-color-warning, #f59e0b); }
.wp-textarea__count--max  { color: var(--wp-color-error, #ef4444); font-weight: 600; }

.wp-textarea:disabled {
  background: var(--wp-color-bg, #ECEEF3);
  color:      var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
  cursor:     not-allowed;
}
</style>
