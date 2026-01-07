"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function SurveillanceContact() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dark command center background */}
      <div className="absolute inset-0 bg-linear-to-br from-fb-charcoal via-black to-fb-charcoal" />

      {/* Angular accent lines */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-(--color-fb-red)/20"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 60%)" }}
        />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border-l-4 border-(--color-fb-red) rounded-none px-4 py-2 mb-8">
            <MessageSquare className="h-4 w-4 text-(--color-fb-red)" />
            <span className="font-mono text-xs text-white tracking-wide">SPECIALIST CONSULTATION</span>
          </div>

          {/* Main content card */}
          <div className="bg-black/40 backdrop-blur-md border-l-4 border-(--color-fb-red) rounded-none p-8 md:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Ready to Deploy Surveillance Technology?</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Connect with our surveillance specialists for project scoping, specification support, and solution design
                tailored to your operational requirements.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="h-12 bg-fb-red hover:bg-fb-red/90 text-white font-bold rounded-none px-8">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="h-12 border-white text-white hover:bg-white hover:text-black rounded-none px-8 font-bold"
              >
                <Mail className="mr-2 h-5 w-5" />
                Request Quote
              </Button>
            </div>
          </div>

          {/* Contact grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: Phone,
                label: "Direct Line",
                value: "+27 11 469 3598",
                sublabel: "Available 8AM - 5PM",
              },
              {
                icon: Mail,
                label: "Email Support",
                value: "sales@forbatt.co",
                sublabel: "24-hour response time",
              },
              {
                icon: MapPin,
                label: "Johannesburg HQ",
                value: "Lanseria Corporate Estate",
                sublabel: "Site visits by appointment",
              },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="bg-black/60 backdrop-blur-md border-l-2 border-(--color-fb-red) rounded-none p-6 space-y-3"
              >
                <contact.icon className="h-6 w-6 text-(--color-fb-red)" />
                <div className="space-y-1">
                  <div className="font-mono text-xs text-gray-400 tracking-wide uppercase">{contact.label}</div>
                  <div className="font-bold text-white">{contact.value}</div>
                  <div className="text-sm text-gray-400">{contact.sublabel}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Technical support note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 bg-black/60 backdrop-blur-md border-l-2 border-border rounded-none p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-1">
                <div className="font-mono text-xs text-(--color-fb-red) tracking-wide uppercase">
                  Technical Support
                </div>
                <div className="text-white font-medium">
                  Post-install assistance, configuration guidance, and product troubleshooting
                </div>
              </div>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black rounded-none font-bold shrink-0"
              >
                Get Support
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom angular accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-fb-red/20"
          style={{ clipPath: "polygon(0 0, 100% 40%, 100% 100%, 0 100%)" }}
        />
      </div>
    </section>
  )
}
