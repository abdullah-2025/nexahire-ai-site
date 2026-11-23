import FoldText from './FoldText'
import Navigation from './Navigation'
import HeroStage from './hero/HeroStage'
import SiteIcon from './SiteIcon'
import { authLinks } from '@/data/auth-links'

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

        <HeroStage />
      </div>
    </section>
  )
}
