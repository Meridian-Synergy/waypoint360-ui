<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  modelValue?: string
  label?:      string
  placeholder?: string
  hint?:       string
  error?:      string
  disabled?:   boolean
  type?:       string
  /** Show the reveal (eye) toggle on password fields. */
  revealable?: boolean
  /** Accessible name of the reveal button while the value is hidden. */
  revealLabel?: string
  /** Accessible name of the reveal button while the value is shown. */
  hideLabel?:   string
  /** Live-region announcement when the value becomes visible. */
  shownAnnouncement?:  string
  /** Live-region announcement when the value becomes hidden. */
  hiddenAnnouncement?: string
}>(), {
  type:        'text',
  disabled:    false,
  revealable:  true,
  revealLabel: 'Show password',
  hideLabel:   'Hide password',
  shownAnnouncement:  'Your password is visible',
  hiddenAnnouncement: 'Your password is hidden',
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

// Forward native attributes (required, autocomplete, minlength, name…) to the
// inner <input>, not the root wrapper — otherwise they no-op on a <div>.
defineOptions({ inheritAttrs: false })

const inputEl  = ref<HTMLInputElement>()
const revealed = ref(false)
// Announced by the aria-live region on each toggle (GOV.UK reveal pattern):
// changing the button's accessible name alone is not reliably announced.
const announcement = ref('')

const showReveal   = computed(() => props.type === 'password' && props.revealable && !props.disabled)
// Revealing swaps the visual masking only; autocomplete/name stay on the field.
const resolvedType = computed(() => (props.type === 'password' && revealed.value ? 'text' : props.type))

function toggleReveal() {
  revealed.value = !revealed.value
  announcement.value = revealed.value ? props.shownAnnouncement : props.hiddenAnnouncement
}

// Re-mask on submit so a revealed password is never left on screen after login
// (fires even with @submit.prevent — the submit event still dispatches).
function remask() { revealed.value = false }
let formEl: HTMLFormElement | null = null
onMounted(() => {
  formEl = inputEl.value?.form ?? null
  formEl?.addEventListener('submit', remask)
})
onBeforeUnmount(() => formEl?.removeEventListener('submit', remask))
</script>

<template>
  <div class="wp-field">
    <label v-if="label" class="wp-field__label">{{ label }}</label>
    <div class="wp-input-wrap">
      <input
        ref="inputEl"
        v-bind="$attrs"
        :class="['wp-input', { 'wp-input--error': error, 'wp-input--revealable': showReveal }]"
        :type="resolvedType"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <button
        v-if="showReveal"
        type="button"
        class="wp-input__reveal"
        :aria-label="revealed ? hideLabel : revealLabel"
        :title="revealed ? hideLabel : revealLabel"
        @click="toggleReveal"
      >
        <svg v-if="revealed" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      </button>
    </div>
    <span class="wp-sr-only" role="status" aria-live="polite">{{ announcement }}</span>
    <span v-if="error" class="wp-field__error">{{ error }}</span>
    <span v-else-if="hint" class="wp-field__hint">{{ hint }}</span>
  </div>
</template>

<style scoped>
.wp-field { display: flex; flex-direction: column; gap: 5px; }

.wp-field__label {
  font-family:  var(--wp-font-body);
  font-size:    0.75rem;
  font-weight:  600;
  color:        var(--wp-color-text, var(--wp-color-navy, #1B2B56));
}

.wp-field__hint  { font-size: 0.6875rem; color: var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA)); }
.wp-field__error { font-size: 0.6875rem; color: var(--wp-color-error, #ef4444); }

.wp-input-wrap { position: relative; display: flex; }

/* Theme-adaptive: consumer semantic token first (app dark theme), then DS token,
   then hardcoded value (same layering as WpStatCard). */
.wp-input {
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
  transition:    border-color var(--wp-transition-base, 0.2s ease), box-shadow var(--wp-transition-base, 0.2s ease);
}
/* Room for the reveal button so it never overlaps the text. */
.wp-input--revealable { padding-right: 44px; }
/* Suppress the browser's own reveal control (Edge/IE) to avoid a duplicate eye. */
.wp-input::-ms-reveal,
.wp-input::-ms-clear { display: none; }
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

.wp-input__reveal {
  position:     absolute;
  top:          2px;
  bottom:       2px;
  right:        4px;
  display:      inline-flex;
  align-items:  center;
  justify-content: center;
  width:        40px;
  padding:      0;
  border:       none;
  border-radius: var(--wp-radius-sm, 6px);
  background:   transparent;
  color:        var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
  cursor:       pointer;
  transition:   color var(--wp-transition-base, 0.2s ease), background var(--wp-transition-base, 0.2s ease);
}
.wp-input__reveal:hover  { color: var(--wp-color-text, var(--wp-color-navy, #1B2B56)); }
.wp-input__reveal:focus-visible {
  outline:      2px solid var(--wp-color-sky, #00AAEF);
  outline-offset: 1px;
}

.wp-sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
