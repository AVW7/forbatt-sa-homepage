import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function MediaNewsletter() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 text-(--color-fb-red) mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to receive the latest news, product announcements, and industry insights from Forbatt SA.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-(--color-fb-red) bg-background"
              required
            />
            <Button type="submit" size="lg" className="bg-(--color-fb-red) hover:bg-(--color-fb-red)/90">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
