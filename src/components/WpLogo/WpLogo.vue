<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** Layout variant */
  variant?: 'horizontal' | 'vertical' | 'icon'
  /** Wordmark color — use 'navy' on light backgrounds, 'white' on dark */
  color?:   'navy' | 'white'
  /** Explicit pixel width. Defaults: horizontal=300, vertical=175, icon=40 */
  width?:   number
}>(), {
  variant: 'horizontal',
  color:   'navy',
})

// Brand mark: a location pin (the "waypoint"), echoing waypoint360.eu's favicon.
// The pin is self-contained (sky body + white aperture + navy dot) so it reads on any
// background; only the wordmark color follows the `color` prop.
const sky  = '#00AAEF'        // pin body — brand accent (--wp-color-sky)
const navy = '#1B2A4A'        // center dot
const ink  = computed(() => props.color === 'white' ? '#FFFFFF' : '#1B2A4A') // wordmark

const defaults = { horizontal: 300, vertical: 175, icon: 40 }
const w = computed(() => props.width ?? defaults[props.variant])
</script>

<template>
  <!-- ── Horizontal (pin left + "WAYPOINT / 360" right) ── -->
  <svg
    v-if="variant === 'horizontal'"
    :width="w"
    viewBox="0 14 205 56"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Waypoint360"
    role="img"
  >
    <!-- Pin scaled to ~the wordmark height and recentred on the text's optical axis
         (y≈43); left-aligned. Tight viewBox crops the dead space so the wordmark stays
         legible at a reasonable rendered width. -->
    <g transform="translate(-3.56, 16.65) scale(0.68)">
      <path d="M 41 70 C 23 53, 17 42, 17 31.5 A 24 24 0 1 1 65 31.5 C 65 42, 59 53, 41 70 Z" :fill="sky"/>
      <circle cx="41" cy="31.5" r="10.5" fill="#FFFFFF"/>
      <circle cx="41" cy="31.5" r="4" :fill="navy"/>
    </g>
    <text x="58" y="38" font-family="'Barlow',Arial,sans-serif" font-weight="800" font-size="20.5" :fill="ink" letter-spacing="2.6">WAYPOINT</text>
    <text x="58" y="63" font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="20.5" :fill="sky" letter-spacing="5">360</text>
  </svg>

  <!-- ── Vertical (pin top + "WAYPOINT / 360" below) ── -->
  <svg
    v-else-if="variant === 'vertical'"
    :width="w"
    viewBox="0 0 200 190"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Waypoint360"
    role="img"
  >
    <g transform="translate(48.75,2) scale(1.25)">
      <path d="M 41 70 C 23 53, 17 42, 17 31.5 A 24 24 0 1 1 65 31.5 C 65 42, 59 53, 41 70 Z" :fill="sky"/>
      <circle cx="41" cy="31.5" r="10.5" fill="#FFFFFF"/>
      <circle cx="41" cy="31.5" r="4" :fill="navy"/>
    </g>
    <text x="100" y="130" text-anchor="middle" font-family="'Barlow',Arial,sans-serif" font-weight="800" font-size="21" :fill="ink" letter-spacing="2.8">WAYPOINT</text>
    <text x="100" y="158" text-anchor="middle" font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="21" :fill="sky" letter-spacing="7">360</text>
  </svg>

  <!-- ── Icon only (header / favicon-like use) ── -->
  <svg
    v-else
    :width="w"
    viewBox="0 0 82 82"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Waypoint360"
    role="img"
  >
    <path d="M 41 70 C 23 53, 17 42, 17 31.5 A 24 24 0 1 1 65 31.5 C 65 42, 59 53, 41 70 Z" :fill="sky"/>
    <circle cx="41" cy="31.5" r="10.5" fill="#FFFFFF"/>
    <circle cx="41" cy="31.5" r="4" :fill="navy"/>
  </svg>
</template>
