import * as fontkit from 'fontkit'

// Barlow woff2: single source, served by waypoint360-web. Override with BARLOW_DIR.
const FONTS = process.env.BARLOW_DIR ?? new URL('../../../../waypoint360-web/public/fonts/', import.meta.url).pathname
export const SKY = '#00AAEF', NAVY = '#1B2A4A', WHITE = '#FFFFFF'

const cache = {}
const font = (w) => (cache[w] ??= fontkit.openSync(`${FONTS}barlow-${w}-latin.woff2`))

/** Outlines a string in WpLogo's coordinate space. Mirrors <text>: fontkit layout
 *  (GPOS kerning included) plus letter-spacing inserted between glyphs. */
export function textPath(str, { weight, size, x, y, ls = 0 }) {
  const f = font(weight), run = f.layout(str), s = size / f.unitsPerEm
  let cx = x, d = '', top = Infinity, bottom = -Infinity, left = Infinity, right = -Infinity
  run.glyphs.forEach((g, i) => {
    const p = run.positions[i]
    const gx = cx + p.xOffset * s, gy = y - p.yOffset * s
    if (g.path.commands.length) {
      d += g.path.transform(s, 0, 0, -s, gx, gy).toSVG() + ' '
      const b = g.bbox
      top = Math.min(top, gy - b.maxY * s); bottom = Math.max(bottom, gy - b.minY * s)
      left = Math.min(left, gx + b.minX * s); right = Math.max(right, gx + b.maxX * s)
    }
    cx += p.xAdvance * s + ls
  })
  return { d: d.trim(), box: { x0: left, y0: top, x1: right, y1: bottom } }
}

// --- Pure M/C/L/Z primitives: no elliptical arcs, safe for both pdf-lib and librsvg.
const K = 0.5522847498307936
const n = (v) => (Math.round(v * 1e4) / 1e4)

export function circlePath(cx, cy, r) {
  const k = r * K
  return `M ${n(cx - r)} ${n(cy)} `
    + `C ${n(cx - r)} ${n(cy - k)} ${n(cx - k)} ${n(cy - r)} ${n(cx)} ${n(cy - r)} `
    + `C ${n(cx + k)} ${n(cy - r)} ${n(cx + r)} ${n(cy - k)} ${n(cx + r)} ${n(cy)} `
    + `C ${n(cx + r)} ${n(cy + k)} ${n(cx + k)} ${n(cy + r)} ${n(cx)} ${n(cy + r)} `
    + `C ${n(cx - k)} ${n(cy + r)} ${n(cx - r)} ${n(cy + k)} ${n(cx - r)} ${n(cy)} Z`
}

/** WpLogo.vue's pin, upper semicircle rewritten as two cubic Beziers. */
const R = 24, CX = 41, CY = 31.5, KR = n(R * K)
export const PIN = {
  body: `M 41 70 C 23 53, 17 42, 17 31.5 `
      + `C 17 ${n(CY - KR)} ${n(CX - KR)} 7.5 41 7.5 `
      + `C ${n(CX + KR)} 7.5 65 ${n(CY - KR)} 65 31.5 `
      + `C 65 42, 59 53, 41 70 Z`,
  ring: circlePath(CX, CY, 10.5),
  dot:  circlePath(CX, CY, 4),
  box:  { x0: 17, y0: 7.5, x1: 65, y1: 70 },
}

/** Transforms an absolute path (M/L/C/Q/Z): x'=x*s+tx, y'=y*s+ty. */
export function transformPath(d, s, tx, ty) {
  return d.replace(/([MLCQZmlcqz])|(-?\d*\.?\d+(?:e-?\d+)?)/g, (m, cmd, num, off, str) => {
    if (cmd) { if (/[mlcqz]/.test(cmd)) throw new Error('path relatif non supporte'); return cmd }
    return num // remplace au second passage
  })
}

/** Applies an affine transform to an absolute path, alternating x and y. */
export function mapPath(d, fx, fy) {
  const toks = d.match(/[A-Za-z]|-?\d*\.?\d+(?:e-?\d+)?/g) || []
  let out = [], axis = 0
  for (const t of toks) {
    if (/[A-Za-z]/.test(t)) { out.push(t); axis = 0 }
    else { out.push(String(n(axis % 2 === 0 ? fx(+t) : fy(+t)))); axis++ }
  }
  return out.join(' ')
}

export const union = (...boxes) => ({
  x0: Math.min(...boxes.map(b => b.x0)), y0: Math.min(...boxes.map(b => b.y0)),
  x1: Math.max(...boxes.map(b => b.x1)), y1: Math.max(...boxes.map(b => b.y1)),
})

/** #RRGGBB -> {c,m,y,k} (arithmetic conversion, documented in the printer sheet). */
export function hexToCmyk(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255, g = parseInt(hex.slice(3, 5), 16) / 255, b = parseInt(hex.slice(5, 7), 16) / 255
  const k = 1 - Math.max(r, g, b)
  if (k === 1) return { c: 0, m: 0, y: 0, k: 1 }
  return { c: (1 - r - k) / (1 - k), m: (1 - g - k) / (1 - k), y: (1 - b - k) / (1 - k), k }
}
