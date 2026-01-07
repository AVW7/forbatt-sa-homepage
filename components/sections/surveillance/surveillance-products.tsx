"use client"

import { Camera, Monitor, HardDrive, Smartphone, Radio, Video } from "lucide-react"
import { motion } from "framer-motion"

export function SurveillanceProducts() {
  const products = [
    {
      icon: Camera,
      category: "KEDACOM",
      title: "Body-Worn & Mobile Systems",
      description: "Purpose-built for public protection and frontline operations with rugged mobile NVR technology.",
      features: ["Body-Worn Cameras", "Vehicle NVR", "Mobile Recording", "GPS Tracking"],
      sku: "KDC-BWC-4K",
      specs: "4K | IP67 | 16h Battery",
    },
    {
      icon: Monitor,
      category: "TVT",
      title: "Professional Recorders",
      description: "Industry-leading NVRs and hybrid DVR systems delivering clear footage and simple scalability.",
      features: ["NVR Systems", "Hybrid DVR", "PTZ Control", "H.265+ Compression"],
      sku: "TVT-NVR-32CH",
      specs: "32Ch | 4K Output | RAID",
    },
    {
      icon: Video,
      category: "TVT",
      title: "IP Camera Systems",
      description: "Bullet, dome, fisheye, and PTZ cameras for residential, commercial, and enterprise deployments.",
      features: ["Bullet Cameras", "Dome Cameras", "Fisheye 360°", "PTZ Systems"],
      sku: "TVT-IP-4MP",
      specs: "4MP | IR 30m | IP67",
    },
    {
      icon: HardDrive,
      category: "NUUO",
      title: "Intelligent VMS",
      description: "Enterprise video management across 94,000+ sites in 65 countries with centralized multi-site control.",
      features: ["Multi-Site Management", "AI Analytics", "Face Recognition", "License Plate Detection"],
      sku: "NUUO-VMS-ENT",
      specs: "256Ch | Multi-Site | AI",
    },
    {
      icon: Radio,
      category: "KEDACOM",
      title: "Vehicle Surveillance",
      description: "Mobile NVR solutions for patrol vehicles, public transport, and emergency response operations.",
      features: ["4-8 Channel Mobile", "G-Sensor Recording", "GPS/4G Tracking", "Shock Resistant"],
      sku: "KDC-MNVR-8CH",
      specs: "8Ch | 4G/GPS | MIL-STD",
    },
    {
      icon: Smartphone,
      category: "Multi-Brand",
      title: "Remote Access & Mobile",
      description: "Cloud-based and mobile VMS applications for remote monitoring and management from anywhere.",
      features: ["iOS & Android Apps", "Cloud Storage", "Push Notifications", "Live View"],
      sku: "REMOTE-ACCESS",
      specs: "Cloud | Mobile | Real-Time",
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
            <span className="font-mono text-xs font-bold tracking-wide uppercase">Product Portfolio</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Complete Surveillance Technology Stack</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From body-worn cameras to enterprise VMS—KEDACOM, TVT, and NUUO solutions for every deployment scenario.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-card border-l-4 border-fb-red rounded-none overflow-hidden"
            >
              {/* Main content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="inline-flex items-center justify-center h-12 w-12 bg-black/10 dark:bg-white/10 text-(--color-fb-red) rounded-none">
                    <product.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs bg-black/10 dark:bg-white/10 px-2 py-1 rounded-none">
                    {product.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1 w-1 bg-(--color-fb-red) rounded-none" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical specs overlay - appears on hover */}
              <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center rounded-none">
                <div className="space-y-4">
                  <div className="font-mono text-xs text-(--color-fb-red) tracking-wider">TECHNICAL SPECS</div>
                  <div className="space-y-3">
                    <div className="border-l-2 border-(--color-fb-red) pl-3">
                      <div className="font-mono text-xs text-gray-400">SKU</div>
                      <div className="font-mono text-sm text-white font-bold">{product.sku}</div>
                    </div>
                    <div className="border-l-2 border-(--color-fb-red) pl-3">
                      <div className="font-mono text-xs text-gray-400">SPECIFICATIONS</div>
                      <div className="font-mono text-sm text-white font-bold">{product.specs}</div>
                    </div>
                    <div className="border-l-2 border-(--color-fb-red) pl-3 space-y-1">
                      <div className="font-mono text-xs text-gray-400">FEATURES</div>
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="font-mono text-xs text-white">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
