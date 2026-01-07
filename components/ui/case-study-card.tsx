import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp } from "lucide-react"

interface CaseStudyCardProps {
  title: string
  industry: string
  savings: string
  description: string
  imageUrl: string
  metrics: Array<{ label: string; value: string }>
}

export function CaseStudyCard({ title, industry, savings, description, imageUrl, metrics }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div
        className="h-48 bg-cover bg-center"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="bg-(--color-fb-green)/10 text-(--color-fb-green)">
            {industry}
          </Badge>
          <div className="flex items-center gap-1 text-(--color-fb-green) text-sm font-semibold">
            <TrendingUp className="h-4 w-4" />
            {savings}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-xs text-muted-foreground mb-1">{metric.label}</div>
              <div className="font-semibold">{metric.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
