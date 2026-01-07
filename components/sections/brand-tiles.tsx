"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Monitor } from "lucide-react";
import { siteData } from "@/lib/site-data";

const brandConfig = [
  {
    name: "TVT",
    icon: Monitor,
    specs: ["4K Recording", "AI-Powered", "Enterprise Grade"],
    accentColor: "fb-red"
  },
  {
    name: "KEDACOM",
    icon: Shield,
    specs: ["Mobile NVR", "Body-Worn Cameras", "Field Operations"],
    accentColor: "fb-green"
  },
  {
    name: "NUUO",
    icon: Zap,
    specs: ["Intelligent VMS", "94K+ Installations", "Multi-Site Management"],
    accentColor: "fb-red"
  }
];

export function BrandTiles() {
  // Find brand details from site data
  const getBrandInfo = (name: string) => {
    return siteData.brands.items.find(
      (brand) => brand.name.toUpperCase() === name.toUpperCase()
    );
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {siteData.home.brandStrip.headline}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-leading technology partners powering mission-critical operations
          </p>
        </motion.div>

        {/* Brand Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {brandConfig.map((brand, index) => {
            const brandInfo = getBrandInfo(brand.name);
            const Icon = brand.icon;

            return (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-card border border-border rounded-none overflow-hidden cursor-pointer"
              >
                {/* Main Content */}
                <div className="p-8 transition-all duration-300">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 bg-(--color-${brand.accentColor})/10 rounded-none transition-colors duration-300 group-hover:bg-(--color-${brand.accentColor})/20`}
                  >
                    <Icon
                      className={`w-8 h-8 text-(--color-${brand.accentColor}) transition-transform duration-300 group-hover:scale-110`}
                    />
                  </div>

                  {/* Brand Name */}
                  <h3 className={`text-2xl font-bold text-foreground mb-3 group-hover:text-(--color-${brand.accentColor}) transition-colors duration-300`}>
                    {brand.name}
                  </h3>

                  {/* Brand Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {brandInfo?.copy || "Industry-leading solutions"}
                  </p>

                  {/* Hover Overlay with Technical Specs */}
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-8">
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-foreground mb-4 uppercase tracking-wider">
                        Technical Specifications
                      </h4>
                      <ul className="space-y-2">
                        {brand.specs.map((spec, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className={`text-sm font-mono text-(--color-${brand.accentColor}) border-l-2 border-(--color-${brand.accentColor}) pl-3`}
                          >
                            {spec}
                          </motion.li>
                        ))}
                      </ul>
                      {brandInfo?.href && (
                        <motion.a
                          href={brandInfo.href}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className={`inline-block mt-6 text-sm font-semibold text-(--color-${brand.accentColor}) hover:underline`}
                        >
                          Learn More →
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Accent Border (visible on hover) */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-(--color-${brand.accentColor}) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
