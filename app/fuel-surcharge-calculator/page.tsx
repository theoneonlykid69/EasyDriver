'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { CtaBanner } from '@/components/CtaBanner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Fuel } from 'lucide-react'

export default function FuelSurchargePage() {
  const [currentPrice, setCurrentPrice] = useState('')
  const [basePrice, setBasePrice] = useState('2.50')
  const [baseSurchargePercent, setBaseSurchargePercent] = useState('6')
  const [incrementCents, setIncrementCents] = useState('0.06')
  const [incrementPercent, setIncrementPercent] = useState('1')
  const [miles, setMiles] = useState('')
  const [ratePerMile, setRatePerMile] = useState('')

  const [result, setResult] = useState<{
    surchargePercent: number
    surchargePerMile: number
    totalSurcharge: number
    effectiveRate: number
  } | null>(null)

  const calculate = () => {
    const current = parseFloat(currentPrice)
    const base = parseFloat(basePrice) || 2.50
    const basePct = parseFloat(baseSurchargePercent) || 6
    const incCents = parseFloat(incrementCents) || 0.06
    const incPct = parseFloat(incrementPercent) || 1
    const milesVal = parseFloat(miles) || 0
    const rate = parseFloat(ratePerMile) || 0

    if (!current || current <= 0) return

    if (current <= base) {
      setResult({ surchargePercent: 0, surchargePerMile: 0, totalSurcharge: 0, effectiveRate: rate })
      return
    }

    const increments = Math.ceil((current - base) / incCents)
    const surchargePercent = basePct + increments * incPct
    const surchargePerMile = rate * (surchargePercent / 100)
    const totalSurcharge = surchargePerMile * milesVal
    const effectiveRate = rate + surchargePerMile

    setResult({ surchargePercent, surchargePerMile, totalSurcharge, effectiveRate })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-8">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Fuel className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">Fuel Surcharge Calculator</h1>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Calculate the fuel surcharge to add to a load rate based on current diesel price and your
              surcharge schedule. Uses the standard increment-based surcharge method.
            </p>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-base">Fuel Prices</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="currentPrice">Current Diesel Price ($/gal)</Label>
                <Input id="currentPrice" type="number" placeholder="3.85" value={currentPrice} onChange={e => setCurrentPrice(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="basePrice">Base Fuel Price ($/gal)</Label>
                <Input id="basePrice" type="number" placeholder="2.50" value={basePrice} onChange={e => setBasePrice(e.target.value)} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Surcharge Schedule</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="baseSurcharge">Base Surcharge (%)</Label>
                <Input id="baseSurcharge" type="number" placeholder="6" value={baseSurchargePercent} onChange={e => setBaseSurchargePercent(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="incCents">Price Increment ($/gal)</Label>
                <Input id="incCents" type="number" placeholder="0.06" value={incrementCents} onChange={e => setIncrementCents(e.target.value)} />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="incPct">Surcharge Per Increment (%)</Label>
                <Input id="incPct" type="number" placeholder="1" value={incrementPercent} onChange={e => setIncrementPercent(e.target.value)} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Load Details</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="ratePerMile">Base Rate ($/mile)</Label>
                <Input id="ratePerMile" type="number" placeholder="2.00" value={ratePerMile} onChange={e => setRatePerMile(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="miles">Total Miles</Label>
                <Input id="miles" type="number" placeholder="500" value={miles} onChange={e => setMiles(e.target.value)} />
              </div>
            </CardContent>
          </Card>

          <Button onClick={calculate} className="w-full" size="lg">Calculate Fuel Surcharge</Button>

          {result && (
            <Card className="border-primary/30">
              <CardHeader><CardTitle className="text-base">Fuel Surcharge Result</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Surcharge Percentage</span><span>{result.surchargePercent.toFixed(1)}%</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Surcharge Per Mile</span><span>${result.surchargePerMile.toFixed(4)}/mi</span></div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total Surcharge (for load)</span>
                  <span>${result.totalSurcharge.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Effective Rate</span>
                  <span className="text-primary">${result.effectiveRate.toFixed(4)}/mi</span>
                </div>
              </CardContent>
            </Card>
          )}

          <CtaBanner message="Auto-calculate fuel surcharges on every invoice in MissionAssist360 — billed correctly every time." />

          <Card className="bg-muted/40 border-0">
            <CardContent className="pt-6 text-xs text-muted-foreground space-y-2 leading-relaxed">
              <p><strong>How fuel surcharges work:</strong> Most carriers use a stepped schedule — for every X cents above the base fuel price, the surcharge increases by Y%. The DOE (Department of Energy) publishes weekly retail diesel prices used as the industry benchmark.</p>
              <p><strong>Tip:</strong> Always negotiate your surcharge schedule upfront in the rate confirmation. Brokers sometimes use lower base prices that reduce your surcharge.</p>
            </CardContent>
          </Card>

        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
