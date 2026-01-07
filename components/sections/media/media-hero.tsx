"use client";

import { motion } from "framer-motion";
import { Newspaper, Video, ImageIcon, FileText, Radio } from "lucide-react";

export function MediaHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-fb-charcoal border-b-4 border-fb-red">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(227,30,36,0.03) 2px, rgba(227,30,36,0.03) 4px)`,
        }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-2 h-2 bg-fb-red rounded-full animate-pulse" />
            <span className="text-xs font-mono text-fb-red uppercase tracking-wider">Live Media Feed</span>
          </motion.div>

          {/* Icon Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            {[
              { Icon: Newspaper, delay: 0 },
              { Icon: Video, delay: 0.1 },
              { Icon: Radio, delay: 0.2 },
              { Icon: ImageIcon, delay: 0.3 },
            ].map(({ Icon, delay }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + delay }}
                className="w-16 h-16 bg-fb-red/10 border-2 border-fb-red/30 rounded-none flex items-center justify-center hover:bg-fb-red/20 hover:border-fb-red transition-all"
              >
                <Icon className="h-8 w-8 text-fb-red" />
              </motion.div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl text-white uppercase"
          >
            Media & Press
            <span className="block text-fb-red">Command Center</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Real-time access to news, product launches, case studies, and technical resources from Forbatt SA's B2B operations
          </motion.p>

          {/* Technical Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex items-center justify-center gap-6 text-xs font-mono text-gray-600 pt-4"
          >
            <span>MEDIA ID: <span className="text-fb-red">ZA-MEDIA-001</span></span>
            <span className="text-gray-700">|</span>
            <span>UPDATES: <span className="text-fb-green">ACTIVE</span></span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
