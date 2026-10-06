import ScrubHeading from '../ScrubHeading'
import type { CSSProperties } from 'react'
import SiteIcon from '../SiteIcon'

const sparklePositions = [
  [10, 15, 2],
  [20, 45, 2.5],
  [30, 75, 3],
  [40, 85, 2.2],
  [50, 25, 2.8],
  [60, 55, 3.2],
  [70, 15, 2.4],
  [80, 65, 2.6],
  [15, 90, 3.1],
  [25, 5, 2.9],
  [35, 40, 2.3],
  [45, 70, 2.7],
  [55, 10, 3.3],
  [65, 80, 2.1],
  [75, 30, 2.5],
  [85, 50, 2.8],
  [12, 65, 3],
  [42, 20, 2.4],
  [72, 95, 2.6],
  [92, 35, 2.2],
]

// Preserve the original two sparkle layers and their combined brightness.
const sparkles = [...sparklePositions, ...sparklePositions]

export default function CareerJourney() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden py-20 lg:py-32"
      style={
        {
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)',
        } as CSSProperties
      }
    >
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          <div className="badge reveal">
            <SiteIcon
              className="w-3.5 h-3.5 text-[color:var(--violet)]"
              name="play-circle"
            />{' '}
            How It Works
          </div>
          <ScrubHeading className="h-section mt-5">
            Your Journey to <span className="serif">Opportunity</span>
          </ScrubHeading>
          <p className="reveal mt-5 text-[16px] leading-relaxed text-[color:var(--muted)]">
            Four simple steps to find and apply for the perfect opportunity.
            Start your journey today — it&apos;s completely free.
          </p>
        </div>
        <div className="mx-auto max-w-5xl">
          <div
            className="jr-step reveal"
            style={
              {
                '--c': 'var(--amber)',
                '--g': 'linear-gradient(135deg,#f59e0b,#b45309)',
              } as CSSProperties
            }
          >
            <div className="jr-row">
              <div className="jr-circle-wrap">
                <div className="jr-circle">
                  <SiteIcon className="h-9 w-9" name="search" />
                </div>
                <span className="jr-badge">1</span>
              </div>
              <div className="jr-copy">
                <span className="jr-label">STEP 1</span>
                <h3>Browse Opportunities</h3>
                <p>
                  Explore hundreds of opportunities across Pakistan. From jobs
                  and internships to scholarships and remote work — everything
                  in one place.
                </p>
                <div className="jr-tags">
                  <span
                    className="jr-tag"
                    style={{ '--k': '0' } as CSSProperties}
                  >
                    Real-time updates
                  </span>
                  <span
                    className="jr-tag"
                    style={{ '--k': '1' } as CSSProperties}
                  >
                    All categories
                  </span>
                  <span
                    className="jr-tag"
                    style={{ '--k': '2' } as CSSProperties}
                  >
                    Verified sources
                  </span>
                </div>
              </div>
            </div>
            <div
              className="jr-line"
              style={{ '--n': '#38bdf8' } as CSSProperties}
            ></div>
          </div>
          <div
            className="jr-step reveal"
            style={
              {
                '--c': 'var(--sky)',
                '--g': 'linear-gradient(135deg,#0284c7,#0369a1)',
              } as CSSProperties
            }
          >
            <div className="jr-row">
              <div className="jr-circle-wrap">
                <div className="jr-circle">
                  <SiteIcon className="h-9 w-9" name="sliders-horizontal" />
                </div>
                <span className="jr-badge">2</span>
              </div>
              <div className="jr-copy">
                <span className="jr-label">STEP 2</span>
                <h3>Filter &amp; Refine</h3>
                <p>
                  Use powerful filters to find exactly what fits your needs.
                  Filter by category, location, work type, deadline, and more to
                  save time.
                </p>
                <div className="jr-tags">
                  <span
                    className="jr-tag"
                    style={{ '--k': '0' } as CSSProperties}
                  >
                    Smart filters
                  </span>
                  <span
                    className="jr-tag"
                    style={{ '--k': '1' } as CSSProperties}
                  >
                    Save searches
                  </span>
                  <span
                    className="jr-tag"
                    style={{ '--k': '2' } as CSSProperties}
                  >
                    Quick sort
                  </span>
                </div>
              </div>
            </div>
            <div
              className="jr-line"
              style={{ '--n': '#c084fc' } as CSSProperties}
            ></div>
          </div>
          <div
            className="jr-step reveal"
            style={
              {
                '--c': '#7e3fbc',
                '--g': 'linear-gradient(135deg,#9333ea,#6b21a8)',
              } as CSSProperties
            }
          >
            <div className="jr-row">
              <div className="jr-circle-wrap">
                <div className="jr-circle">
                  <SiteIcon className="h-9 w-9" name="bookmark-check" />
                </div>
                <span className="jr-badge">3</span>
              </div>
              <div className="jr-copy">
                <span className="jr-label">STEP 3</span>
                <h3>Save Your Favorites</h3>
                <p>
                  Bookmark opportunities you love. Come back anytime to review
                  your saved list. Never miss a chance again with our organized
                  dashboard.
                </p>
                <div className="jr-tags">
                  <span
                    className="jr-tag"
                    style={{ '--k': '0' } as CSSProperties}
                  >
                    Unlimited saves
                  </span>
                  <span
                    className="jr-tag"
                    style={{ '--k': '1' } as CSSProperties}
                  >
                    Organized list
                  </span>
                  <span
                    className="jr-tag"
                    style={{ '--k': '2' } as CSSProperties}
                  >
                    Deadline tracking
                  </span>
                </div>
              </div>
            </div>
            <div
              className="jr-line"
              style={{ '--n': '#34d399' } as CSSProperties}
            ></div>
          </div>
          <div
            className="jr-step reveal"
            style={
              {
                '--c': 'var(--emerald)',
                '--g': 'linear-gradient(135deg,#10b981,#047857)',
              } as CSSProperties
            }
          >
            <div className="jr-row">
              <div className="jr-circle-wrap">
                <div className="jr-circle">
                  <SiteIcon className="h-9 w-9" name="send" />
                </div>
                <span className="jr-badge">4</span>
              </div>
              <div className="jr-copy">
                <span className="jr-label">STEP 4</span>
                <h3>Apply with Confidence</h3>
                <p>
                  Ready to apply? Click through to the official application
                  page. Build your CV with our free tool and put your best foot
                  forward.
                </p>
                <div className="jr-tags">
                  <span
                    className="jr-tag"
                    style={{ '--k': '0' } as CSSProperties}
                  >
                    Free CV builder
                  </span>
                  <span
                    className="jr-tag"
                    style={{ '--k': '1' } as CSSProperties}
                  >
                    Direct links
                  </span>
                  <span
                    className="jr-tag"
                    style={{ '--k': '2' } as CSSProperties}
                  >
                    Track applications
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal mx-auto mt-16 max-w-4xl lg:mt-24">
          <div className="jr-cta" id="jr-cta">
            <div className="relative">
              <div className="jr-icon">
                <SiteIcon className="h-8 w-8 text-amber-700" name="sparkles" />
              </div>
              <h3 className="text-[clamp(26px,4vw,42px)] font-bold leading-tight tracking-tight text-[color:var(--ink)]">
                Ready to Start Your Journey?
              </h3>
              <p className="mx-auto mb-8 mt-4 max-w-xl text-[16px] leading-relaxed text-slate-600">
                Join thousands of Pakistani youth already discovering
                opportunities. It&apos;s completely free and takes less than a
                minute to get started.
              </p>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <a href="#" className="btn-w">
                  Browse Opportunities{' '}
                  <SiteIcon className="h-4 w-4" name="arrow-right" />
                </a>
                <a href="#" className="btn-g">
                  Build Your CV Free
                </a>
              </div>
            </div>
            {sparkles.map(([top, left, duration], index) => (
              <i
                key={index}
                className="spk"
                style={
                  {
                    top: `${top}%`,
                    left: `${left}%`,
                    '--d': `${duration}s`,
                    animationDelay: `${((index % sparklePositions.length) * 0.1) % 2}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
