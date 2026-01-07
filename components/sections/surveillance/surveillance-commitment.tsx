"use client"

import { Shield, Radio, Zap, Lock } from "lucide-react"
import { motion } from "framer-motion"

export function SurveillanceCommitment() {
  const commitments = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description:
        "AES-256 encryption and secure data transmission protect your surveillance footage from unauthorized access and cyber threats.",
      specs: ["AES-256", "TLS 1.3", "FIPS 140-2"],
    },
    {
      icon: Radio,
      title: "Frontline Operations",
      description:
        "KEDACOM body-worn and vehicle systems designed for public protection, guarding, and mobile surveillance applications.",
      specs: ["IP67 Rated", "16h Battery", "GPS Tracking"],
    },
    {
      icon: Zap,
      title: "AI-Powered Analytics",
      description: "Real-time motion detection, facial recognition, and behavioral analysis with instant alert notifications.",
      specs: ["Face Detect", "LPR", "Behavior AI"],
    },
    {
      icon: Lock,
      title: "Enterprise Scalability",
      description: "NUUO intelligent VMS scales from single-site to multi-location deployments with centralized management.",
      specs: ["94K+ Sites", "256 Channels", "Multi-Site"],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

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
            <span className="font-mono text-xs font-bold tracking-wide uppercase">Technical Superiority</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Mission-Critical Performance Standards</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every solution meets enterprise-grade specifications for reliability, security, and operational uptime.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {commitments.map((commitment, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-card border-l-4 border-fb-red rounded-none p-6 space-y-4 hover:bg-muted/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center h-12 w-12 bg-black/10 dark:bg-white/10 text-(--color-fb-red) rounded-none">
                <commitment.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">{commitment.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-balance">{commitment.description}</p>
              
              {/* Technical specs overlay */}
              <div className="border-t border-border pt-4 space-y-2">
                {commitment.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                    <span className="font-mono text-xs text-muted-foreground">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
