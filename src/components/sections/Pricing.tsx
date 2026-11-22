'use client'

import { useState, type CSSProperties } from 'react'
import SiteIcon from '../SiteIcon'
import { authLinks } from '@/data/auth-links'
import { plans, type BillingInterval } from '@/data/plans'

const usd = (amount: number) => `$${Number.isInteger(amount) ? amount : amount.toFixed(2)}`

export default function Pricing() {
  const [interval, setBillingInterval] = useState<BillingInterval>('month')

  return (
    <section id="pricing" className="section">
      <div className="container-x">
        <div className="section-head section-head--center reveal">
          <span className="kicker">Pricing</span>
          <h2 className="h-section">
            Start free. <span className="serif">Practice more when you need to.</span>
          </h2>
          <p className="lead">
            Every plan includes the CV builder, AI CV analysis and your career
            roadmap. Paid plans add more mock interviews.
          </p>

          <div role="radiogroup" aria-label="Billing period" className="billing-toggle">
            <button
              type="button"
              role="radio"
              aria-checked={interval === 'month'}
              onClick={() => setBillingInterval('month')}
            >
              Monthly
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={interval === 'year'}
              onClick={() => setBillingInterval('year')}
            >
              Yearly
              <span className="pill">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="plans">
          {plans.map((plan, index) => {
            const monthly = plan.prices ? (interval === 'year' ? plan.prices.year / 12 : plan.prices.month) : 0
            return (
              <article
                key={plan.id}
                className={`card plan reveal${plan.featured ? ' plan--featured' : ''}`}
                style={{ '--d': `${index * 0.08}s` } as CSSProperties}
              >
                {plan.featured && <span className="plan__badge">Most popular</span>}
                <h3 className="plan__name">{plan.name}</h3>
                <p className="plan__tagline">{plan.tagline}</p>
                <div className="plan__price">
                  <strong>{usd(monthly)}</strong>
                  <span>/ month</span>
                </div>
                <p className="plan__billed">
                  {plan.prices
                    ? interval === 'year'
                      ? `Billed ${usd(plan.prices.year)} yearly`
                      : 'Billed monthly'
                    : 'Free forever'}
                </p>
                <ul className="plan__features">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={feature} className={featureIndex === plan.highlight ? 'is-highlight' : undefined}>
                      <SiteIcon name="check" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={authLinks.signup}
                  className={`btn btn--block ${plan.featured ? 'btn--primary' : 'btn--secondary'}`}
                >
                  {plan.cta}
                </a>
              </article>
            )
          })}
        </div>
        <p className="plans__note">Prices in USD. Cancel anytime and keep access until the end of your billing period.</p>
      </div>
    </section>
  )
}
