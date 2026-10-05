import ScrubHeading from '../ScrubHeading'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import SiteIcon from '../SiteIcon'
import AnimatedNumber from '../AnimatedNumber'

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32">
      <div className="container-x">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
          <div className="badge reveal">
            <SiteIcon
              className="w-3.5 h-3.5 text-[color:var(--violet)]"
              name="message-circle"
            />{' '}
            Student Stories
          </div>
          <ScrubHeading className="h-section mt-5">
            Real graduates, <span className="serif">real results</span>
          </ScrubHeading>
        </div>
        <div className="grid gap-5 lg:grid-cols-12">
          <article className="reveal lg:col-span-7">
            <div
              className="t-card spot"
              style={
                {
                  background:
                    'linear-gradient(145deg,#12102e,#1a1744 60%,#292468)',
                  color: '#fff',
                  border: '1px solid rgba(129,140,248,0.2)',
                  '--spot': 'rgba(165,180,252,.2)',
                } as CSSProperties
              }
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <span className="stars">★★★★★</span>
                  <span
                    className="t-chip"
                    style={
                      {
                        background: 'rgba(255,255,255,.10)',
                        color: '#e0e7ff',
                      } as CSSProperties
                    }
                  >
                    <SiteIcon
                      className="h-3.5 w-3.5 text-indigo-300"
                      name="briefcase"
                    />
                    Internship in 3 weeks
                  </span>
                </div>
                <div className="qmark">“</div>
                <p className="t-quote-lg mt-2">
                  I used to send the same generic CV to every listing. NexaHire
                  AI&apos;s AI analysis showed me exactly which skills were
                  missing for my target role. Landed an internship at a fintech
                  startup within 3 weeks.
                </p>
              </div>
              <div className="t-user">
                <Image
                  width={44}
                  height={44}
                  unoptimized
                  src="/images/ayesha.jpg"
                  alt="Ayesha Khalid"
                  loading="lazy"
                />
                <div>
                  <div className="text-[14.5px] font-semibold text-white">
                    Ayesha Khalid
                  </div>
                  <div className="text-[12px] text-indigo-200">
                    FAST-NUCES &apos;26 • Software Engineering
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            className="reveal lg:col-span-5"
            style={{ '--d': '.1s' } as CSSProperties}
          >
            <div
              className="t-card spot"
              style={
                {
                  background:
                    'linear-gradient(145deg,#061a29,#0c2d3d 60%,#09443b)',
                  color: '#fff',
                  border: '1px solid rgba(56,189,248,0.25)',
                  '--spot': 'rgba(56,189,248,.2)',
                } as CSSProperties
              }
            >
              <div
                className="t-chip"
                style={
                  {
                    background: 'rgba(56,189,248,.15)',
                    color: '#7dd3fc',
                    width: 'fit-content',
                  } as CSSProperties
                }
              >
                <SiteIcon className="h-3.5 w-3.5" name="trending-up" />
                Mock interview score
              </div>
              <div>
                <div
                  className="serif"
                  style={
                    {
                      fontSize: 'clamp(64px,9vw,112px)',
                      lineHeight: '.95',
                      letterSpacing: '-.03em',
                    } as CSSProperties
                  }
                >
                  <span
                    className="opacity-60"
                    style={{ fontSize: '.55em' } as CSSProperties}
                  >
                    62% →
                  </span>{' '}
                  <AnimatedNumber
                    target={89}
                    from={62}
                    duration={1800}
                    threshold={0.8}
                    className="count2"
                    style={
                      {
                        background: 'linear-gradient(135deg,#38bdf8,#34d399)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      } as CSSProperties
                    }
                  />
                  %
                </div>
                <p className="mt-4 max-w-[28ch] text-[15px] leading-snug text-slate-300">
                  By the third practice session — and the real interview felt
                  easy after that.
                </p>
              </div>
            </div>
          </article>
          <article
            className="reveal lg:col-span-5"
            style={{ '--d': '.05s' } as CSSProperties}
          >
            <div
              className="t-card spot"
              style={
                {
                  background: 'rgba(255,255,255,.03)',
                  border: '1px solid rgba(255,255,255,.08)',
                  color: '#fff',
                  '--spot': 'rgba(129,140,248,.18)',
                } as CSSProperties
              }
            >
              <div>
                <div className="mb-4">
                  <span className="stars">★★★★★</span>
                </div>
                <p className="t-quote">
                  &quot;The mock interview module gave me feedback no friend or
                  YouTube video ever could. By my third practice session I went
                  from 62% to 89%. My real interview felt easy after that.&quot;
                </p>
              </div>
              <div className="t-user">
                <Image
                  width={44}
                  height={44}
                  unoptimized
                  src="/images/hassan.jpg"
                  alt="Hassan Raza"
                  loading="lazy"
                />
                <div>
                  <div className="text-[14.5px] font-semibold text-white">
                    Hassan Raza
                  </div>
                  <div className="text-[12px] text-[color:var(--muted)]">
                    SZABIST &apos;26 • AI &amp; Data Science
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            className="reveal lg:col-span-7"
            style={{ '--d': '.15s' } as CSSProperties}
          >
            <div
              className="t-card spot"
              style={
                {
                  background:
                    'linear-gradient(145deg,#1b1233,#26164d 60%,#3e1b73)',
                  color: '#fff',
                  border: '1px solid rgba(168,85,247,0.25)',
                  '--spot': 'rgba(168,85,247,.2)',
                } as CSSProperties
              }
            >
              <div>
                <div className="mb-4">
                  <span className="stars">★★★★★</span>
                </div>
                <p
                  className="t-quote-lg"
                  style={
                    { fontSize: 'clamp(19px,2.2vw,26px)' } as CSSProperties
                  }
                >
                  &quot;The career roadmap feature helped me understand what I
                  was actually missing to be job-ready. Instead of random online
                  courses, I followed a clear path. The readiness score kept me
                  accountable.&quot;
                </p>
              </div>
              <div className="t-user">
                <Image
                  width={44}
                  height={44}
                  unoptimized
                  src="/images/fatima.jpg"
                  alt="Fatima Ahmed"
                  loading="lazy"
                />
                <div>
                  <div className="text-[14.5px] font-semibold text-white">
                    Fatima Ahmed
                  </div>
                  <div className="text-[12px] text-purple-200">
                    NUST &apos;26 • Computer Engineering
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
