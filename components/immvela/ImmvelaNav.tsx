'use client'

import { useEffect, useState } from 'react'
import HelixCanvas from './HelixCanvas'
import { track } from '@vercel/analytics'
import { type Locale, localePath } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import { useImmvelaPath } from '@/lib/immvela-nav'
import { SITE_URL } from '@/lib/site'
import LanguageToggle from '../LanguageToggle'

export const SIGN_IN_URL = 'https://app.immvela.com/login'

/**
 * The floating glass bar: maker left, the helix centred, language and Sign in right.
 * "Modules" and "Why Immvela" from the design are left out until those pages exist in this style.
 *
 * On the home page the bar's helix waits while the hero's big mark is on screen and arrives once
 * that mark scrolls under the bar (`[data-hero-mark]`). Everywhere else it is simply there.
 */
export default function ImmvelaNav({
  locale,
  heroMark = false,
}: {
  locale: Locale
  heroMark?: boolean
}) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)
  const [markOn, setMarkOn] = useState(!heroMark)

  useEffect(() => {
    if (!heroMark) return
    const el = document.querySelector('[data-hero-mark]')
    if (!el || !('IntersectionObserver' in window)) {
      setMarkOn(true)
      return
    }
    const io = new IntersectionObserver(([e]) => setMarkOn(!e.isIntersecting), {
      rootMargin: '-84px 0px 0px 0px',
      threshold: [0],
    })
    io.observe(el)
    return () => io.disconnect()
  }, [heroMark])

  return (
    <div
      className="site-navwrap"
      style={{ position: 'sticky', top: 0, zIndex: 50, padding: '12px 24px 10px' }}
    >
      <header
        className="site-head gl-glass"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '9px 12px 9px 24px',
          borderRadius: '999px',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <a
          className="site-side site-navlink"
          href={`${SITE_URL}${localePath(locale, '/')}`}
          style={{ justifySelf: 'start' }}
        >
          {t('by SNS Solutions')}
        </a>
        <a
          href={path()}
          aria-label={t('Immvela home')}
          className={markOn ? 'nv-mark is-on' : 'nv-mark'}
        >
          <HelixCanvas style={{ width: '40px', height: '40px' }} />
        </a>
        <nav
          aria-label={t('Main')}
          style={{ justifySelf: 'end', display: 'flex', alignItems: 'center', gap: '16px' }}
        >
          <LanguageToggle />
          <a
            href={SIGN_IN_URL}
            onClick={() => track('immvela_get_signin')}
            className="nv-signin"
            style={{
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: 600,
              padding: '9px 18px',
              borderRadius: '999px',
              background: '#1f7a5a',
              color: '#ffffff',
              whiteSpace: 'nowrap',
            }}
          >
            {t('Sign in')}
          </a>
        </nav>
      </header>
    </div>
  )
}
