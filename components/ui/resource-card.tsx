import type React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ResourceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  linkText: string
}

export function ResourceCard({ icon, title, description, link, linkText }: ResourceCardProps) {
  return (
    <Card className="p-8 hover:shadow-lg transition-shadow">
      <div className="text-(--color-fb-red) mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <Button variant="link" className="p-0 h-auto text-(--color-fb-red) hover:text-(--color-fb-red)/80" asChild>
        <a href={link}>
          {linkText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </Card>
  )
}
