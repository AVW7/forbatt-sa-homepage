import type React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText } from "lucide-react"

interface DownloadCardProps {
  title: string
  description: string
  fileType: string
  fileSize: string
  downloadUrl: string
  category?: string
  lastUpdated?: string
}

export function DownloadCard({
  title,
  description,
  fileType,
  fileSize,
  downloadUrl,
  category,
  lastUpdated,
}: DownloadCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-(--color-fb-red) flex flex-col">
      <CardContent className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="text-(--color-fb-red)">
            <FileText className="h-8 w-8" />
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">{fileType}</Badge>
            {category && <Badge variant="outline">{category}</Badge>}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span>Size: {fileSize}</span>
          {lastUpdated && <span>Updated: {lastUpdated}</span>}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full bg-(--color-fb-red) hover:bg-(--color-fb-red)/90" asChild>
          <a href={downloadUrl} download>
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
