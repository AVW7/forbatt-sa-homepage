import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Radio, Bell, BarChart3, Cloud, Shield } from "lucide-react"

export function SurveillanceIntegration() {
  const integrations = [
    {
      icon: Cpu,
      title: "AI Analytics",
      description:
        "Advanced artificial intelligence for facial recognition, license plate detection, and behavioral analysis",
    },
    {
      icon: Radio,
      title: "Alarm Systems",
      description: "Seamless integration with fire alarms, intrusion detection, and emergency response systems",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Customizable alerts via email, SMS, and mobile push notifications for critical events",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Extract valuable insights from surveillance data including foot traffic and customer behavior",
    },
    {
      icon: Cloud,
      title: "Cloud Backup",
      description: "Automatic cloud backup ensures your footage is protected with redundant storage",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade encryption and network security to protect against cyber threats",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Integration Capabilities</h2>
          <p className="text-xl text-gray-600">
            Our surveillance systems integrate seamlessly with your existing security infrastructure and business
            systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-red-100 text-red-600">
                  <integration.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{integration.title}</h3>
                <p className="text-gray-600 text-sm">{integration.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
