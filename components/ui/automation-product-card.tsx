import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { Check } from "lucide-react"

interface AutomationProductCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export function AutomationProductCard({ icon: Icon, title, description, features }: AutomationProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>

        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
