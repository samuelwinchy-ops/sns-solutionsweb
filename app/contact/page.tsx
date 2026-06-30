import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Start a build with SNS Solutions — custom software, AI automation, and AI & IT consulting. Tell us what you're building and we'll tell you how we'd approach it.",
  alternates: { canonical: '/contact' },
}

const details = [
  {
    label: 'Email',
    value: 'office@sns-austria.com',
    href: 'mailto:office@sns-austria.com',
  },
  { label: 'Based in', value: 'Vienna, Austria' },
  { label: 'Response', value: 'Usually within 1–2 business days' },
]

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            {/* Left — intro + direct contact details */}
            <div>
              <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
                <span className="h-px w-8 bg-sns-indigo/50" />
                Get in touch
              </p>
              <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">
                Tell us what you&apos;re building.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-sns-muted">
                Custom software, AI automation, or AI &amp; IT consulting — tell
                us what&apos;s slowing you down and we&apos;ll tell you how
                we&apos;d approach it. We read every message.
              </p>

              <dl className="mt-10 flex flex-col">
                {details.map((d) => (
                  <div
                    key={d.label}
                    className="border-t border-white/[0.07] py-4"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-sns-faint">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-sns-text">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="transition-colors duration-300 hover:text-sns-accent"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right — the lead form */}
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
