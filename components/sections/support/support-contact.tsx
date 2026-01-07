import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, FileText } from "lucide-react"

export function SupportContact() {
  return (
    <section className="py-20 bg-(--color-fb-red) text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Still Need Help?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Our support team is standing by to assist you. Get in touch using your preferred method and we'll respond
            promptly.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-sm opacity-80">+27 (0) 12 345 6789</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm opacity-80">support@forbatt.co.za</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <MessageCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm opacity-80">Live chat support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <FileText className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Resources</h3>
              <p className="text-sm opacity-80">Browse documentation</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-(--color-fb-red) hover:bg-white/90 text-lg px-8">
              Create Support Ticket
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-fb-red) bg-transparent"
            >
              View All Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
