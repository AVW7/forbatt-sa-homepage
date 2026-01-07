"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-fb-charcoal via-fb-dark to-fb-charcoal overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 bg-fb-red/10 border-l-4 border-fb-red rounded-none"
          >
            <span className="text-fb-red font-mono text-sm uppercase tracking-wider">
              About Forbatt SA
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance"
          >
            Partnering with distributors and integrators
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 text-balance"
          >
            Delivering reliable, scalable security and energy solutions.
          </motion.p>
        </motion.div>
      </div>

      {/* Angular bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{
        clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 50%)"
      }} />
    </section>
  );
}
