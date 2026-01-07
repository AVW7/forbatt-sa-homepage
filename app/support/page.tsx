import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SupportHero } from "@/components/sections/support/support-hero"
import { SupportOptions } from "@/components/sections/support/support-options"
import { SupportFAQ } from "@/components/sections/support/support-faq"
import { SupportContact } from "@/components/sections/support/support-contact"

export const metadata = {
  title: "Support Center - Forbatt SA",
  description:
    "Get expert technical support, access resources, and find answers to your questions. Our dedicated support team is here to help.",
}

export default function SupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SupportHero />
        <SupportOptions />
        <SupportFAQ />
        <SupportContact />
      </main>
      <Footer />
    </div>
  )
}
