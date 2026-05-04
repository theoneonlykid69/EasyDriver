'use client'

import { useState } from 'react'
import { CalcPageLayout } from '@/components/CalcPageLayout'
import { FadeIn } from '@/components/FadeIn'
import { CtaBanner } from '@/components/CtaBanner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Calculator, Plus, Trash2 } from 'lucide-react'

const DIESEL_TAX_RATES: Record<string, number> = {
  AL: 0.290, AK: 0.0895, AZ: 0.260, AR: 0.285, CA: 0.8290, CO: 0.205, CT: 0.4970,
  DE: 0.220, FL: 0.3490, GA: 0.326, ID: 0.320, IL: 0.467, IN: 0.540, IA: 0.3250,
  KS: 0.260, KY: 0.246, LA: 0.200, ME: 0.312, MD: 0.3765, MA: 0.240, MI: 0.276,
  MN: 0.285, MS: 0.180, MO: 0.170, MT: 0.2775, NE: 0.299, NV: 0.280, NH: 0.222,
  NJ: 0.417, NM: 0.228, NY: 0.4435, NC: 0.3860, ND: 0.230, OH: 0.470, OK: 0.200,
  OR: 0.380, PA: 0.747, RI: 0.340, SC: 0.250, SD: 0.280, TN: 0.270, TX: 0.200,
  UT: 0.299, VT: 0.320, VA: 0.2690, WA: 0.4940, WV: 0.358, WI: 0.329, WY: 0.240,
}

interface StateRow {
  state: string
  miles: string
  gallons: string
}

interface ResultRow {
  state: string
  miles: number
  taxRate: number
  taxableGallons: number
  gallonsPurchased: number
  netOwed: number
}

export default function IftaCalculatorPage() {
  const [rows, setRows] = useState<StateRow[]>([
    { state: 'TX', miles: '', gallons: '' },
    { state: 'OK', miles: '', gallons: '' },
  ])
  const [mpg, setMpg] = useState('')
  const [results, setResults] = useState<ResultRow[] | null>(null)

  const addRow = () => setRows(r => [...r, { state: '', miles: '', gallons: '' }])
  const removeRow = (i: number) => setRows(r => r.filter((_, idx) => idx !== i))
  const updateRow = (i: number, field: keyof StateRow, val: string) =>
    setRows(r => r.map((row, idx) => idx === i ? { ...row, [field]: val } : row))

  const calculate = () => {
    const mpgVal = parseFloat(mpg)
    if (!mpgVal || mpgVal <= 0) return

    const totalMiles = rows.reduce((s, r) => s + (parseFloat(r.miles) || 0), 0)
    const totalGallons = rows.reduce((s, r) => s + (parseFloat(r.gallons) || 0), 0)
    if (totalMiles === 0 || totalGallons === 0) return

    const fleetMpg = totalMiles / totalGallons

    const computed: ResultRow[] = rows
      .filter(r => r.state && parseFloat(r.miles) > 0)
      .map(r => {
        const miles = parseFloat(r.miles) || 0
        const gallonsPurchased = parseFloat(r.gallons) || 0
        const taxableGallons = miles / fleetMpg
        const taxRate = DIESEL_TAX_RATES[r.state.toUpperCase()] ?? 0.25
        const netOwed = (taxableGallons - gallonsPurchased) * taxRate
        return { state: r.state.toUpperCase(), miles, taxRate, taxableGallons, gallonsPurchased, netOwed }
      })

    setResults(computed)
  }

  const totalOwed = results?.reduce((s, r) => s + r.netOwed, 0) ?? 0

  return (
    <CalcPageLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl space-y-8">

          <FadeIn>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">IFTA Fuel Tax Calculator</h1>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Calculate your quarterly IFTA fuel tax owed or refund per state. Enter miles driven
              and gallons purchased in each jurisdiction along with your fleet average MPG.
            </p>
          </div>
          </FadeIn>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Fleet Average MPG</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 max-w-xs">
                <Label htmlFor="mpg" className="shrink-0 w-28">Average MPG</Label>
                <Input
                  id="mpg"
                  type="number"
                  placeholder="6.5"
                  value={mpg}
                  onChange={e => setMpg(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">Miles & Gallons by State</CardTitle>
                <Button size="sm" variant="outline" onClick={addRow}>
                  <Plus className="h-4 w-4 mr-1" /> Add State
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-[2fr_2fr_2fr_auto] gap-2 text-xs font-medium text-muted-foreground px-1">
                <span>State</span><span>Miles Driven</span><span>Gallons Purchased</span><span />
              </div>
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-[2fr_2fr_2fr_auto] gap-2 items-center">
                  <Input
                    placeholder="TX"
                    value={row.state}
                    onChange={e => updateRow(i, 'state', e.target.value.toUpperCase())}
                    maxLength={2}
                  />
                  <Input
                    type="number"
                    placeholder="1200"
                    value={row.miles}
                    onChange={e => updateRow(i, 'miles', e.target.value)}
                  />
                  <Input
                    type="number"
                    placeholder="180"
                    value={row.gallons}
                    onChange={e => updateRow(i, 'gallons', e.target.value)}
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeRow(i)}
                    disabled={rows.length <= 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Button onClick={calculate} className="w-full" size="lg">
            Calculate IFTA Tax
          </Button>

          {results && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Quarterly Results</CardTitle>
                  <Badge variant={totalOwed > 0 ? 'destructive' : 'default'}>
                    {totalOwed > 0
                      ? `Owe $${totalOwed.toFixed(2)}`
                      : `Refund $${Math.abs(totalOwed).toFixed(2)}`}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {results.map((r) => (
                    <div key={r.state}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">{r.state}</span>
                        <span className={r.netOwed > 0 ? 'text-destructive font-medium' : 'text-primary font-medium'}>
                          {r.netOwed > 0 ? `Owe $${r.netOwed.toFixed(2)}` : `Refund $${Math.abs(r.netOwed).toFixed(2)}`}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 grid grid-cols-3 gap-2">
                        <span>Taxable: {r.taxableGallons.toFixed(1)} gal</span>
                        <span>Purchased: {r.gallonsPurchased.toFixed(1)} gal</span>
                        <span>Rate: ${r.taxRate.toFixed(4)}/gal</span>
                      </div>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                  <div className="flex items-center justify-between font-bold pt-1">
                    <span>Net Total</span>
                    <span className={totalOwed > 0 ? 'text-destructive' : 'text-primary'}>
                      {totalOwed > 0 ? `Owe $${totalOwed.toFixed(2)}` : `Refund $${Math.abs(totalOwed).toFixed(2)}`}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <CtaBanner message="Track IFTA automatically in MissionAssist360 — no spreadsheets, no manual entries." />

          <Card className="bg-muted/40 border-0">
            <CardContent className="pt-6 text-xs text-muted-foreground space-y-2 leading-relaxed">
              <p><strong>How IFTA works:</strong> You report total miles driven and total gallons purchased in all IFTA jurisdictions. A &quot;fleet MPG&quot; is calculated, then each state determines how many gallons were &quot;taxable&quot; based on miles driven there. If you purchased more than you taxed in a state you get a refund; if less, you owe.</p>
              <p><strong>Disclaimer:</strong> Tax rates are approximate and change quarterly. Always verify with official IFTA publications. This calculator is for estimation only.</p>
            </CardContent>
          </Card>

        </div>
      </div>
    </CalcPageLayout>
  )
}
