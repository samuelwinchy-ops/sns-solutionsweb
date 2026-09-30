'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import emailjs from '@emailjs/browser'
import { getDict } from '@/i18n'
import { type Locale, defaultLocale, localePath } from '@/i18n/config'
import { CTA_PRIMARY } from '@/lib/cta'

// Public by design — EmailJS keys live in the browser. Kept in env so they're
// configurable per-environment and never hard-coded in the repo.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const FALLBACK_EMAIL = 'office@sns-austria.com'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'sending' | 'success' | 'error'
type FieldName = 'name' | 'email' | 'service' | 'message' | 'consent'
type Errors = Partial<Record<FieldName, string>>

export default function ContactForm({ locale = defaultLocale }: { locale?: Locale }) {
  const t = getDict(locale).contactForm
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [service, setService] = useState('')

  // Pre-select the service when arriving from a /services CTA (?service=…).
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('service')
    if (param && t.services.includes(param)) setService(param)
  }, [t.services])

  function validate(data: FormData): Errors {
    const e: Errors = {}
    const name = (data.get('name') as string)?.trim()
    const email = (data.get('email') as string)?.trim()
    const svc = (data.get('service') as string)?.trim()
    const message = (data.get('message') as string)?.trim()
    const consent = data.get('consent')

    if (!name) e.name = t.errors.name
    if (!email) e.email = t.errors.email
    else if (!EMAIL_RE.test(email)) e.email = t.errors.emailInvalid
    if (!svc) e.service = t.errors.service
    if (!message || message.length < 10) e.message = t.errors.message
    if (!consent) e.consent = t.errors.consent
    return e
  }

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = new FormData(form)

    if ((data.get('company') as string)?.trim()) {
      setStatus('success') // honeypot: silently drop bots
      return
    }

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      ;(form.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus()
      return
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const subject = encodeURIComponent(`New inquiry: ${data.get('service')}`)
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\n` +
          `Email: ${data.get('email')}\n` +
          `Phone: ${data.get('phone') || '—'}\n` +
          `Service: ${data.get('service')}\n\n` +
          `${data.get('message')}`
      )
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${subject}&body=${body}`
      return
    }

    try {
      setStatus('sending')
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      setStatus('success')
      form.reset()
      setService('')
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
      <div className="sns-card flex flex-col items-center p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sns-green/30 bg-sns-green/10 text-sns-green">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m5 12.5 4.5 4.5L19 7.5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {/* h2: /contact has only the page h1 above this, so an h3 skips a
            level. Latent rather than reported, because this state only exists
            after a successful submit and an audit crawl never sees it. */}
        <h2 className="mt-5 text-xl font-bold text-sns-text">{t.successTitle}</h2>
        <p className="mt-2 max-w-sm text-sns-muted">{t.successBody}</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex min-h-11 items-center px-2 text-sm font-medium text-sns-muted transition-colors duration-150 hover:text-sns-accent"
        >
          {t.sendAnother}
        </button>
      </div>
    )
  }

  const labelClass = 'mb-2 block text-sm font-medium text-sns-text'
  // Every field is opaque white on the grey paper. They used to be 70% white
  // over a moving particle field, which is what made the service dropdown hard
  // to find.
  const fieldBase =
    'min-h-11 w-full rounded-sns border bg-white px-4 py-3 text-base text-sns-text transition-colors focus:outline-none focus-visible:ring-2 duration-150 placeholder:text-sns-faint focus:border-sns-action focus:ring-2 focus:ring-sns-action/20'
  const ok = 'border-sns-border hover:border-sns-text/40'
  const bad = 'border-red-600 focus:border-red-600 focus:ring-red-600/20'

  return (
    <form
      onSubmit={handleSubmit}
      onInput={(e) => clearError((e.target as HTMLInputElement).name)}
      noValidate
      className="sns-card p-6 md:p-8"
    >
      <input type="hidden" name="form_type" value="contact" />
      {status === 'error' && (
        <div
          role="alert"
          className="mb-6 rounded-sns border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-700"
        >
          {t.errors.send}{' '}
          <a href={`mailto:${FALLBACK_EMAIL}`} className="underline">
            {FALLBACK_EMAIL}
          </a>
          .
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {t.name}{' '}
            <span className="text-sns-muted" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="name"
            aria-required="true"
            name="name"
            type="text"
            autoComplete="name"
            placeholder={t.namePlaceholder}
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${fieldBase} ${errors.name ? bad : ok}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            {t.email}{' '}
            <span className="text-sns-muted" aria-hidden="true">
              *
            </span>
          </label>
          <input
            id="email"
            aria-required="true"
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t.emailPlaceholder}
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${fieldBase} ${errors.email ? bad : ok}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            {t.phone} <span className="text-sns-faint">{t.optional}</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+43 …"
            className={`${fieldBase} ${ok}`}
          />
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            {t.service}{' '}
            <span className="text-sns-muted" aria-hidden="true">
              *
            </span>
          </label>
          {/* A native <select>, so it opens the way every other dropdown on the
              visitor's device does. The browser arrow is replaced by a chevron
              we control so it is visible on the white field; the placeholder
              renders faint until a real choice is made. */}
          <div className="relative">
            <select
              id="service"
              aria-required="true"
              name="service"
              value={service}
              onChange={(e) => {
                setService(e.target.value)
                clearError('service')
              }}
              aria-invalid={errors.service ? 'true' : undefined}
              aria-describedby={errors.service ? 'service-error' : undefined}
              className={`${fieldBase.replace('text-sns-text', service ? 'text-sns-text' : 'text-sns-faint')} ${errors.service ? bad : ok} cursor-pointer appearance-none pr-11`}
            >
              <option value="" disabled>
                {t.servicePlaceholder}
              </option>
              {t.services.map((s) => (
                <option key={s} value={s} className="bg-white text-sns-text">
                  {s}
                </option>
              ))}
            </select>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sns-muted"
            >
              <path
                d="m4 6 4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {errors.service && (
            <p id="service-error" className="mt-2 text-xs text-red-600">
              {errors.service}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          {t.message}{' '}
          <span className="text-sns-muted" aria-hidden="true">
            *
          </span>
        </label>
        <textarea
          id="message"
          aria-required="true"
          name="message"
          rows={5}
          placeholder={t.messagePlaceholder}
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldBase} resize-y ${errors.message ? bad : ok}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            aria-invalid={errors.consent ? 'true' : undefined}
            className="mt-1 h-5 w-5 shrink-0 accent-sns-indigo"
          />
          <span className="text-sm leading-relaxed text-sns-muted">
            {t.consent.map((seg, i) =>
              seg.link ? (
                <Link
                  key={i}
                  href={localePath(locale, '/legal/privacy')}
                  className="text-sns-accent underline underline-offset-2 hover:text-sns-text"
                >
                  {seg.t}
                </Link>
              ) : (
                <span key={i}>{seg.t}</span>
              )
            )}
          </span>
        </label>
        {errors.consent && <p className="mt-2 text-xs text-red-600">{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={`${CTA_PRIMARY} mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto`}
      >
        {status === 'sending' ? t.sending : t.submit}
        {status !== 'sending' && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 7h8M7.5 3.5 11 7l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <p className="mt-4 text-sm text-sns-muted">
        {t.preferEmail}{' '}
        <a
          href={`mailto:${FALLBACK_EMAIL}`}
          className="text-sns-text underline underline-offset-2 hover:text-sns-accent"
        >
          {FALLBACK_EMAIL}
        </a>
      </p>
    </form>
  )
}
