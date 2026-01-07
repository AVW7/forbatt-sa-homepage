"use client"

import { Cpu, Radio, Bell, BarChart3, Cloud, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function SurveillanceIntegration() {
  const integrations = [
    {
      icon: Cpu,
      title: "AI Analytics Engine",
      description: "Facial recognition, license plate detection, and behavioral analysis with real-time processing.",
      tech: "Deep Learning",
    },
    {
      icon: Radio,
      title: "Alarm System Integration",
      description: "Seamless integration with fire, intrusion, and emergency response systems for unified security.",
      tech: "ONVIF Protocol",
    },
    {
      icon: Bell,
      title: "Real-Time Notifications",
      description: "Instant alerts via email, SMS, and mobile push for critical events and security triggers.",
      tech: "Multi-Channel",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Extract insights from surveillance data—foot traffic analysis and customer behavior patterns.",
      tech: "Data Analytics",
    },
    {
      icon: Cloud,
      title: "Cloud Backup & Storage",
      description: "Redundant cloud storage ensures footage protection with automatic offsite backup.",
      tech: "Encrypted Storage",
    },
    {
      icon: Shield,
      title: "Cybersecurity Layer",
      description: "Enterprise-grade encryption, network security, and access control to prevent cyber threats.",
      tech: "AES-256 | TLS",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block bg-black/10 dark:bg-white/10 border-l-4 border-(--color-fb-red) rounded-none px-4 py-2 mb-6">
            <span className="font-mono text-xs font-bold tracking-wide uppercase">System Integration</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Advanced Integration Capabilities</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connect surveillance with AI analytics, business intelligence, and existing security infrastructure.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group bg-card border-border rounded-none overflow-hidden hover:border-l-4 hover:border-(--color-fb-red) transition-all"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center justify-center h-12 w-12 bg-black/10 dark:bg-white/10 text-(--color-fb-red) rounded-none group-hover:scale-110 transition-transform">
                    <integration.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs bg-black/10 dark:bg-white/10 px-2 py-1 rounded-none">
                    {integration.tech}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{integration.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{integration.description}</p>

                {/* Technical indicator */}
                <div className="flex gap-1 pt-2">
                  <div className="h-1 w-8 bg-fb-red rounded-none" />
                  <div className="h-1 w-4 bg-fb-red/60 rounded-none" />
                  <div className="h-1 w-2 bg-fb-red/30 rounded-none" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-card border-l-4 border-(--color-fb-red) rounded-none p-8"
        >
          <h3 className="font-mono text-xs text-(--color-fb-red) tracking-wide uppercase mb-6">
            Unified Security Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="font-bold text-sm">Edge Devices</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>IP Cameras</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>Body-Worn Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>Mobile NVRs</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-bold text-sm">Processing Layer</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>VMS Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>AI Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>Storage Management</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="font-bold text-sm">Access Points</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>Web Client</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>Mobile Apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                  <span>API Integration</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
