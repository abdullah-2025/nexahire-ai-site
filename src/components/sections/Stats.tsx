import type { CSSProperties } from 'react'
import AnimatedNumber from '../AnimatedNumber'

export default function Stats() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid grid-cols-2 gap-y-12 md:grid-cols-4">
        <div className="stat reveal">
          <div className="stat-num">
            <AnimatedNumber target={78} threshold={0.6} className="count" />
          </div>
          <div className="stat-label">Avg Readiness Score</div>
        </div>
        <div className="stat reveal" style={{ '--d': '.1s' } as CSSProperties}>
          <div className="stat-num">
            <AnimatedNumber target={2400} threshold={0.6} className="count" />
            <sup>+</sup>
          </div>
          <div className="stat-label">Students Onboarded</div>
        </div>
        <div className="stat reveal" style={{ '--d': '.2s' } as CSSProperties}>
          <div className="stat-num">
            <AnimatedNumber target={94} threshold={0.6} className="count" />
            <sup>%</sup>
          </div>
          <div className="stat-label">CV Match Improvement</div>
        </div>
        <div className="stat reveal" style={{ '--d': '.3s' } as CSSProperties}>
          <div className="stat-num">
            <AnimatedNumber target={850} threshold={0.6} className="count" />
            <sup>+</sup>
          </div>
          <div className="stat-label">Jobs Discovered Weekly</div>
        </div>
      </div>
    </section>
  )
}
