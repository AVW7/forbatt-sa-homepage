"use client"

import { Building2, Shield, Radio } from "lucide-react"
import { motion } from "framer-motion"

export function SurveillanceCaseStudies() {
  const caseStudies = [
    {
      icon: Building2,
      category: "RETAIL & ENTERPRISE",
      title: "Multi-Site Retail Surveillance",
      client: "National Retail Chain",
      challenge: "Centralized monitoring across 45 retail locations with inconsistent legacy systems and no unified VMS.",
      solution: "Deployed NUUO intelligent VMS with TVT IP cameras across all sites—centralized cloud management and AI analytics.",
      results: [
        "78% reduction in security incidents",
        "Unified monitoring across 45 locations",
        "Real-time alerts and behavioral analytics",
      ],
      tech: ["NUUO VMS", "TVT IP Cameras", "Cloud Storage"],
    },
    {
      icon: Shield,
      category: "PUBLIC PROTECTION",
      title: "Frontline Body-Worn Systems",
      client: "Provincial Security Services",
      challenge: "Required mobile surveillance for 200+ field officers with GPS tracking and real-time evidence recording.",
      solution: "KEDACOM body-worn cameras with vehicle mobile NVR systems—4G connectivity and centralized evidence management.",
      results: [
        "200+ body-worn units deployed",
        "GPS tracking and 4G real-time streaming",
        "Secure evidence chain management",
      ],
      tech: ["KEDACOM BWC", "Mobile NVR", "GPS/4G"],
    },
    {
      icon: Radio,
      category: "TRANSPORT & LOGISTICS",
      title: "Fleet Vehicle Surveillance",
      client: "Commercial Transport Company",
      challenge: "Fleet of 80 vehicles needed mobile recording with G-sensor event capture and driver behavior monitoring.",
      solution: "KEDACOM mobile NVR systems with 4-channel HD recording, GPS tracking, and shock-resistant design for harsh environments.",
      results: [
        "80 vehicles equipped with mobile NVR",
        "40% reduction in driver incidents",
        "Real-time GPS tracking and event alerts",
      ],
      tech: ["KEDACOM Mobile NVR", "4-Ch HD", "G-Sensor"],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block bg-black/10 dark:bg-white/10 border-l-4 border-(--color-fb-red) rounded-none px-4 py-2 mb-6">
            <span className="font-mono text-xs font-bold tracking-wide uppercase">Field-Proven Solutions</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Deployed Across Critical Operations</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real-world implementations across retail, public protection, and transport sectors.
          </p>
        </motion.div>

        <div className="space-y-0">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Angular divider between cases */}
              {index > 0 && (
                <div className="relative h-16 w-full overflow-hidden my-0">
                  <div
                    className="absolute inset-0 bg-muted/30"
                    style={{ clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 60%)" }}
                  />
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
                {/* Content side */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-3">
                      <div className="inline-flex items-center justify-center h-12 w-12 bg-black/10 dark:bg-white/10 text-(--color-fb-red) rounded-none">
                        <study.icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs bg-black/10 dark:bg-white/10 px-3 py-1 rounded-none">
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold">{study.title}</h3>
                    <p className="text-lg text-(--color-fb-red) font-bold">{study.client}</p>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-(--color-fb-red) pl-4 space-y-2 rounded-none">
                      <h4 className="font-mono text-xs tracking-wide uppercase text-muted-foreground">Challenge</h4>
                      <p className="text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    <div className="border-l-4 border-border pl-4 space-y-2 rounded-none">
                      <h4 className="font-mono text-xs tracking-wide uppercase text-muted-foreground">Solution</h4>
                      <p className="text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results & Tech side */}
                <div className="space-y-6">
                  {/* Results panel */}
                  <div className="bg-card border-l-4 border-(--color-fb-red) rounded-none p-6 space-y-4">
                    <h4 className="font-mono text-xs tracking-wide uppercase text-(--color-fb-red)">
                      Measured Results
                    </h4>
                    <ul className="space-y-3">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 bg-fb-red rounded-none mt-2 shrink-0" />
                          <span className="text-sm font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology panel */}
                  <div className="bg-black/95 border-l-4 border-(--color-fb-red) rounded-none p-6 space-y-4">
                    <h4 className="font-mono text-xs tracking-wide uppercase text-(--color-fb-red)">
                      Technology Stack
                    </h4>
                    <div className="space-y-2">
                      {study.tech.map((tech, idx) => (
                        <div key={idx} className="border-l-2 border-(--color-fb-red) pl-3">
                          <span className="font-mono text-xs text-white">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
