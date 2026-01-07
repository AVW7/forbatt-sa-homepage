import { Card } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

interface MediaArticleCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  imageUrl: string
  author: string
}

export function MediaArticleCard({ title, excerpt, date, category, imageUrl, author }: MediaArticleCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer border-2 hover:border-(--color-fb-red)">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-(--color-fb-red) text-white text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-(--color-fb-red) transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{excerpt}</p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>
              {new Date(date).toLocaleDateString("en-ZA", { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
        </div>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-sm font-semibold text-(--color-fb-red) group-hover:gap-3 transition-all">
          <span>Read Article</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Card>
  )
}
