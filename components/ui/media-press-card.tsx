import { Card } from "@/components/ui/card"
import { FileText, Calendar, ExternalLink } from "lucide-react"

interface MediaPressCardProps {
  title: string
  excerpt: string
  date: string
  source: string
}

export function MediaPressCard({ title, excerpt, date, source }: MediaPressCardProps) {
  return (
    <Card className="group p-6 transition-all duration-300 hover:shadow-2xl cursor-pointer border-2 hover:border-(--color-fb-green) bg-gradient-to-br from-background to-muted/20">
      {/* Icon */}
      <div className="bg-(--color-fb-green)/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-(--color-fb-green) transition-colors">
        <FileText className="h-6 w-6 text-(--color-fb-green) group-hover:text-white transition-colors" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-(--color-fb-green) transition-colors line-clamp-3">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm line-clamp-4">{excerpt}</p>

      {/* Meta */}
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b">
        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <span>{new Date(date).toLocaleDateString("en-ZA", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>
        <span className="font-semibold">{source}</span>
      </div>

      {/* Download Link */}
      <div className="flex items-center gap-2 text-sm font-semibold text-(--color-fb-green)">
        <span>View Press Release</span>
        <ExternalLink className="h-4 w-4" />
      </div>
    </Card>
  )
}
