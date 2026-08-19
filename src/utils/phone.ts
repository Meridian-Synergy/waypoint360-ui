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

/** Any reasonable spelling to E.164, or `null` when it cannot be a number. */
export function toE164(raw: string | null | undefined): string | null {
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
