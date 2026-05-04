'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calculator, DollarSign, TrendingUp, Calendar, Fuel, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const CALCULATORS = [
  { href: '/ifta-calculator',            icon: Calculator,  label: 'IFTA Fuel Tax',     short: 'IFTA' },
  { href: '/cost-per-mile-calculator',   icon: DollarSign,  label: 'Cost Per Mile',     short: 'CPM' },
  { href: '/load-profit-calculator',     icon: TrendingUp,  label: 'Load Profit',       short: 'Profit' },
  { href: '/per-diem-calculator',        icon: Calendar,    label: 'Per Diem',          short: 'Per Diem' },
  { href: '/fuel-surcharge-calculator',  icon: Fuel,        label: 'Fuel Surcharge',    short: 'Fuel' },
]

export function CalcSidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile: horizontal scrollable strip */}
      <div className="lg:hidden border-b border-border/50 bg-card/80 backdrop-blur-sm px-4 py-2.5">
        <div className="flex gap-2 overflow-x-auto scrollbar-none">
          {CALCULATORS.map((c) => {
            const Icon = c.icon
            const active = pathname === c.href
            return (
              <Link
                key={c.href}
                href={c.href}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0',
                  active
                    ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/30'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" />
                {c.short}
              </Link>
            )
          })}
        </div>
      </div>

      {/* Desktop: sticky left sidebar */}
      <aside className="hidden lg:flex flex-col w-60 shrink-0 border-r border-border/50 bg-card/30 sticky top-16 h-[calc(100vh-64px)] overflow-y-auto">
        <div className="p-5 flex flex-col h-full">
          <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.18em] px-2 mb-3">
            Calculators
          </p>
          <nav className="space-y-0.5 flex-1">
            {CALCULATORS.map((c) => {
              const Icon = c.icon
              const active = pathname === c.href
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all group',
                    active
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  )}
                >
                  <Icon className={cn(
                    'h-4 w-4 shrink-0 transition-colors',
                    !active && 'group-hover:text-primary'
                  )} />
                  {c.label}
                </Link>
              )
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-border/50">
            <p className="text-[10px] font-black text-muted-foreground/60 uppercase tracking-[0.18em] px-2 mb-2">
              Upgrade
            </p>
            <Link
              href="https://missionassist360.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all group"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              </div>
              MissionAssist360
            </Link>
          </div>
        </div>
      </aside>
    </>
  )
}
