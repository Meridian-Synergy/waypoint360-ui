<script setup lang="ts">
import { ref } from 'vue'

// One row of an "Actions" section on CRUD++ app pages (settings / detail pages):
// a title + description on the left, a single tone-styled CTA on the right. The tone
// drives the button style AND the card accent, so these repetitive actions can't drift
// across pages. When `confirm` is set the component owns the inline confirm step (the
// boilerplate that was copy-pasted everywhere). i18n-agnostic: labels come via props.

export type WpActionTone = 'neutral' | 'warning' | 'danger'

const props = withDefaults(defineProps<{
  title: string
  description?: string
  tone?: WpActionTone
  actionLabel: string
  loadingLabel?: string
  /** Two-step: first click reveals an inline confirm row. */
  confirm?: boolean
  confirmPrompt?: string
  confirmLabel?: string
  cancelLabel?: string
  loading?: boolean
  disabled?: boolean
}>(), {
  description: '',
  tone: 'neutral',
  loadingLabel: '',
  confirm: false,
  confirmPrompt: '',
  confirmLabel: '',
  cancelLabel: 'Cancel',
  loading: false,
  disabled: false,
})

const emit = defineEmits<{ (e: 'action'): void }>()

const confirming = ref(false)

function trigger() {
  if (props.confirm) { confirming.value = true; return }
  emit('action')
}
function doConfirm() { emit('action') }
function cancel() { confirming.value = false }
</script>

<template>
  <div :class="['wp-action-card', `wp-action-card--${tone}`]">
    <div class="wp-action-card__info">
      <p class="wp-action-card__title">{{ title }}</p>
      <p v-if="description" class="wp-action-card__desc">{{ description }}</p>
    </div>

    <div class="wp-action-card__action">
      <!-- Override the whole action area when a native button flow isn't enough
           (e.g. a link, or a "done" state). Otherwise the built-in tone button is used. -->
      <slot :trigger="trigger" :confirming="confirming">
        <template v-if="!confirming">
          <button
            type="button"
            :class="['wp-action-btn', `wp-action-btn--${tone}`]"
            :disabled="disabled || loading"
            @click="trigger"
          >
            {{ loading && loadingLabel ? loadingLabel : actionLabel }}
          </button>
        </template>
        <div v-else class="wp-action-card__confirm">
          <span v-if="confirmPrompt" class="wp-action-card__prompt">{{ confirmPrompt }}</span>
          <button
            type="button"
            :class="['wp-action-btn', tone === 'danger' ? 'wp-action-btn--danger-solid' : `wp-action-btn--${tone}`]"
            :disabled="loading"
            @click="doConfirm"
          >
            {{ loading && loadingLabel ? loadingLabel : (confirmLabel || actionLabel) }}
          </button>
          <button type="button" class="wp-action-btn wp-action-btn--neutral" :disabled="loading" @click="cancel">
            {{ cancelLabel }}
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped>
.wp-action-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid var(--wp-color-border, #D5D9E4);
  border-radius: var(--wp-radius, 10px);
}
.wp-action-card--danger { border-color: rgba(248, 113, 113, 0.3); }

.wp-action-card__info { flex: 1; min-width: 0; }
.wp-action-card__title { font-size: 0.875rem; font-weight: 600; color: var(--wp-color-text, #0F1B33); margin: 0 0 2px; }
.wp-action-card__desc { font-size: 0.75rem; color: var(--wp-color-text-sub, #5b6478); margin: 0; }

.wp-action-card__action { flex-shrink: 0; }
.wp-action-card__confirm { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: flex-end; }
.wp-action-card__prompt { font-size: 0.8125rem; font-weight: 600; color: var(--wp-color-text-sub, #5b6478); }

/* Tone buttons — mirror the app's soft action CTAs (secondary / warning / danger). */
.wp-action-btn {
  padding: 5px 12px;
  font-size: 0.8125rem;
  font-weight: 600;
  font-family: inherit;
  border-radius: var(--wp-radius, 10px);
  cursor: pointer;
  transition: background var(--wp-transition, 0.15s ease), border-color var(--wp-transition, 0.15s ease);
  white-space: nowrap;
}
.wp-action-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.wp-action-btn--neutral {
  background: var(--wp-color-surface, #fff);
  color: var(--wp-color-text, #0F1B33);
  border: 1px solid var(--wp-color-border, #D5D9E4);
}
.wp-action-btn--neutral:not(:disabled):hover { border-color: var(--wp-color-sky, #00AAEF); }

.wp-action-btn--warning {
  background: rgba(250, 204, 21, 0.12);
  color: #facc15;
  border: 1px solid rgba(250, 204, 21, 0.3);
}
.wp-action-btn--warning:not(:disabled):hover { background: rgba(250, 204, 21, 0.2); }

.wp-action-btn--danger {
  background: transparent;
  color: #f87171;
  border: 1px solid rgba(248, 113, 113, 0.3);
}
.wp-action-btn--danger:not(:disabled):hover { background: rgba(248, 113, 113, 0.08); }

/* At the confirmation step, the destructive button turns solid so "about to
   permanently delete" reads unambiguously — the resting state stays quiet. */
.wp-action-btn--danger-solid {
  background: #dc2626;
  color: #fff;
  border: 1px solid #dc2626;
}
.wp-action-btn--danger-solid:not(:disabled):hover { background: #b91c1c; border-color: #b91c1c; }

@media (max-width: 560px) {
  .wp-action-card { flex-direction: column; align-items: stretch; }
  .wp-action-card__confirm { justify-content: flex-start; }
}
</style>
