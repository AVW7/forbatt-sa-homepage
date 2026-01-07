import { CheckCircle2, Phone, User } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-(--color-fb-charcoal) text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-10 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-(--color-fb-green)" />
            <span>In-Stock: Nationwide Delivery Available</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+27123456789"
              className="flex items-center gap-2 hover:text-(--color-fb-red) transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Technical Support: +27 (0) 12 345 6789</span>
            </a>
            <a href="/dealer-portal" className="flex items-center gap-2 hover:text-(--color-fb-red) transition-colors">
              <User className="h-4 w-4" />
              <span>Dealer Portal Login</span>
            </a>
            <span className="text-muted-foreground">EN</span>
          </div>
        </div>
      </div>
    </div>
  )
}
