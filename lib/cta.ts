/**
 * The primary call-to-action style, in one place.
 *
 * Indigo, deliberately: a rose CTA was tried and read as a harsh red against
 * the cool porcelain instead of as urgency. The button separates itself by
 * being the only *solid saturated fill* on the page — everything else uses
 * indigo as text, a hairline or a tint — which is a stronger signal than a
 * different hue, and it keeps the palette to one family.
 *
 * One rule keeps it working: at most one solid CTA in view at a time. A second
 * one means the section has two primary actions, which means it has none. Use
 * `CTA_SECONDARY` for the companion action beside it.
 */
const CTA_BASE =
  'group inline-flex items-center gap-2 rounded-full font-semibold text-white transition-all duration-300 ease-sns-out hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent bg-sns-indigo hover:bg-sns-accent shadow-[0_8px_30px_-8px_rgba(79,70,229,0.7)] hover:shadow-[0_14px_40px_-8px_rgba(79,70,229,0.85)]'

/** Standard size — page and section CTAs. */
export const CTA_PRIMARY = `${CTA_BASE} px-6 py-3 text-sm`

/** Slightly tighter, for CTAs sitting inside a card. */
export const CTA_PRIMARY_SM = `${CTA_BASE} px-5 py-3 text-sm`

/** The quiet companion action. Deliberately not rose — see rule 2 above. */
export const CTA_SECONDARY =
  'group inline-flex items-center gap-2 rounded-full border border-sns-text/15 bg-white/60 px-5 py-3 font-mono text-sm text-sns-text transition-all duration-300 ease-sns-out hover:border-sns-indigo/40 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent'
