/**
 * Phone numbers, one canonical form.
 *
 * Stored as E.164 — `+33612345678`: comparable, sortable, and dialable as is.
 *
 * WHY THIS LIVES IN THE DESIGN SYSTEM: the same rule was already written twice,
 * in the API and in the app. A third copy for the public website would have made
 * three truths that diverge at the first fix — and on a phone number, a
 * divergence is silent. Both browser consumers now share this one.
 *
 * The API keeps its own copy: it runs on the server and cannot import this
 * package. Its test vectors are identical, word for word, so the two fall
 * together if either drifts.
 *
 * NORMALISING IS NOT CONSTRAINING INPUT. Spaces, dots, dashes, a leading zero
 * or an international prefix all describe the same number. Forcing a shape on
 * the person typing, to spare the code some work, is what makes forms hateful.
 */

const FR_TRUNK = /^0[1-9]\d{8}$/

/**
 * Local forms that can be read WITHOUT GUESSING, country by country.
 *
 * A local number carries no dialling code, so it can only be turned into E.164
 * when the national plan leaves one reading. That is the whole criterion for a
 * country to appear here — convenience is not.
 *
 * `trunk`: the plan dials a leading `0` inside the country and drops it abroad.
 * It is REQUIRED in the input for these countries. Without it, nine German
 * digits may be a subscriber number missing its area code, and we would build
 * someone else's number. France alone restores a lost zero (see below), because
 * that loss was measured in our own imports and its result is checked.
 *
 * `nsn`: the national significant number, i.e. what follows the dialling code.
 *
 * ⛔ ITALY IS ABSENT ON PURPOSE. It KEEPS its trunk zero in the international
 * form (`+39 06…`) and its lengths vary: no rule reads `06 1234567` without a
 * guess. Its local forms stay refused.
 *
 * Added on 2026-09-27: `936555555`, copied from a Barcelona company's website,
 * became `+33936555555` — a French number that does not exist — because the
 * field could not read a Spanish local form and fell back on France.
 */
const LOCAL_PLANS: Record<string, { code: string; trunk: boolean; nsn: RegExp }> = {
  // Nine digits, no trunk prefix: 6 and 7 mobile, 8 and 9 fixed.
  ES: { code: '34', trunk: false, nsn: /^[6-9]\d{8}$/ },
  // Eight digits for a fixed line, nine for a mobile (045x to 049x).
  // ⚠️ Liège's fixed lines ALSO start with 4 (04 xxx xx xx): the length tells
  // them apart, not the first digit.
  BE: { code: '32', trunk: true, nsn: /^(4[5-9]\d{7}|[1-9]\d{7})$/ },
  CH: { code: '41', trunk: true, nsn: /^[1-9]\d{8}$/ },
  NL: { code: '31', trunk: true, nsn: /^[1-9]\d{8}$/ },
  // Variable length: area codes of two to five digits. The conversion itself is
  // unambiguous (drop the 0, prefix +49); only the length is loose, and E.164
  // caps the whole number at fifteen digits.
  DE: { code: '49', trunk: true, nsn: /^[1-9]\d{5,12}$/ },
}

/**
 * Any reasonable spelling to E.164, or `null` when it cannot be a number.
 *
 * ⚠️ `country` IS NOT A LOCK. A number already written internationally passes
 * through UNCHANGED whatever the record's country: a Swiss company near the
 * border may legitimately publish a French number, and refusing it would invent
 * a problem that does not exist.
 *
 * The parameter only governs the LOCAL form — the one carrying no dialling
 * code. `079 123 45 67` does not say where it comes from: this function used to
 * assume France and returned `+33791234567`, a number belonging to someone
 * else. Measured on 2026-08-24 while harvesting a Swiss site.
 *
 * Outside France it returns `null` rather than a plausible falsehood — except
 * for the countries of `LOCAL_PLANS`, whose plan leaves a single reading. That
 * is the principle this module already stated: reshaping what we do not
 * understand is worse than leaving it alone.
 *
 * ⚠️ An omitted `country` means FRANCE, so the 890 already-normalised French
 * records keep working. Callers that know the country MUST pass it.
 *
 * ⚠️ THE API KEEPS ITS OWN COPY of this rule, with identical test vectors. Any
 * change here must be mirrored there, or the two silently diverge — and on a
 * phone number a divergence is invisible.
 */
export function toE164(raw: string | null | undefined, country = 'FR'): string | null {
  const v = String(raw ?? '').replace(/[^\d+]/g, '')
  if (!v) return null

  if (v.startsWith('+33')) {
    // `+330612…` occurs in the wild: the trunk zero survives the prefix.
    const rest = v.slice(3).replace(/^0/, '')
    return /^[1-9]\d{8}$/.test(rest) ? `+33${rest}` : null
  }
  // A foreign number passes through UNCHANGED. Reshaping what we do not
  // understand into a French pattern is worse than leaving it alone.
  if (v.startsWith('+')) return /^\+\d{8,15}$/.test(v) ? v : null
  // ── LOCAL form, no dialling code ────────────────────────────────────────────
  // The only place the country matters. A country whose plan leaves a single
  // reading is converted; any other stays refused, because guessing would
  // produce a plausible falsehood.
  const c = country.toUpperCase()
  if (c !== 'FR') {
    const plan = LOCAL_PLANS[c]
    if (!plan) return null
    const nsn = plan.trunk
      ? (v.startsWith('0') ? v.slice(1) : null)
      : v
    return nsn && plan.nsn.test(nsn) ? `+${plan.code}${nsn}` : null
  }

  if (FR_TRUNK.test(v)) return `+33${v.slice(1)}`

  // The lost leading zero — usually a spreadsheet that read the number as a
  // number. Restored only when the result is a valid French number.
  if (/^[1-9]\d{8}$/.test(v)) return `+33${v}`

  return null
}

/** `+33612345678` → `06 12 34 56 78`. Foreign numbers are left as they are. */
export function formatPhone(e164: string | null | undefined): string {
  const v = String(e164 ?? '').trim()
  if (!v.startsWith('+33') || v.length !== 12) return v
  return `0${v.slice(3)}`.replace(/(\d{2})(?=\d)/g, '$1 ').trim()
}

/**
 * Dialling codes for the countries the directory loads records from. Used ONLY
 * to tell whether an already-international number matches the record's country
 * — never to build one.
 */
export const DIAL_CODES: Record<string, string[]> = {
  FR: ['33', '262', '590', '594', '596'], // mainland and overseas
  BE: ['32'],  CH: ['41'],  DE: ['49'],  ES: ['34'],  IT: ['39'],
  PT: ['351'], LU: ['352'], NL: ['31'],  GB: ['44'],  IE: ['353'],
  US: ['1'],   CA: ['1'],                // one plan for North America
  AT: ['43'],  DK: ['45'],  SE: ['46'],  NO: ['47'],  FI: ['358'], PL: ['48'],
  CZ: ['420'], SK: ['421'], HU: ['36'],  RO: ['40'],  BG: ['359'], HR: ['385'],
  SI: ['386'], GR: ['30'],  EE: ['372'], LV: ['371'], LT: ['370'], MT: ['356'],
  CY: ['357'], IS: ['354'], LI: ['423'], MC: ['377'], AD: ['376'],
  AU: ['61'],  NZ: ['64'],  JP: ['81'],  KR: ['82'],  SG: ['65'],  AE: ['971'],
  SA: ['966'], IL: ['972'], IN: ['91'],  BR: ['55'],  MX: ['52'],  ZA: ['27'],
}

/**
 * Does the number match the record's country? `null` when the question is
 * meaningless — no number, no country, or a country outside the table.
 *
 * ⚠️ NEVER BLOCK ON THIS. A mismatch is INFORMATION, not a fault: a company near
 * a border, an offshored switchboard, a foreign subsidiary all produce one
 * legitimately. Measured across the directory's 913 numbers: 5 mismatches, of
 * which 3 were obvious junk and one possibly genuine. The signal is useful
 * precisely because it is rare.
 */
export function phoneCountryMismatch(
  e164: string | null | undefined,
  country: string | null | undefined,
): { expected: string[]; found: string | null } | null {
  const v = String(e164 ?? '').trim()
  const c = String(country ?? '').toUpperCase()
  if (!v.startsWith('+') || !c) return null

  const expected = DIAL_CODES[c]
  if (!expected) return null

  // Longest first: otherwise `+351…` reads as `+35`.
  const all = Object.values(DIAL_CODES).flat().sort((a, b) => b.length - a.length)
  const found = all.find(i => v.startsWith(`+${i}`)) ?? null

  if (found && expected.includes(found)) return null
  return { expected, found }
}

/**
 * Un exemple de numéro, au format INTERNATIONAL, pour le pays de la fiche.
 *
 * ⛔ LE CHAMP MONTRAIT « 06 12 34 56 78 », une forme locale française, partout,
 * y compris sur une fiche suisse ou espagnole (signalé le 2026-09-27). On veut
 * voir la forme qu'on attend : l'indicatif du pays, puis le numéro. Le champ
 * accepte toujours les formes locales sans ambiguïté (cf. `LOCAL_PLANS`) ;
 * l'exemple dit seulement la forme la plus sûre.
 *
 * Ce sont des numéros d'EXEMPLE, au format national usuel, jamais attribués à
 * quelqu'un de précis. Un pays absent de la table retombe sur son indicatif
 * seul, puis sur un « + » nu. Seule l'ABSENCE de pays vaut la France, comme
 * `toE164` : c'est le cas des numéros personnels.
 */
const EXEMPLES: Record<string, string> = {
  FR: '+33 6 12 34 56 78',
  BE: '+32 470 12 34 56',
  CH: '+41 79 123 45 67',
  LU: '+352 621 123 456',
  DE: '+49 151 23456789',
  NL: '+31 6 12345678',
  ES: '+34 612 34 56 78',
  IT: '+39 312 345 6789',
  PT: '+351 912 345 678',
  GB: '+44 7400 123456',
  IE: '+353 85 123 4567',
  AT: '+43 664 1234567',
  DK: '+45 20 12 34 56',
  SE: '+46 70 123 45 67',
  NO: '+47 412 34 567',
  FI: '+358 40 123 4567',
  PL: '+48 512 345 678',
  CZ: '+420 601 123 456',
  SK: '+421 912 345 678',
  HU: '+36 20 123 4567',
  RO: '+40 712 345 678',
  BG: '+359 87 123 4567',
  HR: '+385 91 234 5678',
  SI: '+386 31 234 567',
  GR: '+30 691 234 5678',
  EE: '+372 5123 4567',
  LV: '+371 21 234 567',
  LT: '+370 612 34567',
  MT: '+356 7912 3456',
  CY: '+357 96 123456',
  IS: '+354 611 1234',
  LI: '+423 660 1234',
  US: '+1 202 555 0123',
  CA: '+1 416 555 0123',
  MC: '+377 6 12 34 56 78',
  AD: '+376 312 345',
  AU: '+61 412 345 678',
  NZ: '+64 21 123 4567',
  JP: '+81 90 1234 5678',
  KR: '+82 10 1234 5678',
  SG: '+65 8123 4567',
  AE: '+971 50 123 4567',
  SA: '+966 50 123 4567',
  IL: '+972 50 123 4567',
  IN: '+91 98765 43210',
  BR: '+55 11 91234 5678',
  MX: '+52 55 1234 5678',
  ZA: '+27 82 123 4567',
}

export function exempleInternational(country: string | null | undefined = 'FR'): string {
  const c = String(country ?? '').trim().toUpperCase() || 'FR'
  if (EXEMPLES[c]) return EXEMPLES[c]!
  // ⛔ Un pays CONNU mais absent de la table ne reçoit jamais l'exemple français :
  // un « +33 » sur une fiche suédoise enseignerait le mauvais indicatif.
  const code = DIAL_CODES[c]?.[0]
  return code ? `+${code} …` : '+…'
}
