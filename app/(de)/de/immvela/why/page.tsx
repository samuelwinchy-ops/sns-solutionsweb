import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import WhySections from '@/components/immvela/rest/WhySections'
import '@/app/immvela-rest.css'

export const metadata = { title: { absolute: 'Immvela · why Immvela' }, robots: { index: false } }

export default function Page() {
  return (
    <ImmvelaFrame locale="de">
      <div className="imv-band imv-page">
        <WhySections locale="de" />
      </div>
    </ImmvelaFrame>
  )
}
