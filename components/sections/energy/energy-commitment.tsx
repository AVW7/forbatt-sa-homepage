import { Leaf, Target, Shield } from "lucide-react"

export function EnergyCommitment() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Our Commitment to Energy Sustainability</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Forbatt SA, we believe in building a resilient energy future through innovative solutions that reduce
            carbon footprints, lower operational costs, and ensure uninterrupted power for businesses across South
            Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-fb-green)/10 rounded-full mb-4">
              <Leaf className="h-8 w-8 text-(--color-fb-green)" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Environmental Impact</h3>
            <p className="text-muted-foreground">
              Reducing carbon emissions through renewable energy adoption and sustainable power solutions for a greener
              tomorrow.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-fb-green)/10 rounded-full mb-4">
              <Target className="h-8 w-8 text-(--color-fb-green)" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cost Efficiency</h3>
            <p className="text-muted-foreground">
              Minimize energy costs with intelligent systems that optimize consumption and maximize return on
              investment.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-(--color-fb-green)/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-(--color-fb-green)" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Energy Independence</h3>
            <p className="text-muted-foreground">
              Achieve reliable, uninterrupted power with backup systems that keep your business running through any
              outage.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
