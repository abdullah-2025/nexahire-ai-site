import type { CSSProperties } from 'react'
import FoldText from './FoldText'
import Navigation from './Navigation'
import ScoreRing from './ScoreRing'
import SiteIcon from './SiteIcon'
import { authLinks } from '@/data/auth-links'

/* Bar heights for the voice waveform in the sample interview card. */
const wave = [38, 62, 84, 55, 92, 70, 46, 78, 96, 64, 40, 72, 88, 52, 34, 66, 90, 58, 42, 74, 86, 50, 36, 60]

const competencies = [
  { name: 'Communication', score: 8 },
  { name: 'Problem solving', score: 7 },
  { name: 'Technical depth', score: 8 },
]

export default function Hero() {
  return (
    <section id="top" className="hero on-dark">
      <Navigation />

      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__grid" />
        <span className="hero__glow" />
      </div>

      <div className="hero__inner container-x">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            AI-Powered Job &amp; Interview Platform
          </p>

          <h1 className="hero__title">
            <FoldText
              text="Practice the interview."
              foldStyle="paper"
              splitBy="char"
              hinge="top"
              foldAngle={92}
              duration={0.7}
              stagger={0.035}
              ease="power3.out"
              creaseShading={0.55}
              fontSize="inherit"
              fontWeight="inherit"
            />
            <span className="serif">
              <FoldText
                text="Land the job."
                foldStyle="flip"
                splitBy="char"
                hinge="left"
                duration={0.8}
                stagger={0.05}
                delay={0.65}
                ease="power3.out"
                creaseShading={0.4}
                fontSize="inherit"
                fontWeight="inherit"
              />
            </span>
          </h1>

          <p className="hero__sub">
            <FoldText
              text="Rehearse out loud with an AI interviewer built around your target role, get a scored report after every session, then find matching roles and apply in one click."
              foldStyle="paper"
              splitBy="word"
              hinge="bottom"
              foldAngle={70}
              duration={0.6}
              stagger={0.018}
              delay={1.15}
              ease="power2.out"
              creaseShading={0.3}
              perspective={900}
              fontSize="inherit"
              fontWeight="inherit"
            />
          </p>

          <div className="hero__actions">
            <a href={authLinks.signup} className="btn btn--light">
              Start practicing free
              <SiteIcon name="arrow-up-right" size={17} />
            </a>
            <a href="#how-it-works" className="btn btn--ghost-dark">
              See how it works
            </a>
          </div>

          <ul className="hero__facts">
            <li>
              <SiteIcon name="check" size={16} />
              Free plan, no card needed
            </li>
            <li>
              <SiteIcon name="check" size={16} />
              Voice interviews in your browser
            </li>
            <li>
              <SiteIcon name="check" size={16} />
              Report after every session
            </li>
          </ul>
        </div>

        <div className="scene" aria-hidden="true">
          <div className="scene__card scene-call">
            <div className="scene-call__top">
              <span className="scene-live">LIVE</span>
              <span className="scene-call__timer">12:48 / 20:00</span>
            </div>
            <div className="scene-call__who">
              <span className="scene-avatar">A</span>
              <div>
                <strong>Alex, AI interviewer</strong>
                <span>Frontend Engineer · Junior · Technical</span>
              </div>
            </div>
            <p className="scene-call__question">
              “Walk me through how you would find the cause of a slow page load.”
            </p>
            <div className="scene-wave">
              {wave.map((height, index) => (
                <i
                  key={index}
                  style={{ '--h': `${height}%`, '--w': `${(index % 6) * -0.17}s` } as CSSProperties}
                />
              ))}
            </div>
            <div className="scene-call__controls">
              <span className="scene-mic">
                <SiteIcon name="mic" size={16} />
              </span>
              You are speaking
            </div>
          </div>

          <div className="scene__card scene-job">
            <span className="scene-label">Matched role</span>
            <div className="scene-job__row">
              <span className="icon-tile">
                <SiteIcon name="briefcase" size={17} />
              </span>
              <div>
                <span className="scene-job__title">Junior Frontend Engineer</span>
                <span className="scene-job__meta">Lahore · Hybrid</span>
              </div>
            </div>
            <div className="scene-job__foot">
              <span className="pill pill--accent">92% match</span>
              <span className="scene-apply">
                1-click apply
                <SiteIcon name="send" size={13} />
              </span>
            </div>
          </div>

          <div className="scene__card scene-report">
            <span className="scene-label">Interview report</span>
            <div className="scene-report__body">
              <ScoreRing score={82} size={88} stroke={8} />
              <ul className="comp-list">
                {competencies.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <b>{item.score}/10</b>
                    <span className="comp-bar">
                      <i style={{ '--v': `${item.score * 10}%` } as CSSProperties} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="sr-only">
          Sample product view: a live AI voice interview, its scored report, and a
          matched job with one-click apply.
        </p>
      </div>
    </section>
  )
}
