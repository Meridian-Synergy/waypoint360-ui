import sharp from 'sharp'
import { readFileSync } from 'fs'
const M = JSON.parse(readFileSync('../manifest.json'))
const S = 3, pad = 50
const at = async (n, left, top) => {
  const v = M.find(m => m.key === n)
  return { input: await sharp(`${v.base}.png`).resize({ width: Math.round(v.W * S) }).toBuffer(), left, top }
}
const label = (t, x, y, size = 20) =>
  ({ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="30">
      <text x="0" y="21" font-family="sans-serif" font-size="${size}" fill="#8a8a8a">${t}</text></svg>`), left: x, top: y })

// ⚠️ LES SEPT VISUELS, PAS CINQ. Une planche d'aperçu qui en omet deux dit que
// le dossier n'en contient que cinq, et c'est ce qu'on lit en premier.
await sharp({ create: { width: 980, height: 1660, channels: 4, background: '#0d0d0d' } })
  .composite([
    label('DOS — 280 x 71,9 mm', pad, 20),            await at('dos', pad, 55),
    label('DOS avec URL — 280 x 101,8 mm', pad, 330), await at('dos-url', pad, 365),
    label('COEUR horizontal — 90 x 23,1 mm', pad, 730),  await at('coeur-horizontal', pad, 765),
    label('vertical — 38,8 x 48 mm', pad, 850),          await at('coeur-vertical', pad, 885),
    label('pin — 34,6 x 45 mm', 380, 850),               await at('coeur-pin', 380, 885),

    label('COTES DE COMMANDE', pad, 1120, 16),
    label('dos-url — 250 x 90,9 mm', pad, 1155),      await at('dos-url-250', pad, 1190),
    label('COEUR horizontal — 100 x 25,7 mm', pad, 1480), await at('coeur-horizontal-100', pad, 1515),
    label('(vus a la meme echelle : 3 px = 1 mm)', 560, 1610, 16),
  ]).png().toFile('../apercu-fond-noir.png')
console.log('ok')
