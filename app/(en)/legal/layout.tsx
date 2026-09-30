import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/site'
import LanguageToggle from '@/components/LanguageToggle'

const legalLinks = [
  { href: '/legal/imprint', label: 'Imprint' },
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/terms', label: 'Terms of Use' },
]

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-sns-border bg-white px-5">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/sns-icon.png" alt="" width={970} height={970} className="h-8 w-8" />
            <span className="text-[15px] font-bold tracking-tight text-sns-text">
              SNS <span className="hidden font-medium text-sns-muted sm:inline">Solutions</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              href="/"
              className="inline-flex min-h-11 items-center text-sm font-medium text-sns-muted transition-colors duration-150 hover:text-sns-text"
            >
              ← Back to site
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-24 pt-12 md:pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-sns-border px-5">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-sns-muted">{SITE.legalName} — Vienna, Austria</p>
          <nav className="-mx-2 flex flex-wrap">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex min-h-11 items-center px-2 text-sm text-sns-muted transition-colors duration-150 hover:text-sns-text"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}
