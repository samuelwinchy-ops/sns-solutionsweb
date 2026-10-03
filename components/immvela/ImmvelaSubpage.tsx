import type { Locale } from '@/i18n/config'
import { localePath } from '@/i18n/config'
import { immvelaT } from '@/i18n/immvela'
import ImmvelaFrame from './ImmvelaFrame'
import TrustSections from './TrustSections'
import PartnerSections from './PartnerSections'

export function ImmvelaTrustPage({ locale }: { locale: Locale }) {
  return (
    <ImmvelaFrame locale={locale}>
      <div className="imv-band">
        <TrustSections t={immvelaT(locale)} />
      </div>
    </ImmvelaFrame>
  )
}

export function ImmvelaPartnerPage({ locale }: { locale: Locale }) {
  return (
    <ImmvelaFrame locale={locale}>
      <div className="imv-band">
        <PartnerSections
          t={immvelaT(locale)}
          locale={locale}
          privacyHref={localePath(locale, '/legal/privacy')}
        />
      </div>
    </ImmvelaFrame>
  )
}
