"use client"

import { BrandLogo } from "@/components/ui/brand-logo"

const brands = [
  { name: "TVT", tagline: "Premier Surveillance Partner", featured: true },
  { name: "KEDACOM", tagline: "Mobile & Body-Worn Tech", featured: true },
  { name: "NUUO", tagline: "Enterprise VMS Solutions", featured: true },
  { name: "FORBATT ENERGY", tagline: "Proprietary Power Solutions", featured: true },
  { name: "HIKVISION", tagline: "Global Security Leader", featured: false },
  { name: "DAHUA", tagline: "Video-Centric Solutions", featured: false },
  { name: "AXIS", tagline: "Network Video Pioneer", featured: false },
  { name: "BOSCH", tagline: "Security & Safety", featured: false },
]

export function BrandShowcase() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Partnered with Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We represent over 70 world-class brands, bringing you the best in energy, surveillance, and automation
            technology.
          </p>
        </div>

        {/* Featured Brands */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Featured Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands
              .filter((b) => b.featured)
              .map((brand) => (
                <BrandLogo key={brand.name} name={brand.name} tagline={brand.tagline} />
              ))}
          </div>
        </div>

        {/* Additional Brands */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {brands
              .filter((b) => !b.featured)
              .map((brand) => (
                <BrandLogo key={brand.name} name={brand.name} tagline={brand.tagline} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
