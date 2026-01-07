import { Building2, ShoppingCart, Factory } from "lucide-react"

export function SurveillanceCaseStudies() {
  const caseStudies = [
    {
      icon: Building2,
      title: "Corporate Office Security",
      client: "Tech Solutions Ltd.",
      challenge: "Needed comprehensive surveillance for 5-story office building with 200+ employees",
      solution: "Deployed 48 IP cameras with facial recognition, integrated with access control and VMS",
      results: ["95% reduction in security incidents", "Enhanced employee safety", "Streamlined visitor management"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: ShoppingCart,
      title: "Retail Chain Protection",
      client: "RetailMart Stores",
      challenge: "Required unified surveillance system across 12 retail locations with central monitoring",
      solution: "Implemented cloud-based VMS with AI-powered analytics for theft detection and customer insights",
      results: ["60% decrease in shoplifting", "Improved operational efficiency", "Better customer experience"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      icon: Factory,
      title: "Industrial Facility Monitoring",
      client: "Manufacturing Co.",
      challenge: "Large outdoor facility with harsh conditions requiring robust surveillance coverage",
      solution: "Installed weatherproof PTZ cameras with thermal imaging and perimeter intrusion detection",
      results: ["24/7 perimeter protection", "Early threat detection", "Reduced security costs by 40%"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Security Success Stories</h2>
          <p className="text-xl text-gray-600">
            See how our surveillance solutions have protected businesses across industries
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-red-100 text-red-600">
                  <study.icon className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{study.title}</h3>
                <p className="text-lg text-red-600 font-semibold">{study.client}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-red-600">•</span>
                          <span className="text-gray-600">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
