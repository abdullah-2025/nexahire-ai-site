import SiteIcon, { type IconName } from '../SiteIcon'

const steps: { icon: IconName; title: string; body: string; tag: string }[] = [
  {
    icon: 'target',
    title: 'Set your target role',
    body: 'Tell us the role you want and your background. Everything after this is tailored to it.',
    tag: 'Profile',
  },
  {
    icon: 'mic',
    title: 'Practice with the AI interviewer',
    body: 'Run voice mock interviews at your level, as often as your plan allows.',
    tag: 'Mock interviews',
  },
  {
    icon: 'trending-up',
    title: 'Improve with your report',
    body: 'Work on what the report flags, sharpen your CV with AI analysis, and follow your roadmap.',
    tag: 'Report · CV · Roadmap',
  },
  {
    icon: 'send',
    title: 'Apply to matched roles',
    body: 'When you are ready, shortlist roles that match your profile and apply in one click.',
    tag: 'Jobs',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section section--raised">
      <div className="container-x">
        <div className="section-head section-head--center">
          <span className="kicker">How it works</span>
          <h2 className="h-section">
            From first practice to <span className="serif">your application.</span>
          </h2>
          <p className="lead">
            Each step feeds the next, so the effort you put into practice shows up
            when you apply.
          </p>
        </div>

        <ol className="journey">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="card journey__step"
            >
              <span className="journey__num" aria-hidden="true">
                0{index + 1}
              </span>
              <span className="icon-tile">
                <SiteIcon name={step.icon} size={18} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <span className="pill journey__tag">{step.tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
