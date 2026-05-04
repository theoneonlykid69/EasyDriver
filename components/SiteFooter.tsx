import Link from 'next/link'
import { Truck } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card/30 mt-auto">
      <div className="max-w-screen-2xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
              <Truck className="h-3.5 w-3.5 text-primary" />
            </div>
            <span className="font-bold text-sm">EasyDriver</span>
            <span className="text-muted-foreground/40 text-xs">
              — free trucking calculators
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
            <Link href="/privacy"  className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms"    className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="/contact"  className="hover:text-foreground transition-colors">Contact</Link>
            <Link
              href="https://freecvcraft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Free Cover Letter Generator
            </Link>
          </nav>

          <p className="text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} EasyDriver
          </p>
        </div>
      </div>
    </footer>
  )
}
