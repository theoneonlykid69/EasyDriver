import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import Script from "next/script"
import { Providers } from "@/components/Providers"
import { CookieBanner } from "@/components/CookieBanner"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Free Trucking Calculators | EasyDriver",
  description:
    "Free trucking calculators for IFTA fuel tax, cost per mile, load profit, per diem, and fuel surcharge. No sign-up required. Built for truckers.",
  keywords: [
    "IFTA calculator",
    "cost per mile calculator",
    "load profit calculator",
    "trucker per diem",
    "fuel surcharge calculator",
    "free trucking tools",
  ],
  other: {
    "google-adsense-account": "ca-pub-7243353622393380",
  },
  openGraph: {
    title: "Free Trucking Calculators | EasyDriver",
    description:
      "IFTA, cost per mile, load profit, per diem, and fuel surcharge — all free, no sign-up.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Providers>
          {children}
          <CookieBanner />
        </Providers>
      </body>

      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7243353622393380"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </html>
  )
}
