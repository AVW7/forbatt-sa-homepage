"use client"

import { Button } from "@/components/ui/button"
import { ShoppingBag, Pickaxe, Home, Factory, ArrowRight, Shield, Zap, Eye, Lock } from "lucide-react"
import { motion } from "framer-motion"

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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 bg-fb-charcoal relative">
      {/* Angular Divider Top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 100%)" }} />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <span className="text-(--color-fb-red) font-mono text-sm uppercase tracking-wider border-l-2 border-(--color-fb-red) pl-3">
              Sector Deployments
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
            Industry-Specific <span className="text-(--color-fb-red)">Command Centers</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover how our integrated energy, surveillance, and automation solutions are engineered for 
            mission-critical operations across diverse sectors in South Africa.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              className="group relative bg-card/5 backdrop-blur-sm border border-gray-800 rounded-none p-8 hover:border-(--color-fb-red) transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-(--color-fb-red) to-transparent" />
              
              <div className="flex items-start gap-6 mb-8">
                <div className="bg-(--color-fb-red) p-4 rounded-none text-white relative">
                  {industry.icon}
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-(--color-fb-green)" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-(--color-fb-red) transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{industry.description}</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="bg-black/40 rounded-none p-6 mb-6 border-l-2 border-(--color-fb-red)">
                <div className="text-xs font-mono text-(--color-fb-red) uppercase tracking-wider mb-4">
                  Core Capabilities
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-(--color-fb-red) rounded-none mt-2 flex-shrink-0" />
                      <span className="text-sm text-white/80 font-mono">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild className="w-full bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white rounded-none h-12 font-semibold group">
                <a href={industry.href}>
                  Deploy Solution
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-(--color-fb-red) opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Indicator */}
        <motion.div 
          className="mt-16 flex items-center justify-center gap-12 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 text-white/60">
            <Zap className="h-5 w-5 text-(--color-fb-green)" />
            <span className="text-sm font-mono">Energy Systems</span>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <Eye className="h-5 w-5 text-(--color-fb-red)" />
            <span className="text-sm font-mono">Surveillance Tech</span>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <Shield className="h-5 w-5 text-white" />
            <span className="text-sm font-mono">Automation Control</span>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <Lock className="h-5 w-5 text-white" />
            <span className="text-sm font-mono">Access Management</span>
          </div>
        </motion.div>
      </div>

      {/* Angular Divider Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 50%, 100% 100%, 100% 100%, 0 100%)" }} />
    </section>
  )
}