"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { siteData } from "@/lib/site-data";

export function HeroSectionV2() {
  const [searchQuery, setSearchQuery] = useState("");
  const { headline, subheadline, ctas } = siteData.home.hero;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-fb-charcoal">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&text=Forbatt+HQ+Building)",
          filter: "brightness(0.4)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content Container */}
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl">
          {/* Glassmorphic Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-md border-l-4 border-fb-red rounded-none p-8 md:p-12 shadow-2xl"
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              {subheadline}
            </motion.p>

            {/* SKU Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <form onSubmit={handleSearch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by SKU or Product Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 bg-black/60 border-border text-white placeholder:text-muted-foreground focus:border-fb-red focus:ring-fb-red rounded-none font-mono text-sm"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 px-6 bg-fb-red hover:bg-fb-red/90 text-white rounded-none font-semibold"
                >
                  Search
                </Button>
              </form>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {ctas.map((cta, index) => (
                <Button
                  key={index}
                  asChild
                  variant={cta.variant === "primary" ? "default" : "outline"}
                  size="lg"
                  className={
                    cta.variant === "primary"
                      ? "bg-fb-red hover:bg-fb-red/90 text-white rounded-none border-none"
                      : "bg-transparent hover:bg-card/10 text-foreground border-foreground rounded-none"
                  }
                >
                  <a href={cta.href}>{cta.label}</a>
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
