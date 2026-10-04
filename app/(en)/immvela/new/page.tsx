import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import { NewsSections } from '@/components/immvela/rest/MoreSections'
import '@/app/immvela-rest.css'

export const metadata = { title: { absolute: 'Immvela · new (mockup)' }, robots: { index: false } }

export default function Page() {
  return (
    <ImmvelaFrame locale="en">
      <div className="imv-band imv-page">
        <NewsSections locale="en" />
      </div>
    </ImmvelaFrame>
  )
}
