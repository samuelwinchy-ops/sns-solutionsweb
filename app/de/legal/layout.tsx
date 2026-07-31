import Image from 'next/image'
import Link from 'next/link'
import LanguageToggle from '@/components/LanguageToggle'

const legalLinks = [
  { href: '/de/legal/imprint', label: 'Impressum' },
  { href: '/de/legal/privacy', label: 'Datenschutz' },
  { href: '/de/legal/terms', label: 'Nutzungsbedingungen' },
]

export default function LegalLayoutDe({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="de" className="relative z-10 flex min-h-dvh flex-col">
      <header className="glass-strong sticky top-0 z-50 border-b border-sns-text/[0.08] px-5">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between">
          <Link href="/de" className="flex items-center gap-2.5">
            <Image src="/sns-icon.png" alt="" width={970} height={970} className="h-8 w-8" />
            <span className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-sns-text">
              SNS{' '}
              <span className="hidden font-normal text-sns-muted sm:inline">Solutions</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              href="/de"
              className="font-mono text-xs uppercase tracking-widest text-sns-muted transition-colors duration-300 hover:text-sns-accent"
            >
              ← Zur Website
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-5 pb-24 pt-12 md:pt-16">
        {children}
      </main>

      <footer className="border-t border-sns-text/[0.08] px-5">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-sns-faint">
            SNS Software Solutions GmbH — Wien, Österreich
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-xs text-sns-muted transition-colors duration-300 hover:text-sns-accent"
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
