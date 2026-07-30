'use client'

import Link from 'next/link'
import { useId } from 'react'
import { usePathname } from 'next/navigation'

// Flags are inline SVG rather than emoji on purpose: Windows renders regional-
// indicator emoji as bare letter pairs ("GB", "AT"), so the emoji route shows
// nothing recognisable to a large share of visitors. Drawn at 21×15 (the 7:5
// ratio both flags actually use) and clipped to a soft radius. The clip ids go
// through useId because Nav mounts this toggle twice (desktop + mobile) and two
// elements sharing one SVG id is a bug waiting for a diverging edit.

function FlagGB({ className = '' }: { className?: string }) {
  const clip = useId()
  return (
    <svg viewBox="0 0 21 15" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clip}>
          <rect width="21" height="15" rx="2.5" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="21" height="15" fill="#012169" />
        {/* Saltire: white broad, red narrow on top. The counterchange offset of
            the real flag is invisible at 21px, so it is deliberately skipped. */}
        <path d="M0 0 21 15M21 0 0 15" stroke="#fff" strokeWidth="3.4" />
        <path d="M0 0 21 15M21 0 0 15" stroke="#C8102E" strokeWidth="1.6" />
        {/* St George's cross sits over the saltire. */}
        <path d="M10.5 0v15M0 7.5h21" stroke="#fff" strokeWidth="5" />
        <path d="M10.5 0v15M0 7.5h21" stroke="#C8102E" strokeWidth="3" />
      </g>
    </svg>
  )
}

function FlagAT({ className = '' }: { className?: string }) {
  const clip = useId()
  return (
    <svg viewBox="0 0 21 15" className={className} aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={clip}>
          <rect width="21" height="15" rx="2.5" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="21" height="15" fill="#ED2939" />
        <rect y="5" width="21" height="5" fill="#fff" />
      </g>
    </svg>
  )
}

/**
 * Language switch that keeps the visitor on the same page in the other
 * language. English is flagged GB and German AT — the audience is the DACH
 * market and the company is Viennese, so Austria is the right German flag here,
 * not Germany's.
 */
export default function LanguageToggle() {
  const pathname = usePathname() || '/'
  const isDe = pathname === '/de' || pathname.startsWith('/de/')

  const enHref = isDe ? pathname.replace(/^\/de(?=\/|$)/, '') || '/' : pathname
  const deHref = isDe ? pathname : pathname === '/' ? '/de' : `/de${pathname}`

  // A flag alone is a weak affordance, so the active one is fully saturated and
  // ringed while the inactive one is dimmed back. Deliberately NOT `grayscale`:
  // desaturating Austria's red-white-red leaves three grey/white bars, which at
  // 21px next to a nav is indistinguishable from a hamburger icon. Holding some
  // colour keeps both readable as flags. The label is visually hidden rather
  // than dropped — a flag is not an accessible name.
  const base =
    'group relative flex h-6 w-[26px] items-center justify-center rounded-[4px] transition-all duration-300 ease-sns-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent'
  const on = 'opacity-100 ring-1 ring-sns-text/25 shadow-[0_1px_5px_-1px_rgba(11,15,34,0.4)]'
  const off = 'opacity-55 saturate-[0.55] hover:opacity-100 hover:saturate-100'

  return (
    <div className="ml-1.5 flex items-center gap-1.5" role="group" aria-label="Language / Sprache">
      <Link
        href={enHref}
        hrefLang="en"
        aria-current={!isDe ? 'true' : undefined}
        className={`${base} ${!isDe ? on : off}`}
      >
        <FlagGB className="h-[15px] w-[21px]" />
        <span className="sr-only">English</span>
      </Link>
      <Link
        href={deHref}
        hrefLang="de"
        aria-current={isDe ? 'true' : undefined}
        className={`${base} ${isDe ? on : off}`}
      >
        <FlagAT className="h-[15px] w-[21px]" />
        <span className="sr-only">Deutsch</span>
      </Link>
    </div>
  )
}
