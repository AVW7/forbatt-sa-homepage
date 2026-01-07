import { TrendingUp, Users, Award, Newspaper } from "lucide-react"

export function MediaStats() {
  const stats = [
    {
      icon: <Newspaper className="h-8 w-8" />,
      value: "150+",
      label: "Published Articles",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "25+",
      label: "Product Launches",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: "50+",
      label: "Success Stories",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "10+",
      label: "Industry Awards",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3 text-(--color-fb-red)">{stat.icon}</div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
