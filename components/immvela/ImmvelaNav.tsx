'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import HelixCanvas from './HelixCanvas'
import { track } from '@vercel/analytics'
import { type Locale, localePath } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import { useImmvelaPath } from '@/lib/immvela-nav'
import { SITE_URL } from '@/lib/site'
import LanguageToggle from '../LanguageToggle'

export const SIGN_IN_URL = 'https://app.immvela.com/login'

/**
 * The floating glass bar: the logo left, the pages centred, language, Sign in and Apply right.
 * Apply is the one filled button; under 860px everything but Apply moves into the menu sheet.
 *
 */
export default function ImmvelaNav({
  locale,
}: {
  locale: Locale
  heroMark?: boolean
}) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)
  const here = usePathname() || ''
  const links = [
    { href: path('/modules'), label: t('Modules'), on: /\/modules$/.test(here) },
    { href: path('/why'), label: t('Why Immvela'), on: /\/why$/.test(here) },
    { href: path('/trust'), label: t('Your data'), on: /\/trust$/.test(here) },
  ]
  const applyHref = `${path()}#apply`
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onWide = () => window.innerWidth > 860 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onWide)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onWide)
    }
  }, [open])

  return (
    <div
      className="site-navwrap"
      style={{ position: 'sticky', top: 0, zIndex: 50, padding: '12px 24px 10px' }}
    >
      <header
        className="site-head gl-glass nv-glass"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '9px 12px 9px 18px',
          borderRadius: '999px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <a
          href={path()}
          aria-label={t('Immvela home')}
          className="nv-mark nv-logo is-on"
        >
          <HelixCanvas style={{ width: '34px', height: '34px' }} />
          <span className="nv-word" aria-hidden="true">
            Immvela<span style={{ color: '#1f7a5a' }}>.</span>
          </span>
        </a>
        <nav aria-label={t('Main')} className="nv-mid">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="site-navlink site-mods"
              aria-current={l.on ? 'page' : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nv-right">
          <span className="site-mods nv-lang">
            <LanguageToggle />
          </span>
          <a
            href={SIGN_IN_URL}
            onClick={() => track('immvela_get_signin')}
            className="site-navlink site-mods"
          >
            {t('Sign in')}
          </a>
          <a href={applyHref} className="nv-apply">
            {t('Apply')}
          </a>
          <button
            type="button"
            className="nv-menu"
            aria-expanded={open}
            aria-controls="nv-sheet"
            aria-label={open ? t('Close menu') : t('Menu')}
            onClick={() => setOpen((o) => !o)}
          >
            <span aria-hidden="true" className={open ? 'nv-burger is-open' : 'nv-burger'}>
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>
      <div id="nv-sheet" className={open ? 'nv-sheet gl-glass is-open' : 'nv-sheet gl-glass'} hidden={!open}>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} aria-current={l.on ? 'page' : undefined} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={SIGN_IN_URL} onClick={() => track('immvela_get_signin')}>
              {t('Sign in')}
            </a>
          </li>
        </ul>
        <div className="nv-sheet-foot">
          <LanguageToggle />
          <a className="nv-sheet-sns" href={`${SITE_URL}${localePath(locale, '/')}`}>
            {t('by SNS Solutions')}
          </a>
        </div>
      </div>
    </div>
  )
}
