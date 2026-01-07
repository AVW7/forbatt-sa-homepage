"use client";

import { CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="bg-card text-foreground border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 text-xs">
          {/* Left: System Status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono">
              <div className="w-2 h-2 bg-fb-green rounded-full animate-pulse" />
              <span className="text-fb-green font-semibold">SYSTEM ONLINE</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-fb-green" />
              <span className="text-muted-foreground">Nationwide Stock Available</span>
            </div>
          </div>

          {/* Right: Contact & Location */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:${siteData.contact.locations[0].phone}`}
              className="flex items-center gap-1.5 hover:text-fb-red transition-colors group"
            >
              <Phone className="h-3.5 w-3.5 group-hover:animate-pulse" />
              <span className="font-mono">{siteData.contact.locations[0].phone}</span>
            </a>
            <div className="h-4 w-px bg-border" />
            <a
              href={`mailto:${siteData.contact.locations[0].email}`}
              className="flex items-center gap-1.5 hover:text-fb-red transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{siteData.contact.locations[0].email}</span>
            </a>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              <span>JHB | CPT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
