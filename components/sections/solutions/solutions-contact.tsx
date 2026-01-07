"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, Download, ArrowRight, FileText } from "lucide-react"
import { motion } from "framer-motion"

export function SolutionsContact() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Emergency Line",
      detail: "+27 (0) 12 345 6789",
      label: "24/7 Support"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Solutions Team",
      detail: "solutions@forbatt.co.za",
      label: "Response < 2hrs"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Site Assessment",
      detail: "Free consultation",
      label: "Book Now"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Industry Guides",
      detail: "Technical specs",
      label: "Download"
    }
  ]

  return (
    <section className="relative py-24 bg-fb-charcoal text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)`,
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
              <span className="text-(--color-fb-red) font-mono text-sm uppercase tracking-wider border-l-2 border-(--color-fb-red) pl-3">
                Deploy Your Solution
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Engineer Your{" "}
              <span className="text-(--color-fb-red)">Mission-Critical System</span>?
            </h2>
            <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
              Our integrated solutions architects are standing by to conduct a comprehensive site assessment 
              and design a unified platform spanning energy, surveillance, and automation.
            </p>
          </div>

          {/* Contact Grid */}
          <motion.div 
            className="grid md:grid-cols-4 gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactMethods.map((method, index) => (
              <motion.div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-6 hover:border-(--color-fb-red) hover:bg-white/10 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -4 }}
              >
                <div className="bg-(--color-fb-red) p-3 rounded-none mb-4 inline-block">
                  {method.icon}
                </div>
                <h3 className="font-bold mb-2 text-white group-hover:text-(--color-fb-red) transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-white/80 mb-2 font-mono">{method.detail}</p>
                <span className="text-xs text-(--color-fb-red) font-mono uppercase tracking-wider">
                  {method.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90 text-white rounded-none h-14 px-10 text-lg font-semibold group">
              Request Site Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-(--color-fb-dark) bg-transparent rounded-none h-14 px-10 text-lg font-semibold"
            >
              <FileText className="mr-2 h-5 w-5" />
              Download Solutions Portfolio
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="border-t border-white/20 pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-(--color-fb-green) rounded-none" />
              <span className="font-mono">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-(--color-fb-green) rounded-none" />
              <span className="font-mono">24/7 Technical Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-(--color-fb-green) rounded-none" />
              <span className="font-mono">Nationwide Deployment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-(--color-fb-green) rounded-none" />
              <span className="font-mono">3-Year Warranty Standard</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Angular accent corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-(--color-fb-red)" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-(--color-fb-red)" />
    </section>
  )
}