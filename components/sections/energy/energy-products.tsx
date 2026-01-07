import { EnergyProductCard } from "@/components/ui/energy-product-card"
import { Battery, Sun, Cpu, Lightbulb } from "lucide-react"

export function EnergyProducts() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Comprehensive Energy Solutions & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From solar power to advanced battery storage, we provide everything you need to transform your energy
            infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EnergyProductCard
            icon={<Sun className="h-10 w-10" />}
            title="Solar Power Systems"
            description="High-efficiency solar panels and inverters designed for South African conditions."
            features={["Tier 1 solar panels", "Hybrid inverters", "Grid-tie solutions", "Off-grid systems"]}
          />
          <EnergyProductCard
            icon={<Battery className="h-10 w-10" />}
            title="Battery Storage"
            description="Lithium and lead-acid battery banks for reliable energy storage and backup power."
            features={["LiFePO4 batteries", "Modular systems", "Smart BMS", "10-year warranty"]}
          />
          <EnergyProductCard
            icon={<Cpu className="h-10 w-10" />}
            title="Energy Management"
            description="Intelligent monitoring and control systems to optimize energy consumption."
            features={["Real-time monitoring", "Load management", "Remote access", "Data analytics"]}
          />
          <EnergyProductCard
            icon={<Lightbulb className="h-10 w-10" />}
            title="Backup Power"
            description="UPS and generator solutions ensuring continuous operation during outages."
            features={["UPS systems", "Generators", "Auto-switching", "Load shedding protection"]}
          />
        </div>
      </div>
    </section>
  )
}
