"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, TrendingUp, Package, Headphones, Truck, FileText, Network } from "lucide-react";

export function PartnerCTA() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Wholesale Pricing",
      description: "Up to 40% margin on premium products",
      stat: "40%",
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Dedicated technical response <1hr",
      stat: "<1HR",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Express logistics to all 9 provinces",
      stat: "24-48H",
    },
    {
      icon: FileText,
      title: "Marketing Materials",
      description: "Co-branded assets & digital resources",
      stat: "FREE",
    },
  ];

  return (
    <section className="relative py-24 bg-(--color-fb-green) text-white border-y-4 border-green-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, white 2px, white 4px)' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {/* System Badge */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Network className="h-4 w-4" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                → Partner Network Enrollment System
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-tight">
              Scale Your Business with <span className="text-black">Forbatt SA</span>
            </h2>
            
            <p className="text-xl mb-8 opacity-95 leading-relaxed max-w-3xl mx-auto">
              Join South Africa's premier distribution network and unlock access to world-class products, competitive pricing, and dedicated support.
            </p>

            {/* Stats Bar */}
            <div className="flex items-center justify-center gap-6 text-sm font-mono">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="opacity-90">500+ ACTIVE DEALERS</span>
              </div>
              <span className="opacity-50">|</span>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4" />
                <span className="opacity-90">5,000+ SKUS</span>
              </div>
              <span className="opacity-50">|</span>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span className="opacity-90">98% SATISFACTION</span>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 rounded-none p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white/10 border-2 border-white/30 group-hover:border-white rounded-none flex items-center justify-center flex-shrink-0 transition-colors">
                    <benefit.icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg uppercase tracking-wide">
                        {benefit.title}
                      </h3>
                      <span className="text-xs font-mono font-bold px-2 py-1 bg-black/20 border border-white/30 rounded-none">
                        {benefit.stat}
                      </span>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Check Icon */}
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              className="group bg-(--color-fb-red) hover:bg-black text-white text-lg px-12 py-6 rounded-none border-2 border-transparent hover:border-white font-bold uppercase tracking-wider transition-all duration-300"
            >
              Apply for Dealer Account
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
            
            <p className="mt-6 text-sm opacity-75 font-mono">
              APPROVAL TIME: 24-48 HOURS • CREDIT TERMS AVAILABLE
            </p>
          </motion.div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-white/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-white/20" />
    </section>
  );
}
