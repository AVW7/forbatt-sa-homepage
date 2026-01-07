import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface SpecCardProps {
  title: string
  items: string[]
}

export function SpecCard({ title, items }: SpecCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 text-(--color-fb-green) mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
