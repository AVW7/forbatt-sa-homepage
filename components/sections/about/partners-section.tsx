"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Package, Wrench } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "Consultative solution design",
    description: "We translate requirements into end‑to‑end architectures, balancing performance, budget, and timelines.",
  },
  {
    icon: Package,
    title: "Portfolio curation",
    description: "Access proven energy, video surveillance, installation accessories, and access control products selected for interoperability and durability.",
  },
  {
    icon: Wrench,
    title: "Project support",
    description: "From specification and bill of materials to commissioning guidance, we stay engaged across the lifecycle.",
  },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Who we work with */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 bg-fb-green/10 border-l-4 border-fb-green rounded-none">
              <Users className="h-8 w-8 text-fb-green" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Who we work with</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We serve B2B partners—distributors, systems integrators, and project teams—who need dependable products, informed advice, and on‑time delivery.
              </p>
            </div>
          </div>
        </motion.div>

        {/* How we help */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How we help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card border-l-4 border-fb-red rounded-none p-8 transition-shadow hover:shadow-lg"
                >
                  <div className="mb-6">
                    <Icon className="h-10 w-10 text-fb-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
