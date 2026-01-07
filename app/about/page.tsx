import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/sections/about/about-hero";
import { PartnersSection } from "@/components/sections/about/partners-section";
import { BrandsSection } from "@/components/sections/about/brands-section";
import { WhyPartnerSection } from "@/components/sections/about/why-partner-section";
import { EngageCTA } from "@/components/sections/about/engage-cta";

export const metadata: Metadata = {
  title: "About Us | Forbatt SA",
  description: "Partnering with distributors and integrators to deliver reliable, scalable security and energy solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <PartnersSection />
        <BrandsSection />
        <WhyPartnerSection />
        <EngageCTA />
      </main>
      <Footer />
    </div>
  );
}
