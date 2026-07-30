'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { track } from '@vercel/analytics'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const FALLBACK_EMAIL = 'office@sns-austria.com'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'sending' | 'success' | 'error'
type FieldName = 'name' | 'email' | 'size' | 'consent'
type Errors = Partial<Record<FieldName, string>>
type Industry = 'hvac' | 'realEstate'

// Keeps the submission's subject line and analytics tagged to the right list,
// so HVAC and real-estate sign-ups stay distinguishable in the inbox.
const SUBJECT: Record<Industry, string> = {
  hvac: 'HVAC / SHK waitlist',
  realEstate: 'Immvela — waitlist',
}

type Theme = 'dark' | 'light'

// The form's markup and logic are shared; only the palette differs. 'dark' is
// the SNS site (HVAC waitlist); 'light' is the Immvela page (cream/forest).
const UI: Record<Theme, Record<string, string>> = {
  dark: {
    card: 'glass edge-light',
    heading: 'text-sns-text',
    sub: 'text-sns-muted',
    label: 'text-sns-faint',
    field: 'rounded-sns border bg-white/70 text-sns-text placeholder:text-sns-faint focus:bg-white/90',
    fieldOk: 'border-sns-text/15 focus:border-sns-indigo/60',
    fieldBad: 'border-red-500/60 focus:border-red-500',
    error: 'text-red-600',
    alert: 'rounded-sns border border-red-500/40 bg-red-500/10 text-red-700',
    option: 'bg-sns-surface text-sns-text',
    consent: 'text-sns-muted',
    consentLink: 'text-sns-accent underline underline-offset-2 hover:text-sns-cyan',
    checkbox: 'accent-sns-indigo',
    submit:
      'bg-sns-indigo text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent',
    successIcon: 'border-sns-green/30 bg-sns-green/10 text-sns-green',
    successTitle: 'text-sns-text',
    successBody: 'text-sns-muted',
    sendAnother: 'text-sns-muted hover:text-sns-accent',
  },
  light: {
    card: 'im-card',
    heading: 'im-ink',
    sub: 'im-muted',
    label: 'im-faint',
    field: 'im-field',
    fieldOk: '',
    fieldBad: 'im-field-bad',
    error: 'text-[#c2543f]',
    alert: 'rounded-xl border border-[#c2543f]/40 bg-[#c2543f]/10 text-[#a23f2e]',
    option: 'bg-white text-[#16352a]',
    consent: 'im-muted',
    consentLink: 'im-green underline underline-offset-2 hover:opacity-70',
    checkbox: 'accent-[#2f7d5b]',
    submit:
      'im-btn focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f7d5b]',
    successIcon: 'border-[#2f7d5b]/30 bg-[#2f7d5b]/10 im-green',
    successTitle: 'im-ink',
    successBody: 'im-muted',
    sendAnother: 'im-link',
  },
}

export default function WaitlistForm({
  locale = defaultLocale,
  industry = 'realEstate',
  theme = 'dark',
  headingLevel = 2,
}: {
  locale?: Locale
  industry?: Industry
  theme?: Theme
  /**
   * Heading level for the form's own title, because this component renders at
   * two different depths and a fixed level is wrong at one of them: on
   * /solutions/hvac/waitlist it sits directly under the page h1 (so h2), and on
   * /immvela it sits inside a section that already has an h2 (so h3). Hardcoding
   * h3 skipped a level on the HVAC waitlist page.
   */
  headingLevel?: 2 | 3
}) {
  const Heading = (headingLevel === 3 ? 'h3' : 'h2') as 'h2' | 'h3'
  const dict = getDict(locale)
  const t = (industry === 'hvac' ? dict.hvacWaitlistPage : dict.waitlistPage).form
  const ui = UI[theme]
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [size, setSize] = useState('')

  function validate(data: FormData): Errors {
    const e: Errors = {}
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const sz = (data.get('size') as string)?.trim()
    const consent = data.get('consent')

    if (!name) e.name = t.errors.name
    if (!email) e.email = t.errors.email
    else if (!EMAIL_RE.test(email)) e.email = t.errors.emailInvalid
    if (!sz) e.size = t.errors.size
    if (!consent) e.consent = t.errors.consent
    return e
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = new FormData(form)

    if ((data.get('company') as string)?.trim()) {
      setStatus('success') // honeypot
      return
    }

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      ;(form.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus()
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const subject = encodeURIComponent(SUBJECT[industry])
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\n` +
          `Email: ${data.get('email')}\n` +
          `Team size: ${data.get('size')}\n` +
          `Industry: ${industry}\n` +
          `Type: waitlist`
      )
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`
      return
    }

    try {
      setStatus('sending')
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      track('waitlist_joined', { industry, size: (data.get('size') as string) || 'unknown' })
      setStatus('success')
      form.reset()
      setSize('')
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  function clearError(name: string) {
    setErrors((prev) => (prev[name as FieldName] ? { ...prev, [name]: undefined } : prev))
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`${ui.card} flex flex-col items-center rounded-sns-lg p-10 text-center`}
      >
        <span className={`flex h-14 w-14 items-center justify-center rounded-full border ${ui.successIcon}`}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <Heading className={`mt-5 text-xl font-bold ${ui.successTitle}`}>{t.successTitle}</Heading>
        <p className={`mt-2 max-w-sm ${ui.successBody}`}>{t.successBody}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className={`mt-6 font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${ui.sendAnother}`}
        >
          {t.sendAnother}
        </button>
      </motion.div>
    )
  }

  const labelClass = `mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] ${ui.label}`
  const fieldBase = `w-full px-4 py-3 outline-none transition-colors duration-200 ${ui.field}`
  const ok = ui.fieldOk
  const bad = ui.fieldBad
  const req = theme === 'light' ? 'im-green' : 'text-sns-indigo'

  return (
    <form
      onSubmit={handleSubmit}
      onInput={(e) => clearError((e.target as HTMLInputElement).name)}
      noValidate
      className={`${ui.card} rounded-sns-lg p-6 md:p-8`}
    >
      <input type="hidden" name="form_type" value="waitlist" />
      <input type="hidden" name="industry" value={industry} />
      <Heading className={`text-xl font-bold ${ui.heading}`}>{t.heading}</Heading>
      <p className={`mt-2 text-sm ${ui.sub}`}>{t.sub}</p>

      {status === 'error' && (
        <div role="alert" className={`mt-5 px-4 py-3 text-sm ${ui.alert}`}>
          {t.errors.send}{' '}
          <a href={`mailto:${FALLBACK_EMAIL}`} className="underline">
            {FALLBACK_EMAIL}
          </a>
          .
        </div>
      )}

      <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="wl-name" className={labelClass}>
            {t.name} <span className={req}>*</span>
          </label>
          <input
            id="wl-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t.namePlaceholder}
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'wl-name-error' : undefined}
            className={`${fieldBase} ${errors.name ? bad : ok}`}
          />
          {errors.name && (
            <p id="wl-name-error" className={`mt-1.5 text-xs ${ui.error}`}>
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="wl-email" className={labelClass}>
            {t.email} <span className={req}>*</span>
          </label>
          <input
            id="wl-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'wl-email-error' : undefined}
            className={`${fieldBase} ${errors.email ? bad : ok}`}
          />
          {errors.email && (
            <p id="wl-email-error" className={`mt-1.5 text-xs ${ui.error}`}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="wl-size" className={labelClass}>
          {t.size} <span className={req}>*</span>
        </label>
        <select
          id="wl-size"
          name="size"
          value={size}
          onChange={(e) => {
            setSize(e.target.value)
            clearError('size')
          }}
          aria-invalid={errors.size ? 'true' : undefined}
          aria-describedby={errors.size ? 'wl-size-error' : undefined}
          className={`${fieldBase} ${errors.size ? bad : ok} appearance-none pr-10`}
        >
          <option value="" disabled>
            {t.sizePlaceholder}
          </option>
          {t.sizes.map((s) => (
            <option key={s} value={s} className={ui.option}>
              {s}
            </option>
          ))}
        </select>
        {errors.size && (
          <p id="wl-size-error" className={`mt-1.5 text-xs ${ui.error}`}>
            {errors.size}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" aria-invalid={errors.consent ? 'true' : undefined} className={`mt-1 h-4 w-4 shrink-0 ${ui.checkbox}`} />
          <span className={`text-sm leading-relaxed ${ui.consent}`}>
            {t.consent.map((seg, i) =>
              seg.link ? (
                <Link key={i} href={localePath(locale, '/legal/privacy')} className={ui.consentLink}>
                  {seg.t}
                </Link>
              ) : (
                <span key={i}>{seg.t}</span>
              )
            )}
          </span>
        </label>
        {errors.consent && <p className={`mt-1.5 text-xs ${ui.error}`}>{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-sns-out disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 ${ui.submit}`}
      >
        {status === 'sending' ? t.sending : t.submit}
        {status !== 'sending' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1">
            <path d="M3 7h8M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </form>
  )
}
