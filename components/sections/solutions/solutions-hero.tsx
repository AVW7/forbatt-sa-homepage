"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export function SolutionsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=industrial+solutions+technology+integration+command+center)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fb-charcoal/95 via-fb-charcoal/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div 
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Category Badge */}
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-(--color-fb-red) p-3 rounded-none">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <div className="border-l-2 border-(--color-fb-red) pl-4">
              <span className="text-(--color-fb-red) font-mono text-sm uppercase tracking-wider">Industry Solutions</span>
              <p className="text-white/60 text-xs font-mono">Mission-Critical Integration</p>
            </div>
          </motion.div>

          {/* Glassmorphic Hero Card */}
          <motion.div 
            className="bg-black/40 backdrop-blur-md border-l-4 border-(--color-fb-red) rounded-none p-8 md:p-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Sector-Specific Solutions for{" "}
              <span className="text-(--color-fb-red)">Mission-Critical Operations</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Integrated energy, surveillance, and automation deployments engineered for retail, mining,
              residential, and industrial environments across South Africa.
            </p>

            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by industry, challenge, or solution type..."
                className="pl-12 h-14 bg-black/60 border-gray-700 text-white font-mono text-sm focus:border-(--color-fb-red) focus:ring-(--color-fb-red) rounded-none placeholder:text-gray-500"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white rounded-none h-14 px-8 font-semibold">
                Explore Industries
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-(--color-fb-dark) bg-transparent rounded-none h-14 px-8 font-semibold"
              >
                Request Consultation
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-(--color-fb-red) font-mono">4</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-mono">Key Industries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-(--color-fb-green) font-mono">100%</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-mono">Uptime Target</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white font-mono">24/7</div>
                <div className="text-xs text-white/70 uppercase tracking-wider font-mono">Support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}