"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DownloadCard } from "@/components/ui/download-card"
import { FileText, Package, DollarSign, Image as ImageIcon } from "lucide-react"

export function DownloadsCategories() {
  const [activeTab, setActiveTab] = useState("all")

  const downloads = {
    firmware: [
      {
        title: "Solar Inverter Firmware v3.2.1",
        description: "Latest firmware update with improved efficiency and new monitoring features.",
        fileType: "ZIP",
        fileSize: "45 MB",
        downloadUrl: "/downloads/firmware-solar-inverter-v3.2.1.zip",
        category: "Energy",
        lastUpdated: "Dec 2025",
      },
      {
        title: "IP Camera Firmware v2.8.0",
        description: "Security update and enhanced night vision performance for IP camera systems.",
        fileType: "BIN",
        fileSize: "128 MB",
        downloadUrl: "/downloads/firmware-ip-camera-v2.8.0.bin",
        category: "Surveillance",
        lastUpdated: "Nov 2025",
      },
      {
        title: "Building Automation Controller v4.1",
        description: "New protocols support and improved scheduling algorithms for automation systems.",
        fileType: "ZIP",
        fileSize: "92 MB",
        downloadUrl: "/downloads/firmware-bac-v4.1.zip",
        category: "Automation",
        lastUpdated: "Jan 2026",
      },
    ],
    datasheets: [
      {
        title: "10kW Solar Inverter Datasheet",
        description: "Complete technical specifications for the 10kW three-phase solar inverter system.",
        fileType: "PDF",
        fileSize: "2.4 MB",
        downloadUrl: "/downloads/datasheet-10kw-inverter.pdf",
        category: "Energy",
        lastUpdated: "Oct 2025",
      },
      {
        title: "4K IP Camera Series Datasheet",
        description: "Technical specifications for the complete 4K IP camera product range.",
        fileType: "PDF",
        fileSize: "3.1 MB",
        downloadUrl: "/downloads/datasheet-4k-camera-series.pdf",
        category: "Surveillance",
        lastUpdated: "Sep 2025",
      },
      {
        title: "Smart Building Controller Datasheet",
        description: "Comprehensive specifications for the smart building automation controller.",
        fileType: "PDF",
        fileSize: "1.8 MB",
        downloadUrl: "/downloads/datasheet-smart-controller.pdf",
        category: "Automation",
        lastUpdated: "Nov 2025",
      },
      {
        title: "Lithium Battery Storage Datasheet",
        description: "Technical documentation for commercial lithium battery storage solutions.",
        fileType: "PDF",
        fileSize: "2.9 MB",
        downloadUrl: "/downloads/datasheet-battery-storage.pdf",
        category: "Energy",
        lastUpdated: "Dec 2025",
      },
    ],
    brochures: [
      {
        title: "Energy Solutions Product Catalog 2026",
        description: "Complete overview of our renewable energy and power backup solutions.",
        fileType: "PDF",
        fileSize: "12.5 MB",
        downloadUrl: "/downloads/catalog-energy-2026.pdf",
        category: "Energy",
        lastUpdated: "Jan 2026",
      },
      {
        title: "Surveillance Systems Brochure",
        description: "Comprehensive guide to our IP cameras, NVRs, and video management systems.",
        fileType: "PDF",
        fileSize: "8.7 MB",
        downloadUrl: "/downloads/brochure-surveillance.pdf",
        category: "Surveillance",
        lastUpdated: "Dec 2025",
      },
      {
        title: "Building Automation Solutions Guide",
        description: "Complete guide to smart building automation and control systems.",
        fileType: "PDF",
        fileSize: "6.3 MB",
        downloadUrl: "/downloads/guide-building-automation.pdf",
        category: "Automation",
        lastUpdated: "Nov 2025",
      },
    ],
    pricelists: [
      {
        title: "Energy Solutions Price List Q1 2026",
        description: "Current pricing for solar systems, inverters, batteries, and accessories.",
        fileType: "XLSX",
        fileSize: "890 KB",
        downloadUrl: "/downloads/pricelist-energy-q1-2026.xlsx",
        category: "Energy",
        lastUpdated: "Jan 2026",
      },
      {
        title: "Surveillance Equipment Price List Q1 2026",
        description: "Pricing for cameras, recorders, and surveillance system accessories.",
        fileType: "XLSX",
        fileSize: "720 KB",
        downloadUrl: "/downloads/pricelist-surveillance-q1-2026.xlsx",
        category: "Surveillance",
        lastUpdated: "Jan 2026",
      },
      {
        title: "Automation Products Price List Q1 2026",
        description: "Current pricing for building automation controllers and smart devices.",
        fileType: "XLSX",
        fileSize: "650 KB",
        downloadUrl: "/downloads/pricelist-automation-q1-2026.xlsx",
        category: "Automation",
        lastUpdated: "Jan 2026",
      },
    ],
  }

  const allDownloads = [
    ...downloads.firmware,
    ...downloads.datasheets,
    ...downloads.brochures,
    ...downloads.pricelists,
  ]

  const categories = [
    { id: "all", label: "All Resources", icon: <FileText className="h-4 w-4" /> },
    { id: "firmware", label: "Firmware", icon: <Package className="h-4 w-4" /> },
    { id: "datasheets", label: "Datasheets", icon: <FileText className="h-4 w-4" /> },
    { id: "brochures", label: "Brochures", icon: <ImageIcon className="h-4 w-4" /> },
    { id: "pricelists", label: "Price Lists", icon: <DollarSign className="h-4 w-4" /> },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Browse by Category</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Find the resources you need quickly by filtering through our organized categories.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-5 mb-12 h-auto">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                {category.icon}
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allDownloads.map((item, index) => (
                <DownloadCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="firmware" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloads.firmware.map((item, index) => (
                <DownloadCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="datasheets" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloads.datasheets.map((item, index) => (
                <DownloadCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="brochures" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloads.brochures.map((item, index) => (
                <DownloadCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pricelists" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloads.pricelists.map((item, index) => (
                <DownloadCard key={index} {...item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
