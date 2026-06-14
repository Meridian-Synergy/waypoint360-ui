<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  /** Layout variant */
  variant?: 'horizontal' | 'vertical' | 'icon'
  /** Color scheme — use 'navy' on light backgrounds, 'white' on dark */
  color?:   'navy' | 'white'
  /** Explicit pixel width. Defaults: horizontal=300, vertical=175, icon=40 */
  width?:   number
}>(), {
  variant: 'horizontal',
  color:   'navy',
})

// Brand mark concept: a compass heading needle (the waypoint) inside a 360° bezel ring.
// Filiation with Meridian: same outer ring + gold accent. New: the orbital ellipses are
// replaced by a navigation needle pointing north.
const main = computed(() => props.color === 'white' ? '#FFFFFF' : '#1B2A4A')
const gold = '#C9A84C'

const defaults = { horizontal: 300, vertical: 175, icon: 40 }
const w = computed(() => props.width ?? defaults[props.variant])
</script>

<template>
  <!-- ── Horizontal (icon left + "WAYPOINT / 360" right) ── -->
  <svg
    v-if="variant === 'horizontal'"
    :width="w"
    viewBox="0 0 310 82"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Waypoint360"
    role="img"
  >
    <!-- Bezel ring -->
    <circle cx="41" cy="41" r="36.5" fill="none" :stroke="main" stroke-width="2.7"/>
    <!-- Compass ticks N / E / S / W -->
    <g :stroke="main" stroke-width="2" stroke-linecap="round">
      <line x1="41" y1="7.5"  x2="41" y2="13"/>
      <line x1="41" y1="69"   x2="41" y2="74.5"/>
      <line x1="7.5" y1="41"  x2="13" y2="41"/>
      <line x1="69"  y1="41"  x2="74.5" y2="41"/>
    </g>
    <!-- Heading needle (north = gold, south = main) -->
    <polygon points="41,15 46.5,41 35.5,41" :fill="gold"/>
    <polygon points="41,67 46.5,41 35.5,41" :fill="main"/>
    <circle cx="41" cy="41" r="3.4" :fill="main"/>
    <!-- Wordmark -->
    <text x="97" y="34" font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="20.5" :fill="main" letter-spacing="2.6">WAYPOINT</text>
    <text x="97" y="59" font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="20.5" :fill="gold" letter-spacing="5">360</text>
  </svg>

  <!-- ── Vertical (icon top + "WAYPOINT / 360" below) ── -->
  <svg
    v-else-if="variant === 'vertical'"
    :width="w"
    viewBox="0 0 200 220"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Waypoint360"
    role="img"
  >
    <circle cx="100" cy="82" r="70" fill="none" :stroke="main" stroke-width="3.2"/>
    <g :stroke="main" stroke-width="2.6" stroke-linecap="round">
      <line x1="100" y1="14"  x2="100" y2="24"/>
      <line x1="100" y1="140" x2="100" y2="150"/>
      <line x1="14"  y1="82"  x2="24"  y2="82"/>
      <line x1="140" y1="82"  x2="150" y2="82"/>
    </g>
    <polygon points="100,25 111,82 89,82" :fill="gold"/>
    <polygon points="100,139 111,82 89,82" :fill="main"/>
    <circle cx="100" cy="82" r="6.6" :fill="main"/>
    <text x="100" y="181" text-anchor="middle" font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="21" :fill="main" letter-spacing="2.8">WAYPOINT</text>
    <text x="100" y="206" text-anchor="middle" font-family="'Barlow',Arial,sans-serif" font-weight="700" font-size="21" :fill="gold" letter-spacing="6">360</text>
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
    <circle cx="41" cy="41" r="36.5" fill="none" :stroke="main" stroke-width="2.7"/>
    <g :stroke="main" stroke-width="2" stroke-linecap="round">
      <line x1="41" y1="7.5"  x2="41" y2="13"/>
      <line x1="41" y1="69"   x2="41" y2="74.5"/>
      <line x1="7.5" y1="41"  x2="13" y2="41"/>
      <line x1="69"  y1="41"  x2="74.5" y2="41"/>
    </g>
    <polygon points="41,15 46.5,41 35.5,41" :fill="gold"/>
    <polygon points="41,67 46.5,41 35.5,41" :fill="main"/>
    <circle cx="41" cy="41" r="3.4" :fill="main"/>
  </svg>
</template>
