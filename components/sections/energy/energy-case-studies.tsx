import { CaseStudyCard } from "@/components/ui/case-study-card"

export function EnergyCaseStudies() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Success Stories & Real-World Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how businesses across South Africa are achieving energy independence and sustainability with our
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CaseStudyCard
            title="Manufacturing Facility"
            industry="Industrial"
            savings="65% Cost Reduction"
            description="A Johannesburg-based manufacturing plant achieved complete load-shedding immunity and reduced energy costs by 65% with a 500kW solar system and 1MWh battery storage."
            imageUrl="/placeholder.svg?height=400&width=600"
            metrics={[
              { label: "System Size", value: "500kW" },
              { label: "ROI Period", value: "3.2 years" },
            ]}
          />
          <CaseStudyCard
            title="Retail Chain"
            industry="Commercial"
            savings="48% Energy Savings"
            description="A national retail chain deployed smart energy management across 24 stores, cutting energy consumption by 48% and eliminating costly downtime during outages."
            imageUrl="/placeholder.svg?height=400&width=600"
            metrics={[
              { label: "Locations", value: "24 stores" },
              { label: "Annual Savings", value: "R2.4M" },
            ]}
          />
          <CaseStudyCard
            title="Office Complex"
            industry="Corporate"
            savings="Zero Downtime"
            description="A Cape Town office complex achieved 100% uptime with hybrid solar and UPS systems, ensuring business continuity even during extended load-shedding periods."
            imageUrl="/placeholder.svg?height=400&width=600"
            metrics={[
              { label: "Backup Duration", value: "12 hours" },
              { label: "Payback", value: "4.1 years" },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
