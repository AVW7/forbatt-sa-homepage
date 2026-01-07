import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function DownloadsHero() {
  return (
    <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-(--color-fb-green) via-(--color-fb-green)/80 to-(--color-fb-dark)">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="docs-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#docs-grid)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-white p-3 rounded-lg">
              <Download className="h-8 w-8 text-(--color-fb-green)" />
            </div>
            <span className="text-white font-semibold text-lg">Resource Library</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Download Technical Resources
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Access product datasheets, user manuals, firmware updates, installation guides, and more. Everything you
            need to get the most from your Forbatt solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-(--color-fb-green) hover:bg-white/90">
              Browse All Downloads
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-fb-green) bg-transparent"
            >
              Search Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
