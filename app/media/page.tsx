"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MediaHero } from "@/components/sections/media/media-hero";
import { MediaFilter } from "@/components/sections/media/media-filter";
import { MediaGrid } from "@/components/sections/media/media-grid";
import { MediaStats } from "@/components/sections/media/media-stats";
import { MediaNewsletter } from "@/components/sections/media/media-newsletter";

export default function MediaPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      <main>
        <MediaHero />
        <MediaStats />
        <MediaFilter />
        <MediaGrid />
        <MediaNewsletter />
      </main>
      <Footer />
    </motion.div>
  );
}
