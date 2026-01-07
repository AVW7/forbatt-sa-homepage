import { Card } from "@/components/ui/card"
import { Download, Calendar, ImageIcon } from "lucide-react"

interface MediaImageCardProps {
  title: string
  description: string
  date: string
  imageUrl: string
  downloadUrl: string
}

export function MediaImageCard({ title, description, date, imageUrl, downloadUrl }: MediaImageCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer border-2 hover:border-(--color-fb-dark)">
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Download Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-white">
            <Download className="h-10 w-10" />
            <span className="text-sm font-semibold">Download High-Res</span>
          </div>
        </div>

        {/* Image Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 p-2 rounded-lg">
            <ImageIcon className="h-5 w-5 text-(--color-fb-dark)" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2">{title}</h3>
        <p className="text-muted-foreground mb-3 text-sm line-clamp-2">{description}</p>

        {/* Meta */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          <span>{new Date(date).toLocaleDateString("en-ZA", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>
      </div>
    </Card>
  )
}
