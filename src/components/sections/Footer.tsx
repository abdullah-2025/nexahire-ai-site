export default function Footer() {
  return (
    <footer className="foot">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#top" className="logo">
              <span className="logo-mark">N</span>NexaHire
            </a>
            <p className="mb-6 mt-4 max-w-xs text-[14px] leading-relaxed text-[color:var(--muted-foreground)]">
              AI-powered career readiness platform built for Pakistan&apos;s
              university students and fresh graduates.
            </p>
            <div className="flex gap-3">
              <a href="#" className="soc" aria-label="LinkedIn">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="soc" aria-label="Twitter">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="soc" aria-label="Instagram">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-[11.5px] font-semibold uppercase tracking-[.15em] text-[color:var(--muted-foreground)]">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a className="fl" href="#features">
                  Features
                </a>
              </li>
              <li>
                <a className="fl" href="#pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a className="fl" href="#readiness">
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
                <a className="fl" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="fl" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="fl" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[color:var(--color-teal-800)] pt-7 text-[12.5px] text-[color:var(--muted-foreground)] sm:flex-row">
          <p>© 2026 NexaHire. Built at SZABIST Islamabad.</p>
          <p>Muhammad Abdullah Khan • Ali Hassan Ishaq • Abdul Moiz</p>
        </div>
        <div className="giant" aria-hidden="true">
          NexaHire
        </div>
      </div>
    </footer>
  )
}
