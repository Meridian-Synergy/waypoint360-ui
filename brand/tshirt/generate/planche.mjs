import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
const M = JSON.parse(readFileSync('../manifest.json'))
const g = (n) => M.find(m => m.name === n)

// Silhouette: body 57->143 = 86 u for 478 mm wide, shoulder y=20, hem y=150 (~720 mm).
const TEE = 'M 62 20 L 85 12 Q 100 24 115 12 L 138 20 L 172 42 L 152 72 L 143 62 L 143 150 L 57 150 L 57 62 L 48 72 L 28 42 Z'
const K = 5.56, mm = (v) => v / K
const b64 = (f) => readFileSync(f).toString('base64')
const img = (v, x, y, w, h) => `<image href="data:image/png;base64,${b64(v.base + '.png')}" x="${x}" y="${y}" width="${w}" height="${h}"/>`
const T = (x, y, t, o = {}) => `<text x="${x}" y="${y}" font-family="sans-serif" font-size="${o.s || 4}" fill="${o.f || '#00AAEF'}"${o.a ? ` text-anchor="${o.a}"` : ''}${o.w ? ' font-weight="bold"' : ''}>${t}</text>`

const dos = g('dos'), coeur = g('coeur-horizontal')
const dW = mm(dos.W), dH = mm(dos.H), dTop = 17 + mm(90)
const cW = mm(coeur.W), cH = mm(coeur.H), cTop = 16 + mm(190), cCx = 100 + mm(70)

const panel = (title, tx, content) => `<g transform="translate(${tx},44)">
  ${T(100, -6, title, { s: 7, f: '#fff', a: 'middle', w: 1 })}
  <path d="${TEE}" fill="#141414" stroke="#3a3a3a" stroke-width="0.8"/>
  <line x1="100" y1="12" x2="100" y2="152" stroke="#444" stroke-width="0.3" stroke-dasharray="2,2"/>
  ${content}</g>`

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420mm" height="230mm" viewBox="0 0 420 230">
<rect width="420" height="230" fill="#0d0d0d"/>
${T(20, 15, 'Waypoint360 — placement sur t-shirt noir', { s: 9, f: '#fff', w: 1 })}
${T(20, 24, "Cotes en mm sur le vetement fini (base taille L). Silhouette et motifs a la meme echelle.", { s: 4.5, f: '#8a8a8a' })}
${panel('DOS', 20, `
  ${img(dos, 100 - dW / 2, dTop, dW, dH)}
  <line x1="${100 - dW / 2}" y1="${dTop - 5}" x2="${100 + dW / 2}" y2="${dTop - 5}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T(100, dTop - 6.5, `${dos.W} mm de large`, { a: 'middle' })}
  <line x1="${100 - dW / 2 - 6}" y1="17" x2="${100 - dW / 2 - 6}" y2="${dTop}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T(100 - dW / 2 - 8, (17 + dTop) / 2, '90 mm', { a: 'end' })}
  ${T(100 - dW / 2 - 8, (17 + dTop) / 2 + 5, "sous l'encolure", { a: 'end' })}
  ${T(100, 163, "centre sur l'axe du dos", { s: 4.5, f: '#8a8a8a', a: 'middle' })}`)}
${panel('DEVANT (vu de face)', 220, `
  ${img(coeur, cCx - cW / 2, cTop, cW, cH)}
  <line x1="${cCx - cW / 2}" y1="${cTop - 5}" x2="${cCx + cW / 2}" y2="${cTop - 5}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T(cCx, cTop - 6.5, `${coeur.W} mm de large`, { a: 'middle' })}
  <line x1="100" y1="${cTop + cH + 6}" x2="${cCx}" y2="${cTop + cH + 6}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T((100 + cCx) / 2, cTop + cH + 11, '70 mm', { a: 'middle' })}
  <line x1="${cCx + cW / 2 + 4}" y1="16" x2="${cCx + cW / 2 + 4}" y2="${cTop}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T(cCx + cW / 2 + 6, (16 + cTop) / 2, '190 mm sous', {})}
  ${T(cCx + cW / 2 + 6, (16 + cTop) / 2 + 5, "la couture d'epaule", {})}
  ${T(100, 163, 'coeur GAUCHE du porteur = a droite sur ce dessin', { s: 4.5, f: '#ff8a3d', a: 'middle' })}`)}
${T(20, 222, "Fond transparent obligatoire : en DTG sur textile fonce, la sous-couche blanche epouse la silhouette du visuel.", { s: 4.5, f: '#8a8a8a' })}
</svg>`
await sharp(Buffer.from(svg), { density: 110 }).png().toFile('../planche-placement.png')
console.log('ok')
