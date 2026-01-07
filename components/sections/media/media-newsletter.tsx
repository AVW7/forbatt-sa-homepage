"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, ArrowRight, Bell } from "lucide-react";

export function MediaNewsletter() {
  return (
    <section className="py-20 bg-fb-charcoal border-t-4 border-fb-red">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 bg-fb-red/10 border-2 border-fb-red rounded-none flex items-center justify-center">
                <Bell className="h-7 w-7 text-fb-red" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white uppercase">
              Stay <span className="text-fb-red">Informed</span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-2">
              Subscribe to receive real-time updates on product launches, technical resources, and industry insights
            </p>
            
            <p className="text-sm font-mono text-gray-600">
              FREQUENCY: Weekly | FORMAT: Technical Digest
            </p>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/40 border-l-4 border-fb-red rounded-none p-8"
          >
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    className="h-11 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-fb-red focus:ring-fb-red rounded-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    placeholder="john.doe@company.com"
                    className="h-11 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-fb-red focus:ring-fb-red rounded-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Company (Optional)
                </label>
                <Input
                  type="text"
                  placeholder="Your Company Name"
                  className="h-11 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-fb-red focus:ring-fb-red rounded-none"
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  className="mt-1 rounded-none"
                  required
                />
                <label htmlFor="consent" className="text-xs text-muted-foreground">
                  I consent to receive marketing communications from Forbatt SA. You can unsubscribe at any time.
                  View our <a href="/privacy" className="text-fb-red hover:underline">Privacy Policy</a>.
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-fb-red hover:bg-fb-red/90 text-white rounded-none border-none font-semibold uppercase text-sm tracking-wider h-12 group"
              >
                <Mail className="h-4 w-4 mr-2" />
                Subscribe to Updates
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
              <span>✓ No spam</span>
              <span className="text-border">|</span>
              <span>✓ Unsubscribe anytime</span>
              <span className="text-border">|</span>
              <span>✓ POPIA compliant</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
