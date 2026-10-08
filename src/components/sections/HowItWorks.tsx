import ScrubHeading from '../ScrubHeading'
import type { CSSProperties } from 'react'
import SiteIcon from '../SiteIcon'

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 lg:py-28"
      style={
        {
          background:
            'radial-gradient(ellipse at 50% 20%, rgba(var(--accent-rgb),0.08) 0%, transparent 70%)',
        } as CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-accent/10 blur-[100px]"
        aria-hidden="true"
      ></div>
      <div className="container-x relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <div className="badge reveal">
            <SiteIcon className="w-3.5 h-3.5 text-accent" name="route" /> Your
            Journey
          </div>
          <ScrubHeading className="h-section mt-5">
            From profile to <span className="serif">placement</span> in four{' '}
            steps
          </ScrubHeading>
          <p className="reveal mt-5 text-[16px] leading-relaxed text-[color:var(--muted-foreground)]">
            Every step feeds into the next. That&apos;s what makes NexaHire
            different from a pile of disconnected tools.
          </p>
        </div>

        <div
          className="steps-pipeline reveal mb-10 hidden md:block"
          aria-hidden="true"
        >
          <div className="pipeline-track">
            <div className="pipeline-beam"></div>
          </div>
          <div className="pipeline-nodes">
            <div
              className="pipeline-node"
              style={{ '--c': 'var(--primary)' } as CSSProperties}
            >
              <span className="node-dot"></span>
              <span className="node-title">01 Profile</span>
            </div>
            <div
              className="pipeline-node"
              style={{ '--c': 'var(--primary)' } as CSSProperties}
            >
              <span className="node-dot"></span>
              <span className="node-title">02 CV Score</span>
            </div>
            <div
              className="pipeline-node"
              style={{ '--c': 'var(--accent)' } as CSSProperties}
            >
              <span className="node-dot"></span>
              <span className="node-title">03 Preparation</span>
            </div>
            <div
              className="pipeline-node"
              style={{ '--c': 'var(--accent)' } as CSSProperties}
            >
              <span className="node-dot"></span>
              <span className="node-title">04 Placement</span>
            </div>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article
            className="reveal"
            style={{ '--glow': 'rgba(var(--accent-rgb),.45)' } as CSSProperties}
          >
            <div
              className="step-card spot"
              style={
                {
                  '--c': 'var(--primary)',
                  '--tint': 'rgba(var(--accent-rgb),.12)',
                  '--spot': 'rgba(var(--accent-rgb),.22)',
                } as CSSProperties
              }
            >
              <div className="step-head">
                <div className="step-aura" aria-hidden="true"></div>
                <span className="step-num-watermark" aria-hidden="true">
                  01
                </span>
                <h3>Build Your Profile</h3>
                <div className="step-ico">
                  <SiteIcon className="h-5 w-5" name="user-plus" />
                  <span className="step-ico-ring" aria-hidden="true"></span>
                </div>
              </div>
              <div className="step-body">
                <p>
                  Set your target role, upload your info, and let the platform
                  understand who you are and where you&apos;re headed.
                </p>
                <div className="step-pill">
                  <SiteIcon className="h-3.5 w-3.5" name="sparkles" />
                  <span>AI Role Intelligence</span>
                </div>
                <div className="step-foot">
                  <span className="step-tag">
                    <span className="step-ping-dot">
                      <span className="step-ping-core"></span>
                    </span>
                    Step 1
                  </span>
                  <a href="#features" className="step-go" aria-label="Step 1">
                    <SiteIcon className="h-4 w-4" name="arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article
            className="reveal"
            style={
              {
                '--d': '.1s',
                '--glow': 'rgba(var(--accent-rgb),.45)',
              } as CSSProperties
            }
          >
            <div
              className="step-card spot"
              style={
                {
                  '--c': 'var(--primary)',
                  '--tint': 'rgba(var(--accent-rgb),.12)',
                  '--spot': 'rgba(var(--accent-rgb),.22)',
                } as CSSProperties
              }
            >
              <div className="step-head">
                <div className="step-aura" aria-hidden="true"></div>
                <span className="step-num-watermark" aria-hidden="true">
                  02
                </span>
                <h3>Craft &amp; Analyze Your CV</h3>
                <div className="step-ico">
                  <SiteIcon className="h-5 w-5" name="file-check" />
                  <span className="step-ico-ring" aria-hidden="true"></span>
                </div>
              </div>
              <div className="step-body">
                <p>
                  Build with templates, then let AI score it against real jobs.
                  Instantly see what&apos;s strong and what needs work.
                </p>
                <div className="step-pill">
                  <SiteIcon className="h-3.5 w-3.5" name="check-circle" />
                  <span>ATS 90+ Scoring</span>
                </div>
                <div className="step-foot">
                  <span className="step-tag">
                    <span className="step-ping-dot">
                      <span className="step-ping-core"></span>
                    </span>
                    Step 2
                  </span>
                  <a href="#features" className="step-go" aria-label="Step 2">
                    <SiteIcon className="h-4 w-4" name="arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article
            className="reveal"
            style={
              {
                '--d': '.2s',
                '--glow': 'rgba(var(--accent-rgb),.45)',
              } as CSSProperties
            }
          >
            <div
              className="step-card spot"
              style={
                {
                  '--c': 'var(--accent)',
                  '--tint': 'rgba(var(--accent-rgb),.12)',
                  '--spot': 'rgba(var(--accent-rgb),.22)',
                } as CSSProperties
              }
            >
              <div className="step-head">
                <div className="step-aura" aria-hidden="true"></div>
                <span className="step-num-watermark" aria-hidden="true">
                  03
                </span>
                <h3>Practice &amp; Prepare</h3>
                <div className="step-ico">
                  <SiteIcon className="h-5 w-5" name="brain" />
                  <span className="step-ico-ring" aria-hidden="true"></span>
                </div>
              </div>
              <div className="step-body">
                <p>
                  Follow your personalised roadmap, take AI mock interviews, and
                  watch your readiness score climb with every session.
                </p>
                <div className="step-pill">
                  <SiteIcon className="h-3.5 w-3.5" name="mic" />
                  <span>Interactive AI Voice</span>
                </div>
                <div className="step-foot">
                  <span className="step-tag">
                    <span className="step-ping-dot">
                      <span className="step-ping-core"></span>
                    </span>
                    Step 3
                  </span>
                  <a href="#readiness" className="step-go" aria-label="Step 3">
                    <SiteIcon className="h-4 w-4" name="arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </article>
          <article
            className="reveal"
            style={
              {
                '--d': '.3s',
                '--glow': 'rgba(var(--accent-rgb),.45)',
              } as CSSProperties
            }
          >
            <div
              className="step-card spot"
              style={
                {
                  '--c': 'var(--accent)',
                  '--tint': 'rgba(var(--accent-rgb),.12)',
                  '--spot': 'rgba(var(--accent-rgb),.22)',
                } as CSSProperties
              }
            >
              <div className="step-head">
                <div className="step-aura" aria-hidden="true"></div>
                <span className="step-num-watermark" aria-hidden="true">
                  04
                </span>
                <h3>Land Your Role</h3>
                <div className="step-ico">
                  <SiteIcon className="h-5 w-5" name="rocket" />
                  <span className="step-ico-ring" aria-hidden="true"></span>
                </div>
              </div>
              <div className="step-body">
                <p>
                  Discover skill-matched opportunities, apply with tailored CVs,
                  and interview live with recruiters — all inside one system.
                </p>
                <div className="step-pill">
                  <SiteIcon className="h-3.5 w-3.5" name="award" />
                  <span>Direct Recruiter Match</span>
                </div>
                <div className="step-foot">
                  <span className="step-tag">
                    <span className="step-ping-dot">
                      <span className="step-ping-core"></span>
                    </span>
                    Step 4
                  </span>
                  <a href="#pricing" className="step-go" aria-label="Step 4">
                    <SiteIcon className="h-4 w-4" name="arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
