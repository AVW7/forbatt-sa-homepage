import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase } from "lucide-react"

export function SolutionsHero() {
  return (
    <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=600&width=1920&query=industrial+solutions+technology+integration+business)",
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
            <div className="bg-(--color-fb-red) p-3 rounded-lg">
              <Briefcase className="h-8 w-8 text-white" />
            </div>
            <span className="text-(--color-fb-red) font-semibold text-lg">Industry Solutions</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Tailored Solutions for Every Industry
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Integrated energy, surveillance, and automation solutions designed specifically for retail, mining,
            residential, and industrial sectors across South Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white">
              Explore Industries
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-fb-dark) bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}