"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Download, ArrowRight, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"

export function EnergyContact() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Specialists",
      detail: "+27 11 469 3598",
      description: "Direct line to energy division",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Inquiry",
      detail: "energy@forbatt.co.za",
      description: "Response within 2 hours",
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Site Assessment",
      detail: "Nationwide Service",
      description: "Free evaluation & sizing",
      action: "Schedule Visit"
    },
    {
      icon: Download,
      title: "Technical Docs",
      detail: "Spec Sheets & PDFs",
      description: "Complete documentation",
      action: "Download"
    }
  ]

  return (
    <section className="py-24 bg-(--color-fb-green) text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.1) 20px,
            rgba(255,255,255,0.1) 40px
          )`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="font-bold text-sm tracking-widest uppercase font-mono border-l-4 border-white pl-4">
                Get Started
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
              Ready to Transform Your<br/>Energy Infrastructure?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Our energy specialists are ready to design a custom solution tailored to your load requirements, budget, and operational constraints. Get started today with a free consultation and site assessment.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {contactMethods.map((method) => (
              <motion.div
                key={method.title}
                variants={item}
                className="bg-white/10 backdrop-blur-sm border-l-4 border-white rounded-none p-6 hover:bg-white/20 transition-colors cursor-pointer group"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <method.icon className="h-8 w-8 mb-4" />
                <h3 className="font-bold mb-2">{method.title}</h3>
                <p className="text-sm font-mono mb-2">{method.detail}</p>
                <p className="text-xs opacity-70 mb-4">{method.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{method.action}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              className="bg-fb-red hover:bg-fb-red/90 text-white text-lg px-8 rounded-none h-14 font-semibold"
            >
              Request Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-(--color-fb-green) bg-transparent rounded-none h-14 px-8"
            >
              Download Product Catalog
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Service Highlights */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-4 inline-flex items-center justify-center mb-3">
                <Clock className="h-6 w-6" />
              </div>
              <h4 className="font-bold mb-2">2-Hour Response</h4>
              <p className="text-sm opacity-80">Technical queries answered same day</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-4 inline-flex items-center justify-center mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="font-bold mb-2">Expert Team</h4>
              <p className="text-sm opacity-80">Certified energy specialists on staff</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-4 inline-flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="font-bold mb-2">Nationwide Coverage</h4>
              <p className="text-sm opacity-80">Service across all provinces</p>
            </div>
          </motion.div>

          {/* Office Locations */}
          <motion.div 
            className="mt-16 grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white rounded-none p-6">
              <div className="text-sm font-mono uppercase tracking-wide opacity-70 mb-3">Johannesburg Office</div>
              <p className="text-sm mb-3">40 Falcon Lane, Lanseria Corporate Estate<br/>Lanseria, Johannesburg</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-mono">+27 11 469 3598</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="font-mono">sales@forbatt.co</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white rounded-none p-6">
              <div className="text-sm font-mono uppercase tracking-wide opacity-70 mb-3">Cape Town Office</div>
              <p className="text-sm mb-3">16 Bellray Business Park, 5 Ampere Street<br/>Stikland, Cape Town</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="font-mono">+27 21 905 0095</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="font-mono">sales@forbatt.co</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Angular Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-background"
          style={{ clipPath: "polygon(0 40%, 100% 0%, 100% 100%, 0 100%)" }}
        />
      </div>
    </section>
  )
}
