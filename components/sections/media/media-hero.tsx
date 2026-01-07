import { Newspaper, Video, ImageIcon, FileText } from "lucide-react"

export function MediaHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(227,30,36,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="flex items-center justify-center gap-6 mb-8">
            <Newspaper className="h-10 w-10 text-(--color-fb-red)" />
            <Video className="h-10 w-10 text-(--color-fb-red)" />
            <ImageIcon className="h-10 w-10 text-(--color-fb-red)" />
            <FileText className="h-10 w-10 text-(--color-fb-red)" />
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl text-balance">
            Media & Press Center
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto text-balance">
            Stay informed with the latest news, product launches, case studies, and media resources from Forbatt SA
          </p>
        </div>
      </div>
    </section>
  )
}
