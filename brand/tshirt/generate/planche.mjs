import sharp from 'sharp'
import { GARMENT, TEE_DOS, TEE_DEVANT, POSE, NECK, HPS, HEM, LEG, img, poser } from './silhouette.mjs'

const T = (x, y, t, o = {}) => `<text x="${x}" y="${y}" font-family="sans-serif" font-size="${o.s || 4}" fill="${o.f || '#00AAEF'}"${o.a ? ` text-anchor="${o.a}"` : ''}${o.w ? ' font-weight="bold"' : ''}>${t}</text>`

const { dos, coeur, dW, dH, cW, cH, dTop, cTop, cCx } = poser('dos', 'coeur-horizontal')

const panel = (title, tx, tee, content) => `<g transform="translate(${tx},44)">
  ${T(100, -6, title, { s: 7, f: '#fff', a: 'middle', w: 1 })}
  <path d="${tee}" fill="#141414" stroke="#3a3a3a" stroke-width="0.8"/>
  <line x1="100" y1="12" x2="100" y2="${HEM + 2}" stroke="#444" stroke-width="0.3" stroke-dasharray="2,2"/>
  ${content}</g>`

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="420mm" height="${LEG + 70}mm" viewBox="0 0 420 ${LEG + 70}">
<rect width="420" height="${LEG + 70}" fill="#0d0d0d"/>
${T(20, 15, 'Waypoint360 — placement sur t-shirt noir', { s: 9, f: '#fff', w: 1 })}
${T(20, 24, `Creator 2.0 taille L (${GARMENT.widthMm} x ${GARMENT.lengthMm} mm). Dos cote sous l'encolure arriere, coeur sous le point haut d'epaule. Silhouette et motifs a la meme echelle.`, { s: 4.5, f: '#8a8a8a' })}
${panel('DOS', 20, TEE_DOS, `
  ${img(dos, 100 - dW / 2, dTop, dW, dH)}
  <line x1="${100 - dW / 2}" y1="${dTop - 5}" x2="${100 + dW / 2}" y2="${dTop - 5}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T(100, dTop - 6.5, `${dos.W} mm de large`, { a: 'middle' })}
  <line x1="${100 - dW / 2 - 6}" y1="${NECK}" x2="${100 - dW / 2 - 6}" y2="${dTop}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T(100 - dW / 2 - 8, (NECK + dTop) / 2, `${POSE.dosMm} mm`, { a: 'end' })}
  ${T(100 - dW / 2 - 8, (NECK + dTop) / 2 + 5, "sous l'encolure", { a: 'end' })}
  ${T(100, LEG, "centre sur l'axe du dos, haut du motif cote", { s: 4.5, f: '#8a8a8a', a: 'middle' })}`)}
${panel('DEVANT (vu de face)', 220, TEE_DEVANT, `
  ${img(coeur, cCx - cW / 2, cTop, cW, cH)}
  <line x1="${cCx - cW / 2}" y1="${cTop - 5}" x2="${cCx + cW / 2}" y2="${cTop - 5}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T(cCx, cTop - 6.5, `${coeur.W} mm de large`, { a: 'middle' })}
  <line x1="100" y1="${cTop + cH + 6}" x2="${cCx}" y2="${cTop + cH + 6}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T((100 + cCx) / 2, cTop + cH + 11, `${Math.round(POSE.coeurAxeMm)} mm`, { a: 'middle' })}
  ${T((100 + cCx) / 2, cTop + cH + 16, 'moitie de la demi-largeur', { s: 3.6, a: 'middle' })}
  <line x1="115" y1="${HPS}" x2="${cCx + cW / 2 + 4}" y2="${HPS}" stroke="#00AAEF" stroke-width="0.3" stroke-dasharray="1.5,1.5"/>
  <line x1="${cCx + cW / 2 + 4}" y1="${HPS}" x2="${cCx + cW / 2 + 4}" y2="${cTop + cH / 2}" stroke="#00AAEF" stroke-width="0.4"/>
  ${T(cCx + cW / 2 + 6, cTop + cH / 2 - 3, `${POSE.coeurMm} mm sous le point`, {})}
  ${T(cCx + cW / 2 + 6, cTop + cH / 2 + 2, "haut d'epaule, au centre", {})}
  ${T(100, LEG, 'coeur GAUCHE du porteur = a droite sur ce dessin', { s: 4.5, f: '#ff8a3d', a: 'middle' })}`)}
${T(20, LEG + 62, "Fond transparent obligatoire : en DTG sur textile fonce, la sous-couche blanche epouse la silhouette du visuel.", { s: 4.5, f: '#8a8a8a' })}
</svg>`
await sharp(Buffer.from(svg), { density: 110 }).png().toFile('../planche-placement.png')
console.log('ok')
