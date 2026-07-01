'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

// EN / DE switch that keeps the visitor on the same page in the other language.
export default function LanguageToggle() {
  const pathname = usePathname() || '/'
  const isDe = pathname === '/de' || pathname.startsWith('/de/')

  const enHref = isDe ? pathname.replace(/^\/de(?=\/|$)/, '') || '/' : pathname
  const deHref = isDe ? pathname : pathname === '/' ? '/de' : `/de${pathname}`

  const base =
    'rounded px-1.5 py-0.5 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300'

  return (
    <div
      className="ml-1 flex items-center gap-0.5"
      role="group"
      aria-label="Language / Sprache"
    >
      <Link
        href={enHref}
        aria-current={!isDe ? 'true' : undefined}
        className={`${base} ${!isDe ? 'text-sns-text' : 'text-sns-faint hover:text-sns-accent'}`}
      >
        EN
      </Link>
      <span className="text-sns-faint/50" aria-hidden="true">
        /
      </span>
      <Link
        href={deHref}
        aria-current={isDe ? 'true' : undefined}
        className={`${base} ${isDe ? 'text-sns-text' : 'text-sns-faint hover:text-sns-accent'}`}
      >
        DE
      </Link>
    </div>
  )
}
