'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

// Public by design — EmailJS keys live in the browser. Keep them in env so
// they're configurable per-environment and never hard-coded in the repo.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const FALLBACK_EMAIL = 'office@sns-austria.com'

const SERVICES = [
  'Custom Software',
  'AI Automation',
  'AI & IT Consulting',
  'Something else',
]

type Status = 'idle' | 'sending' | 'success' | 'error'
type FieldName = 'name' | 'email' | 'service' | 'message' | 'consent'
type Errors = Partial<Record<FieldName, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: FormData): Errors {
  const e: Errors = {}
  const name = (data.get('name') as string)?.trim()
  const email = (data.get('email') as string)?.trim()
  const service = (data.get('service') as string)?.trim()
  const message = (data.get('message') as string)?.trim()
  const consent = data.get('consent')

  if (!name) e.name = 'Please enter your name.'
  if (!email) e.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(email)) e.email = 'That email doesn’t look right.'
  if (!service) e.service = 'Please choose a service.'
  if (!message || message.length < 10)
    e.message = 'Tell us a little more — 10 characters or so.'
  if (!consent) e.consent = 'Please agree before sending.'
  return e
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})
  const [service, setService] = useState('')

  // Pre-select the service when arriving from a /services CTA (?service=…).
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('service')
    if (param && SERVICES.includes(param)) setService(param)
  }, [])

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault()
    const form = ev.currentTarget
    const data = new FormData(form)

    // Honeypot: bots fill hidden fields, humans don't. Silently accept & drop.
    if ((data.get('company') as string)?.trim()) {
      setStatus('success')
      return
    }

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const firstInvalid = form.querySelector(
        '[aria-invalid="true"]'
      ) as HTMLElement | null
      firstInvalid?.focus()
      return
    }

    // No EmailJS config yet → fall back to the visitor's mail client so the
    // form is never a dead end before the keys are wired up in Vercel.
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const subject = encodeURIComponent(`New inquiry — ${data.get('service')}`)
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
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      })
      setStatus('success')
      form.reset()
      setService('')
    } catch (err) {
      console.error('EmailJS send failed:', err)
      setStatus('error')
    }
  }

  // Clear a field's error as soon as the visitor starts fixing it.
  function clearError(name: string) {
    setErrors((prev) =>
      prev[name as FieldName] ? { ...prev, [name]: undefined } : prev
    )
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="glass edge-light flex flex-col items-center rounded-sns-lg p-10 text-center"
      >
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
        <h3 className="mt-5 text-xl font-bold text-sns-text">Message sent.</h3>
        <p className="mt-2 max-w-sm text-sns-muted">
          Thanks for reaching out — we&apos;ll get back to you shortly at the
          email you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 font-mono text-xs uppercase tracking-widest text-sns-muted transition-colors duration-300 hover:text-sns-accent"
        >
          ← Send another
        </button>
      </motion.div>
    )
  }

  const labelClass =
    'mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-sns-faint'
  const fieldBase =
    'w-full rounded-sns border bg-white/[0.03] px-4 py-3 text-sns-text outline-none transition-colors duration-200 placeholder:text-sns-faint focus:bg-white/[0.05]'
  const ok = 'border-white/10 focus:border-sns-indigo/60'
  const bad = 'border-red-400/60 focus:border-red-400'

  return (
    <form
      onSubmit={handleSubmit}
      onInput={(e) => clearError((e.target as HTMLInputElement).name)}
      noValidate
      className="glass edge-light rounded-sns-lg p-6 md:p-8"
    >
      {status === 'error' && (
        <div
          role="alert"
          className="mb-6 rounded-sns border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300"
        >
          Something went wrong sending your message. Please try again, or email
          us directly at{' '}
          <a href={`mailto:${FALLBACK_EMAIL}`} className="underline">
            {FALLBACK_EMAIL}
          </a>
          .
        </div>
      )}

      {/* Honeypot — visually hidden, off-screen, skipped by keyboard & a11y tree */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-sns-indigo">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${fieldBase} ${errors.name ? bad : ok}`}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-sns-indigo">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={errors.email ? 'true' : undefined}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${fieldBase} ${errors.email ? bad : ok}`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-sns-faint">(optional)</span>
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
            Type of service <span className="text-sns-indigo">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => {
              setService(e.target.value)
              clearError('service')
            }}
            aria-invalid={errors.service ? 'true' : undefined}
            aria-describedby={errors.service ? 'service-error' : undefined}
            className={`${fieldBase} ${errors.service ? bad : ok} appearance-none bg-[length:0] pr-10`}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s} className="bg-sns-surface text-sns-text">
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-xs text-red-400">
              {errors.service}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-sns-indigo">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="What are you trying to build or automate? What's slowing you down?"
          aria-invalid={errors.message ? 'true' : undefined}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldBase} resize-y ${errors.message ? bad : ok}`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
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
            className="mt-1 h-4 w-4 shrink-0 accent-sns-indigo"
          />
          <span className="text-sm leading-relaxed text-sns-muted">
            I agree that my details may be used to respond to my inquiry, as
            described in the{' '}
            <Link
              href="/legal/privacy"
              className="text-sns-accent underline underline-offset-2 hover:text-sns-cyan"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-red-400">{errors.consent}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-sns-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === 'sending' ? 'Sending…' : 'Send inquiry'}
        {status !== 'sending' && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="transition-transform duration-300 ease-sns-out group-hover:translate-x-1"
          >
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

      <p className="mt-4 font-mono text-xs text-sns-faint">
        Prefer email? Reach us at{' '}
        <a
          href={`mailto:${FALLBACK_EMAIL}`}
          className="text-sns-muted underline underline-offset-2 hover:text-sns-accent"
        >
          {FALLBACK_EMAIL}
        </a>
      </p>
    </form>
  )
}
