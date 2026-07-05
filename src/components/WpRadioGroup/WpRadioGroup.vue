<script setup lang="ts">
import { useId } from 'vue'
import WpField from '../WpField/WpField.vue'

export interface WpRadioOption {
  value:     string
  label:     string
  disabled?: boolean
}

withDefaults(defineProps<{
  modelValue?: string
  options:     WpRadioOption[]
  label?:      string
  hint?:       string
  error?:      string
  required?:   boolean
}>(), {
  required: false,
})

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

// Stable name to group the radios of one instance.
const name = useId()
</script>

<template>
  <WpField :label="label" :required="required" :hint="hint" :error="error">
    <div class="wp-radio-group">
      <label
        v-for="opt in options"
        :key="opt.value"
        class="wp-radio"
        :class="{ 'wp-radio--disabled': opt.disabled }"
      >
        <input
          type="radio"
          :name="name"
          :value="opt.value"
          :checked="modelValue === opt.value"
          :disabled="opt.disabled"
          @change="emit('update:modelValue', opt.value)"
        />
        <span>{{ opt.label }}</span>
      </label>
    </div>
  </WpField>
</template>

<style scoped>
.wp-radio-group { display: flex; flex-wrap: wrap; gap: var(--wp-space-md, 16px); }
.wp-radio {
  display:     inline-flex;
  align-items: center;
  gap:         6px;
  font-family: var(--wp-font-body, 'Barlow', sans-serif);
  font-size:   0.875rem;
  color:       var(--wp-color-text, var(--wp-color-navy, #1B2B56));
  cursor:      pointer;
}
.wp-radio input { accent-color: var(--wp-color-sky, #00AAEF); cursor: pointer; }
.wp-radio--disabled { opacity: 0.45; cursor: not-allowed; }
.wp-radio--disabled input { cursor: not-allowed; }
</style>
