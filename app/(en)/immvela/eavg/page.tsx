import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import { EavgSections } from '@/components/immvela/rest/MoreSections'
import '@/app/immvela-rest.css'

export const metadata = { title: { absolute: 'Immvela · eavg (mockup)' }, robots: { index: false } }

export default function Page() {
  return (
    <ImmvelaFrame locale="en">
      <div className="imv-band imv-page">
        <EavgSections locale="en" />
      </div>
    </ImmvelaFrame>
  )
}
