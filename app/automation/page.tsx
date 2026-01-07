import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AutomationHero } from "@/components/sections/automation/automation-hero"
import { AutomationCommitment } from "@/components/sections/automation/automation-commitment"
import { AutomationProducts } from "@/components/sections/automation/automation-products"
import { AutomationCaseStudies } from "@/components/sections/automation/automation-case-studies"
import { AutomationIntegration } from "@/components/sections/automation/automation-integration"
import { AutomationContact } from "@/components/sections/automation/automation-contact"

export default function AutomationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AutomationHero />
        <AutomationCommitment />
        <AutomationProducts />
        <AutomationCaseStudies />
        <AutomationIntegration />
        <AutomationContact />
      </main>
      <Footer />
    </div>
  )
}
