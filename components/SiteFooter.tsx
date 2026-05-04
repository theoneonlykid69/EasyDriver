import Link from 'next/link'

const SITE_NAME = 'EasyDriver'

export function SiteFooter() {
  return (
    <footer className="border-t px-6 py-6 text-center text-sm text-muted-foreground">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="hover:text-foreground transition-colors font-medium">{SITE_NAME}</Link>
        <span>·</span>
        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        <span>·</span>
        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
        <span>·</span>
        <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        <span>·</span>
        <Link
          href="https://freecvcraft.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          Free Cover Letter Generator
        </Link>
      </div>
    </footer>
  )
}
