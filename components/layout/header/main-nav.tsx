"use client";

import { useState } from "react";
import { Search, Menu, X, ArrowRight, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { MegaMenu } from "./mega-menu";
import { siteData } from "@/lib/site-data";

export function MainNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-fb-red rounded-none flex items-center justify-center group-hover:bg-fb-green transition-colors duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-fb-green rounded-none" />
            </div>
            <div className="font-bold text-2xl">
              <span className="text-fb-red">FORBATT</span>
              <span className="text-foreground"> SA</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <MegaMenu
              title="Energy"
              mainHref="/energy"
              accentColor="green"
              items={[
                { label: "Backup Power", href: "/products/backup-power" },
                { label: "Forbatt Batteries", href: "/brands/forbatt-batteries", badge: "OWN" },
                { label: "Peak Power", href: "/brands/peak-power" },
                { label: "OUTDO Batteries", href: "/brands/outdo" },
              ]}
            />
            <MegaMenu
              title="Surveillance"
              mainHref="/surveillance"
              accentColor="red"
              items={[
                { label: "TVT Systems", href: "/brands/tvt", badge: "HOT" },
                { label: "KEDACOM Mobile", href: "/brands/kedacom" },
                { label: "NUUO VMS", href: "/brands/nuuo" },
                { label: "Tiandy", href: "/brands/tiandy" },
                { label: "Sunell", href: "/brands/sunell" },
              ]}
            />
            <MegaMenu
              title="Solutions"
              mainHref="/solutions"
              items={[
                { label: "Residential & Commercial", href: "/solutions/residential" },
                { label: "Public Protection", href: "/solutions/public-protection" },
                { label: "Retail & Enterprise", href: "/solutions/enterprise" },
                { label: "Holographic Display", href: "/products/holographic" },
              ]}
            />
            <MegaMenu
              title="Brands"
              mainHref="/brands"
              items={[
                { label: "FLIR Thermal", href: "/brands/flir" },
                { label: "Idemia Access", href: "/brands/idemia" },
                { label: "View All Brands", href: "/brands" },
              ]}
            />
            <a href="/about" className="font-semibold hover:text-fb-red transition-colors">
              About
            </a>
            <MegaMenu
              title="Resources"
              items={[
                { label: "Support Center", href: "/support" },
                { label: "Downloads", href: "/downloads" },
                { label: "Training", href: "/training" },
                { label: "Media", href: "/media" },
              ]}
            />
          </div>

          {/* Search and CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 hover:bg-fb-red/10 border border-transparent hover:border-fb-red/30 rounded-none transition-all group"
              aria-label="Toggle search"
            >
              <Search className="h-4 w-4 text-muted-foreground group-hover:text-fb-red" />
            </button>
            <div className="w-px h-8 bg-border" />
            <Button
              asChild
              className="bg-fb-red hover:bg-fb-red/90 text-white rounded-none border-none font-semibold uppercase text-xs tracking-wider h-10 px-6 group"
            >
              <a href="/contact" className="flex items-center gap-2">
                {siteData.site.primaryCTA}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 hover:bg-fb-red/10 border border-transparent hover:border-fb-red/30 rounded-none transition-all"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="py-4 border-t border-border">
                <form onSubmit={handleSearch} className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search by SKU, Product, or Brand..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-11 bg-muted/50 border-border text-foreground placeholder:text-muted-foreground focus:border-fb-red focus:ring-fb-red rounded-none font-mono text-sm"
                      autoFocus
                    />
                  </div>
                  <Button
                    type="submit"
                    className="h-11 px-6 bg-fb-red hover:bg-fb-red/90 text-white rounded-none font-semibold"
                  >
                    Search
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-4 space-y-1">
                <a href="/energy" className="block py-3 px-4 font-semibold hover:bg-fb-green/10 hover:text-fb-green transition-colors border-l-2 border-transparent hover:border-fb-green">
                  Energy
                </a>
                <a href="/surveillance" className="block py-3 px-4 font-semibold hover:bg-fb-red/10 hover:text-fb-red transition-colors border-l-2 border-transparent hover:border-fb-red">
                  Surveillance
                </a>
                <a href="/solutions" className="block py-3 px-4 font-semibold hover:bg-fb-red/10 hover:text-fb-red transition-colors border-l-2 border-transparent hover:border-fb-red">
                  Solutions
                </a>
                <a href="/brands" className="block py-3 px-4 font-semibold hover:bg-fb-red/10 hover:text-fb-red transition-colors border-l-2 border-transparent hover:border-fb-red">
                  Brands
                </a>
                <a href="/about" className="block py-3 px-4 font-semibold hover:bg-fb-red/10 hover:text-fb-red transition-colors border-l-2 border-transparent hover:border-fb-red">
                  About
                </a>
                <div className="border-t border-border my-2" />
                <p className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider px-4 py-2">→ Resources</p>
                <a href="/support" className="block py-2 px-4 text-sm hover:text-fb-red transition-colors">
                  Support Center
                </a>
                <a href="/downloads" className="block py-2 px-4 text-sm hover:text-fb-red transition-colors">
                  Downloads
                </a>
                <a href="/training" className="block py-2 px-4 text-sm hover:text-fb-red transition-colors">
                  Training
                </a>
                <a href="/media" className="block py-2 px-4 text-sm hover:text-fb-red transition-colors">
                  Media
                </a>
                <div className="pt-4">
                  <Button asChild className="w-full bg-fb-red hover:bg-fb-red/90 text-white rounded-none font-semibold">
                    <a href="/contact">{siteData.site.primaryCTA}</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
