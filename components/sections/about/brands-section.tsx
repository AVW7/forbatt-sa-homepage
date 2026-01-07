"use client";

import { motion } from "framer-motion";
import { Award, Shield } from "lucide-react";

const exclusiveBrands = [
  "KEDACOM",
  "TVT",
  "NUUO",
  "Forbatt Batteries",
  "Peak Power",
];

export function BrandsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Exclusive agency */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border-l-4 border-fb-green rounded-none p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-fb-green/10 rounded-none">
                  <Award className="h-8 w-8 text-fb-green" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Exclusive agency</h2>
              </div>
              
              <p className="text-muted-foreground mb-6">Sole agents for:</p>
              
              <ul className="space-y-3">
                {exclusiveBrands.map((brand, index) => (
                  <motion.li
                    key={brand}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 font-mono text-lg group"
                  >
                    <div className="w-2 h-2 bg-fb-green rounded-none group-hover:scale-150 transition-transform" />
                    <span className="group-hover:text-fb-green transition-colors">{brand}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Official distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border-l-4 border-fb-red rounded-none p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-fb-red/10 rounded-none">
                  <Shield className="h-8 w-8 text-fb-red" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Official distribution</h2>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We distribute <span className="font-bold text-foreground">Idemia's</span> access control portfolio, enabling robust, scalable identity and access solutions across sectors.
              </p>

              <div className="mt-8 p-6 bg-fb-red/5 border-l-4 border-fb-red rounded-none">
                <p className="text-sm text-muted-foreground font-mono">
                  Trusted partner for enterprise-grade access control and identity management systems
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
