"use client"

import { Battery, Sun, Cpu, Zap, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function EnergyProducts() {
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

  const products = [
    {
      icon: Battery,
      category: "Battery Storage",
      title: "Gel & AGM Systems",
      description: "High-performance gel and AGM battery banks for sustained power delivery and extended lifecycle.",
      specs: [
        { label: "Capacity Range", value: "12V - 200Ah" },
        { label: "Cycle Life", value: "1500+ cycles" },
        { label: "Warranty", value: "10 years" },
        { label: "Operating Temp", value: "-20°C to 50°C" }
      ],
      featured: true
    },
    {
      icon: Sun,
      category: "Solar Integration",
      title: "Hybrid Power Systems",
      description: "Grid-tie and off-grid solar solutions with intelligent battery management for optimal energy harvesting.",
      specs: [
        { label: "System Size", value: "5kW - 1MW" },
        { label: "Panel Efficiency", value: "Up to 22%" },
        { label: "Inverter Type", value: "Hybrid" },
        { label: "Grid Support", value: "Seamless" }
      ],
      featured: false
    },
    {
      icon: Cpu,
      category: "Energy Management",
      title: "Smart BMS Systems",
      description: "Real-time monitoring, predictive analytics, and automated load management for peak performance.",
      specs: [
        { label: "Monitoring", value: "Cloud-based" },
        { label: "Updates", value: "Real-time" },
        { label: "Alerts", value: "Predictive" },
        { label: "Access", value: "Mobile + Web" }
      ],
      featured: false
    },
    {
      icon: Zap,
      category: "Backup Power",
      title: "UPS Solutions",
      description: "Uninterruptible power supply systems with automatic switching for critical infrastructure protection.",
      specs: [
        { label: "Switch Time", value: "<10ms" },
        { label: "Power Range", value: "1kVA - 500kVA" },
        { label: "Efficiency", value: "Up to 98%" },
        { label: "Protection", value: "Enterprise" }
      ],
      featured: false
    }
  ]

  return (
    <section className="py-24 bg-muted/30 relative">
      {/* Angular Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-background"
          style={{ clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-16">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-(--color-fb-green) font-bold text-sm tracking-widest uppercase font-mono border-l-4 border-(--color-fb-green) pl-4">
              Product Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Enterprise-Grade Energy Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From battery storage to intelligent monitoring, we provide everything you need to transform your energy infrastructure with proven, field-tested systems.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              variants={item}
              className={`group relative bg-card border-l-4 border-(--color-fb-green) rounded-none overflow-hidden ${
                product.featured ? 'md:col-span-2' : ''
              }`}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className={`p-8 ${product.featured ? 'md:flex md:gap-8' : ''}`}>
                <div className={product.featured ? 'md:flex-1' : ''}>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-fb-green/10 p-4 rounded-none">
                      <product.icon className="h-10 w-10 text-(--color-fb-green)" />
                    </div>
                    <div>
                      <div className="text-xs text-(--color-fb-green) font-mono uppercase tracking-wide mb-1">
                        {product.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <Button 
                    variant="outline" 
                    className="border-(--color-fb-green) text-(--color-fb-green) hover:bg-(--color-fb-green) hover:text-white rounded-none"
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Technical Specs */}
                <div className={`mt-8 pt-6 border-t border-border ${product.featured ? 'md:flex-1 md:mt-0 md:pt-0 md:border-t-0 md:border-l md:pl-8' : ''}`}>
                  <div className="text-sm font-mono uppercase tracking-wide text-muted-foreground mb-4">
                    Technical Specifications
                  </div>
                  <div className="space-y-3">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="flex items-center justify-between py-2 border-l-2 border-(--color-fb-green) pl-3">
                        <span className="text-sm text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-bold font-mono">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Overlay for SKU/Product Code */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/95 backdrop-blur-sm px-3 py-2 rounded-none border-l-2 border-(--color-fb-green)">
                  <div className="text-xs text-white font-mono">
                    SKU: FB-{String(index + 1).padStart(4, '0')}-{product.category.substring(0, 3).toUpperCase()}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="bg-card border-l-4 border-(--color-fb-green) rounded-none p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Need Custom System Sizing?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our energy specialists will design a solution tailored to your load requirements, budget, and operational constraints.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-fb-green hover:bg-fb-green/90 text-white rounded-none h-12 px-8">
              Request System Design
            </Button>
            <Button variant="outline" className="rounded-none h-12 px-8">
              Download Spec Sheets
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
