import { PageHeader } from "@organisms"
import PrivacyPolicyPage from "@pages/PrivacyPolicy/PrivacyPolicyPage"

export default async function PrivacyPolityRoute() {
  return (
    <main>
      <PageHeader />
      <PrivacyPolicyPage />
    </main>
  )
}
