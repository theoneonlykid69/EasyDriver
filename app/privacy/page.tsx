import Link from "next/link"
import { ArrowLeft, Truck } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { SiteFooter } from "@/components/SiteFooter"

const LAST_UPDATED = "May 4, 2026"
const SITE_NAME = "EasyDriver"
const SITE_DOMAIN = "easydrivertools.com"
const CONTACT_EMAIL = `privacy@${SITE_DOMAIN}`

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Last updated: {LAST_UPDATED}</p>

          <div className="space-y-8 text-sm leading-relaxed text-foreground/80">

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">1. Overview</h2>
              <p>
                {SITE_NAME} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates {SITE_DOMAIN} (the &quot;Service&quot;).
                This Privacy Policy explains what information we collect, how we use it, and your rights
                regarding your data. We are committed to protecting your privacy.
              </p>
              <p>
                <strong>We do not require you to create an account.</strong> No email address, name, or
                personal profile is collected or stored by {SITE_NAME}.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">2. Information We Collect</h2>
              <p>
                All calculations on {SITE_NAME} are performed entirely in your browser. The numbers you
                enter into our calculators are <strong>never sent to our servers</strong> and are not
                stored or logged in any way.
              </p>
              <p>
                We automatically collect standard server log data including your IP address and browser
                type for security purposes. This data is not linked to any personal identity and is not
                shared with third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">3. Cookies and Advertising</h2>
              <p>
                {SITE_NAME} uses <strong>Google AdSense</strong> to display advertisements. Google AdSense
                uses cookies and similar tracking technologies to serve ads based on your prior visits to
                this website and other websites. These cookies are set by Google, not by {SITE_NAME}.
              </p>
              <p>
                You can opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Ad Settings
                </a>{" "}
                or{" "}
                <a
                  href="https://www.aboutads.info"
                  className="text-primary underline underline-offset-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  aboutads.info
                </a>.
              </p>
              <p>
                We also use a strictly necessary cookie to remember your cookie consent preference. No
                other first-party cookies are set.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">4. Third-Party Services</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Google AdSense</strong> — serves advertisements on our site. Google&apos;s
                  privacy policy governs their data practices.
                </li>
                <li>
                  <strong>Vercel</strong> — our hosting provider. Standard server logs may be retained
                  per Vercel&apos;s data retention policies.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">5. Children&apos;s Privacy</h2>
              <p>
                {SITE_NAME} is not directed at children under the age of 13. We do not knowingly collect
                any personal information from children.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">6. Your Rights</h2>
              <p>
                Since all calculator inputs stay in your browser and we collect no personal data,
                most privacy requests are automatically satisfied. For any data inquiries, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
                  {CONTACT_EMAIL}
                </a>.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page
                with an updated &quot;Last updated&quot; date. Continued use of the Service after changes
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-semibold text-foreground">8. Contact Us</h2>
              <p>
                Questions about this Privacy Policy? Contact us at{" "}
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
