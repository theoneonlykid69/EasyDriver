import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calculator, DollarSign, TrendingUp, Calendar, Fuel, Zap } from 'lucide-react'

const CALCULATORS = [
  {
    href: '/ifta-calculator',
    icon: Calculator,
    title: 'IFTA Fuel Tax Calculator',
    description: 'Calculate quarterly IFTA fuel tax owed or refund per state. Enter miles and gallons by jurisdiction.',
    badge: 'Most Popular',
  },
  {
    href: '/cost-per-mile-calculator',
    icon: DollarSign,
    title: 'Cost Per Mile Calculator',
    description: 'Know your true CPM by breaking down fixed and variable costs against total miles driven.',
    badge: null,
  },
  {
    href: '/load-profit-calculator',
    icon: TrendingUp,
    title: 'Load Profit Calculator',
    description: 'See real net profit on any load after fuel, tolls, broker fees, and driver pay.',
    badge: null,
  },
  {
    href: '/per-diem-calculator',
    icon: Calendar,
    title: 'Per Diem Calculator',
    description: 'Calculate your IRS per diem deduction and estimated tax savings for days on the road.',
    badge: null,
  },
  {
    href: '/fuel-surcharge-calculator',
    icon: Fuel,
    title: 'Fuel Surcharge Calculator',
    description: 'Calculate the correct fuel surcharge to add to your rate based on current diesel prices.',
    badge: null,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/10">
              Free · No Sign-Up · No Limits
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Free Trucking Calculators
              <br />
              <span className="text-primary">Built for Drivers</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              IFTA, cost per mile, load profit, per diem, fuel surcharge — everything you need to
              run a profitable trucking operation. Free forever, no account required.
            </p>

            {/* MissionAssist360 CTA */}
            <div className="rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 border border-primary/20 bg-primary/5 max-w-2xl mx-auto text-left">
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Want all of this automated in one dashboard?</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  MissionAssist360 handles IFTA tracking, invoicing, dispatch, and more — free trial, no credit card.
                </p>
              </div>
              <Link
                href="https://missionassist360.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0"
              >
                Try Free →
              </Link>
            </div>
          </div>
        </section>

        {/* Calculator Grid */}
        <section className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold mb-6 text-center text-muted-foreground uppercase tracking-wider">
              Choose a Calculator
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CALCULATORS.map((calc) => {
                const Icon = calc.icon
                return (
                  <Link key={calc.href} href={calc.href} className="group">
                    <Card className="h-full border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          {calc.badge && (
                            <Badge variant="secondary" className="text-xs">{calc.badge}</Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-sm mb-1.5 group-hover:text-primary transition-colors">
                          {calc.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {calc.description}
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Open Calculator <ArrowRight className="h-3 w-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why EasyDriver */}
        <section className="px-4 pb-20 bg-muted/30">
          <div className="max-w-3xl mx-auto py-16 text-center">
            <h2 className="text-2xl font-bold mb-3">Why EasyDriver?</h2>
            <p className="text-muted-foreground mb-10 text-sm leading-relaxed">
              We built the cleanest, fastest trucking calculators on the web — no paywalls, no sign-ups,
              no bloated interfaces. Just the math you need, instantly.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { title: '100% Free', desc: 'Every calculator is free forever. No premium tier, no credit card.' },
                { title: 'No Sign-Up', desc: 'Open a calculator and start. No account, no email, no friction.' },
                { title: 'Built for Truckers', desc: 'By people who understand the industry — IFTA, CPM, per diem, and more.' },
              ].map((f) => (
                <div key={f.title} className="bg-card rounded-xl p-5 border border-border/60">
                  <h3 className="font-bold text-sm mb-1.5">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
