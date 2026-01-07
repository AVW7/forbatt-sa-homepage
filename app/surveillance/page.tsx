import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SurveillanceHero } from "@/components/sections/surveillance/surveillance-hero"
import { SurveillanceCommitment } from "@/components/sections/surveillance/surveillance-commitment"
import { SurveillanceProducts } from "@/components/sections/surveillance/surveillance-products"
import { SurveillanceCaseStudies } from "@/components/sections/surveillance/surveillance-case-studies"
import { SurveillanceIntegration } from "@/components/sections/surveillance/surveillance-integration"
import { SurveillanceContact } from "@/components/sections/surveillance/surveillance-contact"

export default function SurveillancePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SurveillanceHero />
        <SurveillanceCommitment />
        <SurveillanceProducts />
        <SurveillanceCaseStudies />
        <SurveillanceIntegration />
        <SurveillanceContact />
      </main>
      <Footer />
    </div>
  )
}
