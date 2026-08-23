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
 * Outside France it now returns `null` rather than a plausible falsehood. That
 * is the principle this module already stated without applying it to the local
 * form: reshaping what we do not understand is worse than leaving it alone.
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
  // The only place the country matters. Outside France we assume nothing: the
  // national plans differ too much — Italy KEEPS its trunk zero, Spain has none.
  // Guessing would produce a plausible falsehood.
  if (country.toUpperCase() !== 'FR') return null

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
