import Link from 'next/link'
import BrandLogo from '../BrandLogo'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="logo" aria-label="NexaHire home">
              <BrandLogo variant="footer" />
            </Link>
            <p className="mb-6 mt-4 max-w-xs text-[14px] leading-relaxed text-[color:var(--muted-foreground)]">
              AI-powered career readiness platform built for Pakistan&apos;s
              university students and fresh graduates.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-[11.5px] font-semibold uppercase tracking-[.15em] text-[color:var(--muted-foreground)]">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a className="fl" href="/#features">
                  Features
                </a>
              </li>
              <li>
                <a className="fl" href="/#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="fl" href="/#readiness">
                  Readiness Score
                </a>
              </li>
              <li>
                <a className="fl" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[11.5px] font-semibold uppercase tracking-[.15em] text-[color:var(--muted-foreground)]">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a className="fl" href="#">
                  Career Guide
                </a>
              </li>
              <li>
                <a className="fl" href="#">
                  CV Templates
                </a>
              </li>
              <li>
                <a className="fl" href="#">
                  Interview Tips
                </a>
              </li>
              <li>
                <a className="fl" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[11.5px] font-semibold uppercase tracking-[.15em] text-[color:var(--muted-foreground)]">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  className="fl"
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="fl"
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="fl"
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--color-teal-800)] pt-7 text-[12.5px] text-[color:var(--muted-foreground)] sm:flex-row">
          <p>© 2026 NexaHire. Built at SZABIST Islamabad.</p>
          <p>All rights reserved.</p>
        </div>
        <div className="giant" aria-hidden="true">
          NexaHire
        </div>
      </div>
    </footer>
  )
}
