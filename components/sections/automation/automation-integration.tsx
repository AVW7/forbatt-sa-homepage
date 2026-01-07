import { Cable, Database, Shield, Wrench } from "lucide-react"

const integrations = [
  {
    icon: Cable,
    title: "Protocol Support",
    description: "Modbus, Profinet, EtherNet/IP, BACnet, OPC UA, MQTT",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Historian databases, cloud storage, real-time analytics",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Industrial firewalls, secure VPNs, access control",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Predictive maintenance, remote diagnostics, firmware updates",
  },
]

export function AutomationIntegration() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Integration & Support</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our automation solutions integrate seamlessly with existing infrastructure and come with comprehensive
            support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {integrations.map((item, index) => (
            <div key={index} className="bg-background rounded-lg p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
