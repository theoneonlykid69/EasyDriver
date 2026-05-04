'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { CtaBanner } from '@/components/CtaBanner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Calendar } from 'lucide-react'

// IRS per diem rates for transportation workers (DOT)
// 80% deductibility for transportation workers
const PER_DIEM_RATES: Record<string, number> = {
  '2024': 69,
  '2025': 80,
  '2026': 80,
}

const DEDUCTIBILITY = 0.8
const TAX_RATES = [
  { label: '10%', value: 0.10 },
  { label: '12%', value: 0.12 },
  { label: '22%', value: 0.22 },
  { label: '24%', value: 0.24 },
  { label: '32%', value: 0.32 },
]

export default function PerDiemPage() {
  const [days, setDays] = useState('')
  const [year, setYear] = useState('2026')
  const [taxRate, setTaxRate] = useState('0.22')

  const [result, setResult] = useState<{
    dailyRate: number
    grossDeduction: number
    deductibleAmount: number
    taxSavings: number
  } | null>(null)

  const calculate = () => {
    const daysVal = parseInt(days) || 0
    if (daysVal <= 0) return

    const dailyRate = PER_DIEM_RATES[year] ?? 80
    const grossDeduction = daysVal * dailyRate
    const deductibleAmount = grossDeduction * DEDUCTIBILITY
    const taxSavings = deductibleAmount * parseFloat(taxRate)

    setResult({ dailyRate, grossDeduction, deductibleAmount, taxSavings })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-8">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">Per Diem Calculator</h1>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Calculate your IRS per diem tax deduction for time spent away from home on the road.
              DOT transportation workers can deduct 80% of the standard meal & incidentals rate.
            </p>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-base">Your Information</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="days">Days Away From Home</Label>
                <Input id="days" type="number" placeholder="200" value={days} onChange={e => setDays(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label>Tax Year</Label>
                <Select value={year} onValueChange={(v) => v && setYear(v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2026">2026</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label>Your Tax Bracket</Label>
                <Select value={taxRate} onValueChange={(v) => v && setTaxRate(v)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {TAX_RATES.map(r => (
                      <SelectItem key={r.value} value={String(r.value)}>{r.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Button onClick={calculate} className="w-full" size="lg">Calculate Per Diem</Button>

          {result && (
            <Card className="border-primary/30">
              <CardHeader><CardTitle className="text-base">Per Diem Deduction Summary</CardTitle></CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">IRS Daily Rate ({year})</span><span>${result.dailyRate}/day</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Days on the Road</span><span>{days}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Gross Per Diem</span><span>${result.grossDeduction.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">DOT Deductibility (80%)</span><span>×{DEDUCTIBILITY}</span></div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Deductible Amount</span>
                  <span>${result.deductibleAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Estimated Tax Savings</span>
                  <span className="text-primary">${result.taxSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                </div>
              </CardContent>
            </Card>
          )}

          <CtaBanner message="MissionAssist360 tracks your per diem days automatically — just drive, we count the days." />

          <Card className="bg-muted/40 border-0">
            <CardContent className="pt-6 text-xs text-muted-foreground space-y-2 leading-relaxed">
              <p><strong>DOT Per Diem Rule:</strong> Under IRC §274(n), transportation workers subject to DOT hours-of-service regulations can deduct 80% (vs. the standard 50%) of the IRS meal & incidental expense rate for days away from home.</p>
              <p><strong>Disclaimer:</strong> IRS rates are updated annually. This calculator uses the Special Meals and Incidental Expenses (M&amp;IE) rate for transportation workers. Consult a tax professional before filing. Rates shown are for Continental US travel.</p>
            </CardContent>
          </Card>

        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
