import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, HelpCircle } from "lucide-react"

export function DownloadsContact() {
  return (
    <section className="py-20 bg-(--color-fb-green) text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Need Help Finding a Resource?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Can't find what you're looking for? Our support team can help you locate the right documentation or provide
            additional technical resources.
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
              <p className="text-sm opacity-80">docs@forbatt.co.za</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <MessageCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm opacity-80">Quick assistance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
              <HelpCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-sm opacity-80">Browse FAQs</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white text-lg px-8">
              Contact Support
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-fb-green) bg-transparent"
              asChild
            >
              <a href="/training">View Training Resources</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
