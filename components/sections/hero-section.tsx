import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=700&width=1920&query=modern+corporate+building+architecture)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <div className="bg-black/40 backdrop-blur-md p-8 lg:p-12 border-l-4 border-(--color-fb-red) rounded-lg">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              The Pulse of South African Tech Distribution
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Supplying World-Class Energy, Surveillance, and Automation Hardware to the Professional Installer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white">
                Explore Product Catalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-(--color-fb-dark) bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
