<script setup lang="ts">
export type WpStatTone = 'neutral' | 'sky' | 'gold' | 'warn' | 'ok'

withDefaults(defineProps<{
  label?: string
  value?: string | number
  sub?: string
  link?: string
  tone?: WpStatTone
  loading?: boolean
  interactive?: boolean
}>(), {
  label: '',
  value: '',
  sub: '',
  link: '',
  tone: 'neutral',
  loading: false,
  interactive: true,
})

defineEmits<{ (e: 'click', ev: MouseEvent): void }>()
</script>

<template>
  <div
    :class="[
      'wp-stat-card',
      `wp-stat-card--${tone}`,
      { 'wp-stat-card--interactive': interactive },
    ]"
    @click="$emit('click', $event)"
  >
    <span v-if="label" class="wp-stat-card__label">{{ label }}</span>

    <span :class="['wp-stat-card__value', { 'wp-stat-card__value--loading': loading }]">
      <slot name="value">{{ value }}</slot>
    </span>

    <span v-if="sub || $slots.sub" class="wp-stat-card__sub">
      <slot name="sub">{{ sub }}</slot>
    </span>

    <span v-if="link" class="wp-stat-card__link">{{ link }}</span>
  </div>
</template>

<style scoped>
.wp-stat-card {
  /* Accent drives tint, value color and hover border. Default = sky so the
     neutral tile keeps the historical sky hover without tinting its surface. */
  --_accent: var(--wp-color-sky, #00AAEF);

  display: flex;
  flex-direction: column;
  gap: var(--wp-space-xs, 4px);
  background: var(--wp-color-surface, var(--wp-color-dark-bg2, #182236));
  border: 1px solid var(--wp-color-border, #D5D9E4);
  border-radius: var(--wp-radius, 10px);
  padding: 20px;
  box-shadow: var(--wp-shadow, var(--wp-shadow-sm, 0 2px 12px rgba(27, 43, 86, 0.06)));
  transition:
    border-color var(--wp-transition, 150ms ease),
    transform var(--wp-transition, 150ms ease);
}

/* Tinted tones — subtle accent mixed into the surface (validated look). */
.wp-stat-card--sky  { --_accent: var(--wp-color-sky, #00AAEF); }
.wp-stat-card--gold { --_accent: var(--wp-color-gold, #C9A84C); }
.wp-stat-card--warn { --_accent: var(--wp-color-orange, #F05A28); }
.wp-stat-card--ok   { --_accent: var(--wp-color-success, #22c55e); }

.wp-stat-card--sky,
.wp-stat-card--gold,
.wp-stat-card--warn,
.wp-stat-card--ok {
  border-color: color-mix(in srgb, var(--_accent) 35%, transparent);
  background: color-mix(
    in srgb,
    var(--wp-color-surface, var(--wp-color-dark-bg2, #182236)) 91%,
    var(--_accent)
  );
}

/* Coloured value for the positive/identity tones; warn keeps a neutral value
   and signals through border + tint only (less alarming on a dashboard). */
.wp-stat-card--sky  .wp-stat-card__value,
.wp-stat-card--gold .wp-stat-card__value,
.wp-stat-card--ok   .wp-stat-card__value {
  color: var(--_accent);
}

.wp-stat-card--interactive {
  cursor: pointer;
}
.wp-stat-card--interactive:hover {
  border-color: var(--_accent);
  transform: translateY(-2px);
}

.wp-stat-card__label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
}

.wp-stat-card__value {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  color: var(--wp-color-text, #fff);
  margin: 6px 0 2px;
}
.wp-stat-card__value--loading {
  color: var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
  opacity: 0.4;
}

.wp-stat-card__sub {
  font-size: 12px;
  color: var(--wp-color-text-sub, var(--wp-color-muted, #8C95AA));
}

.wp-stat-card__link {
  font-size: 12px;
  color: var(--wp-color-sky, #00AAEF);
  margin-top: auto;
  padding-top: 10px;
}
</style>
