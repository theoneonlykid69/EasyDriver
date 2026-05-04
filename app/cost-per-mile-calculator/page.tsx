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
import { DollarSign } from 'lucide-react'

interface FixedCost { label: string; amount: string }
interface VariableCost { label: string; amount: string }

export default function CostPerMilePage() {
  const [fixedCosts, setFixedCosts] = useState<FixedCost[]>([
    { label: 'Truck payment', amount: '' },
    { label: 'Insurance', amount: '' },
    { label: 'Permits & licenses', amount: '' },
    { label: 'Lease/base plate', amount: '' },
  ])
  const [variableCosts, setVariableCosts] = useState<VariableCost[]>([
    { label: 'Fuel', amount: '' },
    { label: 'Maintenance & tires', amount: '' },
    { label: 'Driver pay (per mile)', amount: '' },
    { label: 'Tolls & scales', amount: '' },
  ])
  const [miles, setMiles] = useState('')
  const [result, setResult] = useState<{ cpm: number; totalFixed: number; totalVariable: number; totalCost: number } | null>(null)

  const updateFixed = (i: number, field: keyof FixedCost, val: string) =>
    setFixedCosts(c => c.map((r, idx) => idx === i ? { ...r, [field]: val } : r))
  const updateVariable = (i: number, field: keyof VariableCost, val: string) =>
    setVariableCosts(c => c.map((r, idx) => idx === i ? { ...r, [field]: val } : r))

  const calculate = () => {
    const milesVal = parseFloat(miles)
    if (!milesVal || milesVal <= 0) return

    const totalFixed = fixedCosts.reduce((s, c) => s + (parseFloat(c.amount) || 0), 0)
    const rawVariable = variableCosts.reduce((s, c) => s + (parseFloat(c.amount) || 0), 0)
    // driver pay per mile is already per mile — multiply by miles; others are total monthly
    const driverPayPerMile = parseFloat(variableCosts.find(c => c.label === 'Driver pay (per mile)')?.amount || '0') || 0
    const otherVariable = variableCosts
      .filter(c => c.label !== 'Driver pay (per mile)')
      .reduce((s, c) => s + (parseFloat(c.amount) || 0), 0)

    const totalVariableCost = otherVariable + driverPayPerMile * milesVal
    const totalCost = totalFixed + totalVariableCost
    const cpm = totalCost / milesVal

    setResult({ cpm, totalFixed, totalVariable: totalVariableCost, totalCost })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-8">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">Cost Per Mile Calculator</h1>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Know your true cost per mile by entering your monthly fixed costs, variable costs, and
              total miles driven. Driver pay can be entered as a per-mile rate.
            </p>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-base">Miles Driven (Monthly)</CardTitle></CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 max-w-xs">
                <Label htmlFor="miles" className="shrink-0 w-28">Total Miles</Label>
                <Input id="miles" type="number" placeholder="10000" value={miles} onChange={e => setMiles(e.target.value)} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Fixed Monthly Costs ($)</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {fixedCosts.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Label className="w-44 shrink-0 text-sm">{c.label}</Label>
                  <Input
                    type="number"
                    placeholder="0.00"
                    value={c.amount}
                    onChange={e => updateFixed(i, 'amount', e.target.value)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Variable Monthly Costs ($)</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {variableCosts.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Label className="w-44 shrink-0 text-sm">{c.label}</Label>
                  <Input
                    type="number"
                    placeholder={c.label === 'Driver pay (per mile)' ? '0.45' : '0.00'}
                    value={c.amount}
                    onChange={e => updateVariable(i, 'amount', e.target.value)}
                  />
                </div>
              ))}
              <p className="text-xs text-muted-foreground">* Driver pay is entered as $/mile and multiplied by total miles</p>
            </CardContent>
          </Card>

          <Button onClick={calculate} className="w-full" size="lg">Calculate Cost Per Mile</Button>

          {result && (
            <Card className="border-primary/30">
              <CardHeader><CardTitle className="text-base">Your Cost Breakdown</CardTitle></CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Total Fixed Costs</span><span>${result.totalFixed.toFixed(2)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Total Variable Costs</span><span>${result.totalVariable.toFixed(2)}</span></div>
                <Separator />
                <div className="flex justify-between"><span className="text-muted-foreground">Total Monthly Cost</span><span>${result.totalCost.toFixed(2)}</span></div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Cost Per Mile</span>
                  <span className="text-primary">${result.cpm.toFixed(3)}</span>
                </div>
                <p className="text-xs text-muted-foreground pt-1">
                  Any load paying less than <strong>${result.cpm.toFixed(3)}/mile</strong> is losing money before profit.
                </p>
              </CardContent>
            </Card>
          )}

          <CtaBanner message="See your real cost per mile in real time with MissionAssist360 — connected to every load and expense." />

          <Card className="bg-muted/40 border-0">
            <CardContent className="pt-6 text-xs text-muted-foreground leading-relaxed">
              <p><strong>Tip:</strong> A typical owner-operator CPM runs $1.50–$2.50 depending on truck age, insurance, and fuel prices. If your loaded rate minus CPM is negative, you&apos;re subsidizing the broker.</p>
            </CardContent>
          </Card>

        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
