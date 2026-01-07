"use client"

import { motion } from "framer-motion"
import { Shield, Award, Gauge, Smartphone, FileCheck, Zap, ThermometerSnowflake, Settings } from "lucide-react"

export function EnergySpecs() {
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

  const specs = [
    {
      icon: Award,
      title: "International Standards",
      items: [
        { label: "IEC 61215", desc: "PV Module Design" },
        { label: "IEC 61730", desc: "Module Safety" },
        { label: "SANS 10142", desc: "Wiring Standards" },
        { label: "CE Certified", desc: "European Compliance" }
      ]
    },
    {
      icon: Shield,
      title: "Warranty Coverage",
      items: [
        { label: "10-Year Product", desc: "Full replacement" },
        { label: "25-Year Performance", desc: "80% capacity guarantee" },
        { label: "5-Year Installation", desc: "Workmanship coverage" },
        { label: "Lifetime Support", desc: "Technical assistance" }
      ]
    },
    {
      icon: Gauge,
      title: "System Specifications",
      items: [
        { label: "5kW - 1MW", desc: "Scalable capacity" },
        { label: "Modular Design", desc: "Expandable architecture" },
        { label: "Grid/Off-Grid", desc: "Flexible topology" },
        { label: "Custom Sizing", desc: "Load-specific design" }
      ]
    },
    {
      icon: Smartphone,
      title: "Monitoring Features",
      items: [
        { label: "Mobile + Web", desc: "iOS, Android, Browser" },
        { label: "Cloud-Based", desc: "Real-time sync" },
        { label: "Predictive Alerts", desc: "AI-powered analysis" },
        { label: "Historical Data", desc: "Unlimited retention" }
      ]
    },
    {
      icon: ThermometerSnowflake,
      title: "Operating Conditions",
      items: [
        { label: "-20°C to 50°C", desc: "Operating range" },
        { label: "IP65 Rated", desc: "Dust & water proof" },
        { label: "UV Resistant", desc: "25+ year outdoor life" },
        { label: "Salt Mist", desc: "Coastal compatible" }
      ]
    },
    {
      icon: Zap,
      title: "Performance Metrics",
      items: [
        { label: "98% Efficiency", desc: "Inverter performance" },
        { label: "1500+ Cycles", desc: "Battery cycle life" },
        { label: "<10ms Switch", desc: "UPS transfer time" },
        { label: "0.9 Power Factor", desc: "Grid support" }
      ]
    },
    {
      icon: FileCheck,
      title: "Compliance & Safety",
      items: [
        { label: "SANS Compliant", desc: "SA regulations" },
        { label: "CoC Provided", desc: "Certificate of Compliance" },
        { label: "Arc Fault Detect", desc: "Fire prevention" },
        { label: "Surge Protected", desc: "Lightning protection" }
      ]
    },
    {
      icon: Settings,
      title: "Installation Support",
      items: [
        { label: "Site Assessment", desc: "Free evaluation" },
        { label: "Custom Design", desc: "Load analysis" },
        { label: "Commissioning", desc: "Full system test" },
        { label: "Training", desc: "Operator instruction" }
      ]
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
              Technical Documentation
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Standards-Compliant.<br/>Field-Proven.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            All energy solutions meet international quality standards and are optimized for South African conditions—from coastal humidity to inland temperature extremes.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specs.map((spec) => (
            <motion.div
              key={spec.title}
              variants={item}
              className="bg-card border-l-4 border-(--color-fb-green) rounded-none p-6 hover:shadow-lg transition-shadow group"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="bg-fb-green/10 p-2 rounded-none">
                  <spec.icon className="h-6 w-6 text-(--color-fb-green)" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-wide">{spec.title}</h3>
              </div>

              {/* Specs List */}
              <ul className="space-y-4">
                {spec.items.map((item, index) => (
                  <li key={index} className="group/item">
                    <div className="flex items-start gap-2">
                      <div className="mt-1.5 h-1.5 w-1.5 bg-fb-green rounded-none shrink-0" />
                      <div>
                        <div className="font-mono text-sm font-bold text-foreground">
                          {item.label}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-6 pt-4 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-xs text-(--color-fb-green) font-mono uppercase tracking-wide">
                  Verified Specifications
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certification Badges */}
        <motion.div 
          className="mt-16 bg-card border-l-4 border-(--color-fb-green) rounded-none p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Certified & Compliant</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All products undergo rigorous testing and maintain current certifications from international and local regulatory bodies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-muted/30 rounded-none border border-border">
              <div className="text-3xl font-bold text-(--color-fb-green) font-mono mb-1">IEC</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">International</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-none border border-border">
              <div className="text-3xl font-bold text-(--color-fb-green) font-mono mb-1">CE</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">European</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-none border border-border">
              <div className="text-3xl font-bold text-(--color-fb-green) font-mono mb-1">SANS</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">South African</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-none border border-border">
              <div className="text-3xl font-bold text-(--color-fb-green) font-mono mb-1">ISO</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wide">Quality</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
