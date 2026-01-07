import { PillarCard } from "@/components/ui/pillar-card"
import { Battery, Camera, Cpu } from "lucide-react"

export function ThreePillars() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Three Pillars of Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions across energy, surveillance, and automation for the modern South African business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <PillarCard
            icon={<Battery className="h-12 w-12" />}
            title="Energy"
            accentColor="green"
            description="Sustainable Power Systems. High-density storage and lithium solutions for an uninterrupted South Africa."
            imageUrl="/placeholder.svg?height=400&width=600"
            features={["Lithium Battery Banks", "Solar Inverters", "Renewable Integration", "Backup Power Systems"]}
          />
          <PillarCard
            icon={<Camera className="h-12 w-12" />}
            title="Surveillance"
            accentColor="red"
            description="Intelligent Security. AI-driven surveillance from TVT and Kedacom. Protecting assets, people, and data."
            imageUrl="/placeholder.svg?height=400&width=600"
            features={["AI Video Analytics", "Thermal Imaging", "Mobile Surveillance", "Enterprise VMS"]}
          />
          <PillarCard
            icon={<Cpu className="h-12 w-12" />}
            title="Automation"
            accentColor="gray"
            description="Integrated Environments. Seamless home and industrial automation for the modern era."
            imageUrl="/placeholder.svg?height=400&width=600"
            features={["Smart Home Systems", "Industrial Control", "Access Management", "IoT Integration"]}
          />
        </div>
      </div>
    </section>
  )
}
