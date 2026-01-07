import { Settings, Eye, Zap } from "lucide-react"

export function SolutionsCommitment() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Our Commitment to Integrated Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Forbatt SA, we understand that every industry faces unique challenges. Our integrated approach combines
            energy, surveillance, and automation solutions to deliver comprehensive, tailored results that drive
            efficiency and security across South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-fb-red)/10 rounded-full mb-4">
              <Settings className="h-8 w-8 text-(--color-fb-red)" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrated Approach</h3>
            <p className="text-muted-foreground">
              Seamlessly combining energy, surveillance, and automation technologies for comprehensive solutions that
              work together.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-fb-red)/10 rounded-full mb-4">
              <Eye className="h-8 w-8 text-(--color-fb-red)" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
            <p className="text-muted-foreground">
              Deep understanding of retail, mining, residential, and industrial requirements, ensuring solutions that
              meet real-world needs.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-fb-red)/10 rounded-full mb-4">
              <Zap className="h-8 w-8 text-(--color-fb-red)" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Future-Ready Technology</h3>
            <p className="text-muted-foreground">
              Leveraging cutting-edge technologies that scale with your business and adapt to evolving industry
              standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}