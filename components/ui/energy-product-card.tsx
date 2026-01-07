import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

interface EnergyProductCardProps {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

export function EnergyProductCard({ icon, title, description, features }: EnergyProductCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-(--color-fb-green)">
      <CardContent className="p-6">
        <div className="text-(--color-fb-green) mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="h-4 w-4 text-(--color-fb-green) mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
