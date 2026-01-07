import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { EnergyHero } from "@/components/sections/energy/energy-hero"
import { EnergyCommitment } from "@/components/sections/energy/energy-commitment"
import { EnergyProducts } from "@/components/sections/energy/energy-products"
import { EnergyCaseStudies } from "@/components/sections/energy/energy-case-studies"
import { EnergySpecs } from "@/components/sections/energy/energy-specs"
import { EnergyContact } from "@/components/sections/energy/energy-contact"

export default function EnergyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <EnergyHero />
        <EnergyCommitment />
        <EnergyProducts />
        <EnergyCaseStudies />
        <EnergySpecs />
        <EnergyContact />
      </main>
      <Footer />
    </div>
  )
}
