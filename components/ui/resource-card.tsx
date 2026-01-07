"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ResourceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  linkText: string;
  color?: "fb-red" | "fb-green";
  badge?: string;
}

export function ResourceCard({ 
  icon: Icon, 
  title, 
  description, 
  link, 
  linkText,
  color = "fb-red",
  badge
}: ResourceCardProps) {
  return (
    <Card className="group relative bg-card border-2 border-gray-800 hover:border-(--color-${color}) rounded-none p-8 transition-all duration-300 h-full flex flex-col overflow-hidden">
      {/* Top Accent Line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-(--color-${color}) transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
      
      {/* Badge */}
      {badge && (
        <div className={`absolute top-4 right-4 px-2 py-1 bg-(--color-${color})/20 border border-(--color-${color})/40 rounded-none text-xs font-mono font-bold text-(--color-${color})`}>
          {badge}
        </div>
      )}

      {/* Icon */}
      <div className="mb-6">
        <div className={`w-16 h-16 bg-(--color-${color})/10 border-2 border-(--color-${color})/30 group-hover:border-(--color-${color}) rounded-none flex items-center justify-center transition-all duration-300`}>
          <Icon className={`h-8 w-8 text-(--color-${color}) group-hover:scale-110 transition-transform duration-300`} />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-2xl font-bold mb-3 uppercase tracking-wide group-hover:text-(--color-${color}) transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
          {description}
        </p>
      </div>

      {/* Link */}
      <a
        href={link}
        className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-(--color-${color}) hover:text-(--color-${color})/80 transition-colors group/link`}
      >
        {linkText}
        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
      </a>

      {/* Corner Accent */}
      <div className={`absolute bottom-0 right-0 w-3 h-3 bg-(--color-${color}) opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </Card>
  );
}
