import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-(--color-fb-dark) text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-(--color-fb-red)">FORBATT</span> SA
            </h3>
            <p className="text-sm text-white/70 mb-4">
              South Africa's trusted partner for energy, surveillance, and automation solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-(--color-fb-red) transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-(--color-fb-red) transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-(--color-fb-red) transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/energy" className="hover:text-white transition-colors">
                  Energy Solutions
                </a>
              </li>
              <li>
                <a href="/surveillance" className="hover:text-white transition-colors">
                  Surveillance Systems
                </a>
              </li>
              <li>
                <a href="/automation" className="hover:text-white transition-colors">
                  Automation
                </a>
              </li>
              <li>
                <a href="/brands" className="hover:text-white transition-colors">
                  All Brands
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/become-dealer" className="hover:text-white transition-colors">
                  Become a Dealer
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Distribution Way, Johannesburg, South Africa</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+27123456789" className="hover:text-white transition-colors">
                  +27 (0) 12 345 6789
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@forbatt.co.za" className="hover:text-white transition-colors">
                  info@forbatt.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; 2026 Forbatt SA. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
