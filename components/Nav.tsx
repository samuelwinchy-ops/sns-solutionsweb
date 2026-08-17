'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath, immvelaHref } from '@/i18n/config'
import LanguageToggle from './LanguageToggle'

export default function Nav({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).nav
  const home = localePath(locale, '/')
  const pathname = usePathname()

  // Flat nav, no "Products" dropdown. Immvela is the product — it lives on its
  // own domain and carries the live dot. The HVAC/SHK tab went with the
  // discontinued product line; its URLs 301 to Immvela (see middleware.ts).
  const links = [
    { href: immvelaHref(locale), id: 'immvela', label: t.realEstate, live: true },
    { href: localePath(locale, '/services'), id: 'services', label: t.services, live: false },
    { href: localePath(locale, '/team'), id: 'team', label: t.team, live: false },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu when resizing up to desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Close the menu on route change.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const solid = scrolled || open

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-14 px-5 transition-all duration-500 ease-sns-out md:px-10 ${
        solid
          ? 'glass-strong border-b border-sns-text/[0.08] shadow-[0_8px_32px_-12px_rgba(20,25,43,0.12)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between 2xl:max-w-7xl">
        <a
          href={home}
          aria-label="SNS Solutions — home"
          className="group flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative shrink-0">
            <span className="absolute inset-0 rounded-full bg-sns-indigo/30 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src="/sns-icon.png"
              alt="SNS Solutions"
              width={970}
              height={970}
              priority
              className="relative h-8 w-8 md:h-9 md:w-9"
            />
          </span>
          <span className="truncate font-mono text-sm font-bold uppercase tracking-[0.22em] text-sns-text">
            SNS
            <span className="ml-1.5 hidden font-normal text-sns-muted sm:inline">
              Solutions
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden shrink-0 items-center gap-1 md:flex md:gap-3">
          {links.map((link) => {
            const active = isActive(link.href)
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={active ? 'true' : undefined}
                className={`relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 md:text-xs ${
                  active ? 'text-sns-text' : 'text-sns-muted hover:text-sns-accent'
                }`}
              >
                {link.live && (
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-green opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sns-green" />
                  </span>
                )}
                <span>{link.label}</span>
                {active && (
                  <span className="absolute inset-x-2.5 -bottom-px h-px bg-gradient-to-r from-transparent via-sns-indigo to-transparent" />
                )}
              </a>
            )
          })}

          <a
            href={localePath(locale, '/contact')}
            // Tinted at rest, solid on hover. The nav sits over varying content
            // so a permanently-filled button would fight the page; the tint is
            // enough to separate the one action here from the text links.
            className="group ml-0.5 inline-flex items-center gap-1.5 rounded-full border border-sns-indigo/30 bg-sns-indigo/[0.08] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-sns-accent transition-all duration-300 ease-sns-out hover:border-sns-indigo hover:bg-sns-indigo hover:text-white md:text-xs"
          >
            {t.contact}
          </a>

          <LanguageToggle />
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-sns-text transition-colors duration-300 hover:bg-sns-text/[0.06]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2.5 5h13M2.5 9h13M2.5 13h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="glass-strong absolute inset-x-0 top-full border-b border-sns-text/[0.08] px-5 pb-5 pt-2 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => {
              const active = isActive(link.href)
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'true' : undefined}
                  className={`flex items-center gap-2 rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-widest transition-colors duration-200 ${
                    active ? 'text-sns-text' : 'text-sns-muted hover:bg-sns-text/[0.05] hover:text-sns-text'
                  }`}
                >
                  {link.live && (
                    <span className="h-1.5 w-1.5 rounded-full bg-sns-green" aria-hidden="true" />
                  )}
                  {link.label}
                </a>
              )
            })}
            <a
              href={localePath(locale, '/contact')}
              onClick={() => setOpen(false)}
              // Solid in the mobile sheet: there is no competing content behind
              // it here, so the one action gets the full treatment.
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-sns-indigo px-4 py-3 font-mono text-sm font-semibold uppercase tracking-widest text-white shadow-[0_8px_24px_-8px_rgba(79,70,229,0.65)] transition-colors duration-200 hover:bg-sns-accent"
            >
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
