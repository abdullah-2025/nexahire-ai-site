'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { Icon } from './HeroIcon'
import BrandLogo from './BrandLogo'
import { icons } from '@/data/hero-icons'
import { authLinks } from '@/data/auth-links'
import useBodyScrollLock from '@/hooks/useBodyScrollLock'

export default function Navigation() {
  const pathname = usePathname()

  return <NavigationContent key={pathname} pathname={pathname} />
}

function NavigationContent({ pathname }: { pathname: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const wasOpen = useRef(false)
  const sectionHref = (section: string) =>
    pathname === '/' ? `#${section}` : `/#${section}`

  useEffect(() => {
    if (menuOpen) {
      menuRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    } else if (wasOpen.current) {
      buttonRef.current?.focus()
    }
    wasOpen.current = menuOpen
  }, [menuOpen])

  useEffect(() => {
    const desktopViewport = window.matchMedia('(min-width: 1024px)')
    const closeOnDesktop = () => {
      if (desktopViewport.matches) setMenuOpen(false)
    }
    desktopViewport.addEventListener('change', closeOnDesktop)
    return () => {
      desktopViewport.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useBodyScrollLock(menuOpen)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div
        className={`nav__overlay${menuOpen ? ' nav__overlay--open' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <nav className="nav">
        <div className="nav__inner">
          <a
            href="#top"
            className="nav__logo"
            aria-label="NexaHire home"
            onClick={closeMenu}
          >
            <BrandLogo />
          </a>

          {/* Center Pill Capsule for Links */}
          <div className="nav__links-capsule">
            <a href={sectionHref('features')}>Features</a>
            <a href={sectionHref('how-it-works')}>How It Works</a>
            <a href={sectionHref('readiness')}>Readiness Score</a>
            <a href={sectionHref('testimonials')}>Stories</a>
            <a href={sectionHref('pricing')}>Pricing</a>
            <a href={sectionHref('faq')}>FAQ</a>
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
            ref={buttonRef}
            className="nav__burger"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <Icon d={menuOpen ? icons.x : icons.menu} size={20} />
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`nav__mobile${menuOpen ? ' nav__mobile--open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <a href={sectionHref('features')} onClick={closeMenu}>
          Features
        </a>
        <a href={sectionHref('how-it-works')} onClick={closeMenu}>
          How It Works
        </a>
        <a href={sectionHref('readiness')} onClick={closeMenu}>
          Readiness Score
        </a>
        <a href={sectionHref('testimonials')} onClick={closeMenu}>
          Stories
        </a>
        <a href={sectionHref('pricing')} onClick={closeMenu}>
          Pricing
        </a>
        <a href={sectionHref('faq')} onClick={closeMenu}>
          FAQ
        </a>
        <div className="nav__mobile-actions">
          <a
            href={authLinks.login}
            className="nav__signin"
            onClick={closeMenu}
          >
            Sign In
          </a>
          <a
            href={authLinks.signup}
            className="nav__cta nav__cta--full"
            onClick={closeMenu}
          >
            <span className="nav__cta-text">Get Started Free</span>
            <span className="nav__cta-arrow">
              <Icon d={icons.arrowUpRight} size={13} />
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
