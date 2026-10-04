import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import { BetaSections } from '@/components/immvela/rest/MoreSections'
import '@/app/immvela-rest.css'

export const metadata = { title: { absolute: 'Immvela · beta (mockup)' }, robots: { index: false } }

export default function Page() {
  return (
    <ImmvelaFrame locale="en">
      <div className="imv-band imv-page">
        <BetaSections locale="en" />
      </div>
    </ImmvelaFrame>
  )
}
