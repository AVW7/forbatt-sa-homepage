import { Button } from "@/components/ui/button"
import { ShoppingBag, Pickaxe, Home, Factory, ArrowRight } from "lucide-react"

const industries = [
  {
    icon: <ShoppingBag className="h-10 w-10" />,
    title: "Retail Solutions",
    description: "Comprehensive solutions for retail businesses focusing on uninterrupted operations, customer safety, and inventory management.",
    href: "/solutions/retail",
    features: [
      "Backup power for stores",
      "Security surveillance systems",
      "Automated inventory tracking",
      "POS integration"
    ]
  },
  {
    icon: <Pickaxe className="h-10 w-10" />,
    title: "Mining Solutions",
    description: "Robust solutions for mining operations emphasizing remote monitoring, power reliability, and safety automation.",
    href: "/solutions/mining",
    features: [
      "Remote site monitoring",
      "Heavy-duty power systems",
      "Safety automation",
      "Environmental compliance"
    ]
  },
  {
    icon: <Home className="h-10 w-10" />,
    title: "Residential Solutions",
    description: "Smart home integration combining energy efficiency, security, and automation for modern living.",
    href: "/solutions/residential",
    features: [
      "Smart home automation",
      "Home security systems",
      "Solar + battery solutions",
      "Energy monitoring"
    ]
  },
  {
    icon: <Factory className="h-10 w-10" />,
    title: "Industrial Solutions",
    description: "Advanced automation and surveillance for large-scale industrial facilities and manufacturing operations.",
    href: "/solutions/industrial",
    features: [
      "Process automation",
      "Facility surveillance",
      "Backup power systems",
      "SCADA integration"
    ]
  }
]

export function IndustrySolutions() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Industry-Specific Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our integrated energy, surveillance, and automation solutions are tailored for different industries across South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-(--color-fb-red) p-3 rounded-lg text-white">
                  {industry.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {industry.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-(--color-fb-red) rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full bg-(--color-fb-red) hover:bg-(--color-fb-red)/90">
                <a href={industry.href}>
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}