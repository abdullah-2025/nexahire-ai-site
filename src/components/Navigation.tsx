'use client'

import { useEffect, useState } from 'react'
import BrandLogo from './BrandLogo'
import SiteIcon from './SiteIcon'
import { authLinks } from '@/data/auth-links'

const links = [
  { href: '#interviews', label: 'Interviews' },
  { href: '#jobs', label: 'Jobs' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock page scroll and close on Escape while the mobile drawer is open.
  useEffect(() => {
    if (!menuOpen) return
    const root = document.documentElement
    const previous = root.style.overflow
    root.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      root.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      {menuOpen && <div className="nav__overlay" onClick={close} aria-hidden="true" />}

      <nav
        className={`nav${scrolled ? ' nav--scrolled' : ''}${menuOpen ? ' nav--open' : ''}`}
        aria-label="Main"
      >
        <div className="nav__inner">
          <a href="#top" className="nav__logo" aria-label="NexaHire home">
            <BrandLogo />
          </a>

          <div className="nav__links">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="nav__actions">
            <a href={authLinks.login} className="nav__signin">
              Sign in
            </a>
            <a href={authLinks.signup} className="btn nav__cta">
              Start free
              <SiteIcon name="arrow-up-right" size={16} />
            </a>
          </div>

          <button
            type="button"
            className="nav__burger"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <SiteIcon name={menuOpen ? 'x' : 'menu'} size={20} />
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-navigation" className="nav__drawer">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
            <div className="nav__drawer-actions">
              <a href={authLinks.login} className="btn btn--secondary btn--block" onClick={close}>
                Sign in
              </a>
              <a href={authLinks.signup} className="btn btn--primary btn--block" onClick={close}>
                Start free
                <SiteIcon name="arrow-up-right" size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
