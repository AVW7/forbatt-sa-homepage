import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export function PartnerCTA() {
  return (
    <section className="py-20 bg-(--color-fb-green) text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Scale Your Business with Forbatt SA</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Join South Africa's premier distribution network and unlock access to world-class products, competitive
            pricing, and dedicated support.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Wholesale Pricing</h3>
                <p className="text-sm opacity-80">Competitive rates on all products</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Priority Support</h3>
                <p className="text-sm opacity-80">Dedicated technical assistance</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Nationwide Delivery</h3>
                <p className="text-sm opacity-80">Fast shipping across South Africa</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-left">
              <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Marketing Materials</h3>
                <p className="text-sm opacity-80">Co-branded promotional resources</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white text-lg px-8">
            Apply for a Dealer Account
          </Button>
        </div>
      </div>
    </section>
  )
}
