"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { HeroSectionV2 } from "@/components/sections/hero-section-v2";
import { AngledDivider } from "@/components/ui/angled-divider";
import { DualPillar } from "@/components/sections/dual-pillar";
import { BrandTiles } from "@/components/sections/brand-tiles";
import { ResourceHub } from "@/components/sections/resource-hub";
import { PartnerCTA } from "@/components/sections/partner-cta";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col"
    >
      <Header />
      <main className="flex-1">
        {/* High-Tech Hero with SKU Search */}
        <HeroSectionV2 />

        {/* Angular Transition */}
        <AngledDivider className="bg-background" />

        {/* Split-Pillar Section: Energy (Left/Green) & Surveillance (Right/Red) */}
        <DualPillar />

        {/* Angular Transition */}
        <AngledDivider className="bg-fb-charcoal" />

        {/* Brand Identity Tiles with Motion Hover Effects */}
        <BrandTiles />

        {/* Existing Sections */}
        <ResourceHub />
        <PartnerCTA />
      </main>
      <Footer />
    </motion.div>
  );
}

