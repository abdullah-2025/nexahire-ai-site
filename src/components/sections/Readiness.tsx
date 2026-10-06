import ScrubHeading from '../ScrubHeading'
import type { CSSProperties } from 'react'
import SiteIcon from '../SiteIcon'

export default function Readiness() {
  return (
    <section id="readiness" className="relative overflow-hidden py-20 lg:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative" id="rd-wrap">
          <div
            className="rd-orb h-64 w-64 bg-violet-600/25 -left-10 -top-10"
            data-speed="-40"
          ></div>
          <div
            className="rd-orb h-60 w-60 bg-sky-500/20 -right-8 -bottom-10"
            data-speed="50"
          ></div>
          <div className="rd-card">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[18px] font-semibold tracking-tight text-[color:var(--ink)]">
                Your Career Readiness
              </h3>
              <span className="live">
                <i></i>Live
              </span>
            </div>
            <div className="flex flex-col items-center gap-8 sm:flex-row">
              <div className="relative h-[168px] w-[168px] shrink-0">
                <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#e3e7f2"
                    strokeWidth="10"
                  ></circle>
                  <circle
                    id="rd-arc"
                    className="rd-arc"
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="url(#rdGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="314.16"
                    strokeDashoffset="314.16"
                  ></circle>
                  <defs>
                    <linearGradient id="rdGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#6366f1"></stop>
                      <stop offset=".55" stopColor="#818cf8"></stop>
                      <stop offset="1" stopColor="#38bdf8"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 grid place-items-center text-center">
                  <div>
                    <span
                      id="rd-num"
                      className="text-[46px] font-semibold leading-none tracking-tight tabular-nums text-[color:var(--ink)]"
                    >
                      0
                    </span>
                    <div className="mt-1 text-[12px] text-[color:var(--muted)]">
                      /100
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex-1 space-y-4">
                <div>
                  <div className="mb-1.5 flex justify-between text-[12.5px]">
                    <span className="text-[color:var(--muted)]">
                      CV Quality
                    </span>
                    <b className="rd-val tabular-nums text-[color:var(--ink)]" data-t="85">
                      0%
                    </b>
                  </div>
                  <div className="rd-bar">
                    <div
                      style={{ background: '#6366f1' } as CSSProperties}
                      data-t="85"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between text-[12.5px]">
                    <span className="text-[color:var(--muted)]">
                      Skills Match
                    </span>
                    <b className="rd-val tabular-nums text-[color:var(--ink)]" data-t="72">
                      0%
                    </b>
                  </div>
                  <div className="rd-bar">
                    <div
                      style={{ background: '#fbbf24' } as CSSProperties}
                      data-t="72"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between text-[12.5px]">
                    <span className="text-[color:var(--muted)]">
                      Interview Prep
                    </span>
                    <b className="rd-val tabular-nums text-[color:var(--ink)]" data-t="64">
                      0%
                    </b>
                  </div>
                  <div className="rd-bar">
                    <div
                      style={{ background: '#a855f7' } as CSSProperties}
                      data-t="64"
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between text-[12.5px]">
                    <span className="text-[color:var(--muted)]">
                      Roadmap Progress
                    </span>
                    <b className="rd-val tabular-nums text-[color:var(--ink)]" data-t="81">
                      0%
                    </b>
                  </div>
                  <div className="rd-bar">
                    <div
                      style={{ background: '#34d399' } as CSSProperties}
                      data-t="81"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="badge reveal">
            <SiteIcon
              className="w-3.5 h-3.5 text-[color:var(--violet)]"
              name="gauge"
            />{' '}
            One Score. Total Clarity.
          </div>
          <ScrubHeading className="h-section mt-5">
            Know exactly where you <span className="serif">stand</span>
          </ScrubHeading>
          <p className="reveal mt-5 text-[16px] leading-relaxed text-[color:var(--muted)]">
            Your Readiness Score combines outputs from CV analysis, career
            roadmaps, mock interviews, and opportunity matches into one
            weighted, transparent number. It updates in real-time as you
            improve.
          </p>
          <ul className="mt-7 space-y-3.5">
            <li
              className="reveal flex items-start gap-3 text-[15px] text-slate-700"
              style={{ '--d': '.05s' } as CSSProperties}
            >
              <span className="check">
                <SiteIcon className="h-3.5 w-3.5" name="check" />
              </span>
              Weighted scoring formula with transparent breakdown
            </li>
            <li
              className="reveal flex items-start gap-3 text-[15px] text-slate-700"
              style={{ '--d': '.15s' } as CSSProperties}
            >
              <span className="check">
                <SiteIcon className="h-3.5 w-3.5" name="check" />
              </span>
              Historical tracking to see your progress over time
            </li>
            <li
              className="reveal flex items-start gap-3 text-[15px] text-slate-700"
              style={{ '--d': '.25s' } as CSSProperties}
            >
              <span className="check">
                <SiteIcon className="h-3.5 w-3.5" name="check" />
              </span>
              Auto-updates when any connected module changes
            </li>
          </ul>
          <a
            href="#"
            className="btn reveal mt-9"
            style={{ '--d': '.3s' } as CSSProperties}
          >
            See Your Score{' '}
            <span className="arr">
              <SiteIcon className="w-4 h-4" name="arrow-up-right" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
