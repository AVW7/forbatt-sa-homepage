import { CaseStudyCard } from "@/components/ui/case-study-card"

export function SolutionsCaseStudies() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Integrated Solutions in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world examples of how our combined energy, surveillance, and automation solutions deliver transformative results across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CaseStudyCard
            title="Mining Operation"
            industry="Mining"
            savings="40% Efficiency Gain"
            description="A platinum mine implemented integrated monitoring and automation systems, reducing operational costs by 40% while improving safety compliance."
            imageUrl="/placeholder.svg?height=400&width=600"
            metrics={[
              { label: "Safety Incidents", value: "-60%" },
              { label: "ROI Period", value: "2.8 years" },
            ]}
          />
          <CaseStudyCard
            title="Retail Complex"
            industry="Retail"
            savings="30% Loss Prevention"
            description="A shopping center deployed comprehensive surveillance and energy management, reducing shrinkage by 30% and achieving 50% energy savings."
            imageUrl="/placeholder.svg?height=400&width=600"
            metrics={[
              { label: "Energy Savings", value: "50%" },
              { label: "Security Events", value: "-70%" },
            ]}
          />
          <CaseStudyCard
            title="Industrial Plant"
            industry="Industrial"
            savings="Zero Downtime"
            description="A manufacturing facility achieved complete automation integration with backup power, ensuring 100% uptime and 35% productivity increase."
            imageUrl="/placeholder.svg?height=400&width=600"
            metrics={[
              { label: "Uptime", value: "100%" },
              { label: "Productivity", value: "+35%" },
            ]}
          />
        </div>
      </div>
    </section>
  )
}