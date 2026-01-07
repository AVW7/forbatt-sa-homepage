"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Camera, Shield, Monitor, AlertCircle } from "lucide-react"
import { motion } from "framer-motion"

export function SurveillanceHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=1080&width=1920&text=Surveillance+Command+Center"
          alt="Surveillance command center"
          className="h-full w-full object-cover rounded-none"
        />
      </div>

      {/* Dark overlay for high contrast */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />

      {/* Angular accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-fb-red to-transparent" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border-l-4 border-(--color-fb-red) rounded-none px-4 py-2">
              <AlertCircle className="h-4 w-4 text-(--color-fb-red)" />
              <span className="font-mono text-xs text-white tracking-wide">MISSION-CRITICAL SURVEILLANCE</span>
            </div>

            {/* Main glassmorphic card */}
            <div className="bg-black/40 backdrop-blur-md border-l-4 border-(--color-fb-red) rounded-none p-8 md:p-12 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Enterprise Surveillance Technology—Designed for Total Visibility
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl text-balance leading-relaxed">
                From body-worn to mobile NVR systems, we deliver KEDACOM, TVT, and NUUO solutions built for frontline
                operations, commercial sites, and intelligent enterprise management.
              </p>

              {/* Search bar with high-tech styling */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 max-w-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Search by SKU or Product Name..."
                    className="pl-10 h-12 bg-black/60 border-gray-700 text-white font-mono text-sm focus:border-(--color-fb-red) focus:ring-(--color-fb-red) rounded-none placeholder:text-gray-500"
                  />
                </div>
                <Button className="h-12 bg-fb-red hover:bg-fb-red/90 text-white font-bold rounded-none px-8">
                  SEARCH
                </Button>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-fb-red hover:bg-fb-red/90 text-white font-bold rounded-none px-6">
                  <Camera className="mr-2 h-5 w-5" />
                  View Products
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black rounded-none px-6 font-bold"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Talk to Specialist
                </Button>
              </div>
            </div>

            {/* Technical specs grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: "Body-Worn Systems", icon: Camera },
                { label: "Mobile NVRs", icon: Monitor },
                { label: "Enterprise VMS", icon: Shield },
                { label: "AI Analytics", icon: AlertCircle },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black/60 backdrop-blur-md border-l-2 border-(--color-fb-red) rounded-none p-4 space-y-2"
                >
                  <item.icon className="h-6 w-6 text-(--color-fb-red)" />
                  <div className="font-mono text-xs text-white font-bold tracking-wide">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
