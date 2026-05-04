'use client'

import { useState } from 'react'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { CtaBanner } from '@/components/CtaBanner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { TrendingUp } from 'lucide-react'

export default function LoadProfitPage() {
  const [loadRate, setLoadRate] = useState('')
  const [miles, setMiles] = useState('')
  const [fuelCostPerGallon, setFuelCostPerGallon] = useState('')
  const [mpg, setMpg] = useState('')
  const [tolls, setTolls] = useState('')
  const [brokerFeePercent, setBrokerFeePercent] = useState('')
  const [driverPayPerMile, setDriverPayPerMile] = useState('')

  const [result, setResult] = useState<{
    grossPay: number
    fuelCost: number
    tollsCost: number
    brokerFee: number
    driverPay: number
    netProfit: number
    profitPerMile: number
  } | null>(null)

  const calculate = () => {
    const rateVal = parseFloat(loadRate) || 0
    const milesVal = parseFloat(miles) || 0
    const fuelPerGal = parseFloat(fuelCostPerGallon) || 0
    const mpgVal = parseFloat(mpg) || 6.5
    const tollsVal = parseFloat(tolls) || 0
    const brokerPct = parseFloat(brokerFeePercent) || 0
    const driverPpm = parseFloat(driverPayPerMile) || 0

    if (rateVal <= 0 || milesVal <= 0) return

    const fuelCost = (milesVal / mpgVal) * fuelPerGal
    const brokerFee = rateVal * (brokerPct / 100)
    const grossPay = rateVal - brokerFee
    const driverPay = driverPpm * milesVal
    const netProfit = grossPay - fuelCost - tollsVal - driverPay
    const profitPerMile = netProfit / milesVal

    setResult({ grossPay, fuelCost, tollsCost: tollsVal, brokerFee, driverPay, netProfit, profitPerMile })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 px-4 py-10">
        <div className="max-w-3xl mx-auto space-y-8">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">Load Profit Calculator</h1>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Calculate your true net profit on any load after fuel, tolls, broker fees, and driver pay.
              Know before you book whether a load is worth taking.
            </p>
          </div>

          <Card>
            <CardHeader><CardTitle className="text-base">Load Details</CardTitle></CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="loadRate">Load Rate ($)</Label>
                <Input id="loadRate" type="number" placeholder="2500.00" value={loadRate} onChange={e => setLoadRate(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="miles">Total Miles</Label>
                <Input id="miles" type="number" placeholder="800" value={miles} onChange={e => setMiles(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="mpg">Truck MPG</Label>
                <Input id="mpg" type="number" placeholder="6.5" value={mpg} onChange={e => setMpg(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="fuelPerGal">Fuel Cost ($/gal)</Label>
                <Input id="fuelPerGal" type="number" placeholder="3.85" value={fuelCostPerGallon} onChange={e => setFuelCostPerGallon(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="tolls">Tolls ($)</Label>
                <Input id="tolls" type="number" placeholder="0.00" value={tolls} onChange={e => setTolls(e.target.value)} />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="brokerFee">Broker Fee (%)</Label>
                <Input id="brokerFee" type="number" placeholder="10" value={brokerFeePercent} onChange={e => setBrokerFeePercent(e.target.value)} />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="driverPay">Driver Pay ($/mile) — leave blank if owner-operator</Label>
                <Input id="driverPay" type="number" placeholder="0.45" value={driverPayPerMile} onChange={e => setDriverPayPerMile(e.target.value)} />
              </div>
            </CardContent>
          </Card>

          <Button onClick={calculate} className="w-full" size="lg">Calculate Load Profit</Button>

          {result && (
            <Card className={result.netProfit >= 0 ? 'border-primary/30' : 'border-destructive/30'}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Profit Breakdown</CardTitle>
                  <Badge variant={result.netProfit >= 0 ? 'default' : 'destructive'}>
                    {result.netProfit >= 0 ? 'Profitable' : 'Loss'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Gross Load Rate</span><span>${(parseFloat(loadRate) || 0).toFixed(2)}</span></div>
                {result.brokerFee > 0 && <div className="flex justify-between text-destructive/80"><span>Broker Fee</span><span>−${result.brokerFee.toFixed(2)}</span></div>}
                <div className="flex justify-between"><span className="text-muted-foreground">Gross Pay (after broker)</span><span>${result.grossPay.toFixed(2)}</span></div>
                <Separator />
                <div className="flex justify-between text-destructive/80"><span>Fuel Cost</span><span>−${result.fuelCost.toFixed(2)}</span></div>
                {result.tollsCost > 0 && <div className="flex justify-between text-destructive/80"><span>Tolls</span><span>−${result.tollsCost.toFixed(2)}</span></div>}
                {result.driverPay > 0 && <div className="flex justify-between text-destructive/80"><span>Driver Pay</span><span>−${result.driverPay.toFixed(2)}</span></div>}
                <Separator />
                <div className="flex justify-between text-base font-bold">
                  <span>Net Profit</span>
                  <span className={result.netProfit >= 0 ? 'text-primary' : 'text-destructive'}>
                    ${result.netProfit.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold">
                  <span>Profit Per Mile</span>
                  <span className={result.profitPerMile >= 0 ? 'text-primary' : 'text-destructive'}>
                    ${result.profitPerMile.toFixed(3)}/mi
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          <CtaBanner message="Log every load automatically in MissionAssist360 — profit tracking, invoicing, and dispatch in one place." />

          <Card className="bg-muted/40 border-0">
            <CardContent className="pt-6 text-xs text-muted-foreground leading-relaxed">
              <p><strong>Rule of thumb:</strong> A healthy load should net at least $0.50–$1.00/mile after all expenses. Anything below your cost per mile is a loss leader — only accept it if it positions you for a better backhaul.</p>
            </CardContent>
          </Card>

        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
