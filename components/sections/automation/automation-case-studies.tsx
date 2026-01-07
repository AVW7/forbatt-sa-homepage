import { CaseStudyCard } from "@/components/ui/case-study-card"

const caseStudies = [
  {
    company: "Manufacturing Plant",
    industry: "Industrial",
    title: "Reduced Downtime by 60% with PLC Upgrade",
    description:
      "A leading manufacturing facility modernized their control systems with Siemens PLCs and achieved significant productivity gains.",
    results: [
      "60% reduction in unplanned downtime",
      "40% improvement in production efficiency",
      "ROI achieved within 18 months",
    ],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    company: "Corporate Office Complex",
    industry: "Commercial Real Estate",
    title: "Smart Building Saves 35% on Energy Costs",
    description: "Integrated BMS solution optimized HVAC and lighting across a 50,000 sq ft commercial building.",
    results: ["35% reduction in energy consumption", "Improved occupant comfort", "Remote monitoring and control"],
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    company: "Warehouse Distribution Center",
    industry: "Logistics",
    title: "Automated Material Handling Boosts Throughput",
    description: "Deployed conveyor control systems and automated sorting solutions for a major distribution center.",
    results: ["3x increase in handling capacity", "90% reduction in sorting errors", "Seamless WMS integration"],
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function AutomationCaseStudies() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Real results from businesses that transformed their operations with our automation solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}
