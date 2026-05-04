import Link from 'next/link'
import { Truck } from 'lucide-react'
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
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <Truck className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-bold text-base tracking-tight">EasyDriver</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 flex-1 overflow-x-auto">
          {CALCULATORS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1.5 rounded-md hover:bg-muted whitespace-nowrap"
            >
              {c.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
