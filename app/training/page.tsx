import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TrainingHero } from "@/components/sections/training/training-hero"
import { TrainingCourses } from "@/components/sections/training/training-courses"
import { TrainingCertification } from "@/components/sections/training/training-certification"
import { TrainingContact } from "@/components/sections/training/training-contact"

export const metadata = {
  title: "Training - Forbatt SA",
  description:
    "Comprehensive technical training programs and professional certifications to empower your team with expert knowledge of Forbatt solutions.",
}

export default function TrainingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <TrainingHero />
        <TrainingCourses />
        <TrainingCertification />
        <TrainingContact />
      </main>
      <Footer />
    </div>
  )
}
