import { Cpu, Network, Workflow, Gauge } from "lucide-react"

const commitments = [
  {
    icon: Cpu,
    title: "Advanced Control",
    description: "State-of-the-art PLCs, HMIs, and control systems for precise automation.",
  },
  {
    icon: Network,
    title: "IoT Integration",
    description: "Seamlessly connect devices and systems for unified management.",
  },
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Streamline workflows and eliminate inefficiencies with smart automation.",
  },
  {
    icon: Gauge,
    title: "Real-time Monitoring",
    description: "Track performance metrics and respond instantly to changing conditions.",
  },
]

export function AutomationCommitment() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Forbatt for Automation?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our automation solutions combine cutting-edge technology with decades of industry expertise to deliver
            systems that work seamlessly and scale with your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-pretty">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
