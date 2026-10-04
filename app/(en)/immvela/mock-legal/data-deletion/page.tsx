import LegalShell from '@/components/immvela/rest/LegalShell'
import ImmvelaDataDeletionPage from '../../legal/data-deletion/page'

export const metadata = { title: { absolute: 'MOCKUP · Immvela data deletion in the site frame' }, robots: { index: false } }

export default function Page() {
  return (
    <LegalShell locale="en" current="data-deletion">
      <ImmvelaDataDeletionPage />
    </LegalShell>
  )
}
