import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'What SNS Solutions does, in plain terms: custom software, AI automation, and AI & IT consulting — the problems we solve and what you get.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main id="services" className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          {/* Header */}
          <div className="mb-14 max-w-2xl">
            <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
              <span className="h-px w-8 bg-sns-indigo/50" />
              Services
            </p>
            <h1 className="text-[2.4rem] font-bold leading-[1.05] tracking-[-0.02em] text-sns-text md:text-5xl">
              What we do, in plain terms.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-sns-muted">
              Three services, one job: take something complex and make it simple
              to run. Here is what each one means, and what you get.
            </p>
          </div>

          {/* The three services */}
          <Services />

          {/* Closing CTA */}
          <div className="glass edge-light mt-12 flex flex-col items-start justify-between gap-6 rounded-sns-lg p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-sns-text md:text-3xl">
                Not sure which one you need?
              </h2>
              <p className="mt-2 text-sns-muted">
                Tell us the problem. We will tell you how we would approach it.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-sns-indigo px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(99,102,241,0.7)] transition-all duration-300 ease-sns-out hover:-translate-y-0.5 hover:bg-sns-accent hover:shadow-[0_12px_40px_-8px_rgba(99,102,241,0.85)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sns-accent"
            >
              Start a conversation
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
            </Link>
          </div>
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
