import ScrubHeading from '../ScrubHeading'
import type { CSSProperties } from 'react'
import SiteIcon from '../SiteIcon'
import { authLinks } from '@/data/auth-links'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 lg:py-32">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-2xl text-center lg:mb-20">
          <div className="badge reveal">
            <SiteIcon className="w-3.5 h-3.5 text-accent" name="credit-card" />{' '}
            Pricing
          </div>
          <ScrubHeading className="h-section mt-5">
            Start free. <span className="serif">Scale when ready.</span>
          </ScrubHeading>
          <p className="reveal mt-5 text-[16px] leading-relaxed text-[color:var(--muted-foreground)]">
            Get core features at no cost. Upgrade to Pro for unlimited AI
            analysis, interviews, and premium job access.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          <div className="reveal">
            <div className="plan spot">
              <div className="text-[13px] font-semibold text-[color:var(--muted-foreground)]">
                Starter
              </div>
              <div className="mt-2 text-[56px] font-semibold leading-none tracking-tight text-foreground">
                Free
              </div>
              <p className="mb-7 mt-2 text-[13.5px] text-[color:var(--muted-foreground)]">
                Perfect for getting started
              </p>
              <ul className="mb-8 flex-1">
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />1 CV
                  template + PDF export
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />3 AI
                  CV analyses / month
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Basic career roadmap
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />2
                  mock interview sessions
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Job search &amp; bookmarks
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Readiness score dashboard
                </li>
              </ul>
              <a
                href={authLinks.signup}
                className="btn-ghost justify-center text-center"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="reveal" style={{ '--d': '.12s' } as CSSProperties}>
            <div className="plan plan--featured spot">
              <span className="pop">MOST POPULAR</span>
              <div className="text-[13px] font-semibold text-muted-foreground">
                Pro
              </div>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-[56px] font-semibold leading-none tracking-tight text-foreground">
                  ₨1,499
                </span>
                <span className="mb-1.5 text-[14px] text-muted-foreground">
                  /month
                </span>
              </div>
              <p className="mb-7 mt-2 text-[13.5px] text-muted-foreground">
                For serious career preparation
              </p>
              <ul className="mb-8 flex-1">
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  All CV templates + custom branding
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Unlimited AI CV analyses
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Full career roadmaps with tracking
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Unlimited mock interviews + feedback
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Premium job listings + alerts
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Live interview scheduling
                </li>
                <li>
                  <SiteIcon className="h-4 w-4 text-accent" name="check" />
                  Priority recruiter visibility
                </li>
              </ul>
              <a href="#" className="btn justify-between">
                Upgrade to Pro{' '}
                <span className="arr">
                  <SiteIcon className="h-4 w-4" name="arrow-up-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
