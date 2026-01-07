"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Newspaper } from "lucide-react";

export function MediaStats() {
  const stats = [
    {
      icon: Newspaper,
      value: "150+",
      label: "Published Articles",
      color: "fb-red",
    },
    {
      icon: TrendingUp,
      value: "25+",
      label: "Product Launches",
      color: "fb-green",
    },
    {
      icon: Users,
      value: "50+",
      label: "Success Stories",
      color: "fb-red",
    },
    {
      icon: Award,
      value: "10+",
      label: "Industry Awards",
      color: "fb-green",
    },
  ];

  return (
    <section className="py-16 bg-background border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border-2 border-gray-800 hover:border-(--color-${stat.color}) rounded-none p-6 transition-all"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-(--color-${stat.color}) transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                
                {/* Icon */}
                <div className={`flex justify-center mb-4 text-(--color-${stat.color})`}>
                  <div className="w-12 h-12 bg-(--color-${stat.color})/10 rounded-none flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                
                {/* Value */}
                <div className="text-4xl font-bold mb-2 text-center font-mono">{stat.value}</div>
                
                {/* Label */}
                <div className="text-xs text-muted-foreground text-center uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
