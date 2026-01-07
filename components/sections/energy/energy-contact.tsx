import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, Download } from "lucide-react"

export function EnergyContact() {
  return (
    <section className="py-20 bg-(--color-fb-green) text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Energy Infrastructure?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Our energy specialists are ready to design a custom solution tailored to your business needs. Get started
            today with a free consultation and site assessment.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm opacity-80">+27 (0) 12 345 6789</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm opacity-80">energy@forbatt.co.za</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Schedule</h3>
              <p className="text-sm opacity-80">Book a consultation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Resources</h3>
              <p className="text-sm opacity-80">Download brochures</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white text-lg px-8">
              Request a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-fb-green) bg-transparent"
            >
              Download Product Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
