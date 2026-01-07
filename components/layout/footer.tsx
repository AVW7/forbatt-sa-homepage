"use client";

import { Facebook, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight, Zap, Shield, Battery } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-foreground border-t-4 border-fb-red">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info - Spans 2 columns on large screens */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-fb-red rounded-none flex items-center justify-center">
                  <Zap className="h-7 w-7 text-foreground" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-fb-green rounded-none" />
              </div>
              <div className="font-bold text-3xl">
                <span className="text-fb-red">FORBATT</span>
                <span className="text-foreground"> SA</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xl font-bold text-fb-red mb-3 uppercase tracking-wide">
              {siteData.site.tagline}
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              {siteData.home.hero.subheadline}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {siteData.contact.social.map((social) => {
                const Icon = social.label === "Facebook" ? Facebook : social.label === "LinkedIn" ? Linkedin : Youtube;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted/10 hover:bg-fb-red border border-border hover:border-fb-red rounded-none flex items-center justify-center transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-6 text-fb-red border-b-2 border-fb-red/30 pb-2">
              → Solutions
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="/energy"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-fb-green transition-colors group"
                >
                  <Battery className="h-3.5 w-3.5 group-hover:text-fb-green" />
                  <span>Energy & Power</span>
                </a>
              </li>
              <li>
                <a
                  href="/surveillance"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-fb-red transition-colors group"
                >
                  <Shield className="h-3.5 w-3.5 group-hover:text-fb-red" />
                  <span>Surveillance</span>
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All Solutions
                </a>
              </li>
              <li>
                <a href="/brands" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Brands
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-6 text-fb-red border-b-2 border-fb-red/30 pb-2">
              → Resources
            </h4>
            <ul className="space-y-3">
              {siteData.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Technical Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-mono font-bold text-sm uppercase tracking-wider mb-6 text-fb-red border-b-2 border-fb-red/30 pb-2">
              → Contact
            </h4>
            <ul className="space-y-4">
              {/* Johannesburg */}
              <li>
                <p className="text-xs font-mono text-fb-green mb-2">JOHANNESBURG HQ</p>
                <div className="space-y-2">
                  <a
                    href={`tel:${siteData.contact.locations[0].phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span className="font-mono">{siteData.contact.locations[0].phone}</span>
                  </a>
                </div>
              </li>

              {/* Cape Town */}
              <li>
                <p className="text-xs font-mono text-fb-green mb-2">CAPE TOWN</p>
                <div className="space-y-2">
                  <a
                    href={`tel:${siteData.contact.locations[1].phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span className="font-mono">{siteData.contact.locations[1].phone}</span>
                  </a>
                </div>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${siteData.contact.locations[0].email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-fb-red transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>{siteData.contact.locations[0].email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-linear-to-r from-fb-red/20 to-transparent border-l-4 border-fb-red rounded-none p-6 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to Power Your Project?</h3>
              <p className="text-muted-foreground text-sm">
                Connect with our technical team for product selection and project support.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-fb-red hover:bg-fb-red/90 text-foreground font-semibold uppercase text-sm tracking-wider rounded-none transition-all group whitespace-nowrap"
            >
              {siteData.site.primaryCTA}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            {/* Copyright */}
            <div className="flex items-center gap-6">
              <p className="text-muted-foreground font-mono">
                {siteData.footer.legal}
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/sitemap" className="hover:text-foreground transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          {/* Technical Footer */}
          <div className="mt-6 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono text-muted-foreground">
              SYSTEM ID: <span className="text-fb-green">ZA-FORBATT-001</span> | STATUS: <span className="text-fb-green">OPERATIONAL</span>
            </p>
            <p className="text-xs text-muted-foreground">
              Built for mission-critical performance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
