import type React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, ArrowRight } from "lucide-react"

interface TrainingCourseCardProps {
  title: string
  description: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  capacity?: string
  nextDate?: string
  category?: string
  link: string
}

export function TrainingCourseCard({
  title,
  description,
  duration,
  level,
  capacity,
  nextDate,
  category,
  link,
}: TrainingCourseCardProps) {
  const levelColors = {
    Beginner: "bg-green-500/10 text-green-700 dark:text-green-400",
    Intermediate: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
    Advanced: "bg-red-500/10 text-red-700 dark:text-red-400",
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-(--color-fb-green) flex flex-col">
      <CardContent className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <Badge className={levelColors[level]}>{level}</Badge>
          {category && <Badge variant="outline">{category}</Badge>}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{description}</p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          {capacity && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Max {capacity} participants</span>
            </div>
          )}
          {nextDate && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>Next: {nextDate}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-(--color-fb-green) hover:bg-(--color-fb-green)/90" asChild>
          <a href={link}>
            Register Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
