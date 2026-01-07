import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageSquare } from "lucide-react"

export function SurveillanceContact() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-300">
            Let our security experts design a custom surveillance solution tailored to your specific needs
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Quote
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-700">
            <div className="space-y-2">
              <Phone className="h-8 w-8 mx-auto text-red-500" />
              <div className="font-semibold">Call Us</div>
              <div className="text-sm text-gray-400">+27 11 123 4567</div>
            </div>
            <div className="space-y-2">
              <Mail className="h-8 w-8 mx-auto text-red-500" />
              <div className="font-semibold">Email Us</div>
              <div className="text-sm text-gray-400">surveillance@forbatt.co.za</div>
            </div>
            <div className="space-y-2">
              <MessageSquare className="h-8 w-8 mx-auto text-red-500" />
              <div className="font-semibold">Live Chat</div>
              <div className="text-sm text-gray-400">Available 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
