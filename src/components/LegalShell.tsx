import Link from 'next/link'
import type { ReactNode } from 'react'
import BrandLogo from './BrandLogo'
import SiteIcon, { type IconName } from './SiteIcon'
import Footer from './sections/Footer'

/** Shared layout for Privacy, Terms and Contact: hero-gradient header band, light reading area. */
export default function LegalShell({
  badge,
  icon,
  title,
  intro,
  children,
}: {
  badge: string
  icon: IconName
  title: string
  intro: ReactNode
  children: ReactNode
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="legal-band on-dark">
        <div className="legal-top">
          <div className="container-x legal-top__inner">
            <Link href="/" aria-label="NexaHire home">
              <BrandLogo variant="light" />
            </Link>
            <Link href="/" className="back">
              <SiteIcon name="arrow-left" size={16} />
              Back to home
            </Link>
          </div>
        </div>
        <div className="container-x legal-band__head">
          <span className="legal-band__badge">
            <SiteIcon name={icon} size={14} />
            {badge}
          </span>
          <h1>{title}</h1>
          <p className="legal-band__intro">{intro}</p>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="legal-main">
        {children}
      </main>
      <Footer />
    </>
  )
}
