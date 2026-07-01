'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const links = [
  { href: '/services', id: 'services', label: 'services', live: false },
  { href: '/#build-log', id: 'build-log', label: 'build log', live: true },
  { href: '/#team', id: 'team', label: 'team', live: false },
]

export default function Nav() {
  const [active, setActive] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
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

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 h-14 px-5 transition-all duration-500 ease-sns-out md:px-10 ${
        scrolled
          ? 'glass-strong border-b border-white/[0.07] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.6)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between 2xl:max-w-7xl">
        <a
          href="/"
          aria-label="SNS Solutions — home"
          className="group flex min-w-0 items-center gap-2.5"
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

      <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3">
        {links.map((link) => {
          const isActive = active === link.id
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? 'true' : undefined}
              className={`relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 md:px-3 md:text-xs ${
                isActive
                  ? 'text-sns-text'
                  : 'text-sns-muted hover:text-sns-accent'
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
          href="/contact"
          className="group ml-1 hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-sns-text transition-all duration-300 ease-sns-out hover:border-sns-indigo/50 hover:bg-sns-indigo/10 hover:text-white sm:inline-flex"
        >
          contact
          <svg
            width="11"
            height="11"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path
              d="M2.5 6h7M6.5 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        </div>
      </div>
    </nav>
  )
}
