import type { CSSProperties } from 'react'
import SiteIcon from '../SiteIcon'
import SignupForm from '../SignupForm'

export default function CallToAction() {
  return (
    <section className="py-10 lg:py-20">
      <div className="container-x">
        <div className="cta reveal grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_.9fr] lg:p-16">
          <div className="relative z-10">
            <h2
              className="h-section"
              style={{ color: 'var(--ink)' } as CSSProperties}
            >
              Ready to stop{' '}
              <span
                className="serif"
                style={{ color: 'var(--violet)' } as CSSProperties}
              >
                guessing?
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-slate-600">
              Join thousands of Pakistani graduates who replaced scattered
              job-search tools with one connected career platform. Your
              readiness score starts building the moment you sign up.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-6 py-3.5 text-[14px] font-semibold text-[color:var(--ink)] transition hover:bg-indigo-50 hover:border-indigo-300"
            >
              <SiteIcon
                className="h-4 w-4 text-indigo-700"
                name="layout-dashboard"
              />
              Explore Dashboard
            </a>
          </div>
          <div
            className="relative z-10 rounded-[28px] bg-white border border-[color:var(--line)] p-7 text-[color:var(--ink)] shadow-2xl shadow-indigo-200/30 backdrop-blur-xl"
            style={{ transform: 'rotate(1.5deg)' } as CSSProperties}
          >
            <div className="text-[19px] font-semibold tracking-tight text-[color:var(--ink)]">
              Create Free Account
            </div>
            <p className="mb-5 mt-1 text-[13px] text-[color:var(--muted)]">
              Takes less than a minute.
            </p>
            <SignupForm />
          </div>
        </div>
      </div>
    </section>
  )
}
