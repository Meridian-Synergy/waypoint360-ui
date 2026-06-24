# Brand assets — Stripe

Raster exports of the Waypoint360 mark for the Stripe Dashboard *Branding*
settings (Settings → Branding). Derived from the single source of truth
[`WpLogo`](../../src/components/WpLogo/WpLogo.vue) — same paths and colors as the
favicon / PWA icon.

## Colors
- Navy: `#1B2A4A` (brand color)
- Sky: `#00AAEF` (accent color)

## Files

| File | Size | Background | Use |
|---|---|---|---|
| `stripe-icon-navy-1024.png` | 1024² | navy rounded square (opaque) | **Stripe Icon** — recommended; matches the PWA icon |
| `stripe-icon-white-1024.png` | 1024² | white rounded square (opaque) | Light alternative |
| `stripe-pin-transparent-1024.png` | 1024² | transparent | Pin only, for composing on a brand surface |
| `stripe-logo-horizontal-transparent.png` | 1640×448 | transparent | **Stripe Logo** — navy wordmark, most versatile |
| `stripe-logo-horizontal-white.png` | 1640×448 | white | Navy wordmark on white |
| `stripe-logo-horizontal-navy.png` | 1640×448 | navy | White wordmark, for dark headers |

In Stripe: upload the navy icon to **Icon**, a horizontal logo to **Logo**, and
set brand color `#1B2A4A` / accent `#00AAEF`.

## Regeneration
Not built by CI. Re-export from `WpLogo` (icon + horizontal variants) if the mark
changes — the wordmark uses Barlow 800 (WAYPOINT) and 700 (360).
