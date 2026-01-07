"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Zap, Search, Battery, Sun, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function EnergyHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=solar+panels+renewable+energy+industrial+power+plant)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-(--color-fb-green) p-3 rounded-none border-2 border-(--color-fb-green)">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <span className="text-(--color-fb-green) font-bold text-lg tracking-wide uppercase font-mono">
                Energy Division
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight text-balance">
              Mission-Critical Power Systems
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              High-performance gel and AGM solutions engineered for long life and dependable uptime—because your systems should never go dark.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-fb-green hover:bg-fb-green/90 text-white rounded-none h-14 px-8 font-semibold">
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-(--color-fb-dark) bg-transparent rounded-none h-14 px-8"
              >
                Request Quote
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="border-l-4 border-(--color-fb-green) pl-4">
                <div className="text-3xl font-bold text-white font-mono">10+</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">Year Warranty</div>
              </div>
              <div className="border-l-4 border-(--color-fb-green) pl-4">
                <div className="text-3xl font-bold text-white font-mono">99.9%</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">Uptime</div>
              </div>
              <div className="border-l-4 border-(--color-fb-green) pl-4">
                <div className="text-3xl font-bold text-white font-mono">24/7</div>
                <div className="text-sm text-white/70 uppercase tracking-wide">Support</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Glassmorphic Command Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/40 backdrop-blur-md border-l-4 border-(--color-fb-green) rounded-none p-8 md:p-12"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Energy Solution Finder</h2>
            
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by SKU, capacity, or application..."
                className="pl-12 h-12 bg-black/60 border-gray-700 text-white font-mono text-sm focus:border-(--color-fb-green) focus:ring-(--color-fb-green) rounded-none"
              />
            </div>

            {/* Quick Access Categories */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors border-l-2 border-(--color-fb-green) cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Battery className="h-6 w-6 text-(--color-fb-green)" />
                  <div>
                    <div className="text-white font-semibold">Battery Storage Systems</div>
                    <div className="text-xs text-gray-400 font-mono">Gel & AGM Solutions</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-(--color-fb-green) opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors border-l-2 border-(--color-fb-green) cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Sun className="h-6 w-6 text-(--color-fb-green)" />
                  <div>
                    <div className="text-white font-semibold">Solar Power Systems</div>
                    <div className="text-xs text-gray-400 font-mono">Hybrid & Off-Grid</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-(--color-fb-green) opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 transition-colors border-l-2 border-(--color-fb-green) cursor-pointer group">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-(--color-fb-green)" />
                  <div>
                    <div className="text-white font-semibold">Energy Management</div>
                    <div className="text-xs text-gray-400 font-mono">Smart Monitoring & Control</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-(--color-fb-green) opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/70 mb-3">Need custom specifications?</p>
              <Button className="w-full bg-transparent border-2 border-(--color-fb-green) text-(--color-fb-green) hover:bg-(--color-fb-green) hover:text-white rounded-none h-12 font-semibold">
                Talk to a Specialist
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Angular Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-background"
          style={{ clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0 100%)" }}
        />
      </div>
    </section>
  )
}
