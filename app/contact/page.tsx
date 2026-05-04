import Link from "next/link"
import { ArrowLeft, Truck, Mail, MessageSquare, Clock } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Card, CardContent } from "@/components/ui/card"
import { SiteFooter } from "@/components/SiteFooter"

const SITE_NAME = "EasyDriver"
const SITE_DOMAIN = "easydrivertools.com"
const SUPPORT_EMAIL = `hello@${SITE_DOMAIN}`

const TOPICS = [
  {
    icon: <MessageSquare className="h-5 w-5 text-primary" />,
    title: "Calculator Questions",
    desc: "Questions about how a calculator works, what inputs to use, or how to interpret results.",
  },
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "Privacy & Data",
    desc: "Concerns about data handling, cookie preferences, or privacy policy questions.",
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    title: "Bug Reports",
    desc: "Found something broken? Let us know and we'll get it fixed quickly.",
  },
]

export default function ContactPage() {
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

      <main className="flex-1 px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Get in Touch</h1>
            <p className="text-muted-foreground leading-relaxed">
              Have a question, found a bug, or want to suggest a new calculator? We&apos;d love to hear
              from you. We&apos;re a small team so replies may take 1–3 business days.
            </p>
          </div>

          <div className="grid gap-4 mb-10">
            {TOPICS.map((t) => (
              <Card key={t.title} className="border-border/60">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    {t.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{t.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="rounded-2xl p-8 text-center"
            style={{
              background: "linear-gradient(135deg, oklch(0.702 0.191 60 / 0.08), oklch(0.65 0.18 45 / 0.08))",
              border: "1px solid oklch(0.702 0.191 60 / 0.2)",
            }}
          >
            <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
            <h2 className="text-lg font-semibold mb-2">Send us an email</h2>
            <p className="text-sm text-muted-foreground mb-4">
              The best way to reach us. We read every message.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 text-primary font-semibold text-base hover:underline underline-offset-4"
            >
              <Mail className="h-4 w-4" />
              {SUPPORT_EMAIL}
            </a>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-6">
            Typical response time: 1–3 business days. For urgent issues, please include
            &quot;URGENT&quot; in your subject line.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
