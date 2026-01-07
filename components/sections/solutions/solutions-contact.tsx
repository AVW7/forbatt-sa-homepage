import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, Download } from "lucide-react"

export function SolutionsContact() {
  return (
    <section className="py-20 bg-(--color-fb-red) text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Discover Your Industry Solution?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Our integrated solutions experts are ready to assess your needs and design a comprehensive solution
            combining energy, surveillance, and automation technologies.
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
              <p className="text-sm opacity-80">solutions@forbatt.co.za</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Calendar className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-sm opacity-80">Free assessment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Download className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Resources</h3>
              <p className="text-sm opacity-80">Industry guides</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-(--color-fb-red) hover:bg-gray-100 text-lg px-8">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-(--color-fb-red) bg-transparent"
            >
              Download Solutions Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}