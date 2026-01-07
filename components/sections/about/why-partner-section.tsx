"use client";

import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Risk reduction",
    description: "Minimize compatibility issues and rework with vetted products and practical design support.",
  },
  {
    icon: DollarSign,
    title: "Commercial clarity",
    description: "Transparent recommendations aligned to your commercial model and delivery milestones.",
  },
  {
    icon: MessageCircle,
    title: "Ongoing responsiveness",
    description: "Dedicated specialists who understand project constraints and keep communication clear.",
  },
];

export function WhyPartnerSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Why partner with Forbatt SA
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on trust, precision, and responsive collaboration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-card border border-border rounded-none p-8 transition-all hover:shadow-xl overflow-hidden"
                >
                  {/* Accent bar that grows on hover */}
                  <div className="absolute top-0 left-0 h-1 bg-fb-green w-0 group-hover:w-full transition-all duration-500" />
                  
                  <div className="mb-6 p-4 bg-fb-green/10 rounded-none inline-block">
                    <Icon className="h-8 w-8 text-fb-green" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-fb-green transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-fb-green/20 group-hover:border-fb-green transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
