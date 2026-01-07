import { TrainingCourseCard } from "@/components/ui/training-course-card"

export function TrainingCourses() {
  const courses = [
    {
      title: "Solar Installation Fundamentals",
      description:
        "Learn the basics of solar system design, installation best practices, and safety procedures. Perfect for new installers and technicians.",
      duration: "3 Days",
      level: "Beginner" as const,
      capacity: "20",
      nextDate: "Feb 15, 2026",
      category: "Energy",
      link: "/training/solar-fundamentals",
    },
    {
      title: "Advanced Solar System Design",
      description:
        "Master complex solar installations, battery integration, and grid-tie systems. Includes hands-on design exercises and system optimization.",
      duration: "5 Days",
      level: "Advanced" as const,
      capacity: "15",
      nextDate: "Mar 5, 2026",
      category: "Energy",
      link: "/training/solar-advanced",
    },
    {
      title: "IP Camera Configuration & Management",
      description:
        "Comprehensive training on IP camera installation, network configuration, and video management system setup.",
      duration: "2 Days",
      level: "Intermediate" as const,
      capacity: "20",
      nextDate: "Feb 22, 2026",
      category: "Surveillance",
      link: "/training/ip-camera",
    },
    {
      title: "Building Automation Systems",
      description:
        "Learn to configure and program building automation controllers, integrate sensors, and create intelligent automation sequences.",
      duration: "4 Days",
      level: "Intermediate" as const,
      capacity: "15",
      nextDate: "Mar 12, 2026",
      category: "Automation",
      link: "/training/building-automation",
    },
    {
      title: "Battery Storage Systems",
      description:
        "Deep dive into lithium battery technology, system sizing, installation, and maintenance. Covers safety protocols and troubleshooting.",
      duration: "2 Days",
      level: "Intermediate" as const,
      capacity: "20",
      nextDate: "Feb 28, 2026",
      category: "Energy",
      link: "/training/battery-storage",
    },
    {
      title: "Advanced Surveillance Integration",
      description:
        "Master complex surveillance deployments with access control, analytics, and multi-site management. Enterprise-level training.",
      duration: "5 Days",
      level: "Advanced" as const,
      capacity: "12",
      nextDate: "Mar 18, 2026",
      category: "Surveillance",
      link: "/training/surveillance-advanced",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Available Training Courses</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose from our comprehensive range of technical training programs. All courses include hands-on labs,
            certification, and course materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <TrainingCourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  )
}
