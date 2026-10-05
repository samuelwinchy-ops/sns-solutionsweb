import { Bricolage_Grotesque } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'

// The display face: the wordmark, H1, H2 and the big key-fact numbers. Variable, with the
// optical-size axis the design sets per use ('opsz' 96 for the wordmark, 72 for H2, 32 for
// key facts). Everything else is Geist.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin', 'latin-ext'],
  axes: ['opsz'],
  variable: '--font-bricolage',
  display: 'swap',
})

/** Put on the page root so both faces resolve as CSS variables below it. */
export const immvelaFonts = `${bricolage.variable} ${GeistSans.variable}`
