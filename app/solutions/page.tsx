import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SolutionsHero } from "@/components/sections/solutions/solutions-hero"
import { IndustrySolutions } from "@/components/sections/solutions/industry-solutions"
import { SolutionsCommitment } from "@/components/sections/solutions/solutions-commitment"
import { SolutionsCaseStudies } from "@/components/sections/solutions/solutions-case-studies"
import { SolutionsContact } from "@/components/sections/solutions/solutions-contact"

export default function SolutionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SolutionsHero />
        <IndustrySolutions />
        <SolutionsCommitment />
        <SolutionsCaseStudies />
        <SolutionsContact />
      </main>
      <Footer />
    </div>
  )
}