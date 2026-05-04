import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

interface CtaBannerProps {
  message: string
}

export function CtaBanner({ message }: CtaBannerProps) {
  return (
    <div className="rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-primary/20 bg-primary/5">
      <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
        <Zap className="h-5 w-5 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-foreground">{message}</p>
        <p className="text-xs text-muted-foreground mt-0.5">
          Free trial · No credit card required
        </p>
      </div>
      <Link
        href="https://missionassist360.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline underline-offset-4 shrink-0"
      >
        Try MissionAssist360
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
