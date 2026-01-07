import { ResourceCard } from "@/components/ui/resource-card"
import { Download, GraduationCap, MessageCircle } from "lucide-react"

export function ResourceHub() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">Resources for Professionals</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access technical documentation, training programs, and expert support to maximize your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ResourceCard
            icon={<Download className="h-10 w-10" />}
            title="Downloads"
            description="Access the latest firmware, datasheets, price lists, and technical specifications."
            link="/downloads"
            linkText="Browse Downloads"
          />
          <ResourceCard
            icon={<GraduationCap className="h-10 w-10" />}
            title="Training"
            description="Schedule upcoming installer certification workshops and online training programs."
            link="/training"
            linkText="View Training"
          />
          <ResourceCard
            icon={<MessageCircle className="h-10 w-10" />}
            title="Support"
            description="Connect directly with our technical WhatsApp helpdesk for immediate assistance."
            link="https://wa.me/27123456789"
            linkText="Contact Support"
          />
        </div>
      </div>
    </section>
  )
}
