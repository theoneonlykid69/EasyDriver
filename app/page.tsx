import Link from 'next/link'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { FadeIn } from '@/components/FadeIn'
import { ArrowRight, Calculator, DollarSign, TrendingUp, Calendar, Fuel, Zap, Shield, Star } from 'lucide-react'

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

const FEATURES = [
  {
    icon: Zap,
    title: '100% Free',
    desc: 'Every calculator is free forever. No premium tiers, no hidden fees, no credit card required.',
  },
  {
    icon: Shield,
    title: 'No Sign-Up',
    desc: 'Open any calculator and start computing instantly. No account, no email, zero friction.',
  },
  {
    icon: Star,
    title: 'Built for Truckers',
    desc: 'Designed by people who understand the industry — IFTA, CPM, per diem, and more.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden px-4 pt-20 pb-24 md:pt-28 md:pb-32">
          {/* Background layers */}
          <div className="absolute inset-0 hero-grid" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_75%_15%,oklch(0.62_0.255_22/0.16)_0%,transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_-5%_90%,oklch(0.4_0.12_260/0.14)_0%,transparent_55%)]" />

          <div className="relative max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="animate-hero inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-sm font-semibold text-primary mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              100% Free · No Account · No Limits
            </div>

            {/* Heading */}
            <h1 className="animate-hero-1 text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              Free Trucking
              <br />
              <span className="bg-gradient-to-r from-primary via-red-400 to-primary/70 bg-clip-text text-transparent">
                Calculators
              </span>
            </h1>

            <p className="animate-hero-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              IFTA fuel tax, cost per mile, load profit, per diem, fuel surcharge —
              everything you need to run a profitable trucking operation. Free forever.
            </p>

            {/* CTA buttons */}
            <div className="animate-hero-3 flex flex-wrap justify-center gap-3 mb-6">
              <Link
                href="#calculators"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-colors shadow-xl shadow-primary/25"
              >
                View All Calculators
                <ArrowRight className="h-4.5 w-4.5" />
              </Link>
              <Link
                href="https://missionassist360.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-card border border-border text-foreground font-bold text-base hover:bg-muted transition-colors"
              >
                Try MissionAssist360
              </Link>
            </div>

            {/* Trust line */}
            <p className="animate-hero-4 text-sm text-muted-foreground/70">
              No sign-up · No credit card · Works on any device
            </p>
          </div>
        </section>

        {/* ── Calculator Grid ── */}
        <section id="calculators" className="px-4 pb-24">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-12">
              <p className="text-xs font-black text-muted-foreground/60 uppercase tracking-[0.18em] mb-3">
                Choose Your Calculator
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">All 5 Tools, Free Forever</h2>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {CALCULATORS.map((calc, i) => {
                const Icon = calc.icon
                return (
                  <FadeIn key={calc.href} delay={i * 80} direction="up">
                    <Link href={calc.href} className="group block h-full">
                      <div className="h-full rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          {calc.badge && (
                            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                              {calc.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                          {calc.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {calc.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5 text-sm text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                          Open Calculator <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Why EasyDriver ── */}
        <section className="px-4 pb-24">
          <div className="max-w-5xl mx-auto">
            <FadeIn className="text-center mb-12">
              <p className="text-xs font-black text-muted-foreground/60 uppercase tracking-[0.18em] mb-3">
                Why EasyDriver?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold">Built for the Road, Not the Office</h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Cleanest, fastest trucking calculators on the web — no paywalls, no sign-ups, no bloated interfaces.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => {
                const Icon = f.icon
                return (
                  <FadeIn key={f.title} delay={i * 100} direction="up">
                    <div className="rounded-2xl border border-border/50 bg-card p-6 h-full">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-base mb-2">{f.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── MA360 Full CTA ── */}
        <section className="px-4 pb-24">
          <FadeIn>
            <div className="max-w-3xl mx-auto relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-10 sm:p-14 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,oklch(0.62_0.255_22/0.12)_0%,transparent_65%)]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-950/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 border border-primary/25 mb-6">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Want All of This Automated?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                  MissionAssist360 handles IFTA tracking, invoicing, dispatch, and more
                  in one trucking dashboard. Free trial, no credit card.
                </p>
                <Link
                  href="https://missionassist360.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-colors shadow-2xl shadow-primary/25"
                >
                  Try MissionAssist360 Free
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>

      <SiteFooter />
    </div>
  )
}
