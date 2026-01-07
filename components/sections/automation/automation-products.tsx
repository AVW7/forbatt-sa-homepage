import { AutomationProductCard } from "@/components/ui/automation-product-card"
import { Cpu, Monitor, Wifi, Settings, Building2, Lightbulb } from "lucide-react"

const products = [
  {
    icon: Cpu,
    title: "Programmable Logic Controllers (PLCs)",
    description: "Industrial-grade PLCs from leading manufacturers for reliable process control.",
    features: ["Modular design", "Multiple I/O options", "SCADA integration", "Industrial protocols"],
  },
  {
    icon: Monitor,
    title: "Human-Machine Interfaces (HMI)",
    description: "Intuitive touchscreen panels for monitoring and controlling automated systems.",
    features: ["High-resolution displays", "Multi-touch support", "Web-based access", "Alarm management"],
  },
  {
    icon: Building2,
    title: "Building Management Systems (BMS)",
    description: "Comprehensive solutions for HVAC, lighting, and facility management.",
    features: ["Energy optimization", "Occupancy sensors", "Cloud connectivity", "Analytics dashboard"],
  },
  {
    icon: Wifi,
    title: "Industrial IoT Devices",
    description: "Connect sensors, actuators, and equipment for intelligent automation.",
    features: ["Wireless connectivity", "Edge computing", "Data analytics", "Remote monitoring"],
  },
  {
    icon: Settings,
    title: "Drive & Motion Control",
    description: "Variable frequency drives and servo systems for precise motor control.",
    features: ["Energy efficient", "Speed control", "Torque management", "Safety features"],
  },
  {
    icon: Lightbulb,
    title: "Smart Lighting Control",
    description: "Automated lighting systems with occupancy sensing and scheduling.",
    features: ["Daylight harvesting", "Scene control", "Energy reporting", "Wireless control"],
  },
]

export function AutomationProducts() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Automation Products & Solutions</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            From controllers to complete systems, we offer comprehensive automation solutions tailored to your industry
            needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <AutomationProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
