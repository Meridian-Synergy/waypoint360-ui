import { writeFileSync } from 'fs'
import sharp from 'sharp'
import { PDFDocument, cmyk, rgb } from 'pdf-lib'
import { textPath, PIN, mapPath, union, hexToCmyk, SKY, NAVY, WHITE } from './lib.mjs'

const OUT = '..'
const MM2PT = 72 / 25.4, DPI = 300, r2 = (v) => Math.round(v * 100) / 100

// ── Variants, built in WpLogo.vue's coordinate space ──────────────────────────
const pinAt = (tx, ty, sc) => {
  const f = (v, o) => v * sc + o
  return [
    { d: mapPath(PIN.body, (x) => f(x, tx), (y) => f(y, ty)), fill: SKY },
    { d: mapPath(PIN.ring, (x) => f(x, tx), (y) => f(y, ty)), fill: WHITE },
    { d: mapPath(PIN.dot,  (x) => f(x, tx), (y) => f(y, ty)), fill: NAVY },
  ]
}
const pinBox = (tx, ty, sc) => ({
  x0: PIN.box.x0 * sc + tx, y0: PIN.box.y0 * sc + ty,
  x1: PIN.box.x1 * sc + tx, y1: PIN.box.y1 * sc + ty,
})

function horizontal({ url = false } = {}) {
  const w1 = textPath('WAYPOINT', { weight: 800, size: 20.5, x: 58, y: 38, ls: 2.6 })
  const w2 = textPath('360',      { weight: 700, size: 20.5, x: 58, y: 63, ls: 5 })
  const shapes = [...pinAt(-3.56, 16.65, 0.68), { d: w1.d, fill: WHITE }, { d: w2.d, fill: SKY }]
  const boxes  = [pinBox(-3.56, 16.65, 0.68), w1.box, w2.box]
  if (url) {
    const u = textPath('waypoint360.eu', { weight: 600, size: 9.5, x: 58.451, y: 80, ls: 2.5 })
    shapes.push({ d: u.d, fill: WHITE }); boxes.push(u.box)
  }
  return { shapes, box: union(...boxes) }
}

function vertical() {
  const w1 = textPath('WAYPOINT', { weight: 800, size: 21, x: 0, y: 130, ls: 2.8 })
  const w2 = textPath('360',      { weight: 700, size: 21, x: 0, y: 158, ls: 7 })
  // text-anchor="middle": recentre on the ink bbox (optical centring, what matters in print)
  const ctr = (t, cx) => {
    const dx = cx - (t.box.x0 + t.box.x1) / 2
    return { d: mapPath(t.d, (x) => x + dx, (y) => y),
             box: { ...t.box, x0: t.box.x0 + dx, x1: t.box.x1 + dx } }
  }
  const c1 = ctr(w1, 100), c2 = ctr(w2, 100)
  return {
    shapes: [...pinAt(48.75, 2, 1.25), { d: c1.d, fill: WHITE }, { d: c2.d, fill: SKY }],
    box: union(pinBox(48.75, 2, 1.25), c1.box, c2.box),
  }
}

const pinOnly = () => ({ shapes: pinAt(0, 0, 1), box: pinBox(0, 0, 1) })

// ── Rendering ─────────────────────────────────────────────────────────────────
/** Crops to the ink bbox and scales: either width OR height, in mm. */
function fit({ shapes, box }, { width, height }) {
  const bw = box.x1 - box.x0, bh = box.y1 - box.y0
  const s = width ? width / bw : height / bh
  const W = r2(bw * s), H = r2(bh * s)
  const paths = shapes.map(({ d, fill }) => ({
    fill, d: mapPath(d, (x) => (x - box.x0) * s, (y) => (y - box.y0) * s),
  }))
  return { paths, W, H }
}

const svg = ({ paths, W, H }, { px = false, bg = null } = {}) => {
  const scale = px ? (DPI / 25.4) : 1
  const attr = px ? `width="${Math.round(W * scale)}" height="${Math.round(H * scale)}"`
                  : `width="${W}mm" height="${H}mm"`
  return `<svg xmlns="http://www.w3.org/2000/svg" ${attr} viewBox="0 0 ${W} ${H}">`
    + (bg ? `<rect width="${W}" height="${H}" fill="${bg}"/>` : '')
    + paths.map((p) => `<path d="${p.d}" fill="${p.fill}"/>`).join('')
    + `</svg>`
}

async function emit(name, variant, dims) {
  const fitted = fit(variant, dims)
  const { paths, W, H } = fitted
  const base = `${OUT}/${name}-${W}x${H}mm`

  // Two vector PDFs, page sized exactly to the artwork.
  // CMYK: written requirement of some printers. RGB: keeps #00AAEF exact, better for DTG.
  for (const space of ['cmjn', 'rvb']) {
    const pdf = await PDFDocument.create()
    pdf.setTitle(`Waypoint360 — ${name} (${space})`); pdf.setProducer('waypoint360-ui/brand/tshirt')
    pdf.setCreator('WpLogo.vue (source de verite) — texte converti en courbes')
    const page = pdf.addPage([W * MM2PT, H * MM2PT])
    for (const p of paths) {
      const col = space === 'cmjn'
        ? (({ c, m, y, k }) => cmyk(c, m, y, k))(hexToCmyk(p.fill))
        : rgb(parseInt(p.fill.slice(1, 3), 16) / 255, parseInt(p.fill.slice(3, 5), 16) / 255, parseInt(p.fill.slice(5, 7), 16) / 255)
      page.drawSvgPath(p.d, { x: 0, y: H * MM2PT, scale: MM2PT, color: col, borderWidth: 0 })
    }
    writeFileSync(`${base}-${space}.pdf`, await pdf.save())
  }

  // PNG at 300 dpi, transparent background, RGB
  await sharp(Buffer.from(svg(fitted, { px: true })))
    .png({ compressionLevel: 9 }).withMetadata({ density: DPI }).toFile(`${base}.png`)

  writeFileSync(`${base}.svg`, svg(fitted))          // archive / editing source, not for the printer
  console.log(`${name.padEnd(22)} ${String(W).padStart(6)} x ${String(H).padEnd(6)} mm   ${paths.length} shapes`)
  return { name, W, H, base }
}

const built = []
built.push(await emit('dos',            horizontal(),              { width: 280 }))
built.push(await emit('dos-url',        horizontal({ url: true }), { width: 280 }))
built.push(await emit('coeur-horizontal', horizontal(),            { width: 90 }))
built.push(await emit('coeur-vertical',   vertical(),              { height: 48 }))
built.push(await emit('coeur-pin',        pinOnly(),               { height: 45 }))
writeFileSync(`${OUT}/manifest.json`, JSON.stringify(built, null, 2))
