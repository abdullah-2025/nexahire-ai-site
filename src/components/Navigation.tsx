'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { Icon } from './HeroIcon'
import BrandLogo from './BrandLogo'
import { icons } from '@/data/hero-icons'
import { authLinks } from '@/data/auth-links'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [portalReady, setPortalReady] = useState(false)
  const pathname = usePathname()
  const pathnameRef = useRef(pathname)
  pathnameRef.current = pathname

  useEffect(() => {
    setPortalReady(true)
  }, [])

  useLayoutEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Freeze the body in place so opening the drawer preserves the current scroll position.
  useLayoutEffect(() => {
    if (!menuOpen) return

    const root = document.documentElement
    const body = document.body
    const scrollX = window.scrollX
    const scrollY = window.scrollY
    const scrollbarWidth = window.innerWidth - root.clientWidth
    const lockedPathname = pathnameRef.current
    const previousStyles = {
      rootOverflow: root.style.overflow,
      rootTouchAction: root.style.touchAction,
      rootOverscrollBehavior: root.style.overscrollBehavior,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyWidth: body.style.width,
      bodyPaddingRight: body.style.paddingRight,
      bodyOverflow: body.style.overflow,
      bodyTouchAction: body.style.touchAction,
      bodyOverscrollBehavior: body.style.overscrollBehavior,
    }

    root.style.overflow = 'hidden'
    root.style.touchAction = 'none'
    root.style.overscrollBehavior = 'none'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.left = `-${scrollX}px`
    body.style.width = '100%'
    if (scrollbarWidth > 0) {
      body.style.paddingRight = `calc(${window.getComputedStyle(body).paddingRight} + ${scrollbarWidth}px)`
    }
    body.style.overflow = 'hidden'
    body.style.touchAction = 'none'
    body.style.overscrollBehavior = 'none'

    return () => {
      root.style.overflow = previousStyles.rootOverflow
      root.style.touchAction = previousStyles.rootTouchAction
      root.style.overscrollBehavior = previousStyles.rootOverscrollBehavior
      body.style.position = previousStyles.bodyPosition
      body.style.top = previousStyles.bodyTop
      body.style.left = previousStyles.bodyLeft
      body.style.width = previousStyles.bodyWidth
      body.style.paddingRight = previousStyles.bodyPaddingRight
      body.style.overflow = previousStyles.bodyOverflow
      body.style.touchAction = previousStyles.bodyTouchAction
      body.style.overscrollBehavior = previousStyles.bodyOverscrollBehavior

      if (pathnameRef.current === lockedPathname) {
        window.scrollTo(scrollX, scrollY)
      }
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  useLayoutEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <nav
        className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--menu-open' : ''}`}
      >
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
      </nav>

      {portalReady && typeof document !== 'undefined' &&
        createPortal(
          <>
            <button
              type="button"
              className={`nav__backdrop ${menuOpen ? 'nav__backdrop--open' : ''}`}
              aria-label="Close navigation menu"
              aria-hidden={!menuOpen}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => setMenuOpen(false)}
            />
            {menuOpen && (
              <div className="nav__mobile-wrapper nav__mobile-portal-wrapper">
                <div
                  id="mobile-navigation"
                  className="nav__mobile nav__mobile--open"
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
            )}
          </>,
          document.body,
        )}
    </>
  )
}
