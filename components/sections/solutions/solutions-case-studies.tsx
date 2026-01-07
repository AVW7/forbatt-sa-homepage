"use client"

import { CaseStudyCard } from "@/components/ui/case-study-card"
import { motion } from "framer-motion"
import { TrendingUp, Shield, Zap } from "lucide-react"

export function SolutionsCaseStudies() {
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
    <section className="py-24 bg-muted/20 relative">
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
              Deployment Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Integrated Solutions <span className="text-(--color-fb-red)">in Action</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world deployments demonstrating how our unified energy, surveillance, and automation platforms 
            deliver mission-critical results across diverse sectors.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <CaseStudyCard
              title="Platinum Mine Operation"
              industry="Mining"
              savings="40% Efficiency Gain"
              description="Deployed integrated monitoring, automation, and backup power systems across remote sites—reducing operational costs by 40% while achieving zero safety incidents."
              imageUrl="/placeholder.svg?height=400&width=600&query=mining+operation+control+room"
              metrics={[
                { label: "Safety Incidents", value: "-60%" },
                { label: "ROI Period", value: "2.8 years" },
              ]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CaseStudyCard
              title="National Retail Complex"
              industry="Retail"
              savings="30% Loss Prevention"
              description="Enterprise surveillance with AI analytics, backup power, and automated access control deployed across 50+ locations—cutting shrinkage by 30% and energy costs by 50%."
              imageUrl="/placeholder.svg?height=400&width=600&query=retail+surveillance+command+center"
              metrics={[
                { label: "Energy Savings", value: "50%" },
                { label: "Security Events", value: "-70%" },
              ]}
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <CaseStudyCard
              title="Manufacturing Facility"
              industry="Industrial"
              savings="Zero Downtime"
              description="Full automation integration with redundant power and perimeter surveillance—delivering 100% uptime, 35% productivity increase, and complete compliance visibility."
              imageUrl="/placeholder.svg?height=400&width=600&query=industrial+plant+automation"
              metrics={[
                { label: "Uptime", value: "100%" },
                { label: "Productivity", value: "+35%" },
              ]}
            />
          </motion.div>
        </motion.div>

        {/* Success Metrics Bar */}
        <motion.div 
          className="mt-16 bg-card border border-border rounded-none p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-(--color-fb-green)/10 p-4 rounded-none mb-4 border border-(--color-fb-green)/30">
                <TrendingUp className="h-8 w-8 text-(--color-fb-green)" />
              </div>
              <div className="text-3xl font-bold font-mono mb-2">150+</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Deployments Completed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-(--color-fb-red)/10 p-4 rounded-none mb-4 border border-(--color-fb-red)/30">
                <Shield className="h-8 w-8 text-(--color-fb-red)" />
              </div>
              <div className="text-3xl font-bold font-mono mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Client Retention Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-(--color-fb-dark)/20 p-4 rounded-none mb-4 border border-border">
                <Zap className="h-8 w-8 text-foreground" />
              </div>
              <div className="text-3xl font-bold font-mono mb-2">2.4yr</div>
              <div className="text-sm text-muted-foreground font-mono uppercase tracking-wider">Average ROI Period</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}