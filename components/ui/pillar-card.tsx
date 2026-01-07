"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PillarCardProps {
  icon: React.ReactNode
  title: string
  accentColor: "green" | "red" | "gray"
  description: string
  imageUrl: string
  features: string[]
}

export function PillarCard({ icon, title, accentColor, description, imageUrl, features }: PillarCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const accentColors = {
    green: "group-hover:text-(--color-fb-green)",
    red: "group-hover:text-(--color-fb-red)",
    gray: "group-hover:text-(--color-fb-dark)",
  }

  const borderColors = {
    green: "group-hover:border-(--color-fb-green)",
    red: "group-hover:border-(--color-fb-red)",
    gray: "group-hover:border-(--color-fb-dark)",
  }

  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 ${borderColors[accentColor]} cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className={`absolute bottom-4 left-4 transition-colors ${accentColors[accentColor]}`}>{icon}</div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`text-2xl font-bold mb-3 transition-colors ${accentColors[accentColor]}`}>{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Check
                className={`h-4 w-4 transition-colors ${isHovered ? accentColors[accentColor] : "text-muted-foreground"}`}
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
