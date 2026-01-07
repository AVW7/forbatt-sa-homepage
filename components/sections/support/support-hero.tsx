import { Button } from "@/components/ui/button"
import { ArrowRight, HelpCircle } from "lucide-react"

export function SupportHero() {
  return (
    <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-(--color-fb-dark) via-(--color-fb-dark)/90 to-(--color-fb-red)/30">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-(--color-fb-red) p-3 rounded-lg">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <span className="text-(--color-fb-red) font-semibold text-lg">Support Center</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            We're Here to Help
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Get expert technical support, access resources, and find answers to your questions. Our dedicated team is
            ready to assist you with any challenge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white">
              Contact Support
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-fb-dark) bg-transparent"
            >
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
