import SiteIcon, { type IconName } from '../SiteIcon'

/* Product facts, not invented metrics. Keep in sync with the app and plans. */
const facts: { icon: IconName; title: string; detail: string }[] = [
  {
    icon: 'mic',
    title: 'Voice interviews for your role',
    detail: 'Technical, behavioral or mixed, at junior, mid or senior level.',
  },
  {
    icon: 'list-checks',
    title: 'A report after every session',
    detail: 'Overall score, competency ratings and the full transcript.',
  },
  {
    icon: 'briefcase',
    title: 'Roles matched to your profile',
    detail: 'Save openings and apply in one click.',
  },
  {
    icon: 'sparkles',
    title: 'Free to start',
    detail: '2 mock interviews a week, plus CV and roadmap tools.',
  },
]

export default function ProofStrip() {
  return (
    <section className="proof" aria-label="What NexaHire includes">
      <div className="container-x">
        <ul className="proof__grid">
          {facts.map((fact) => (
            <li key={fact.title} className="proof__item">
              <span className="icon-tile">
                <SiteIcon name={fact.icon} size={18} />
              </span>
              <div>
                <strong>{fact.title}</strong>
                <span>{fact.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
