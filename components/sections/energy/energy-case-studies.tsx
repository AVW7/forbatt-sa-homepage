"use client"

import { motion } from "framer-motion"
import { Building2, Store, Factory, TrendingUp, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EnergyCaseStudies() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const caseStudies = [
    {
      icon: Factory,
      title: "Manufacturing Facility",
      location: "Johannesburg Industrial Zone",
      industry: "Industrial / Manufacturing",
      challenge: "Load-shedding causing production downtime and equipment damage from power surges.",
      solution: "500kW hybrid solar system with 1MWh battery storage and intelligent load management.",
      metrics: [
        { label: "Cost Reduction", value: "65%", icon: TrendingUp },
        { label: "Uptime", value: "99.9%", icon: Clock },
        { label: "ROI Period", value: "3.2 years", icon: Zap }
      ],
      results: [
        "Complete load-shedding immunity during operating hours",
        "R1.8M annual savings on electricity costs",
        "Eliminated equipment damage from grid instability"
      ]
    },
    {
      icon: Store,
      title: "Retail Chain",
      location: "24 Stores Nationwide",
      industry: "Commercial / Retail",
      challenge: "High energy costs and revenue loss during power outages across multiple locations.",
      solution: "Distributed battery storage with centralized monitoring and automated switching systems.",
      metrics: [
        { label: "Energy Savings", value: "48%", icon: TrendingUp },
        { label: "Locations", value: "24", icon: Store },
        { label: "Annual Savings", value: "R2.4M", icon: Zap }
      ],
      results: [
        "48% reduction in energy consumption",
        "Zero downtime during trading hours",
        "Real-time visibility across all locations"
      ]
    },
    {
      icon: Building2,
      title: "Office Complex",
      location: "Cape Town CBD",
      industry: "Corporate / Commercial",
      challenge: "Frequent outages disrupting business operations and tenant satisfaction declining.",
      solution: "Hybrid solar with UPS backup, providing 12-hour autonomy for critical systems.",
      metrics: [
        { label: "Backup Duration", value: "12h", icon: Clock },
        { label: "Uptime", value: "100%", icon: TrendingUp },
        { label: "Payback", value: "4.1 years", icon: Zap }
      ],
      results: [
        "100% uptime for critical infrastructure",
        "Improved tenant satisfaction scores by 35%",
        "Building value increased through energy resilience"
      ]
    }
  ]

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-(--color-fb-green) font-bold text-sm tracking-widest uppercase font-mono border-l-4 border-(--color-fb-green) pl-4">
              Field-Proven Performance
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Real-World Impact.<br/>Measurable Results.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how businesses across South Africa achieved energy independence, operational resilience, and significant cost savings with our power systems.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              variants={item}
              className="group bg-card border-l-4 border-(--color-fb-green) rounded-none overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="bg-fb-green/10 p-4 rounded-none">
                        <study.icon className="h-10 w-10 text-(--color-fb-green)" />
                      </div>
                      <div>
                        <div className="text-xs text-(--color-fb-green) font-mono uppercase tracking-wide mb-1">
                          Case Study #{String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                          <span className="font-mono">{study.location}</span>
                          <span>•</span>
                          <span>{study.industry}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-bold uppercase tracking-wide text-(--color-fb-green) mb-2">
                          Challenge
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <div className="text-sm font-bold uppercase tracking-wide text-(--color-fb-green) mb-2">
                          Solution
                        </div>
                        <p className="text-foreground font-semibold leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <div className="text-sm font-bold uppercase tracking-wide text-(--color-fb-green) mb-3">
                          Key Results
                        </div>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="mt-1 h-1.5 w-1.5 bg-fb-green rounded-none shrink-0" />
                              <span className="text-muted-foreground text-sm">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  <div className="lg:border-l lg:pl-8 border-border">
                    <div className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-6 font-mono">
                      Performance Metrics
                    </div>
                    <div className="space-y-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="bg-muted/30 p-6 rounded-none border-l-2 border-(--color-fb-green)">
                          <div className="flex items-center gap-3 mb-3">
                            <metric.icon className="h-5 w-5 text-(--color-fb-green)" />
                            <div className="text-xs text-muted-foreground uppercase tracking-wide font-mono">
                              {metric.label}
                            </div>
                          </div>
                          <div className="text-4xl font-bold text-(--color-fb-green) font-mono">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full mt-6 border-(--color-fb-green) text-(--color-fb-green) hover:bg-(--color-fb-green) hover:text-white rounded-none h-12"
                    >
                      Download Full Case Study
                    </Button>
                  </div>
                </div>
              </div>

              {/* Hover Effect: Technical Badge */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/95 backdrop-blur-sm px-4 py-2 rounded-none border-l-2 border-(--color-fb-green)">
                  <div className="text-xs text-white font-mono uppercase tracking-wide">
                    Verified Performance
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-6">
            See how we can design a custom solution for your facility
          </p>
          <Button className="bg-fb-green hover:bg-fb-green/90 text-white rounded-none h-12 px-8">
            Schedule Site Assessment
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
