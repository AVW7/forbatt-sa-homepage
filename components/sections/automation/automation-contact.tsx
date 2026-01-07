import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function AutomationContact() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Operations?</h2>
          <p className="text-xl mb-8 text-white/90 text-pretty leading-relaxed">
            Our automation specialists are ready to discuss your requirements and design a solution that drives real
            results. Get in touch today for a consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Download Catalog
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>+27 11 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>automation@forbatt.co.za</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
