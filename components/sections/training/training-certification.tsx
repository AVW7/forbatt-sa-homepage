import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle, Star, Users } from "lucide-react"

export function TrainingCertification() {
  const certifications = [
    {
      title: "Forbatt Certified Solar Installer",
      description:
        "Demonstrates proficiency in solar system design, installation, and commissioning. Recognized by industry partners.",
      requirements: [
        "Complete Solar Fundamentals course",
        "Pass practical assessment",
        "Minimum 20 installations documented",
      ],
      validity: "3 years",
      level: "Professional",
      icon: <Award className="h-12 w-12" />,
    },
    {
      title: "Forbatt Certified Surveillance Specialist",
      description:
        "Validates expertise in IP camera systems, NVR configuration, and enterprise surveillance deployments.",
      requirements: [
        "Complete IP Camera Configuration course",
        "Pass certification exam (80% minimum)",
        "Submit 3 project case studies",
      ],
      validity: "2 years",
      level: "Professional",
      icon: <Award className="h-12 w-12" />,
    },
    {
      title: "Forbatt Certified Automation Expert",
      description:
        "Recognizes advanced skills in building automation programming, system integration, and optimization.",
      requirements: [
        "Complete Building Automation Systems course",
        "Pass advanced certification exam",
        "Complete 5 complex integration projects",
      ],
      validity: "3 years",
      level: "Expert",
      icon: <Star className="h-12 w-12" />,
    },
  ]

  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Industry Recognition",
      description: "Certification recognized by industry partners and potential clients",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Priority Support",
      description: "Access to dedicated technical support and advanced resources",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Marketing Materials",
      description: "Use certification logos and badges in your marketing",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Dealer Benefits",
      description: "Preferential pricing and access to exclusive product lines",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Professional Certifications</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Validate your expertise and stand out in the industry with Forbatt professional certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-(--color-fb-green) mb-4 flex justify-center">{cert.icon}</div>
                <div className="flex justify-center mb-4">
                  <Badge variant="secondary">{cert.level}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{cert.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed text-center">{cert.description}</p>
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-sm">Requirements:</h4>
                  <ul className="space-y-2">
                    {cert.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-(--color-fb-green) mt-0.5 flex-shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground text-center mb-6">Valid for {cert.validity}</p>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Certification Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-(--color-fb-red) mb-4 flex justify-center">{benefit.icon}</div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
