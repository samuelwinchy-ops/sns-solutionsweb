'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import LanguageToggle from './LanguageToggle'

export default function Nav({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).nav
  const home = localePath(locale, '/')
  const pathname = usePathname()

  // Industry picker — "Products" expands into these dedicated pages.
  const products = [
    { href: localePath(locale, '/solutions/hvac'), id: 'hvac', label: t.hvac },
    { href: localePath(locale, '/solutions/real-estate'), id: 'real-estate', label: t.realEstate },
  ]

  const links = [
    { href: localePath(locale, '/services'), id: 'services', label: t.services, live: false },
    { href: localePath(locale, '/roadmap'), id: 'roadmap', label: t.roadmap, live: true },
    { href: localePath(locale, '/team'), id: 'team', label: t.team, live: false },
  ]

  const [active, setActive] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  // Separate state for the desktop dropdown and the mobile accordion. Sharing
  // one caused the desktop outside-click handler (scoped to productsRef, which
  // only wraps the desktop container) to fire on mobile taps and unmount the
  // accordion link mid-click — swallowing navigation on mobile.
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const productsRef = useRef<HTMLDivElement>(null)

  // Is the visitor currently on a product page?
  const onProduct = products.some((p) => pathname === p.href)
  const isProductActive = (href: string) => pathname === href

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

  // Close menus on route change.
  useEffect(() => {
    setOpen(false)
    setProductsOpen(false)
    setMobileProductsOpen(false)
  }, [pathname])

  // Close the desktop dropdown on outside click / Escape.
  useEffect(() => {
    if (!productsOpen) return
    const onClick = (e: MouseEvent) => {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) setProductsOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setProductsOpen(false)
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [productsOpen])

  useEffect(() => {
    // Homepage sections that correspond to a nav item. The "what's running"
    // band (#build-log) is deliberately absent: it's live client work, a
    // different thing from the Roadmap page the nav now points at.
    const sections = ['team']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.2, 0.5] }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const solid = scrolled || open

  const caret = (expanded: boolean) => (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-300 ease-sns-out ${expanded ? 'rotate-180' : ''}`}
    >
      <path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-14 px-5 transition-all duration-500 ease-sns-out md:px-10 ${
        solid
          ? 'glass-strong border-b border-white/[0.07] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]'
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
              width={914}
              height={914}
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
          {/* Products dropdown — click-driven (a hover-open/hover-close dropdown
              has an unhoverable gap between the button and the panel that makes
              real, non-instant mouse movement close it before the pointer
              arrives; click avoids that dead zone entirely). */}
          <div ref={productsRef} className="relative">
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={productsOpen}
              className={`relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 md:text-xs ${
                onProduct || productsOpen ? 'text-sns-text' : 'text-sns-muted hover:text-sns-accent'
              }`}
            >
              <span>{t.solutions}</span>
              {caret(productsOpen)}
              {onProduct && (
                <span className="absolute inset-x-2.5 -bottom-px h-px bg-gradient-to-r from-transparent via-sns-indigo to-transparent" />
              )}
            </button>

            {productsOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full z-50 min-w-[184px] pt-2"
              >
                <div className="glass-strong overflow-hidden rounded-sns-lg border border-white/[0.09] p-1.5 shadow-[0_16px_44px_-12px_rgba(0,0,0,0.7)]">
                  {products.map((p) => {
                    const activeItem = isProductActive(p.href)
                    return (
                      <a
                        key={p.id}
                        href={p.href}
                        role="menuitem"
                        aria-current={activeItem ? 'true' : undefined}
                        onClick={() => setProductsOpen(false)}
                        className={`flex items-center gap-2 rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-widest transition-colors duration-200 ${
                          activeItem ? 'text-sns-text' : 'text-sns-muted hover:bg-white/[0.05] hover:text-sns-text'
                        }`}
                      >
                        {activeItem ? (
                          <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-green opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sns-green" />
                          </span>
                        ) : (
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/15" aria-hidden="true" />
                        )}
                        {p.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {links.map((link) => {
            const isActive = active === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 md:text-xs ${
                  isActive ? 'text-sns-text' : 'text-sns-muted hover:text-sns-accent'
                }`}
              >
                {link.live && (
                  <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sns-green opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sns-green" />
                  </span>
                )}
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute inset-x-2.5 -bottom-px h-px bg-gradient-to-r from-transparent via-sns-indigo to-transparent" />
                )}
              </a>
            )
          })}

          <a
            href={localePath(locale, '/contact')}
            className="group ml-0.5 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-sns-text transition-all duration-300 ease-sns-out hover:border-sns-indigo/50 hover:bg-sns-indigo/10 hover:text-white md:text-xs"
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
            onClick={() =>
              setOpen((v) => {
                if (v) setMobileProductsOpen(false)
                return !v
              })
            }
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full text-sns-text transition-colors duration-300 hover:bg-white/[0.06]"
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
          className="glass-strong absolute inset-x-0 top-full border-b border-white/[0.07] px-5 pb-5 pt-2 md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {/* Products accordion */}
            <button
              type="button"
              onClick={() => setMobileProductsOpen((v) => !v)}
              aria-expanded={mobileProductsOpen}
              aria-controls="mobile-products"
              className={`flex items-center justify-between gap-2 rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-widest transition-colors duration-200 ${
                onProduct ? 'text-sns-text' : 'text-sns-muted hover:bg-white/[0.04] hover:text-sns-text'
              }`}
            >
              <span className="flex items-center gap-2">
                {onProduct && <span className="h-1.5 w-1.5 rounded-full bg-sns-green" aria-hidden="true" />}
                {t.solutions}
              </span>
              {caret(mobileProductsOpen)}
            </button>
            {mobileProductsOpen && (
              <div id="mobile-products" className="mb-1 ml-3 flex flex-col border-l border-white/[0.08] pl-3">
                {products.map((p) => {
                  const activeItem = isProductActive(p.href)
                  return (
                    <a
                      key={p.id}
                      href={p.href}
                      onClick={() => setOpen(false)}
                      aria-current={activeItem ? 'true' : undefined}
                      className={`flex items-center gap-2 rounded-lg px-3 py-2.5 font-mono text-[13px] uppercase tracking-widest transition-colors duration-200 ${
                        activeItem ? 'text-sns-text' : 'text-sns-muted hover:bg-white/[0.04] hover:text-sns-text'
                      }`}
                    >
                      {activeItem && <span className="h-1.5 w-1.5 rounded-full bg-sns-green" aria-hidden="true" />}
                      {p.label}
                    </a>
                  )
                })}
              </div>
            )}

            {links.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex items-center gap-2 rounded-lg px-3 py-3 font-mono text-sm uppercase tracking-widest transition-colors duration-200 ${
                    isActive ? 'text-sns-text' : 'text-sns-muted hover:bg-white/[0.04] hover:text-sns-text'
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
              className="mt-2 flex items-center justify-center gap-1.5 rounded-full border border-white/10 bg-sns-indigo/10 px-4 py-3 font-mono text-sm uppercase tracking-widest text-sns-text transition-colors duration-200 hover:border-sns-indigo/50 hover:bg-sns-indigo/20"
            >
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
