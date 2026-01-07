import { SpecCard } from "@/components/ui/spec-card"

export function EnergySpecs() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Technical Specifications & Standards</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All our energy solutions meet international quality standards and are optimized for South African
            conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SpecCard title="Certifications" items={["IEC 61215", "IEC 61730", "SANS 10142", "CE Certified"]} />
          <SpecCard
            title="Warranty Coverage"
            items={["10-year product", "25-year performance", "5-year installation", "Lifetime support"]}
          />
          <SpecCard
            title="System Capacity"
            items={["5kW - 1MW systems", "Modular expansion", "Custom sizing", "Grid/off-grid"]}
          />
          <SpecCard
            title="Monitoring Features"
            items={["Mobile app access", "Cloud-based", "Real-time alerts", "Historical data"]}
          />
        </div>
      </div>
    </section>
  )
}
