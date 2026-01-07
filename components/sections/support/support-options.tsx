import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, Ticket, Clock, MapPin } from "lucide-react"

export function SupportOptions() {
  const supportChannels = [
    {
      icon: <Phone className="h-12 w-12" />,
      title: "Phone Support",
      description: "Speak directly with our technical support team for immediate assistance.",
      contact: "+27 (0) 12 345 6789",
      availability: "Mon-Fri: 8:00 AM - 5:00 PM SAST",
      action: "Call Now",
      href: "tel:+27123456789",
      color: "text-(--color-fb-green)",
    },
    {
      icon: <Mail className="h-12 w-12" />,
      title: "Email Support",
      description: "Send us a detailed inquiry and we'll respond within 24 hours.",
      contact: "support@forbatt.co.za",
      availability: "Response within 24 hours",
      action: "Send Email",
      href: "mailto:support@forbatt.co.za",
      color: "text-(--color-fb-red)",
    },
    {
      icon: <MessageCircle className="h-12 w-12" />,
      title: "WhatsApp Support",
      description: "Chat with us on WhatsApp for quick questions and real-time support.",
      contact: "+27 79 123 4567",
      availability: "Mon-Fri: 8:00 AM - 5:00 PM SAST",
      action: "Start Chat",
      href: "https://wa.me/27791234567",
      color: "text-green-600",
    },
    {
      icon: <Ticket className="h-12 w-12" />,
      title: "Support Ticket",
      description: "Create a support ticket to track your issue from start to resolution.",
      contact: "Track and manage your requests",
      availability: "24/7 ticket submission",
      action: "Create Ticket",
      href: "#ticket-form",
      color: "text-blue-600",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Choose Your Support Channel</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Multiple ways to connect with our expert support team. Select the method that works best for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className={`${channel.color} mb-4 flex justify-center`}>{channel.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{channel.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{channel.description}</p>
                <div className="space-y-2 mb-6 text-sm">
                  <p className="font-medium">{channel.contact}</p>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{channel.availability}</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline" asChild>
                  <a href={channel.href}>{channel.action}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Centers */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Service Centers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                city: "Johannesburg",
                address: "123 Main Road, Sandton, 2196",
                hours: "Mon-Fri: 8:00 AM - 5:00 PM",
              },
              {
                city: "Cape Town",
                address: "456 Business Park, Century City, 7441",
                hours: "Mon-Fri: 8:00 AM - 5:00 PM",
              },
              {
                city: "Durban",
                address: "789 Industrial Ave, Umhlanga, 4319",
                hours: "Mon-Fri: 8:00 AM - 5:00 PM",
              },
            ].map((center, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-(--color-fb-red) mt-1" />
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{center.city}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{center.address}</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{center.hours}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
