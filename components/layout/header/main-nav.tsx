"use client"

import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MegaMenu } from "./mega-menu"

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="font-bold text-2xl">
              <span className="text-(--color-fb-red)">FORBATT</span>
              <span className="text-(--color-fb-dark)"> SA</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <MegaMenu
              title="Energy"
              mainHref="/energy"
              items={[
                { label: "Lithium Batteries", href: "/energy/batteries" },
                { label: "Solar Inverters", href: "/energy/inverters" },
                { label: "Solar Panels", href: "/energy/panels" },
                { label: "Power Storage", href: "/energy/storage" },
              ]}
            />
            <MegaMenu
              title="Surveillance"
              mainHref="/surveillance"
              items={[
                { label: "TVT Range", href: "/surveillance/tvt" },
                { label: "Kedacom Mobile", href: "/surveillance/kedacom" },
                { label: "NUUO VMS", href: "/surveillance/nuuo" },
                { label: "Analytics", href: "/surveillance/analytics" },
              ]}
            />
            <MegaMenu
              title="Automation"
              mainHref="/automation"
              items={[
                { label: "Smart Home", href: "/automation/home" },
                { label: "Industrial Control", href: "/automation/industrial" },
                { label: "Access Control", href: "/automation/access" },
                { label: "Integration", href: "/automation/integration" },
              ]}
            />
            <MegaMenu
              title="Solutions"
              mainHref="/solutions"
              items={[
                { label: "Retail", href: "/solutions/retail" },
                { label: "Mining", href: "/solutions/mining" },
                { label: "Residential", href: "/solutions/residential" },
                { label: "Industrial", href: "/solutions/industrial" },
              ]}
            />
            <a href="/media" className="text-sm font-medium hover:text-(--color-fb-red) transition-colors">
              Media
            </a>
            <a href="/support" className="text-sm font-medium hover:text-(--color-fb-red) transition-colors">
              Support
            </a>
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Button
              variant="outline"
              className="border-(--color-fb-red) text-(--color-fb-red) hover:bg-(--color-fb-red) hover:text-white bg-transparent"
            >
              Become a Dealer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-md"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="pb-4">
            <input
              type="text"
              placeholder="Search by SKU or Product Name..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-fb-red)"
              autoFocus
            />
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4">
            <a href="/energy" className="block py-2 hover:text-(--color-fb-red)">
              Energy
            </a>
            <a href="/surveillance" className="block py-2 hover:text-(--color-fb-red)">
              Surveillance
            </a>
            <a href="/automation" className="block py-2 hover:text-(--color-fb-red)">
              Automation
            </a>
            <a href="/solutions" className="block py-2 hover:text-(--color-fb-red)">
              Solutions
            </a>
            <a href="/media" className="block py-2 hover:text-(--color-fb-red)">
              Media
            </a>
            <a href="/support" className="block py-2 hover:text-(--color-fb-red)">
              Support
            </a>
            <Button className="w-full bg-(--color-fb-red) hover:bg-(--color-fb-red)/90">Become a Dealer</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
