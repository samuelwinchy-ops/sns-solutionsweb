import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Start a build with SNS Solutions: custom software, AI automation, and AI & IT consulting. Tell us what you're building and we'll tell you how we'd approach it.",
  alternates: {
    canonical: '/contact',
    languages: { en: '/contact', de: '/de/contact', 'x-default': '/contact' },
  },
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="relative px-5 pb-24 pt-32 md:px-10 md:pt-36">
        <div className="mx-auto w-full max-w-6xl 2xl:max-w-7xl">
          <ContactContent locale="en" />
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
