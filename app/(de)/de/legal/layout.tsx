import Image from 'next/image'
import Link from 'next/link'
import LanguageToggle from '@/components/LanguageToggle'

const legalLinks = [
  { href: '/de/legal/imprint', label: 'Impressum' },
  { href: '/de/legal/privacy', label: 'Datenschutz' },
  { href: '/de/legal/terms', label: 'Nutzungsbedingungen' },
]

export default function LegalLayoutDe({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 border-b border-sns-border bg-white px-5">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between">
          <Link href="/de" className="flex items-center gap-3">
            <Image src="/sns-icon.png" alt="" width={970} height={970} className="h-8 w-8" />
            <span className="text-[15px] font-bold tracking-tight text-sns-text">
              SNS <span className="hidden font-medium text-sns-muted sm:inline">Solutions</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              href="/de"
              className="inline-flex min-h-11 items-center text-sm font-medium text-sns-muted transition-colors duration-150 hover:text-sns-text"
            >
              ← Zur Website
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-24 pt-12 md:pt-16">{children}</main>

      <footer className="border-t border-sns-border px-5">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-sns-muted">SNS Software Solutions GmbH — Wien, Österreich</p>
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
