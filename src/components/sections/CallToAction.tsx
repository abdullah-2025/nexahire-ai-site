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
              style={{ color: '#fff' } as CSSProperties}
            >
              Ready to stop{' '}
              <span
                className="serif"
                style={{ color: '#a5b4fc' } as CSSProperties}
              >
                guessing?
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-indigo-100/80">
              Join thousands of Pakistani graduates who replaced scattered
              job-search tools with one connected career platform. Your
              readiness score starts building the moment you sign up.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[14px] font-semibold text-white transition hover:bg-white/10 hover:border-white/30"
            >
              <SiteIcon
                className="h-4 w-4 text-indigo-300"
                name="layout-dashboard"
              />
              Explore Dashboard
            </a>
          </div>
          <div
            className="relative z-10 rounded-[28px] bg-[#121124] border border-white/10 p-7 text-white shadow-2xl shadow-black/80 backdrop-blur-xl"
            style={{ transform: 'rotate(1.5deg)' } as CSSProperties}
          >
            <div className="text-[19px] font-semibold tracking-tight text-white">
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
