import Link from 'next/link'
import { Truck, ExternalLink } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const CALCULATORS = [
  { href: '/ifta-calculator', label: 'IFTA' },
  { href: '/cost-per-mile-calculator', label: 'Cost/Mile' },
  { href: '/load-profit-calculator', label: 'Load Profit' },
  { href: '/per-diem-calculator', label: 'Per Diem' },
  { href: '/fuel-surcharge-calculator', label: 'Fuel Surcharge' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-full flex items-center gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
            <Truck className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-base tracking-tight">
            Easy<span className="text-primary">Driver</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 overflow-x-auto scrollbar-none">
          {CALCULATORS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all px-3 py-1.5 rounded-lg whitespace-nowrap"
            >
              {c.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="https://missionassist360.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md shadow-primary/25"
          >
            MissionAssist360
            <ExternalLink className="h-3 w-3" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
