import type { CSSProperties } from 'react'
import SiteIcon, { type IconName } from '../SiteIcon'
import { authLinks } from '@/data/auth-links'

/* Example roles with generic employers, for illustration only. */
const roles = [
  {
    title: 'Junior Frontend Engineer',
    meta: 'Product studio · Lahore · Hybrid',
    match: 92,
    tags: ['React', 'TypeScript', 'Graduate role'],
    featured: true,
  },
  {
    title: 'Associate Data Analyst',
    meta: 'Fintech · Karachi · On-site',
    match: 86,
    tags: ['SQL', 'Python', 'Dashboards'],
  },
  {
    title: 'AI Engineering Intern',
    meta: 'SaaS startup · Remote',
    match: 81,
    tags: ['Python', 'LLMs', 'Internship'],
  },
]

const flow: { icon: IconName; title: string; detail: string }[] = [
  { icon: 'search', title: 'Browse', detail: 'Explore openings for graduates and early-career roles.' },
  { icon: 'sliders', title: 'Filter', detail: 'Narrow by role type and see how well each one matches you.' },
  { icon: 'bookmark', title: 'Save', detail: 'Keep a shortlist of the roles worth your time.' },
  { icon: 'send', title: 'Apply', detail: 'Send your application in one click when you are ready.' },
]

export default function Jobs() {
  return (
    <section id="jobs" className="section section--raised">
      <div className="container-x split split--flip">
        <div className="reveal">
          <span className="kicker">Job discovery</span>
          <h2 className="h-section">
            Find roles that fit. <span className="serif">Apply in one click.</span>
          </h2>
          <p className="lead">
            When your practice pays off, the next step is right there. See openings
            matched to your profile, keep a shortlist, and apply without retyping
            your details.
          </p>

          <ul className="flow">
            {flow.map((step) => (
              <li key={step.title} className="card">
                <span className="icon-tile">
                  <SiteIcon name={step.icon} size={17} />
                </span>
                <div>
                  <strong>{step.title}</strong>
                  <span>{step.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="section-cta">
            <a href={authLinks.signup} className="btn btn--secondary">
              Explore roles
              <SiteIcon name="arrow-right" size={17} />
            </a>
          </div>
        </div>

        <div className="reveal" style={{ '--d': '.1s' } as CSSProperties}>
          <div className="job-stack">
            {roles.map((role) => (
              <article key={role.title} className={`card job-card${role.featured ? ' job-card--featured' : ''}`}>
                <div className="job-card__top">
                  <span className="icon-tile">
                    <SiteIcon name="briefcase" size={18} />
                  </span>
                  <div>
                    <h3 className="job-card__title">{role.title}</h3>
                    <span className="job-card__meta">
                      <SiteIcon name="map-pin" size={13} style={{ display: 'inline', marginRight: 4, verticalAlign: '-2px' }} />
                      {role.meta}
                    </span>
                  </div>
                  <span className="job-card__save" aria-hidden="true">
                    <SiteIcon name="bookmark" size={18} />
                  </span>
                </div>
                <div className="job-card__tags">
                  {role.tags.map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="job-card__foot">
                  <span className="pill pill--accent">{role.match}% match</span>
                  {role.featured ? (
                    <span className="btn btn--primary" style={{ minHeight: 40, padding: '0 16px', fontSize: 14 }}>
                      1-click apply
                      <SiteIcon name="send" size={15} />
                    </span>
                  ) : (
                    <span>Matched to your profile</span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="job-note">Example roles, for illustration.</p>
        </div>
      </div>
    </section>
  )
}
