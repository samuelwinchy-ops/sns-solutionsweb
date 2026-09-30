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

  // Flat nav, company-site order: the two products first, then consulting,
  // then the company. No "Products" dropdown — two items do not need one.
  // QFUtool lives on its own domain, so its link opens there and says so with
  // a small out-arrow. The HVAC/SHK tab went with the discontinued product
  // line, and its URLs 301 to Immvela (see middleware.ts).
  //
  // No status dots on product names: a pulsing dot reads as live telemetry,
  // and nothing here polls anything.
  const links: { href: string; id: string; label: string; external?: boolean }[] = [
    { href: immvelaHref(locale), id: 'immvela', label: t.realEstate },
    {
      href: locale === 'de' ? 'https://www.qfutool.com/de' : 'https://www.qfutool.com',
      id: 'qfutool',
      label: t.qfutool,
      external: true,
    },
    { href: localePath(locale, '/services'), id: 'services', label: t.services },
    // English only, for now: the blog doesn't have a German translation yet
    // (see lib/blog.ts), and a nav link into a 404 would be worse than no link.
    ...(locale === 'en' ? [{ href: '/blog', id: 'blog', label: 'Blog' }] : []),
    { href: localePath(locale, '/team'), id: 'team', label: t.team },
  ]

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Exact match for every current link except Blog, which also has post pages
  // under it (/blog/<slug>) that should still light up the same nav item.
  const isActive = (href: string) =>
    pathname === href || (href === '/blog' && pathname?.startsWith('/blog/'))

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
      className={`fixed inset-x-0 top-0 z-50 h-14 px-5 transition-colors duration-200 md:px-10 ${
        solid ? 'border-b border-sns-border bg-white' : 'border-b border-transparent bg-sns-bg'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between 2xl:max-w-7xl">
        <a
          href={home}
          aria-label="SNS Solutions — home"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative shrink-0">
            <Image
              src="/sns-icon.png"
              alt="SNS Solutions"
              width={970}
              height={970}
              priority
              className="relative h-8 w-8 md:h-9 md:w-9"
            />
          </span>
          <span className="truncate text-[15px] font-bold tracking-tight text-sns-text">
            SNS
            <span className="ml-1 hidden font-medium text-sns-muted sm:inline">Solutions</span>
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
                {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                aria-current={active ? 'true' : undefined}
                className={`relative flex min-h-11 items-center px-3 text-[15px] transition-colors duration-150 ${
                  active ? 'font-medium text-sns-text' : 'text-sns-muted hover:text-sns-text'
                }`}
              >
                <span>{link.label}</span>
                {link.external && <OutArrow />}
                {active && (
                  <span className="absolute inset-x-2.5 bottom-2 h-0.5 rounded-full bg-sns-action" />
                )}
              </a>
            )
          })}

          <a
            href={localePath(locale, '/contact')}
            className="ml-2 inline-flex min-h-9 items-center rounded-sns bg-sns-action px-4 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-sns-action-hover"
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
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-sns text-sns-text transition-colors duration-150 hover:bg-sns-text/[0.06]"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {open ? (
                <path
                  d="M4 4l10 10M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2.5 5h13M2.5 9h13M2.5 13h13"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-sns-border bg-white px-5 pb-5 pt-2 shadow-[0_12px_24px_-16px_rgba(11,15,34,0.25)] md:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col">
            {links.map((link) => {
              const active = isActive(link.href)
              return (
                <a
                  key={link.id}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                  onClick={() => setOpen(false)}
                  aria-current={active ? 'true' : undefined}
                  className={`flex min-h-11 items-center gap-2 rounded-sns px-3 text-base transition-colors duration-150 ${
                    active
                      ? 'font-medium text-sns-text'
                      : 'text-sns-muted hover:bg-sns-text/[0.05] hover:text-sns-text'
                  }`}
                >
                  {link.label}
                  {link.external && <OutArrow />}
                </a>
              )
            })}
            <a
              href={localePath(locale, '/contact')}
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-sns bg-sns-action px-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-sns-action-hover"
            >
              {t.contact}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

/** Marks a link that leaves this site. */
function OutArrow() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="ml-1">
      <path
        d="M3 7l4-4M3.5 3H7v3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
