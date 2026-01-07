import { Shield, Cloud, Zap, Lock } from "lucide-react"

export function SurveillanceCommitment() {
  const commitments = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Military-grade encryption and secure data transmission protect your surveillance footage from unauthorized access",
    },
    {
      icon: Cloud,
      title: "Cloud & Local Storage",
      description:
        "Flexible storage options with redundant backups ensure your footage is always accessible and never lost",
    },
    {
      icon: Zap,
      title: "Real-Time Alerts",
      description: "Instant notifications and AI-powered motion detection keep you informed of any security events",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Integrated access control systems work seamlessly with surveillance for comprehensive security",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Commitment to Your Security</h2>
          <p className="text-xl text-gray-600">
            Forbatt SA delivers comprehensive surveillance solutions that combine cutting-edge technology with reliable
            performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-600">
                <commitment.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{commitment.title}</h3>
              <p className="text-gray-600 text-balance">{commitment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
