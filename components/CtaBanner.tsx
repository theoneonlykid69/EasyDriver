import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

interface CtaBannerProps {
  message: string
}

export function CtaBanner({ message }: CtaBannerProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl p-6 border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-blue-950/20">
      <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
          <Zap className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-base text-foreground">{message}</p>
          <p className="text-sm text-muted-foreground mt-0.5">
            Free trial · No credit card required
          </p>
        </div>
        <Link
          href="https://missionassist360.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 shrink-0 whitespace-nowrap"
        >
          Try MissionAssist360
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
