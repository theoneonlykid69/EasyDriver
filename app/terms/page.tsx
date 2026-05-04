import Link from "next/link"
import { ArrowLeft, Truck } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { SiteFooter } from "@/components/SiteFooter"

const LAST_UPDATED = "May 4, 2026"
const SITE_NAME = "EasyDriver"
const SITE_DOMAIN = "easydrivertools.com"
const CONTACT_EMAIL = `legal@${SITE_DOMAIN}`

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
            <Truck className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-bold text-base tracking-tight">{SITE_NAME}</span>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-1 px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Terms of Use</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/80">

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing or using {SITE_NAME} (&quot;the Service&quot;) at {SITE_DOMAIN}, you agree to
                be bound by these Terms of Use. If you do not agree, please do not use the Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">2. Description of Service</h2>
              <p>
                {SITE_NAME} provides free trucking calculators including IFTA fuel tax, cost per mile,
                load profit, per diem, and fuel surcharge calculators. All calculations are performed in
                your browser. The Service is offered at no charge and requires no account registration.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">3. Acceptable Use</h2>
              <p>You agree to use the Service only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Use the Service to generate fraudulent or misleading data</li>
                <li>Attempt to reverse-engineer, scrape, or disrupt the Service&apos;s infrastructure</li>
                <li>Resell or commercially exploit access to the Service without written permission</li>
                <li>Use the Service in any way that violates applicable laws or regulations</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">4. Disclaimer of Warranties</h2>
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
                Calculator results are estimates only and should not be used as the sole basis for tax
                filings, financial decisions, or legal compliance. Always verify results with a qualified
                accountant or tax professional.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">5. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {SITE_NAME} and its operators shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages arising
                from your use of or reliance on calculator results. Our total liability for any claim shall
                not exceed the amount you paid for the Service (which is zero, as the Service is free).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">6. Third-Party Services and Ads</h2>
              <p>
                The Service displays advertisements served by Google AdSense. We are not responsible for
                the content or privacy practices of third-party advertisers. Links to third-party sites
                (including MissionAssist360) are provided for convenience; we do not endorse or guarantee
                those services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">7. Modifications to the Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the Service at any time without
                notice. We may also update these Terms of Use at any time. Continued use after changes
                are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the United
                States. Any disputes shall be resolved in the applicable courts of competent jurisdiction.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">9. Contact</h2>
              <p>
                For questions regarding these Terms, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </section>

          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
