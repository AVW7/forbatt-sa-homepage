import { SurveillanceProductCard } from "@/components/ui/surveillance-product-card"
import { Camera, Monitor, HardDrive, Smartphone, Network, Users } from "lucide-react"

export function SurveillanceProducts() {
  const products = [
    {
      icon: Camera,
      title: "IP Camera Systems",
      description:
        "High-resolution IP cameras with advanced features including night vision, PTZ control, and intelligent analytics",
      features: ["4K Ultra HD resolution", "Smart motion detection", "Wide dynamic range", "Weatherproof design"],
    },
    {
      icon: Monitor,
      title: "Video Management Systems",
      description:
        "Professional VMS platforms for centralized monitoring, recording, and management of all surveillance feeds",
      features: ["Multi-site management", "Advanced search functions", "Real-time alerts", "Custom user permissions"],
    },
    {
      icon: HardDrive,
      title: "NVR & Storage Solutions",
      description: "Enterprise-grade network video recorders with massive storage capacity and RAID redundancy",
      features: ["Up to 256 channels", "Hot-swappable drives", "Automatic backup", "Scalable architecture"],
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description:
        "Monitor your security cameras from anywhere with our intuitive mobile applications for iOS and Android",
      features: ["Live view streaming", "Push notifications", "PTZ camera control", "Playback on-the-go"],
    },
    {
      icon: Network,
      title: "Network Infrastructure",
      description:
        "Complete networking solutions including PoE switches, cabling, and wireless bridges for reliable connectivity",
      features: ["PoE+ support", "Managed switches", "Fiber optic options", "Network redundancy"],
    },
    {
      icon: Users,
      title: "Access Control Integration",
      description:
        "Seamlessly integrate surveillance with access control systems for comprehensive security management",
      features: ["Video verification", "Badge authentication", "Synchronized events", "Unified dashboard"],
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Surveillance Solutions</h2>
          <p className="text-xl text-gray-600">
            From cameras to storage, we provide everything you need for a comprehensive security system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <SurveillanceProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
