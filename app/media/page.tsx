import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MediaHero } from "@/components/sections/media/media-hero"
import { MediaFilter } from "@/components/sections/media/media-filter"
import { MediaGrid } from "@/components/sections/media/media-grid"
import { MediaStats } from "@/components/sections/media/media-stats"
import { MediaNewsletter } from "@/components/sections/media/media-newsletter"

export const metadata = {
  title: "Media & Press - Forbatt SA",
  description:
    "Explore Forbatt SA's latest news, press releases, product announcements, case studies, and media resources.",
}

export default function MediaPage() {
  return (
    <>
      <Header />
      <main>
        <MediaHero />
        <MediaStats />
        <MediaFilter />
        <MediaGrid />
        <MediaNewsletter />
      </main>
      <Footer />
    </>
  )
}
