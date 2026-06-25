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
export type WpPatchIcon =
  | 'propeller' | 'takeoff' | 'medal' | 'compass' | 'globe' | 'route' | 'stopwatch' | 'mountain' | 'flame'
  | 'check' | 'double_check' | 'clock'
  | 'user_plus' | 'users' | 'podium' | 'verified'
  | 'heart' | 'crown' | 'wings' | 'wingman' | 'star' | 'sunrise' | 'moon'
  | 'flag' | 'rocket' | 'trophy' | 'calendar'
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

// Flat emblem registry — one distinct icon per badge, as plain SVG element
// descriptors. Rendered via <component :is> so children are real SVG nodes
// (v-html does not reliably create SVG-namespaced elements). fill/stroke are
// inherited from the emblem <g>; navy holes use #1B2B56.
type IconPart = { tag: string; attrs: Record<string, string | number> }

const ICONS: Record<WpPatchIcon, IconPart[]> = {
  propeller: [
    { tag: 'ellipse', attrs: { rx: 5.5, ry: 17 } },
    { tag: 'ellipse', attrs: { rx: 17, ry: 5.5 } },
    { tag: 'circle', attrs: { r: 6, fill: '#1B2B56' } },
  ],
  takeoff: [
    { tag: 'path', attrs: { d: 'M-16,8 L15,-12 L3,11 L-1,3 Z' } },
    { tag: 'path', attrs: { d: 'M-15,14 H9', fill: 'none', 'stroke-width': 2.6, 'stroke-linecap': 'round' } },
  ],
  medal: [
    { tag: 'path', attrs: { d: 'M-7,-7 L-11,-16 L-3,-12 M7,-7 L11,-16 L3,-12', fill: 'none', 'stroke-width': 2.6, 'stroke-linejoin': 'round' } },
    { tag: 'circle', attrs: { cy: 4, r: 11 } },
    { tag: 'circle', attrs: { cy: 4, r: 5, fill: '#1B2B56' } },
  ],
  compass: [
    { tag: 'circle', attrs: { r: 15, fill: 'none', 'stroke-width': 2.4 } },
    { tag: 'path', attrs: { d: 'M0,-9 L4.5,0 L0,9 L-4.5,0 Z' } },
  ],
  globe: [
    { tag: 'circle', attrs: { r: 15, fill: 'none', 'stroke-width': 2.2 } },
    { tag: 'ellipse', attrs: { rx: 6.5, ry: 15, fill: 'none', 'stroke-width': 2.2 } },
    { tag: 'line', attrs: { x1: -15, y1: 0, x2: 15, y2: 0, 'stroke-width': 2.2 } },
    { tag: 'line', attrs: { x1: -13, y1: -7.5, x2: 13, y2: -7.5, 'stroke-width': 2.2 } },
    { tag: 'line', attrs: { x1: -13, y1: 7.5, x2: 13, y2: 7.5, 'stroke-width': 2.2 } },
  ],
  route: [
    { tag: 'path', attrs: { d: 'M-11,13 Q-11,0 0,0 Q11,0 11,-13', fill: 'none', 'stroke-width': 2.8, 'stroke-linecap': 'round' } },
    { tag: 'circle', attrs: { cx: -11, cy: 13, r: 3.6 } },
    { tag: 'circle', attrs: { cx: 11, cy: -13, r: 3.6 } },
  ],
  stopwatch: [
    { tag: 'line', attrs: { x1: -5, y1: -16, x2: 5, y2: -16, 'stroke-width': 2.6, 'stroke-linecap': 'round' } },
    { tag: 'line', attrs: { x1: 0, y1: -16, x2: 0, y2: -12, 'stroke-width': 2.6 } },
    { tag: 'circle', attrs: { cy: 2, r: 12, fill: 'none', 'stroke-width': 2.4 } },
    { tag: 'line', attrs: { x1: 0, y1: 2, x2: 0, y2: -5, 'stroke-width': 2.4, 'stroke-linecap': 'round' } },
  ],
  mountain: [{ tag: 'path', attrs: { d: 'M-16,12 L-5,-9 L1,0 L7,-13 L16,12 Z' } }],
  flame: [
    { tag: 'path', attrs: { d: 'M0,-16 C8,-6 11,-1 6,7 C4,12 -4,12 -6,7 C-9,1 -2,-1 0,-16 Z' } },
    { tag: 'path', attrs: { d: 'M1,-5 C5,0 6,4 3.5,7.5 C2,10 -3,9.5 -3,5.5 C-3,2 0.5,0.5 1,-5 Z', fill: '#1B2B56' } },
  ],
  check: [{ tag: 'polyline', attrs: { points: '-13,1 -4,11 14,-12', fill: 'none', 'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' } }],
  double_check: [
    { tag: 'polyline', attrs: { points: '-15,1 -7,9 5,-12', fill: 'none', 'stroke-width': 3.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' } },
    { tag: 'polyline', attrs: { points: '0,9 13,-12', fill: 'none', 'stroke-width': 3.6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' } },
  ],
  clock: [
    { tag: 'circle', attrs: { r: 14, fill: 'none', 'stroke-width': 2.6 } },
    { tag: 'line', attrs: { x1: 0, y1: 0, x2: 0, y2: -8, 'stroke-width': 2.6, 'stroke-linecap': 'round' } },
    { tag: 'line', attrs: { x1: 0, y1: 0, x2: 6, y2: 3, 'stroke-width': 2.6, 'stroke-linecap': 'round' } },
  ],
  user_plus: [
    { tag: 'circle', attrs: { cx: -4, cy: -6, r: 6 } },
    { tag: 'path', attrs: { d: 'M-16,14 C-16,3 8,3 8,14 Z' } },
    { tag: 'line', attrs: { x1: 12, y1: -9, x2: 12, y2: -1, 'stroke-width': 2.8, 'stroke-linecap': 'round' } },
    { tag: 'line', attrs: { x1: 8, y1: -5, x2: 16, y2: -5, 'stroke-width': 2.8, 'stroke-linecap': 'round' } },
  ],
  users: [
    { tag: 'circle', attrs: { cx: -7, cy: -6, r: 5.5 } },
    { tag: 'circle', attrs: { cx: 8, cy: -4, r: 4.5 } },
    { tag: 'path', attrs: { d: 'M-17,14 C-17,4 3,4 3,14 Z' } },
    { tag: 'path', attrs: { d: 'M5,14 C5,7 18,6 18,14 Z' } },
  ],
  podium: [
    { tag: 'rect', attrs: { x: -16.5, y: 0, width: 10, height: 13 } },
    { tag: 'rect', attrs: { x: -5, y: -10, width: 10, height: 23 } },
    { tag: 'rect', attrs: { x: 6.5, y: 5, width: 10, height: 8 } },
  ],
  verified: [
    { tag: 'circle', attrs: { r: 14, fill: 'none', 'stroke-width': 2.6 } },
    { tag: 'polyline', attrs: { points: '-7,0 -2,6 8,-6', fill: 'none', 'stroke-width': 3.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' } },
  ],
  heart: [{ tag: 'path', attrs: { d: 'M0,13 C-13,3 -16,-6 -8.5,-12 C-3.5,-15.5 0,-10.5 0,-7.5 C0,-10.5 3.5,-15.5 8.5,-12 C16,-6 13,3 0,13 Z' } }],
  crown: [{ tag: 'path', attrs: { d: 'M-15,9 L-15,-7 L-6,1 L0,-12 L6,1 L15,-7 L15,9 Z' } }],
  // Pilot brevet: central escutcheon flanked by symmetric feathered wings
  // (scalloped trailing edge reads as feathers at small sizes).
  wings: [
    { tag: 'path', attrs: { d: 'M0,-11 L3.6,-8 V3 L0,9 -3.6,3 V-8 Z' } },
    { tag: 'circle', attrs: { cy: -4, r: 1.6, fill: '#1B2B56' } },
    { tag: 'path', attrs: { d: 'M-4,-6 Q-13,-9 -21,-6 Q-16,-4 -13,-3 Q-16,-2 -11,-1 Q-14,0 -9,0.8 Q-11,2 -5,2.5 Z' } },
    { tag: 'path', attrs: { d: 'M4,-6 Q13,-9 21,-6 Q16,-4 13,-3 Q16,-2 11,-1 Q14,0 9,0.8 Q11,2 5,2.5 Z' } },
  ],
  // Stacked squadron chevrons — the wingman's formation/rank insignia.
  wingman: [
    { tag: 'path', attrs: { d: 'M-11,-3 L0,-12 L11,-3 L11,2 L0,-7 L-11,2 Z' } },
    { tag: 'path', attrs: { d: 'M-11,6 L0,-3 L11,6 L11,11 L0,2 L-11,11 Z' } },
  ],
  star: [{ tag: 'path', attrs: { d: 'M0,-16 L4.7,-4.9 16.5,-4.9 7,2.5 10.6,13.9 0,7 -10.6,13.9 -7,2.5 -16.5,-4.9 -4.7,-4.9 Z' } }],
  sunrise: [
    { tag: 'path', attrs: { d: 'M-10,11 A10 10 0 0 1 10,11 Z' } },
    { tag: 'line', attrs: { x1: -16, y1: 11, x2: 16, y2: 11, 'stroke-width': 2.8, 'stroke-linecap': 'round' } },
    { tag: 'line', attrs: { x1: 0, y1: -15, x2: 0, y2: -9, 'stroke-width': 2.4, 'stroke-linecap': 'round' } },
    { tag: 'line', attrs: { x1: -13, y1: -4, x2: -9, y2: 0, 'stroke-width': 2.4, 'stroke-linecap': 'round' } },
    { tag: 'line', attrs: { x1: 13, y1: -4, x2: 9, y2: 0, 'stroke-width': 2.4, 'stroke-linecap': 'round' } },
  ],
  moon: [{ tag: 'path', attrs: { d: 'M3,-13 A14 14 0 1 0 3,13 A10 10 0 1 1 3,-13 Z' } }],
  flag: [
    { tag: 'rect', attrs: { x: -12, y: -15, width: 3, height: 30, rx: 1 } },
    { tag: 'path', attrs: { d: 'M-9,-14 L13,-9 L-9,-1 Z' } },
  ],
  rocket: [
    { tag: 'path', attrs: { d: 'M0,-16 C7,-9 7,1 4,8 L-4,8 C-7,1 -7,-9 0,-16 Z' } },
    { tag: 'circle', attrs: { cy: -4, r: 3, fill: '#1B2B56' } },
    { tag: 'path', attrs: { d: 'M-4,7 L-10,15 L-3,12 Z M4,7 L10,15 L3,12 Z' } },
  ],
  trophy: [
    { tag: 'path', attrs: { d: 'M-9,-13 H9 V-7 C9,-1 -9,-1 -9,-7 Z' } },
    { tag: 'path', attrs: { d: 'M-9,-11 C-16,-11 -15,-3 -8,-4 M9,-11 C16,-11 15,-3 8,-4', fill: 'none', 'stroke-width': 2.4 } },
    { tag: 'rect', attrs: { x: -2.5, y: -2, width: 5, height: 9 } },
    { tag: 'rect', attrs: { x: -8, y: 9, width: 16, height: 4, rx: 1 } },
  ],
  calendar: [
    { tag: 'rect', attrs: { x: -13, y: -11, width: 26, height: 24, rx: 3, fill: 'none', 'stroke-width': 2.6 } },
    { tag: 'line', attrs: { x1: -13, y1: -4, x2: 13, y2: -4, 'stroke-width': 2.6 } },
    { tag: 'line', attrs: { x1: -7, y1: -15, x2: -7, y2: -8, 'stroke-width': 2.6, 'stroke-linecap': 'round' } },
    { tag: 'line', attrs: { x1: 7, y1: -15, x2: 7, y2: -8, 'stroke-width': 2.6, 'stroke-linecap': 'round' } },
  ],
}

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
        <g
          v-if="icon && !flag"
          class="wp-patch__emblem"
          :transform="`translate(50 ${emblemY}) scale(1.3)`"
        >
          <component :is="part.tag" v-for="(part, i) in ICONS[icon]" :key="i" v-bind="part.attrs" />
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

/* Flag medallion — overlaid on the emblem position (center x, ~36% y).
   Prefixed with .wp-patch so this rule outranks flag-icons' `.fi.fis { width: 1em }`
   (equal specificity → it would otherwise win on load order and squash the flag). */
.wp-patch .wp-patch__flag {
  position:           absolute;
  left:               50%;
  top:                36%;
  transform:          translate(-50%, -50%);
  box-sizing:         border-box;
  width:              38%;
  height:             38%;
  aspect-ratio:       1 / 1;
  border-radius:      50%;
  border:             2.5px solid var(--patch-ring);
  background-size:    cover;
  background-position: center;
  box-shadow:         var(--wp-shadow-xs, 0 1px 4px rgba(0, 0, 0, 0.18));
}
</style>
