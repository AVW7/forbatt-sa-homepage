import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

interface SurveillanceProductCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export function SurveillanceProductCard({ icon: Icon, title, description, features }: SurveillanceProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
