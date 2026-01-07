import { Button } from "@/components/ui/button"
import { Camera, Shield, Eye } from "lucide-react"

export function SurveillanceHero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="/placeholder.svg?height=600&width=1920"
          alt="Surveillance monitoring"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50" />

      {/* Content */}
      <div className="container relative z-10 px-4 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Shield className="h-12 w-12 text-red-500" />
            <Camera className="h-12 w-12 text-red-500" />
            <Eye className="h-12 w-12 text-red-500" />
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl text-balance">
            Advanced Surveillance Solutions for Complete Security
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-balance">
            Protect your business with cutting-edge security camera systems, video management, and intelligent
            monitoring solutions
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Explore Solutions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              Request Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-500">24/7</div>
              <div className="text-sm text-gray-300">Continuous Monitoring</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-500">4K+</div>
              <div className="text-sm text-gray-300">Ultra HD Quality</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-red-500">99.9%</div>
              <div className="text-sm text-gray-300">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
