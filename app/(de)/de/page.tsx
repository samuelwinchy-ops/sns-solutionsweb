import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import CinemaHero from '@/components/CinemaHero'
import HomeChapters from '@/components/HomeChapters'
import Footer from '@/components/Footer'
import SnsWebSiteSchema from '@/components/SnsWebSiteSchema'

// Title, description and the Open Graph/Twitter cards are the German defaults
// from the (de) root layout (see lib/site.ts → SITE_COPY.de), so this page only
// has to declare where it sits in the language pair. They used to be repeated
// here as literals, which is how the German root ended up with no defaults of
// its own and every other German page inheriting the English ones.
export const metadata: Metadata = {
  alternates: {
    canonical: '/de',
    languages: { en: '/', de: '/de', 'x-default': '/' },
  },
}

export default function HomeDe() {
  return (
    <>
      <SnsWebSiteSchema />
      <Nav locale="de" />
      <main>
        <CinemaHero locale="de" />
        <HomeChapters locale="de" />
      </main>
      <Footer locale="de" showCta={false} />
    </>
  )
}
