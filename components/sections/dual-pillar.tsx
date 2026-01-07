"use client";

import { motion } from "framer-motion";
import { Battery, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteData } from "@/lib/site-data";

export function DualPillar() {
  const surveillance = siteData.home.solutionPanels[0];
  const energy = siteData.home.solutionPanels[1];

  return (
    <section className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Left Pillar - Energy (Light Theme, Green Accents) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-background border-r-4 border-fb-green"
        >
          <div className="max-w-xl">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-fb-green/10 rounded-none"
            >
              <Battery className="w-8 h-8 text-fb-green" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            >
              {energy.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {energy.copy}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-fb-green hover:bg-fb-green/90 text-white rounded-none border-none"
              >
                <a href={energy.cta.href}>{energy.cta.label}</a>
              </Button>
            </motion.div>

            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fb-green to-transparent" />
          </div>
        </motion.div>

        {/* Right Pillar - Surveillance (Dark Theme, Red Accents) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-muted border-l-4 border-fb-red"
        >
          <div className="max-w-xl">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-fb-red/10 rounded-none"
            >
              <Camera className="w-8 h-8 text-fb-red" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
            >
              {surveillance.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              {surveillance.copy}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-fb-red hover:bg-fb-red/90 text-white rounded-none border-none"
              >
                <a href={surveillance.cta.href}>{surveillance.cta.label}</a>
              </Button>
            </motion.div>

            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fb-red to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
