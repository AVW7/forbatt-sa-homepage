"use client";

import { motion } from "framer-motion";
import { ResourceCard } from "@/components/ui/resource-card";
import { Download, GraduationCap, MessageCircle, Database } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function ResourceHub() {
  const resources = [
    {
      icon: Download,
      title: "Downloads",
      description: "Access the latest firmware, datasheets, price lists, and technical specifications.",
      link: "/downloads",
      linkText: "Browse Downloads",
      color: "fb-red" as const,
      badge: "24/7",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Schedule upcoming installer certification workshops and online training programs.",
      link: "/training",
      linkText: "View Training",
      color: "fb-green" as const,
      badge: "LIVE",
    },
    {
      icon: MessageCircle,
      title: "Support",
      description: "Connect directly with our technical WhatsApp helpdesk for immediate assistance.",
      link: "/support",
      linkText: "Contact Support",
      color: "fb-red" as const,
      badge: "FAST",
    },
  ];

  return (
    <section className="py-24 bg-muted/30 border-y-4 border-border">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* System Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Database className="h-4 w-4 text-fb-red" />
            <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
              → Technical Resource Center
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6 uppercase tracking-tight">
            Resources for <span className="text-fb-red">Professionals</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Access technical documentation, training programs, and expert support to maximize your operational efficiency
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8 text-sm font-mono text-muted-foreground">
            <span>UPTIME: <span className="text-fb-green">99.9%</span></span>
            <span className="text-border">|</span>
            <span>RESPONSE: <span className="text-fb-green">&lt;1HR</span></span>
            <span className="text-border">|</span>
            <span>SUPPORT: <span className="text-fb-green">24/7</span></span>
          </div>
        </motion.div>

        {/* Resource Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ResourceCard
                icon={resource.icon}
                title={resource.title}
                description={resource.description}
                link={resource.link}
                linkText={resource.linkText}
                color={resource.color}
                badge={resource.badge}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Need specialized technical assistance?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-fb-red hover:text-fb-red/80 font-semibold uppercase text-sm tracking-wider transition-colors"
          >
            Connect with Technical Team
            <span className="text-xs">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
