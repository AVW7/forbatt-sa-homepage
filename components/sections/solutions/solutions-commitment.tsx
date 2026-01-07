"use client"

import { Settings, Eye, Zap, Target, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function SolutionsCommitment() {
  const features = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Integrated Architecture",
      description: "Seamlessly combining energy, surveillance, and automation into unified command systems.",
      color: "fb-red"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Sector Intelligence",
      description: "Deep domain expertise across retail, mining, residential, and industrial operations.",
      color: "fb-green"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Future-Proof Stack",
      description: "Scalable technologies that evolve with industry standards and mission requirements.",
      color: "fb-red"
    }
  ]

  const commitments = [
    { icon: <Target className="h-6 w-6" />, label: "Mission-Critical Uptime", value: "99.9%" },
    { icon: <Shield className="h-6 w-6" />, label: "Enterprise Security", value: "Military-Grade" },
    { icon: <TrendingUp className="h-6 w-6" />, label: "ROI Target", value: "<36 Months" }
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
            <span className="text-(--color-fb-red) font-mono text-sm uppercase tracking-wider border-l-2 border-(--color-fb-red) pl-3">
              Integration Philosophy
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Our Commitment to <span className="text-(--color-fb-red)">Unified Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Forbatt SA, every deployment is engineered for operational excellence. Our integrated approach delivers 
            comprehensive systems where energy, surveillance, and automation work in concert—not isolation.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-card border border-border rounded-none p-8 hover:border-(--color-fb-red) transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-(--color-${feature.color}) transition-all duration-300 group-hover:h-1`} />
              
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-(--color-${feature.color})/10 rounded-none mb-6 border border-(--color-${feature.color})/30 relative`}>
                <div className={`text-(--color-${feature.color})`}>
                  {feature.icon}
                </div>
                <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-(--color-${feature.color}) rounded-none flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-white rounded-none" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-(--color-fb-red) transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Corner accent */}
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-(--color-${feature.color}) opacity-0 group-hover:opacity-100 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* Commitment Metrics */}
        <motion.div 
          className="bg-fb-charcoal rounded-none p-12 border-l-4 border-(--color-fb-red)"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-(--color-fb-red) p-3 rounded-none text-white flex-shrink-0">
                  {commitment.icon}
                </div>
                <div>
                  <div className="text-3xl font-bold text-white font-mono mb-2">{commitment.value}</div>
                  <div className="text-sm text-white/70 font-mono uppercase tracking-wider">{commitment.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}