"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export type MediaType = "all" | "articles" | "videos" | "press-releases" | "images"

export function MediaFilter() {
  const [activeFilter, setActiveFilter] = useState<MediaType>("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filters: { label: string; value: MediaType }[] = [
    { label: "All Content", value: "all" },
    { label: "Articles", value: "articles" },
    { label: "Videos", value: "videos" },
    { label: "Press Releases", value: "press-releases" },
    { label: "Images", value: "images" },
  ]

  return (
    <section className="py-8 bg-muted/30 border-y sticky top-[116px] z-40 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className={
                  activeFilter === filter.value
                    ? "bg-(--color-fb-red) hover:bg-(--color-fb-red)/90"
                    : "hover:border-(--color-fb-red) hover:text-(--color-fb-red)"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search media content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-fb-red) bg-background"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
