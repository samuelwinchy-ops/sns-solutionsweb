import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import { ApplySentMock } from '@/components/immvela/rest/MoreSections'
import '@/app/immvela-rest.css'

export const metadata = { title: { absolute: 'Immvela · mock-apply-sent (mockup)' }, robots: { index: false } }

export default function Page() {
  return (
    <ImmvelaFrame locale="en">
      <div className="imv-band imv-page">
        <ApplySentMock locale="en" />
      </div>
    </ImmvelaFrame>
  )
}
