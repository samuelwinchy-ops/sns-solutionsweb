import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import HomeFocus from '@/components/HomeFocus'
import CustomBuilds from '@/components/CustomBuilds'
import Footer from '@/components/Footer'
import ScrollProgress from '@/components/ScrollProgress'
import KeyboardNav from '@/components/KeyboardNav'
import BuildAnnouncement from '@/components/BuildAnnouncement'
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
      <ScrollProgress />
      <KeyboardNav />
      <main>
        <Hero locale="de" />
        <HomeFocus locale="de" />
        <CustomBuilds locale="de" />
      </main>
      <Footer locale="de" showCta={false} />
      <BuildAnnouncement locale="de" />
    </>
  )
}
