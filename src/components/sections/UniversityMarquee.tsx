import { Fragment } from 'react'
import SiteIcon from '../SiteIcon'

const universities = [
  'SZABIST',
  'FAST-NUCES',
  'LUMS',
  'NUST',
  'IBA Karachi',
  'COMSATS',
  'UET Lahore',
  'GIKI',
  'NED University',
  'Habib University',
]

export default function UniversityMarquee() {
  return (
    <div className="mt-16">
      <p className="reveal mb-6 text-center text-[12px] font-semibold uppercase tracking-[.18em] text-[color:var(--muted)]">
        Designed for students from Pakistan&apos;s leading universities
      </p>
      <div className="marquee">
        <div className="marquee-track" id="mq">
          {[0, 1].map((copy) => (
            <div
              className="mq-item"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {universities.map((university) => (
                <Fragment key={university}>
                  <span className="mq-pill">
                    <SiteIcon name="graduation-cap" className="w-4 h-4" />
                    {university}
                  </span>
                  <span className="mq-dot" />
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
