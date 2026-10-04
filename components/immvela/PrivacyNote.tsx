'use client'

import { useEffect, useState } from 'react'
import { type Locale, localePath } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'

const KEY = 'imv-privacy-note'

// A notice, not a consent banner: the site sets no cookies, so there is nothing to accept.
export default function PrivacyNote({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  const [show, setShow] = useState(false)

  useEffect(() => {
    try {
      setShow(window.localStorage.getItem(KEY) !== 'closed')
    } catch {
      setShow(true)
    }
  }, [])

  if (!show) return null

  const close = () => {
    setShow(false)
    try {
      window.localStorage.setItem(KEY, 'closed')
    } catch {}
  }

  return (
    <aside className="pn-note gl-glass" aria-label={t('Privacy')}>
      <p>
        {t('No cookies. We count page views anonymously.')}{' '}
        <a href={localePath(locale, '/legal/privacy')}>{t('Privacy policy')}</a>
      </p>
      <button type="button" onClick={close} aria-label={t('Close')}>
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </aside>
  )
}
