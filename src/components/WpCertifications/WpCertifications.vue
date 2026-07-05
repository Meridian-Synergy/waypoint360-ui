<script setup lang="ts">
import { computed } from 'vue'

const DGAC_KEYS = ['a1_a3', 'a2_cofc', 'cats', 'sts_01', 'sts_02'] as const
const ADDITIONAL_KEYS = ['certibiocide', 'certiphyto'] as const

type DgacKey       = typeof DGAC_KEYS[number]
type AdditionalKey = typeof ADDITIONAL_KEYS[number]

export type CertKey = DgacKey | AdditionalKey

// A cert is either a plain held flag (legacy) or held + obtention date + explicit
// expiry date + issuing country. The official EU competency certificate prints the
// expiry, not the obtention date — `expires` is authoritative when set; otherwise
// the expiry is derived from `obtained + validity`.
export type CertEntry = boolean | { held: boolean; obtained?: string | null; expires?: string | null; country?: string | null }

export interface WpCertificationsValue {
  a1_a3?:        CertEntry
  a2_cofc?:      CertEntry
  sts_01?:       CertEntry
  sts_02?:       CertEntry
  cats?:         CertEntry
  certibiocide?: CertEntry
  certiphyto?:   CertEntry
}

export interface WpCertificationsDateLabels {
  obtained:  string
  expiresOn: string   // template containing "{date}" — the computed/effective expiry
  valid:     string
  soon:      string
  expired:   string
  /** Label of the explicit expiry-date input. Optional for backward compatibility. */
  expiresInput?: string
  /** Validity info line, template containing "{years}" (e.g. "Validity: {years} years"). */
  validityInfo?: string
}

export interface WpCertCountryOption { value: string; label: string }

const props = withDefaults(defineProps<{
  modelValue:        WpCertificationsValue
  labels:            Record<DgacKey, string>
  title?:            string
  hint?:             string
  additionalTitle?:  string
  additionalLabels?: Partial<Record<AdditionalKey, string>>
  /** Show obtention date + computed expiry/status under each held cert. */
  withDates?:        boolean
  /** Validity period in years (EU drone competency certs = 5). */
  validityYears?:    number
  /** Per-cert validity in years; falls back to `validityYears` for any key not set. */
  validityByKey?:    Partial<Record<CertKey, number>>
  /** Translated strings for the date UI (required when withDates is true). */
  dateLabels?:       WpCertificationsDateLabels
  /** Show an issuing-country selector for each held cert. */
  withCountry?:      boolean
  /** Country choices for the selector. */
  countryOptions?:   WpCertCountryOption[]
  /** Field label for the country selector. */
  countryLabel?:     string
  /** Country pre-selected when a cert is first marked as held. */
  defaultCountry?:   string | null
}>(), {
  title:            undefined,
  hint:             undefined,
  additionalTitle:  undefined,
  additionalLabels: undefined,
  withDates:        false,
  validityYears:    5,
  validityByKey:    undefined,
  dateLabels:       undefined,
  withCountry:      false,
  countryOptions:   () => [],
  countryLabel:     undefined,
  defaultCountry:   null,
})

const emit = defineEmits<{ 'update:modelValue': [value: WpCertificationsValue] }>()

// Rich (object) value mode whenever dates or country are tracked.
const richMode = computed(() => props.withDates || props.withCountry)

function isHeld(v: CertEntry | undefined): boolean {
  return typeof v === 'boolean' ? v : !!v?.held
}
function obtainedOf(v: CertEntry | undefined): string | null {
  return typeof v === 'object' && v ? (v.obtained ?? null) : null
}
function expiresOf(v: CertEntry | undefined): string | null {
  return typeof v === 'object' && v ? (v.expires ?? null) : null
}
function countryOf(v: CertEntry | undefined): string | null {
  return typeof v === 'object' && v ? (v.country ?? null) : null
}

interface RichEntry { held: boolean; obtained: string | null; expires: string | null; country: string | null }
function currentEntry(key: CertKey): RichEntry {
  const v = props.modelValue[key]
  return { held: isHeld(v), obtained: obtainedOf(v), expires: expiresOf(v), country: countryOf(v) }
}
function emitPatch(key: CertKey, patch: Partial<RichEntry>) {
  const next = { ...currentEntry(key), ...patch }
  const entry: CertEntry = richMode.value
    ? { held: next.held, obtained: next.obtained, expires: next.expires, country: next.country }
    : next.held
  emit('update:modelValue', { ...props.modelValue, [key]: entry })
}
function toggle(key: CertKey) {
  const nextHeld = !isHeld(props.modelValue[key])
  // Default the country to the user's own when a cert is first marked held.
  const country = nextHeld ? (countryOf(props.modelValue[key]) ?? props.defaultCountry ?? null) : countryOf(props.modelValue[key])
  emitPatch(key, { held: nextHeld, country })
}
function setDate(key: CertKey, e: Event) {
  emitPatch(key, { obtained: (e.target as HTMLInputElement).value || null })
}
function setExpiry(key: CertKey, e: Event) {
  emitPatch(key, { expires: (e.target as HTMLInputElement).value || null })
}
function setCountry(key: CertKey, e: Event) {
  emitPatch(key, { country: (e.target as HTMLSelectElement).value || null })
}

function validityYearsOf(key: CertKey): number {
  return props.validityByKey?.[key] ?? props.validityYears
}
// Explicit expiry wins; otherwise derive it from the obtention date + validity.
function expiry(key: CertKey): Date | null {
  const expires = expiresOf(props.modelValue[key])
  if (expires) return new Date(expires)
  const obtained = obtainedOf(props.modelValue[key])
  if (!obtained) return null
  const d = new Date(obtained)
  d.setFullYear(d.getFullYear() + validityYearsOf(key))
  return d
}
function validityInfoText(key: CertKey): string {
  return props.dateLabels?.validityInfo
    ? props.dateLabels.validityInfo.replace('{years}', String(validityYearsOf(key)))
    : ''
}
function fmtDate(d: Date): string {
  return d.toLocaleDateString(undefined, { day: '2-digit', month: '2-digit', year: 'numeric' })
}
function status(key: CertKey): 'valid' | 'soon' | 'expired' | 'unset' {
  const exp = expiry(key)
  if (!exp) return 'unset'
  const days = Math.floor((exp.getTime() - Date.now()) / 86400000)
  if (days < 0) return 'expired'
  if (days <= 60) return 'soon'
  return 'valid'
}
function expiresText(key: CertKey): string {
  const exp = expiry(key)
  return exp && props.dateLabels ? props.dateLabels.expiresOn.replace('{date}', fmtDate(exp)) : ''
}
function statusText(key: CertKey): string {
  const s = status(key)
  return props.dateLabels && s !== 'unset' ? props.dateLabels[s] : ''
}

const hasAdditional = computed(() =>
  !!props.additionalLabels && Object.keys(props.additionalLabels).length > 0
)

const RENDER_KEYS = computed<CertKey[]>(() => [...DGAC_KEYS])
</script>

<template>
  <div class="wp-certs">
    <p v-if="title" class="wp-certs__title">{{ title }}</p>
    <div class="wp-certs__grid">
      <div v-for="key in RENDER_KEYS" :key="key" class="wp-certs__row">
        <label class="wp-certs__item">
          <input type="checkbox" :checked="isHeld(modelValue[key])" class="wp-certs__native" @change="toggle(key)" />
          <span class="wp-certs__check" :class="{ 'wp-certs__check--on': isHeld(modelValue[key]) }">
            <svg v-if="isHeld(modelValue[key])" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="wp-certs__label">{{ labels[key as DgacKey] }}</span>
        </label>
        <div v-if="richMode && isHeld(modelValue[key])" class="wp-certs__meta">
          <template v-if="withCountry">
            <label class="wp-certs__meta-label">{{ countryLabel }}</label>
            <select class="wp-certs__select" :value="countryOf(modelValue[key]) ?? defaultCountry ?? ''" @change="setCountry(key, $event)">
              <option value="">—</option>
              <option v-for="c in countryOptions" :key="c.value" :value="c.value">{{ c.label }}</option>
            </select>
          </template>
          <template v-if="withDates && dateLabels">
            <label class="wp-certs__meta-label">{{ dateLabels.obtained }}</label>
            <input type="date" class="wp-certs__date-input" :value="obtainedOf(modelValue[key]) ?? ''" @change="setDate(key, $event)" />
            <template v-if="dateLabels.expiresInput">
              <label class="wp-certs__meta-label">{{ dateLabels.expiresInput }}</label>
              <input type="date" class="wp-certs__date-input" :value="expiresOf(modelValue[key]) ?? ''" @change="setExpiry(key, $event)" />
            </template>
            <span v-if="validityInfoText(key)" class="wp-certs__validity">{{ validityInfoText(key) }}</span>
            <template v-if="expiry(key)">
              <span class="wp-certs__expiry">{{ expiresText(key) }}</span>
              <span class="wp-certs__status" :class="`wp-certs__status--${status(key)}`">{{ statusText(key) }}</span>
            </template>
          </template>
        </div>
      </div>
    </div>

    <template v-if="hasAdditional">
      <div class="wp-certs__divider" />
      <p v-if="additionalTitle" class="wp-certs__title">{{ additionalTitle }}</p>
      <div class="wp-certs__grid">
        <div v-for="key in ADDITIONAL_KEYS" v-show="additionalLabels![key] !== undefined" :key="key" class="wp-certs__row">
          <label class="wp-certs__item">
            <input type="checkbox" :checked="isHeld(modelValue[key])" class="wp-certs__native" @change="toggle(key)" />
            <span class="wp-certs__check" :class="{ 'wp-certs__check--on': isHeld(modelValue[key]) }">
              <svg v-if="isHeld(modelValue[key])" width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="wp-certs__label">{{ additionalLabels![key] }}</span>
          </label>
          <div v-if="richMode && isHeld(modelValue[key])" class="wp-certs__meta">
            <template v-if="withCountry">
              <label class="wp-certs__meta-label">{{ countryLabel }}</label>
              <select class="wp-certs__select" :value="countryOf(modelValue[key]) ?? defaultCountry ?? ''" @change="setCountry(key, $event)">
                <option value="">—</option>
                <option v-for="c in countryOptions" :key="c.value" :value="c.value">{{ c.label }}</option>
              </select>
            </template>
            <template v-if="withDates && dateLabels">
              <label class="wp-certs__meta-label">{{ dateLabels.obtained }}</label>
              <input type="date" class="wp-certs__date-input" :value="obtainedOf(modelValue[key]) ?? ''" @change="setDate(key, $event)" />
              <template v-if="expiry(key)">
                <span class="wp-certs__expiry">{{ expiresText(key) }}</span>
                <span class="wp-certs__status" :class="`wp-certs__status--${status(key)}`">{{ statusText(key) }}</span>
              </template>
            </template>
          </div>
        </div>
      </div>
    </template>

    <p v-if="hint" class="wp-certs__hint">{{ hint }}</p>
  </div>
</template>

<style scoped>
.wp-certs__title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--wp-color-text-sub);
  margin-bottom: 12px;
}

.wp-certs__grid {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Cert and its date/country sit on one line, wrapping on narrow screens. */
.wp-certs__row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px 14px;
}

.wp-certs__divider {
  margin: 16px 0;
  border-top: 1px solid var(--wp-color-border);
  opacity: 0.4;
}

.wp-certs__item {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  user-select: none;
  min-width: 220px;
}

.wp-certs__native { display: none; }

.wp-certs__check {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border: 1.5px solid var(--wp-color-border);
  border-radius: 4px;
  background: var(--wp-color-input-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--wp-transition), border-color var(--wp-transition);
}
.wp-certs__check--on {
  background: var(--wp-color-sky);
  border-color: var(--wp-color-sky);
  color: #fff;
}
.wp-certs__item:hover .wp-certs__check:not(.wp-certs__check--on) {
  border-color: var(--wp-color-sky);
}

.wp-certs__label {
  font-size: 0.8125rem;
  color: var(--wp-color-text);
  line-height: 1.4;
}

.wp-certs__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.wp-certs__meta-label {
  font-size: 0.75rem;
  color: var(--wp-color-text-sub);
  white-space: nowrap;
}
.wp-certs__date-input,
.wp-certs__select {
  font-size: 0.8125rem;
  padding: 5px 8px;
  border: 1px solid var(--wp-color-border);
  border-radius: var(--wp-radius);
  background: var(--wp-color-input-bg);
  color: var(--wp-color-input-text, var(--wp-color-text));
}
.wp-certs__expiry {
  font-size: 0.75rem;
  color: var(--wp-color-text-sub);
  white-space: nowrap;
}
.wp-certs__validity {
  font-size: 0.6875rem;
  color: var(--wp-color-text-sub);
  white-space: nowrap;
  opacity: 0.8;
}
.wp-certs__status {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.wp-certs__status--valid   { color: #16a34a; }
.wp-certs__status--soon    { color: #eab308; }
.wp-certs__status--expired { color: #ef4444; }

.wp-certs__hint {
  margin-top: 10px;
  font-size: 0.6875rem;
  color: var(--wp-color-text-sub);
  opacity: 0.7;
}
</style>
