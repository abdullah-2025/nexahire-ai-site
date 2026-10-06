'use client'

import { useEffect, useState, type ReactNode } from 'react'
import CursorRingField from './CursorRingField'
import Navigation from './Navigation'
import AnimatedNumber from './AnimatedNumber'
import { Icon } from './HeroIcon'
import { icons } from '@/data/hero-icons'
import { authLinks } from '@/data/auth-links'

function FloatingCard({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      className={`floating-card ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
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
        background="#fafbff"
        colors={['#c7c9ff', '#ddd9ff', '#cceaff', '#fafbff']}
        dotSize={300}
        speed={30}
        density={160}
        cameraDistance={170}
        ring={{ push: 55, width: 10, radius: 14, turbulence: 90 }}
        style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.45 }}
      />

      {/* Gradient overlays for depth */}
      <div className="hero__gradient-top" />
      <div className="hero__gradient-bottom" />

      <Navigation />

      <div
        className={`hero__content ${loaded ? 'hero__content--visible' : ''}`}
      >
        {/* Badge */}
        <div className="hero__badge">
          <Icon d={icons.sparkles} size={14} className="hero__badge-icon" />
          <span>AI-Powered Career Platform</span>
        </div>

        {/* Headline */}
        <h1 className="hero__headline">
          <span className="hero__headline-line1">Your next career move,</span>
          <span className="hero__headline-line2">powered by intelligence.</span>
        </h1>

        {/* Subheading */}
        <p className="hero__sub">
          CV analysis, skill-gap mapping, career roadmaps, and AI mock
          interviews&thinsp;—&thinsp;finally connected in one platform. Built
          for Pakistan's graduates who refuse to wait.
        </p>

        {/* CTAs */}
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

        {/* Social proof */}
        <div className="hero__proof">
          <div className="hero__avatars">
            <span
              className="hero__avatar"
              style={{
                background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              }}
            >
              SA
            </span>
            <span
              className="hero__avatar"
              style={{
                background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
              }}
            >
              MK
            </span>
            <span
              className="hero__avatar"
              style={{
                background: 'linear-gradient(135deg, #f472b6, #ec4899)',
              }}
            >
              ZA
            </span>
            <span
              className="hero__avatar"
              style={{
                background: 'linear-gradient(135deg, #34d399, #10b981)',
              }}
            >
              AH
            </span>
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

      {/* Floating accent cards */}
      <div
        className={`hero__floaters ${loaded ? 'hero__floaters--visible' : ''}`}
      >
        <FloatingCard className="floater--left-1" delay={0.8}>
          <div className="fc__icon fc__icon--indigo">
            <Icon d={icons.fileText} size={16} />
          </div>
          <div className="fc__body">
            <div className="fc__label">CV Quality</div>
            <div className="fc__value">92%</div>
          </div>
          <div className="fc__bar">
            <div
              className="fc__bar-fill"
              style={{
                width: '92%',
                background: 'linear-gradient(90deg, #6366f1, #818cf8)',
              }}
            />
          </div>
        </FloatingCard>

        <FloatingCard className="floater--right-1" delay={1.1}>
          <div className="fc__icon fc__icon--emerald">
            <Icon d={icons.check} size={16} />
          </div>
          <div className="fc__body">
            <div className="fc__label">Interview Ready</div>
            <div className="fc__value fc__value--green">89%</div>
          </div>
        </FloatingCard>

        <FloatingCard className="floater--left-2" delay={1.4}>
          <div className="fc__icon fc__icon--sky">
            <Icon d={icons.radar} size={16} />
          </div>
          <div className="fc__body">
            <div className="fc__label">Role Match</div>
            <div className="fc__value fc__value--sky">94%</div>
          </div>
        </FloatingCard>

        <FloatingCard className="floater--right-2" delay={1.7}>
          <div className="fc__icon fc__icon--amber">
            <Icon d={icons.route} size={16} />
          </div>
          <div className="fc__body">
            <div className="fc__label">Career Path</div>
            <div className="fc__value fc__value--amber">4 milestones</div>
          </div>
        </FloatingCard>
      </div>
    </section>
  )
}
