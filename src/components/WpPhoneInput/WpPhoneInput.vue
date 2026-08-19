<script setup lang="ts">
import { ref, watch } from 'vue'
import WpInput from '../WpInput/WpInput.vue'
import { toE164, formatPhone } from '../../utils/phone'

/**
 * A phone field that understands instead of constraining.
 *
 * The model carries E.164 — what the API stores. What the person sees is
 * readable: they type whatever they like, and read back `06 12 34 56 78`.
 *
 * VALIDATION FIRES ON BLUR, NEVER ON KEYSTROKE. Three characters in, `06 1` is
 * not a number yet, and saying so helps nobody. Scolding someone mid-word is
 * the most common flaw of these components.
 *
 * Carries no text of its own: this package has no i18n, so the consumer passes
 * the translated message.
 */
const props = withDefaults(defineProps<{
  modelValue?: string | null
  label?: string
  placeholder?: string
  hint?: string
  disabled?: boolean
  /** Shown when the value cannot be read as a number. Already translated. */
  invalidMessage?: string
}>(), {
  modelValue: null,
  disabled: false,
  invalidMessage: 'This number does not look valid.',
})

const emit = defineEmits<{ 'update:modelValue': [value: string | null] }>()
defineOptions({ inheritAttrs: false })

const raw = ref(formatPhone(props.modelValue))
const invalid = ref(false)

// The value can change from outside — a record loading, a form reset. We never
// rewrite while the person is typing.
watch(() => props.modelValue, v => {
  if (toE164(raw.value) === v) return
  raw.value = formatPhone(v)
  invalid.value = false
})

function onInput(v: string) {
  raw.value = v
  // Clear the complaint on the first correction: keeping it on screen while
  // someone repairs makes them feel they are still failing.
  if (invalid.value) invalid.value = false
}

function onBlur() {
  const v = raw.value.trim()
  if (!v) { invalid.value = false; emit('update:modelValue', null); return }

  const e164 = toE164(v)
  invalid.value = !e164
  if (!e164) return

  // Rewriting what was just understood IS the feedback — it says "I read your
  // number" without a message.
  raw.value = formatPhone(e164)
  emit('update:modelValue', e164)
}
</script>

<template>
  <WpInput
    :model-value="raw"
    type="tel"
    inputmode="tel"
    autocomplete="tel"
    :label="label"
    :hint="hint"
    :disabled="disabled"
    :placeholder="placeholder || '06 12 34 56 78'"
    :error="invalid ? invalidMessage : undefined"
    v-bind="$attrs"
    @update:model-value="onInput"
    @blur="onBlur"
  />
</template>
