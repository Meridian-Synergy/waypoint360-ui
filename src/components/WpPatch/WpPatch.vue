<script lang="ts">
/**
 * WpPatch — community achievement patch (gamified badge).
 *
 * Parametric SVG: a single source serves both the in-app display and the
 * embroidery/e-commerce export. The `shape` encodes the badge category and the
 * `tier` encodes the threshold reached (medal metals). Distinct from `WpBadge`
 * (the text chip). See WAYPOINT360_BADGES_CADRAGE.md for the full design rationale.
 *
 * Country flags (the `flag` prop, used by geography/rocker patches) rely on the
 * `flag-icons` CSS, which the consumer app must load globally — same contract as
 * WpLocaleSwitcher:  import 'flag-icons/css/flag-icons.min.css'
 */
export type WpPatchShape = 'circle' | 'shield' | 'rocker' | 'rosette' | 'hexagon'
export type WpPatchTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'none'
export type WpPatchIcon = 'propeller' | 'check' | 'globe' | 'star' | 'heart' | 'flag'
</script>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** Category silhouette */
  shape?: WpPatchShape
  /** Threshold metal — drives the ring/accent color */
  tier?: WpPatchTier
  /** CSS color overriding the ring/banner/pastille color (e.g. a category accent) */
  accent?: string
  /** Central emblem from the starter icon registry (ignored when `flag` is set) */
  icon?: WpPatchIcon
  /** ISO 3166-1 alpha-2 country code (lowercase) — renders a flag medallion as the emblem */
  flag?: string
  /** Banner ribbon text (rendered uppercase) */
  bannerText?: string
  /** Numbered pastille badge (e.g. a threshold count) */
  count?: number
  /** Greyed silhouette — not unlocked, or lapsed recurring supporter */
  locked?: boolean
  /** Rendered size in px (1:1) */
  size?: number
  /** Accessible name (English label of the badge) */
  name?: string
  /** Localized description, shown as a native tooltip */
  description?: string
}>(), {
  shape:  'circle',
  tier:   'none',
  size:   96,
  locked: false,
})

/** Silhouette path per shape (viewBox 0 0 100 100, center 50,50). */
const shapePath = computed<string>(() => {
  switch (props.shape) {
    case 'shield':
      return 'M50 5 L91 17 V49 C91 73 73 89 50 95 C27 89 9 73 9 49 V17 Z'
    case 'hexagon':
      return 'M50 4 L90 27 V73 L50 96 L10 73 V27 Z'
    case 'rocker':
      // Wide curved banner (banane) — room for a flag emblem and a name ribbon.
      return 'M8 24 Q50 12 92 24 L92 56 Q50 88 8 56 Z'
    case 'circle':
    case 'rosette':
    default:
      return 'M4 50 A46 46 0 1 1 96 50 A46 46 0 1 1 4 50 Z'
  }
})

/** Inner accent ring, inset from the silhouette (none for the thin rocker). */
const innerPath = computed<string>(() => {
  switch (props.shape) {
    case 'shield':
      return 'M50 13 L84 23 V49 C84 68 70 81 50 87 C30 81 16 68 16 49 V23 Z'
    case 'hexagon':
      return 'M50 13 L82 31 V69 L50 87 L18 69 V31 Z'
    case 'rocker':
      return ''
    default:
      return 'M11 50 A39 39 0 1 1 89 50 A39 39 0 1 1 11 50 Z'
  }
})

const ariaLabel = computed<string>(() => props.name ?? props.bannerText ?? 'Achievement patch')

// Emblem sits centered when there is no banner, higher when a banner is present.
const emblemY = computed<number>(() => (props.bannerText ? 36 : 50))

const rootStyle = computed<Record<string, string>>(() => {
  const s: Record<string, string> = { width: `${props.size}px`, height: `${props.size}px` }
  if (props.accent) s['--patch-ring'] = props.accent
  return s
})
</script>

<template>
  <span
    :class="['wp-patch', `wp-patch--${tier}`, { 'wp-patch--locked': locked }]"
    :style="rootStyle"
  >
    <svg
      class="wp-patch__svg"
      viewBox="0 0 100 100"
      role="img"
      :aria-label="ariaLabel"
    >
      <title v-if="description || name">{{ description ?? name }}</title>

      <g class="wp-patch__art">
        <!-- Silhouette -->
        <path class="wp-patch__shape" :d="shapePath" />

        <!-- Rosette pleated outer ring -->
        <circle
          v-if="shape === 'rosette'"
          class="wp-patch__pleat"
          cx="50" cy="50" r="44"
        />

        <!-- Inner accent ring -->
        <path v-if="innerPath" class="wp-patch__inner" :d="innerPath" />

        <!-- Central emblem (icon) — hidden when a flag medallion is shown.
             Scaled up so thin-stroke icons stay legible at small sizes. -->
        <g v-if="icon && !flag" class="wp-patch__emblem" :transform="`translate(50 ${emblemY}) scale(1.3)`">
          <template v-if="icon === 'propeller'">
            <ellipse cx="0" cy="0" rx="5.5" ry="17" />
            <ellipse cx="0" cy="0" rx="17" ry="5.5" />
            <circle cx="0" cy="0" r="6" class="wp-patch__emblem-hub" />
          </template>
          <polyline
            v-else-if="icon === 'check'"
            points="-13,1 -4,11 14,-12"
            fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"
          />
          <g v-else-if="icon === 'globe'" fill="none" stroke-width="2.2">
            <circle cx="0" cy="0" r="15" />
            <ellipse cx="0" cy="0" rx="6.5" ry="15" />
            <line x1="-15" y1="0" x2="15" y2="0" />
            <line x1="-13" y1="-7.5" x2="13" y2="-7.5" />
            <line x1="-13" y1="7.5" x2="13" y2="7.5" />
          </g>
          <path
            v-else-if="icon === 'star'"
            d="M0,-16 L4.7,-4.9 16.5,-4.9 7,2.5 10.6,13.9 0,7 -10.6,13.9 -7,2.5 -16.5,-4.9 -4.7,-4.9 Z"
          />
          <path
            v-else-if="icon === 'heart'"
            d="M0,13 C-13,3 -16,-6 -8.5,-12 C-3.5,-15.5 0,-10.5 0,-7.5 C0,-10.5 3.5,-15.5 8.5,-12 C16,-6 13,3 0,13 Z"
          />
          <g v-else-if="icon === 'flag'">
            <rect x="-12" y="-15" width="3" height="30" rx="1" />
            <path d="M-9,-14 L13,-9 L-9,-1 Z" />
          </g>
        </g>

        <!-- Banner ribbon (text on a solid plate — reads clear of the rim) -->
        <g v-if="bannerText" class="wp-patch__banner">
          <rect x="14" y="60" width="72" height="17" rx="3" />
          <text x="50" y="69" text-anchor="middle" dominant-baseline="central">{{ bannerText }}</text>
        </g>

        <!-- Numbered pastille — top-right corner, never collides with the banner -->
        <g v-if="count != null" class="wp-patch__pastille">
          <circle cx="74" cy="22" r="11" />
          <text x="74" y="22" text-anchor="middle" dominant-baseline="central">{{ count }}</text>
        </g>
      </g>
    </svg>

    <!-- Country flag medallion (HTML overlay, flag-icons). Acts as the emblem. -->
    <span
      v-if="flag"
      class="wp-patch__flag fi fis"
      :class="`fi-${flag}`"
      :style="{ top: bannerText ? '36%' : '50%' }"
      role="img"
      :aria-label="name ?? flag"
    />
  </span>
</template>

<style scoped>
.wp-patch {
  position:       relative;
  display:        inline-block;
  line-height:    0;
  /* Self-contained: tier/brand fallbacks so the patch renders even when the
   * consumer app does not declare the (provisional) --wp-tier-* tokens. */
  --patch-ring:   var(--wp-color-silver, #7A7D8A);
  --patch-ink:    var(--wp-color-white, #FFFFFF);
}

.wp-patch--bronze   { --patch-ring: var(--wp-tier-bronze, #CD7F32); }
.wp-patch--silver   { --patch-ring: var(--wp-tier-silver, #AEB6BF); }
.wp-patch--gold     { --patch-ring: var(--wp-tier-gold, #D4AF37); }
.wp-patch--platinum { --patch-ring: var(--wp-tier-platinum, #D9E2EC); --patch-ink: var(--wp-color-navy, #1B2B56); }

.wp-patch__svg { width: 100%; height: 100%; display: block; }

.wp-patch__art { transition: filter var(--wp-transition-base, 0.2s ease), opacity var(--wp-transition-base, 0.2s ease); }
.wp-patch--locked .wp-patch__art,
.wp-patch--locked .wp-patch__flag { filter: grayscale(1); opacity: 0.4; }

.wp-patch__shape       { fill: var(--wp-color-navy, #1B2B56); stroke: var(--patch-ring); stroke-width: 6; }
.wp-patch__inner       { fill: none; stroke: var(--patch-ring); stroke-width: 1.5; opacity: 0.5; }
.wp-patch__pleat       { fill: none; stroke: var(--patch-ring); stroke-width: 5; stroke-dasharray: 3 4; opacity: 0.85; }

.wp-patch__emblem      { fill: var(--patch-ink); stroke: var(--patch-ink); }
.wp-patch__emblem-hub  { fill: var(--wp-color-navy, #1B2B56); stroke: none; }

/* Banner plate + ink */
.wp-patch__banner rect { fill: var(--patch-ring); }
.wp-patch__banner text {
  fill:           var(--wp-color-navy, #1B2B56);
  font-family:    var(--wp-font-condensed, 'Barlow Condensed', sans-serif);
  font-weight:    700;
  font-size:      11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.wp-patch__pastille circle { fill: var(--patch-ring); stroke: var(--wp-color-navy, #1B2B56); stroke-width: 1.5; }
.wp-patch__pastille text {
  fill:        var(--wp-color-navy, #1B2B56);
  font-family: var(--wp-font-data, 'Space Mono', monospace);
  font-weight: 700;
  font-size:   11px;
}

/* Flag medallion — overlaid on the emblem position (center x, ~36% y) */
.wp-patch__flag {
  position:           absolute;
  left:               50%;
  top:                36%;
  transform:          translate(-50%, -50%);
  width:              38%;
  height:             38%;
  border-radius:      50%;
  border:             2.5px solid var(--patch-ring);
  background-size:    cover;
  background-position: center;
  box-shadow:         var(--wp-shadow-xs, 0 1px 4px rgba(0, 0, 0, 0.18));
}
</style>
