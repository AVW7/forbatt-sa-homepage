import { MediaArticleCard } from "@/components/ui/media-article-card"
import { MediaVideoCard } from "@/components/ui/media-video-card"
import { MediaPressCard } from "@/components/ui/media-press-card"
import { MediaImageCard } from "@/components/ui/media-image-card"

// Sample data structure - would come from CMS/API in production
const mediaContent = [
  {
    type: "article",
    id: 1,
    title: "Forbatt SA Launches New Lithium Battery Range for Commercial Applications",
    excerpt:
      "Introducing the next generation of high-capacity lithium battery solutions designed for South African businesses requiring reliable backup power.",
    date: "2024-01-15",
    category: "Product Launch",
    imageUrl: "/placeholder.svg?height=400&width=600",
    author: "Forbatt Communications",
  },
  {
    type: "video",
    id: 2,
    title: "TVT Surveillance System Installation Guide",
    description: "Complete walkthrough of installing and configuring TVT AI-powered surveillance cameras.",
    duration: "12:45",
    date: "2024-01-10",
    thumbnailUrl: "/placeholder.svg?height=400&width=600",
    views: "2.4K",
  },
  {
    type: "press-release",
    id: 3,
    title: "Forbatt SA Partners with Leading Mining Company for Renewable Energy Project",
    excerpt:
      "Strategic partnership will deliver 5MW solar installation across multiple mining sites, reducing carbon footprint by 40%.",
    date: "2024-01-08",
    source: "Business Wire SA",
  },
  {
    type: "image",
    id: 4,
    title: "Forbatt Johannesburg Distribution Center Expansion",
    description: "New 15,000 sq ft facility increases capacity by 60%",
    date: "2024-01-05",
    imageUrl: "/placeholder.svg?height=600&width=800",
    downloadUrl: "#",
  },
  {
    type: "article",
    id: 5,
    title: "Understanding Row Level Security in Modern Surveillance Systems",
    excerpt:
      "How Forbatt's surveillance solutions implement advanced security protocols to protect sensitive video data in enterprise environments.",
    date: "2024-01-03",
    category: "Technical Guide",
    imageUrl: "/placeholder.svg?height=400&width=600",
    author: "Tech Team",
  },
  {
    type: "video",
    id: 6,
    title: "Solar Inverter Selection for South African Climate",
    description: "Expert advice on choosing the right solar inverter for local conditions.",
    duration: "8:20",
    date: "2023-12-28",
    thumbnailUrl: "/placeholder.svg?height=400&width=600",
    views: "1.8K",
  },
  {
    type: "press-release",
    id: 7,
    title: "Forbatt SA Achieves ISO 9001:2015 Certification",
    excerpt:
      "Quality management certification recognizes commitment to excellence in distribution and customer service.",
    date: "2023-12-20",
    source: "Corporate Announcement",
  },
  {
    type: "image",
    id: 8,
    title: "Forbatt Trade Show Booth - Security Expo 2024",
    description: "Highlights from our participation at Africa's largest security exhibition",
    date: "2023-12-15",
    imageUrl: "/placeholder.svg?height=600&width=800",
    downloadUrl: "#",
  },
  {
    type: "article",
    id: 9,
    title: "Case Study: 200kWh Battery Installation for Manufacturing Facility",
    excerpt:
      "How a Johannesburg manufacturer achieved 99.9% uptime and reduced energy costs by 35% with Forbatt's energy storage solution.",
    date: "2023-12-10",
    category: "Case Study",
    imageUrl: "/placeholder.svg?height=400&width=600",
    author: "Case Studies Team",
  },
]

export function MediaGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Masonry-style Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaContent.map((item) => {
            switch (item.type) {
              case "article":
                return (
                  <MediaArticleCard
                    key={item.id}
                    title={item.title}
                    excerpt={item.excerpt}
                    date={item.date}
                    category={item.category}
                    imageUrl={item.imageUrl}
                    author={item.author}
                  />
                )
              case "video":
                return (
                  <MediaVideoCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    duration={item.duration}
                    date={item.date}
                    thumbnailUrl={item.thumbnailUrl}
                    views={item.views}
                  />
                )
              case "press-release":
                return (
                  <MediaPressCard
                    key={item.id}
                    title={item.title}
                    excerpt={item.excerpt}
                    date={item.date}
                    source={item.source}
                  />
                )
              case "image":
                return (
                  <MediaImageCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    imageUrl={item.imageUrl}
                    downloadUrl={item.downloadUrl}
                  />
                )
              default:
                return null
            }
          })}
        </div>
      </div>
    </section>
  )
}
