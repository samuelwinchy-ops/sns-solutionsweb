'use client'

import { type Locale, localePath } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import { useImmvelaPath } from '@/lib/immvela-nav'
import { SITE_URL } from '@/lib/site'
import { useHomeVals } from './home/vals'
import Hero from './home/Hero'
import Product from './home/Product'
import Trace from './home/Trace'
import Office from './home/Office'
import Listen from './home/Listen'
import Integrations from './home/Integrations'
import Specs from './home/Specs'
import People from './home/People'
import Apply from './home/Apply'

/** The immvela.com home page, section by section as in design/immvela-redesign/project/Immvela.dc.html. */
export default function ImmvelaHome({ locale }: { locale: Locale }) {
  const t = immvelaT(locale)
  const path = useImmvelaPath(locale)
  const v = useHomeVals(t, {
    locale,
    path,
    privacyHref: localePath(locale, '/legal/privacy'),
    teamHref: `${SITE_URL}${localePath(locale, '/team')}`,
  })
  return (
    <>
      <div className="imv-band">
        <Hero t={t} v={v} />
      </div>
      <div className="imv-band">
        <Product t={t} v={v} />
      </div>
      <div className="imv-band imv-band-h">
        <Trace t={t} v={v} />
      </div>
      <div className="imv-band imv-band-h">
        <Office t={t} />
      </div>
      <div className="imv-band imv-band-h">
        <Listen t={t} />
      </div>
      <div className="imv-band imv-band-h">
        <Integrations t={t} />
      </div>
      <div className="imv-band imv-band-h">
        <Specs t={t} v={v} />
      </div>
      <div className="imv-band imv-band-h">
        <People t={t} v={v} />
      </div>
      {/* #early-access: the old landing's anchor, still linked from the SNS home and the demo pages */}
      <div className="imv-band imv-band-h" id="early-access">
        <Apply t={t} v={v} />
      </div>
    </>
  )
}
