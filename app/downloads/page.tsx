import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { DownloadsHero } from "@/components/sections/downloads/downloads-hero"
import { DownloadsCategories } from "@/components/sections/downloads/downloads-categories"
import { DownloadsContact } from "@/components/sections/downloads/downloads-contact"

export const metadata = {
  title: "Downloads - Forbatt SA",
  description:
    "Access product datasheets, user manuals, firmware updates, installation guides, and technical resources for all Forbatt solutions.",
}

export default function DownloadsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <DownloadsHero />
        <DownloadsCategories />
        <DownloadsContact />
      </main>
      <Footer />
    </div>
  )
}
