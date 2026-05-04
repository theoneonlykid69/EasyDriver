import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { CalcSidebar } from '@/components/CalcSidebar'

export function CalcPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex flex-1 overflow-hidden">
        <CalcSidebar />
        <main className="flex-1 min-w-0 overflow-x-hidden">
          {children}
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}
