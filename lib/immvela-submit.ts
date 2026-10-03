import emailjs from '@emailjs/browser'

/**
 * The immvela.com forms go out the way the old waitlist form and ContactForm always have: one
 * EmailJS service and template, configured by the three NEXT_PUBLIC_EMAILJS_* variables, and a
 * mailto to the office as the fallback when they are not set (local builds, previews).
 *
 * `send` rather than `sendForm`, so each form can name exactly the fields the shared template
 * already renders (name, email, phone, size, message, form_type) and fold anything else into
 * `message` instead of relying on the template to know a new field.
 */
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export const IMMVELA_FALLBACK_EMAIL = 'office@sns-austria.com'
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type SubmitResult = 'sent' | 'mailto'

export async function sendImmvelaForm(
  subject: string,
  params: Record<string, string>
): Promise<SubmitResult> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    const body = Object.entries(params)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n')
    window.location.href = `mailto:${IMMVELA_FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    return 'mailto'
  }
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })
  return 'sent'
}
