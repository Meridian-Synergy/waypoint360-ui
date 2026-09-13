/**
 * La planche de placement sans ses cotes : deux t-shirts noirs et les visuels.
 *
 * ⛔ ELLE IMPORTE LA GÉOMÉTRIE, ELLE NE LA RECOPIE PAS. C'est l'image qu'on
 * regarde et qu'on fait circuler ; si elle plaçait le motif ailleurs que la
 * planche technique, c'est elle qu'on croirait.
 *
 * ⚠️ RECADRÉE SUR LES DEUX SILHOUETTES, et les panneaux rapprochés. La planche
 * cotée les écarte pour loger la colonne de cotes entre eux ; sans cotes, cet
 * écart n'est plus une respiration, c'est un trou.
 *
 * Usage : node planche-nue.mjs <clé dos> <clé coeur> <sortie.png>
 */
import sharp from 'sharp'
import { TEE_DOS, TEE_DEVANT, HEM, img, poser } from './silhouette.mjs'

const [cleDos, cleCoeur, sortie] = process.argv.slice(2)
if (!sortie) throw new Error('usage : node planche-nue.mjs <clé dos> <clé coeur> <sortie.png>')
const { dos, coeur, dW, dH, cW, cH, dTop, cTop, cCx } = poser(cleDos, cleCoeur)

const TX1 = 20, TX2 = 180, TY = 8
const panel = (tx, tee, content) => `<g transform="translate(${tx},${TY})">
  <path d="${tee}" fill="#141414" stroke="#3a3a3a" stroke-width="0.8"/>
  ${content}</g>`

const X0 = TX1 + 28 - 6, X1 = TX2 + 172 + 6   // corps du tee : 28 -> 172 dans chaque panneau
const Y0 = TY + 12 - 6,  Y1 = TY + HEM + 6
const W = X1 - X0, H = Y1 - Y0

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}mm" height="${H}mm" viewBox="${X0} ${Y0} ${W} ${H}">
<rect x="${X0}" y="${Y0}" width="${W}" height="${H}" fill="#0d0d0d"/>
${panel(TX1, TEE_DOS,    img(dos,   100 - dW / 2, dTop, dW, dH))}
${panel(TX2, TEE_DEVANT, img(coeur, cCx - cW / 2, cTop, cW, cH))}
</svg>`

await sharp(Buffer.from(svg), { density: 110 }).png().toFile(sortie)
console.log(`${cleDos} + ${cleCoeur} → ${sortie}`)
