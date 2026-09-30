/**
 * The call-to-action styles, in one place.
 *
 * A button is a rectangle with a label: solid cobalt for the one primary
 * action, a white bordered one for the companion. Cobalt is the site's only
 * action colour (see tailwind.config.ts) and appears on nothing you cannot
 * press. Hover darkens the fill — gaining prominence, never losing it — the
 * arrow inside nudges right, and a press sinks the button slightly so it
 * answers the click. No glow, no pill. Min height 44px so it is an honest tap
 * target on a phone (Fitts).
 *
 * One rule keeps it working: at most one solid CTA in view at a time. A second
 * one means the section has two primary actions, which means it has none.
 */
const CTA_BASE =
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-sns px-5 py-3 text-[15px] font-semibold transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent'

/** The primary action. */
export const CTA_PRIMARY = `${CTA_BASE} bg-sns-action text-white hover:bg-sns-action-hover`

/** Kept as a name for existing call sites; same size as CTA_PRIMARY now. */
export const CTA_PRIMARY_SM = CTA_PRIMARY

/** The quiet companion action. */
export const CTA_SECONDARY = `${CTA_BASE} border border-sns-border bg-white text-sns-text hover:border-sns-text/50 hover:bg-sns-surface-2`
