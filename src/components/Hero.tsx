'use client'

import { useEffect, useState, type CSSProperties } from 'react'
import CursorRingField from './CursorRingField'
import Navigation from './Navigation'
import AnimatedNumber from './AnimatedNumber'
import { Icon } from './HeroIcon'
import SiteIcon from './SiteIcon'
import { icons } from '@/data/hero-icons'
import { authLinks } from '@/data/auth-links'

function ProductPreview() {
  return (
    <div
      className="hero-preview"
      role="img"
      aria-label="NexaHire career dashboard showing a readiness score, role match, progress, and recommended next steps"
    >
      <div className="hero-preview__bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <div className="hero-preview__address">app.nexahire.ai/dashboard</div>
        <div className="hero-preview__live">
          <i /> Live
        </div>
      </div>

      <div className="hero-preview__body">
        <aside className="hero-preview__sidebar" aria-hidden="true">
          <div className="hero-preview__brand">N</div>
          <SiteIcon name="layout-dashboard" />
          <SiteIcon name="file-text" />
          <SiteIcon name="target" />
          <SiteIcon name="mic" />
          <SiteIcon name="briefcase" />
        </aside>

        <div className="hero-preview__main">
          <div className="hero-preview__heading">
            <div>
              <span>CAREER COMMAND CENTER</span>
              <strong>Good morning, Ayesha</strong>
            </div>
            <div className="hero-preview__profile">AK</div>
          </div>

          <div className="hero-preview__metrics">
            <div>
              <span>Readiness</span>
              <strong>78</strong>
              <small>+6 this month</small>
            </div>
            <div>
              <span>Role match</span>
              <strong>94%</strong>
              <small>Frontend Engineer</small>
            </div>
            <div>
              <span>Practice</span>
              <strong>6</strong>
              <small>Interview sessions</small>
            </div>
          </div>

          <div className="hero-preview__grid">
            <div className="hero-preview__readiness">
              <div className="hero-preview__card-title">
                <div>
                  <strong>Career readiness</strong>
                  <span>Updated from every module</span>
                </div>
                <SiteIcon name="gauge" />
              </div>
              <div className="hero-preview__score-row">
                <div className="hero-preview__score">
                  <span>78</span>
                  <small>/100</small>
                </div>
                <div className="hero-preview__progress">
                  <div>
                    <span>CV quality</span>
                    <b>85%</b>
                    <i style={{ '--value': '85%' } as CSSProperties} />
                  </div>
                  <div>
                    <span>Skills match</span>
                    <b>72%</b>
                    <i style={{ '--value': '72%' } as CSSProperties} />
                  </div>
                  <div>
                    <span>Interview prep</span>
                    <b>64%</b>
                    <i style={{ '--value': '64%' } as CSSProperties} />
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-preview__next">
              <div className="hero-preview__card-title">
                <div>
                  <strong>Next best actions</strong>
                  <span>Personalized for your goal</span>
                </div>
                <SiteIcon name="sparkles" />
              </div>
              <ul>
                <li>
                  <span>
                    <SiteIcon name="file-check" />
                  </span>
                  <div>
                    <strong>Tailor your CV</strong>
                    <small>8 min</small>
                  </div>
                </li>
                <li>
                  <span>
                    <SiteIcon name="mic" />
                  </span>
                  <div>
                    <strong>Practice interview</strong>
                    <small>15 min</small>
                  </div>
                </li>
                <li>
                  <span>
                    <SiteIcon name="map" />
                  </span>
                  <div>
                    <strong>Continue roadmap</strong>
                    <small>Step 3 of 4</small>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="top" className="hero">
      <CursorRingField
        background="var(--background)"
        colors={[
          'var(--color-teal-100)',
          'var(--color-teal-300)',
          'var(--color-teal-100)',
        ]}
        dotSize={300}
        speed={30}
        density={160}
        cameraDistance={170}
        ring={{ push: 55, width: 10, radius: 14, turbulence: 90 }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      />

      {/* Gradient overlays for depth */}
      <div className="hero__gradient-top" />
      <div className="hero__gradient-bottom" />

      <Navigation />

      <div
        className={`hero__content ${loaded ? 'hero__content--visible' : ''}`}
      >
        <div className="hero__copy">
          <div className="hero__badge">
            <Icon d={icons.sparkles} size={14} className="hero__badge-icon" />
            <span>AI-Powered Career Platform</span>
          </div>

          <h1 className="hero__headline">
            <span className="hero__headline-line1">Your next career move,</span>
            <span className="hero__headline-line2">
              powered by intelligence.
            </span>
          </h1>

          <p className="hero__sub">
            CV analysis, skill-gap mapping, career roadmaps, and AI mock
            interviews&thinsp;—&thinsp;finally connected in one platform. Built
            for Pakistan's graduates who refuse to wait.
          </p>

          <div className="hero__ctas">
            <a href={authLinks.signup} className="hero__btn-primary">
              Start Free
              <span className="hero__btn-arrow">
                <Icon d={icons.arrowUpRight} size={16} />
              </span>
            </a>
            <a href="#how-it-works" className="hero__btn-secondary">
              See How It Works
            </a>
          </div>

          <div className="hero__proof">
            <div className="hero__avatars">
              <span className="hero__avatar hero__avatar--one">SA</span>
              <span className="hero__avatar hero__avatar--two">MK</span>
              <span className="hero__avatar hero__avatar--three">ZA</span>
              <span className="hero__avatar hero__avatar--four">AH</span>
            </div>
            <div className="hero__proof-text">
              <span className="hero__stars">★★★★★</span>
              <span>
                Trusted by{' '}
                <strong>
                  <AnimatedNumber target={2400} suffix="+" />
                </strong>{' '}
                graduates
              </span>
            </div>
          </div>
        </div>
        <ProductPreview />
      </div>
    </section>
  )
}
