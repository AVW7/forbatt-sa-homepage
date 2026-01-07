import { Card } from "@/components/ui/card"
import { Play, Clock, Eye } from "lucide-react"

interface MediaVideoCardProps {
  title: string
  description: string
  duration: string
  date: string
  thumbnailUrl: string
  views: string
}

export function MediaVideoCard({ title, description, duration, date, thumbnailUrl, views }: MediaVideoCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer border-2 hover:border-(--color-fb-red)">
      {/* Thumbnail */}
      <div className="relative h-56 overflow-hidden bg-black">
        <img
          src={thumbnailUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-80"
        />

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-(--color-fb-red) rounded-full p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-(--color-fb-red)/90">
            <Play className="h-8 w-8 text-white fill-white" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs font-semibold px-2 py-1 rounded flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 leading-tight group-hover:text-(--color-fb-red) transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">{description}</p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            <span>{views} views</span>
          </div>
          <span>{new Date(date).toLocaleDateString("en-ZA", { month: "short", day: "numeric" })}</span>
        </div>
      </div>
    </Card>
  )
}
