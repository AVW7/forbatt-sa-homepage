import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/sections/hero-section"
import { ThreePillars } from "@/components/sections/three-pillars"
import { BrandShowcase } from "@/components/sections/brand-showcase"
import { ResourceHub } from "@/components/sections/resource-hub"
import { PartnerCTA } from "@/components/sections/partner-cta"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ThreePillars />
        <BrandShowcase />
        <ResourceHub />
        <PartnerCTA />
      </main>
      <Footer />
    </div>
  )
}
