import AnimatedNumber from './AnimatedNumber'
import InterviewGlobe from './InterviewGlobe'
import Navigation from './Navigation'
import { Icon } from './HeroIcon'
import { authLinks } from '@/data/auth-links'
import { icons } from '@/data/hero-icons'

export default function Hero() {
  return (
    <section id="top" className="hero hero24">
      <Navigation />

      <div className="hero24__backdrop" aria-hidden="true">
        <span className="hero24__glow hero24__glow--left" />
        <span className="hero24__glow hero24__glow--right" />
        <span className="hero24__grid" />
      </div>

      <div className="hero24__inner">
        <div className="hero24__copy">
          <div className="hero24__eyebrow">
            <span className="hero24__status-dot" />
            AI practice + live employer interviews
          </div>

          <h1 className="hero24__headline">
            Practice with AI.
            <span>Interview live. Get hired.</span>
          </h1>

          <p className="hero24__subheading">
            Build confidence with role-specific AI mock interviews, then move
            seamlessly into live interviews with real employers—all in one
            intelligent hiring platform.
          </p>

          <div className="hero24__actions">
            <a
              href={authLinks.signup}
              className="hero24__button hero24__button--primary"
            >
              Start interviewing free
              <span>
                <Icon d={icons.arrowUpRight} size={15} />
              </span>
            </a>
            <a
              href="#how-it-works"
              className="hero24__button hero24__button--secondary"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="hero24__visual" aria-label="NexaHire interview network">
          <div className="hero24__globe-wrap">
            <InterviewGlobe />
          </div>

          <div className="hero24__reach hero24__reach--left" aria-hidden="true">
            <span />
            <i />
          </div>
          <div className="hero24__reach hero24__reach--right" aria-hidden="true">
            <span />
            <i />
          </div>

          <div className="hero24__card hero24__card--coach">
            <div className="hero24__card-icon">
              <Icon d={icons.sparkles} size={15} />
            </div>
            <div>
              <span>AI interview coach</span>
              <strong>Response clarity 94%</strong>
            </div>
          </div>

          <div className="hero24__card hero24__card--live">
            <div className="hero24__live-topline">
              <span>
                <i /> Live interview
              </span>
              <small>18:42</small>
            </div>
            <div className="hero24__employer">
              <span>HM</span>
              <div>
                <strong>Hiring manager joined</strong>
                <small>Frontend Engineer interview</small>
              </div>
            </div>
          </div>

          <div className="hero24__proof">
            <div className="hero24__avatars" aria-hidden="true">
              <span>SA</span>
              <span>MK</span>
              <span>ZA</span>
            </div>
            <p>
              Trusted by{' '}
              <strong>
                <AnimatedNumber target={2400} suffix="+" />
              </strong>{' '}
              graduates
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
