"use client"

import { Leaf, Target, Shield, Zap, TrendingDown, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function EnergyCommitment() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

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
              Our Commitment
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
            Built for Reliability.<br/>Engineered for Performance.
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dependable backup power solutions designed for sustained performance in mission-critical environments.
            Our gel and AGM battery systems deliver consistent uptime, extended lifecycle, and proven field reliability.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={item}
            className="bg-card border-l-4 border-(--color-fb-green) rounded-none p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fb-green/10 p-3 rounded-none">
                <Zap className="h-8 w-8 text-fb-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Uninterrupted Power</h3>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                  Mission-Critical Uptime
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Achieve 99.9% uptime with backup systems that keep your business running through extended outages and load shedding. Enterprise-grade reliability for operations that can't afford downtime.
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-mono">Typical Backup</span>
                <span className="text-(--color-fb-green) font-bold font-mono">6-12 Hours</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-card border-l-4 border-(--color-fb-green) rounded-none p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fb-green/10 p-3 rounded-none">
                <TrendingDown className="h-8 w-8 text-fb-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reduced TCO</h3>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                  Cost Optimization
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Minimize total cost of ownership with intelligent energy systems that reduce peak demand charges, optimize consumption patterns, and deliver rapid ROI through operational savings.
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-mono">Avg. ROI Period</span>
                <span className="text-(--color-fb-green) font-bold font-mono">3-4 Years</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-card border-l-4 border-(--color-fb-green) rounded-none p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fb-green/10 p-3 rounded-none">
                <Lock className="h-8 w-8 text-fb-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Energy Security</h3>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                  Grid Independence
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Achieve energy independence with modular battery banks and smart switching systems. Protect critical operations from grid instability while maintaining full operational capacity.
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-mono">System Scalability</span>
                <span className="text-(--color-fb-green) font-bold font-mono">Modular</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-card border-l-4 border-(--color-fb-green) rounded-none p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fb-green/10 p-3 rounded-none">
                <Leaf className="h-8 w-8 text-fb-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                  Environmental Impact
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Reduce carbon footprint with renewable energy integration. Our systems support solar, wind, and hybrid configurations for sustainable, eco-conscious power management.
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-mono">Carbon Reduction</span>
                <span className="text-(--color-fb-green) font-bold font-mono">Up to 65%</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-card border-l-4 border-(--color-fb-green) rounded-none p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fb-green/10 p-3 rounded-none">
                <Target className="h-8 w-8 text-fb-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Precision Monitoring</h3>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                  Real-Time Analytics
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Cloud-based monitoring provides real-time visibility into energy consumption, battery health, and system performance. Predictive analytics prevent failures before they occur.
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-mono">Update Frequency</span>
                <span className="text-(--color-fb-green) font-bold font-mono">Real-Time</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={item}
            className="bg-card border-l-4 border-(--color-fb-green) rounded-none p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-fb-green/10 p-3 rounded-none">
                <Shield className="h-8 w-8 text-fb-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Extended Warranty</h3>
                <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                  Long-Term Protection
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Industry-leading warranty coverage with 10-year product protection and 25-year performance guarantees. Lifetime technical support ensures optimal operation throughout system lifecycle.
            </p>
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground font-mono">Warranty Period</span>
                <span className="text-(--color-fb-green) font-bold font-mono">10+ Years</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
