import LegalShell from '@/components/immvela/rest/LegalShell'
import ImmvelaPrivacyPage from '../../legal/privacy/page'

export const metadata = { title: { absolute: 'MOCKUP · Immvela privacy in the site frame' }, robots: { index: false } }

export default function Page() {
  return (
    <LegalShell locale="en" current="privacy">
      <ImmvelaPrivacyPage />
    </LegalShell>
  )
}
