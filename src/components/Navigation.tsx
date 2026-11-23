'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
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
  const [active, setActive] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)
  const [indicator, setIndicator] = useState<{ x: number; y: number; width: number; height: number } | null>(null)
  const linkRow = useRef<HTMLDivElement>(null)

  // The section crossing the middle of the viewport is the current one.
  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1))
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)
    const inView = new Map<string, boolean>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => inView.set(entry.target.id, entry.isIntersecting))
        const current = ids.find((id) => inView.get(id))
        setActive(current ? `#${current}` : null)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // One pill slides to the hovered link, or rests on the current section.
  const target = hovered ?? active
  const place = useCallback(() => {
    const link = target ? linkRow.current?.querySelector<HTMLElement>(`a[href="${target}"]`) : null
    setIndicator(
      link ? { x: link.offsetLeft, y: link.offsetTop, width: link.offsetWidth, height: link.offsetHeight } : null,
    )
  }, [target])

  useLayoutEffect(() => {
    place()
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [place])

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

          <div ref={linkRow} className="nav__links" onMouseLeave={() => setHovered(null)}>
            <span
              className={`nav__indicator${indicator ? ' is-on' : ''}`}
              aria-hidden="true"
              style={
                indicator
                  ? {
                      transform: `translate(${indicator.x}px, ${indicator.y}px)`,
                      width: indicator.width,
                      height: indicator.height,
                    }
                  : undefined
              }
            />
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-current={active === link.href ? '' : undefined}
                onMouseEnter={() => setHovered(link.href)}
                onFocus={() => setHovered(link.href)}
                onBlur={() => setHovered(null)}
              >
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
