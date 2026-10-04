'use client'

import { useEffect, useState, type ReactNode } from 'react'
import type { Locale } from '@/i18n/config'
import ImmvelaFrame from '../ImmvelaFrame'
import '@/app/immvela-rest.css'

/*
 * The legal documents inside the site frame. Visual only: the document is rendered as it is and
 * not a word of it changes. The rail jumps between its German and English halves.
 */
export default function LegalShell({
  locale,
  current,
  children,
}: {
  locale: Locale
  current: 'privacy' | 'data-deletion'
  children: ReactNode
}) {
  const [on, setOn] = useState<'de' | 'en'>('de')
  useEffect(() => {
    const de = document.querySelector<HTMLElement>('.lg-doc main div[lang="de"]')
    const en = document.querySelector<HTMLElement>('.lg-doc main div[lang="en"]')
    if (de) de.id = 'de'
    if (en) en.id = 'en'
    if (!en) return
    const io = new IntersectionObserver(([e]) => setOn(e.boundingClientRect.top < 200 ? 'en' : 'de'), {
      threshold: [0, 0.01],
    })
    io.observe(en)
    const onScroll = () => setOn(en.getBoundingClientRect().top < 200 ? 'en' : 'de')
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])
  const other =
    current === 'privacy'
      ? { href: '/legal/data-deletion', label: 'Datenlöschung / Data deletion' }
      : { href: '/legal/privacy', label: 'Datenschutzerklärung / Privacy Policy' }
  return (
    <ImmvelaFrame locale={locale}>
      <section className="lg-sec">
        <div className="lg-grid">
          <nav className="lg-rail" aria-label="Sprache / Language">
            <span>Sprache / Language</span>
            <a href="#de" className={on === 'de' ? 'on' : ''} lang="de">
              Deutsch
            </a>
            <a href="#en" className={on === 'en' ? 'on' : ''} lang="en">
              English
            </a>
            <hr />
            <a href={other.href}>{other.label}</a>
            <a href="/legal/imprint">Impressum / Imprint</a>
            <a href="/legal/terms">Nutzungsbedingungen / Terms</a>
          </nav>
          <div className="lg-doc">{children}</div>
        </div>
      </section>
    </ImmvelaFrame>
  )
}
