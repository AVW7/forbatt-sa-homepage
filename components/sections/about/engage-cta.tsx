"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function EngageCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-fb-dark via-fb-charcoal to-fb-dark overflow-hidden">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Angular top divider */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{
        clipPath: "polygon(0 0, 100% 50%, 100% 100%, 0 100%)"
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-6 py-3 bg-fb-red/10 border-l-4 border-fb-red rounded-none"
          >
            <span className="text-fb-red font-mono text-sm uppercase tracking-wider">
              Ready to collaborate
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance"
          >
            Engage with us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Share your project scope or sourcing needs, and we'll connect you to the appropriate product specialist or department. Let's configure a solution that performs—on paper and on site.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg"
              className="bg-fb-red hover:bg-fb-red/90 text-white rounded-none px-8 py-6 text-lg group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact a Specialist
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-fb-dark rounded-none px-8 py-6 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Request a Callback
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
              <div>
                <div className="text-3xl font-bold text-fb-green mb-2">15+</div>
                <div className="text-sm uppercase tracking-wide font-mono">Years experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-fb-green mb-2">500+</div>
                <div className="text-sm uppercase tracking-wide font-mono">Projects delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-fb-green mb-2">24/7</div>
                <div className="text-sm uppercase tracking-wide font-mono">Technical support</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
