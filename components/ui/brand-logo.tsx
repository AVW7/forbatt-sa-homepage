"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface BrandLogoProps {
  name: string
  tagline: string
}

export function BrandLogo({ name, tagline }: BrandLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="p-8 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`text-2xl font-bold transition-all duration-300 ${isHovered ? "text-(--color-fb-red)" : "text-muted-foreground"}`}
      >
        {name}
      </div>
      <div
        className={`text-xs text-center transition-all duration-300 ${isHovered ? "text-foreground" : "text-muted-foreground"}`}
      >
        {tagline}
      </div>
    </Card>
  )
}
