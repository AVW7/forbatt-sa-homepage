import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export function EnergyHero() {
  return (
    <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1920&query=solar+panels+renewable+energy+sustainable+power)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-(--color-fb-green) p-3 rounded-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <span className="text-(--color-fb-green) font-semibold text-lg">Energy Solutions</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Powering a Sustainable Future for South Africa
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Comprehensive renewable energy solutions, backup power systems, and intelligent energy management for
            businesses ready to embrace sustainability and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-(--color-fb-green) hover:bg-(--color-fb-green)/90 text-white">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-fb-dark) bg-transparent"
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
