import ImmvelaFrame from '@/components/immvela/ImmvelaFrame'
import ModulesSections from '@/components/immvela/rest/ModulesSections'
import '@/app/immvela-rest.css'

export const metadata = { title: { absolute: 'Immvela · modules' }, robots: { index: false } }

export default function Page() {
  return (
    <ImmvelaFrame locale="de">
      <div className="imv-band imv-page">
        <ModulesSections locale="de" />
      </div>
    </ImmvelaFrame>
  )
}
