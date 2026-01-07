"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

export type MediaType = "all" | "articles" | "videos" | "press-releases" | "images";

export function MediaFilter() {
  const [activeFilter, setActiveFilter] = useState<MediaType>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters: { label: string; value: MediaType; count: number }[] = [
    { label: "All Content", value: "all", count: 150 },
    { label: "Articles", value: "articles", count: 85 },
    { label: "Videos", value: "videos", count: 30 },
    { label: "Press Releases", value: "press-releases", count: 25 },
    { label: "Images", value: "images", count: 10 },
  ];

  return (
    <section className="py-6 bg-background/98 border-y-2 border-gray-800 sticky top-33 z-40 backdrop-blur-md">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-fb-red" />
          <span className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
            Filter Media Assets
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <motion.div key={filter.value} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeFilter === filter.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.value)}
                  className={
                    activeFilter === filter.value
                      ? "bg-fb-red hover:bg-fb-red/90 text-white rounded-none font-semibold uppercase text-xs tracking-wider border-none"
                      : "hover:border-fb-red hover:text-fb-red rounded-none border-gray-700 uppercase text-xs tracking-wider font-semibold"
                  }
                >
                  {filter.label}
                  <span className="ml-2 text-xs opacity-70 font-mono">[{filter.count}]</span>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search by keyword, SKU, or date..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-10 bg-muted/50 border-gray-700 text-foreground placeholder:text-gray-500 focus:border-fb-red focus:ring-fb-red rounded-none font-mono text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
