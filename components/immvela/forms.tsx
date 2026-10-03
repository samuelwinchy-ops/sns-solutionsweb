'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import { track } from '@vercel/analytics'
import type { Locale } from '@/i18n/config'
import { immvelaT, type T } from '@/i18n/immvela'
import { EMAIL_RE, IMMVELA_FALLBACK_EMAIL, sendImmvelaForm } from '@/lib/immvela-submit'

type Status = 'idle' | 'sending' | 'sent' | 'error'
type Errors = Record<string, string | undefined>

const errStyle = { margin: 0, fontSize: '14px', lineHeight: 1.4, color: '#a23f2e' }

function FieldError({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} style={errStyle}>
      {msg}
    </p>
  ) : null
}

function SendError({ t }: { t: T }) {
  return (
    <p
      role="alert"
      style={{ ...errStyle, padding: '12px 14px', borderRadius: '12px', background: '#fbe9e5' }}
    >
      {t('Something went wrong. Please try again, or write to us at')}{' '}
      <a href={`mailto:${IMMVELA_FALLBACK_EMAIL}`} style={{ fontWeight: 600 }}>
        {IMMVELA_FALLBACK_EMAIL}
      </a>
      .
    </p>
  )
}

function Sent({
  t,
  title,
  onAgain,
  btn,
}: {
  t: T
  title: string
  onAgain: () => void
  btn: string
}) {
  return (
    <div
      role="status"
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}
    >
      <span
        aria-hidden="true"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#1f7a5a',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12l5 5L19 7" />
        </svg>
      </span>
      <h3
        style={{ margin: 0, fontSize: '20px', lineHeight: 1.3, fontWeight: 600, color: '#14473a' }}
      >
        {title}
      </h3>
      <button
        type="button"
        className={btn}
        onClick={onAgain}
        style={{ background: 'transparent', color: '#1a6b4f', padding: 0 }}
      >
        {t('Send another')}
      </button>
    </div>
  )
}

function useSubmit(validate: (d: FormData) => Errors, send: (d: FormData) => Promise<void>) {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = new FormData(form)
    if (String(data.get('company') ?? '').trim()) {
      setStatus('sent') // honeypot
      return
    }
    const found = validate(data)
    setErrors(found)
    if (Object.values(found).some(Boolean)) {
      ;(form.querySelector('[aria-invalid="true"]') as HTMLElement | null)?.focus()
      return
    }
    try {
      setStatus('sending')
      await send(data)
      setStatus('sent')
      form.reset()
    } catch (err) {
      console.error('Immvela form failed to send:', err)
      setStatus('error')
    }
  }
  const clear = (name: string) => setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e))
  return { status, setStatus, errors, onSubmit, clear }
}

const Honeypot = () => (
  <div
    aria-hidden="true"
    style={{ position: 'absolute', left: '-9999px', width: 0, height: 0, overflow: 'hidden' }}
  >
    <label>
      Company
      <input type="text" name="company" tabIndex={-1} autoComplete="off" />
    </label>
  </div>
)

const text = (d: FormData, k: string) => String(d.get(k) ?? '').trim()

function commonErrors(t: T, d: FormData): Errors {
  const email = text(d, 'email')
  return {
    name: text(d, 'name') ? undefined : t('Please enter your name.'),
    email: !email
      ? t('Please enter your email.')
      : EMAIL_RE.test(email)
        ? undefined
        : t('Please enter a valid email address.'),
    consent: d.get('consent') ? undefined : t('Please agree before sending.'),
  }
}

function invalid(errors: Errors, name: string) {
  return errors[name] ? { 'aria-invalid': true as const, 'aria-describedby': `${name}-err` } : {}
}

/* ---------------- Apply for the closed beta ---------------- */

const SIZES = [
  { value: 'solo', label: 'Solo agent' },
  { value: 'team', label: 'Team' },
  { value: 'franchise', label: 'Franchise' },
]

export function ApplyForm({
  locale,
  privacyHref,
  children,
}: {
  locale: Locale
  privacyHref: string
  children: ReactNode
}) {
  const t = immvelaT(locale)
  const { status, setStatus, errors, onSubmit, clear } = useSubmit(
    (d) => ({
      ...commonErrors(t, d),
      size: text(d, 'size') ? undefined : t('Please choose your office size.'),
    }),
    async (d) => {
      const size = SIZES.find((s) => s.value === text(d, 'size'))?.label ?? 'unknown'
      await sendImmvelaForm('Immvela: closed beta application', {
        form_type: 'waitlist',
        industry: 'realEstate',
        name: text(d, 'name'),
        email: text(d, 'email'),
        size,
        consent: 'yes',
      })
      track('waitlist_joined', { industry: 'realEstate', size })
    }
  )

  return (
    <form
      className="ap-form"
      aria-label={t('Apply for the closed beta')}
      noValidate
      onSubmit={onSubmit}
      onInput={(e) => clear((e.target as HTMLInputElement).name)}
      style={{ position: 'relative' }}
    >
      {status === 'sent' ? (
        <Sent
          t={t}
          title={t('Thank you. Your application is in.')}
          onAgain={() => setStatus('idle')}
          btn="ap-btn"
        />
      ) : (
        <>
          <Honeypot />
          {status === 'error' && <SendError t={t} />}
          <div className="ap-field">
            <label className="ap-label" htmlFor="ap-name">
              {t('Name')}
            </label>
            <input
              className="ap-input"
              id="ap-name"
              name="name"
              type="text"
              autoComplete="name"
              {...invalid(errors, 'name')}
            />
            <FieldError id="name-err" msg={errors.name} />
          </div>
          <div className="ap-field">
            <label className="ap-label" htmlFor="ap-email">
              {t('Email')}
            </label>
            <input
              className="ap-input"
              id="ap-email"
              name="email"
              type="email"
              autoComplete="email"
              {...invalid(errors, 'email')}
            />
            <FieldError id="email-err" msg={errors.email} />
          </div>
          <fieldset className="ap-set" {...(errors.size ? { 'aria-describedby': 'size-err' } : {})}>
            <legend className="ap-label">{t('Office size')}</legend>
            <div className="ap-opts">
              {SIZES.map((s, i) => (
                <label key={s.value} className="ap-opt" htmlFor={`ap-size-${s.value}`}>
                  <input
                    id={`ap-size-${s.value}`}
                    type="radio"
                    name="size"
                    value={s.value}
                    {...(i === 0 && errors.size ? { 'aria-invalid': true as const } : {})}
                  />
                  {t(s.label)}
                </label>
              ))}
            </div>
            <FieldError id="size-err" msg={errors.size} />
          </fieldset>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label className="ap-consent" htmlFor="ap-consent">
              <input
                id="ap-consent"
                name="consent"
                type="checkbox"
                {...invalid(errors, 'consent')}
              />
              <span>
                {t(
                  'I agree that SNS Software Solutions GmbH may contact me about this application.'
                )}{' '}
                <a className="ap-plink" href={privacyHref}>
                  {t('Privacy policy')}
                </a>
              </span>
            </label>
            <FieldError id="consent-err" msg={errors.consent} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button className="ap-btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t('Sending…') : t('Apply')}
            </button>
            {children}
          </div>
        </>
      )}
    </form>
  )
}

/* ---------------- Book a conversation (partner page) ---------------- */

export function PartnerForm({ locale, privacyHref }: { locale: Locale; privacyHref: string }) {
  const t = immvelaT(locale)
  const { status, setStatus, errors, onSubmit, clear } = useSubmit(
    (d) => ({
      ...commonErrors(t, d),
      office: text(d, 'office') ? undefined : t('Please enter your office.'),
    }),
    async (d) => {
      const office = text(d, 'office')
      const slow = text(d, 'slow')
      await sendImmvelaForm('Immvela: design partner conversation', {
        form_type: 'partner',
        name: text(d, 'name'),
        email: text(d, 'email'),
        phone: text(d, 'phone'),
        office,
        message: `Office: ${office}\n\nWhat slows your listings down?\n${slow || '(left empty)'}`,
        consent: 'yes',
      })
      track('immvela_partner_requested')
    }
  )

  return (
    <form
      className="sh-form"
      aria-label={t('Book a conversation')}
      noValidate
      onSubmit={onSubmit}
      onInput={(e) => clear((e.target as HTMLInputElement).name)}
      style={{ position: 'relative' }}
    >
      {status === 'sent' ? (
        <Sent
          t={t}
          title={t('Thank you. We will be in touch.')}
          onAgain={() => setStatus('idle')}
          btn="sh-btn"
        />
      ) : (
        <>
          <Honeypot />
          {status === 'error' && <SendError t={t} />}
          <div className="sh-pair">
            <div className="sh-field">
              <label className="sh-label" htmlFor="sh-name">
                {t('Name')}
              </label>
              <input
                className="sh-input"
                id="sh-name"
                name="name"
                type="text"
                autoComplete="name"
                {...invalid(errors, 'name')}
              />
              <FieldError id="name-err" msg={errors.name} />
            </div>
            <div className="sh-field">
              <label className="sh-label" htmlFor="sh-office">
                {t('Office')}
              </label>
              <input
                className="sh-input"
                id="sh-office"
                name="office"
                type="text"
                autoComplete="organization"
                {...invalid(errors, 'office')}
              />
              <FieldError id="office-err" msg={errors.office} />
            </div>
          </div>
          <div className="sh-pair">
            <div className="sh-field">
              <label className="sh-label" htmlFor="sh-email">
                {t('Email')}
              </label>
              <input
                className="sh-input"
                id="sh-email"
                name="email"
                type="email"
                autoComplete="email"
                {...invalid(errors, 'email')}
              />
              <FieldError id="email-err" msg={errors.email} />
            </div>
            <div className="sh-field">
              <label className="sh-label" htmlFor="sh-phone">
                {t('Phone')} <span className="sh-opt">{t('(optional)')}</span>
              </label>
              <input
                className="sh-input"
                id="sh-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
              />
            </div>
          </div>
          <div className="sh-field">
            <label className="sh-label" htmlFor="sh-slow">
              {t('What slows your listings down?')}{' '}
              <span className="sh-opt">{t('(optional)')}</span>
            </label>
            <textarea className="sh-input sh-area" id="sh-slow" name="slow" rows={3} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label className="sh-consent" htmlFor="sh-consent">
              <input
                id="sh-consent"
                name="consent"
                type="checkbox"
                {...invalid(errors, 'consent')}
              />
              <span>
                {t(
                  'I agree that SNS Software Solutions GmbH may contact me about this conversation.'
                )}{' '}
                <a className="sh-plink" href={privacyHref}>
                  {t('Privacy policy')}
                </a>
              </span>
            </label>
            <FieldError id="consent-err" msg={errors.consent} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <button className="sh-btn" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? t('Sending…') : t('Book a conversation')}
            </button>
            <p
              style={{
                margin: 0,
                fontSize: '14px',
                lineHeight: 1.45,
                color: '#4e635b',
                textWrap: 'pretty',
              }}
            >
              {t('We reply within a week to find a time.')}
            </p>
          </div>
        </>
      )}
    </form>
  )
}
