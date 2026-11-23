import Link from 'next/link'
import BrandLogo from '../BrandLogo'
import { authLinks } from '@/data/auth-links'

/* Shared by the home page and the legal pages, so section links are absolute. */
const columns = [
  {
    title: 'Product',
    links: [
      { href: '/#interviews', label: 'Mock interviews' },
      { href: '/#jobs', label: 'Jobs' },
      { href: '/#toolkit', label: 'Toolkit' },
      { href: '/#pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Account',
    links: [
      { href: authLinks.signup, label: 'Create account' },
      { href: authLinks.login, label: 'Sign in' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="foot on-dark">
      <div className="container-x">
        <div className="foot__grid">
          <div className="foot__brand">
            <Link href="/" aria-label="NexaHire home">
              <BrandLogo variant="light" />
            </Link>
            <p>
              AI-powered job &amp; interview platform for Pakistan&apos;s university
              students and fresh graduates.
            </p>
          </div>
          <div className="foot__cols">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('/') ? (
                        <Link href={link.href}>{link.label}</Link>
                      ) : (
                        <a href={link.href}>{link.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="foot__bar">
          <span>© 2026 NexaHire. All rights reserved.</span>
        </div>
      </div>
      <p className="foot__giant" aria-hidden="true">
        Nexa<span>Hire</span>
      </p>
    </footer>
  )
}
