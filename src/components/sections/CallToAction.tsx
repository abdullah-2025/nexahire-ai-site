import SiteIcon from '../SiteIcon'
import { authLinks } from '@/data/auth-links'

export default function CallToAction() {
  return (
    <section className="container-x" aria-labelledby="cta-title">
      <div className="cta-card on-dark">
        <h2 id="cta-title">
          Your next interview starts with <span className="serif">practice.</span>
        </h2>
        <p>
          Create a free account, set your target role and run your first AI mock
          interview today. Your report will be waiting when you finish.
        </p>
        <div className="hero__actions">
          <a href={authLinks.signup} className="btn btn--light">
            Start practicing free
            <SiteIcon name="arrow-up-right" size={17} />
          </a>
          <a href={authLinks.login} className="btn btn--ghost-dark">
            Sign in
          </a>
        </div>
      </div>
    </section>
  )
}
