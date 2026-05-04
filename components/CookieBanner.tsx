'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'easydriver-cookies-accepted'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
      <div className="max-w-2xl mx-auto bg-card border shadow-xl rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 pointer-events-auto">
        <Cookie className="h-5 w-5 text-primary shrink-0 mt-0.5 sm:mt-0" />
        <p className="text-sm text-muted-foreground flex-1 leading-relaxed">
          We use cookies and similar technologies to improve your experience and serve relevant ads.
          By continuing to use EasyDriver, you agree to our use of cookies.
        </p>
        <div className="flex gap-2 shrink-0 w-full sm:w-auto">
          <Button size="sm" onClick={accept} className="flex-1 sm:flex-none">
            Accept
          </Button>
          <Button size="sm" variant="outline" onClick={accept} className="flex-1 sm:flex-none">
            Decline
          </Button>
        </div>
      </div>
    </div>
  )
}
