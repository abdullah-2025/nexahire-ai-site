'use client'

import { useEffect, useState } from 'react'
import { Icon } from './HeroIcon'
import BrandLogo from './BrandLogo'
import { icons } from '@/data/hero-icons'
import { authLinks } from '@/data/auth-links'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#" className="nav__logo" aria-label="NexaHire home">
          <BrandLogo />
        </a>

        {/* Center Pill Capsule for Links */}
        <div className="nav__links-capsule">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#readiness">Readiness Score</a>
          <a href="#testimonials">Stories</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>

        {/* Right Actions */}
        <div className="nav__actions">
          <a href={authLinks.login} className="nav__signin">
            Sign In
          </a>
          <a href={authLinks.signup} className="nav__cta">
            <span className="nav__cta-text">Get Started Free</span>
            <span className="nav__cta-arrow">
              <Icon d={icons.arrowUpRight} size={13} />
            </span>
          </a>
        </div>

        <button
          className="nav__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <Icon d={menuOpen ? icons.x : icons.menu} size={20} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div className="nav__mobile-wrapper">
        <div
          id="mobile-navigation"
          className={`nav__mobile ${menuOpen ? 'nav__mobile--open' : ''}`}
        >
          <a href="#features" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#readiness" onClick={() => setMenuOpen(false)}>
            Readiness Score
          </a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>
            Stories
          </a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
          <div className="nav__mobile-actions">
            <a
              href={authLinks.login}
              className="nav__signin"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </a>
            <a
              href={authLinks.signup}
              className="nav__cta nav__cta--full"
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav__cta-text">Get Started Free</span>
              <span className="nav__cta-arrow">
                <Icon d={icons.arrowUpRight} size={13} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
