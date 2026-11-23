import type { CSSProperties } from 'react'
import ScoreRing from '../ScoreRing'
import SiteIcon from '../SiteIcon'
import { authLinks } from '@/data/auth-links'

/* The showcase mirrors the app's InterviewReport layout. Content is a sample. */
const competencies = [
  { name: 'Communication', score: 8, note: 'Clear structure; tie answers back to the question sooner.' },
  { name: 'Problem solving', score: 7, note: 'Good debugging steps; state your assumptions first.' },
  { name: 'Technical depth', score: 8, note: 'Solid on rendering and caching; go deeper on metrics.' },
]

export default function Interviews() {
  return (
    <section id="interviews" className="section">
      <div className="container-x split">
        <div>
          <span className="kicker">AI mock interviews</span>
          <h2 className="h-section">
            Rehearse with an interviewer that <span className="serif">listens.</span>
          </h2>
          <p className="lead">
            Speak your answers out loud, just like the real thing. The AI interviewer
            asks role-specific questions, follows up on what you say, and scores the
            whole conversation when you finish.
          </p>

          <ol className="steps">
            <li>
              <strong>Set up the interview</strong>
              <span>Choose your target role, an interview type, your level and a length from 10 to 30 minutes.</span>
            </li>
            <li>
              <strong>Talk it through</strong>
              <span>Answer by voice in your browser. Questions are tailored to your role and your CV.</span>
            </li>
            <li>
              <strong>Read your report</strong>
              <span>See your score, competency ratings, a question-by-question review and the transcript.</span>
            </li>
          </ol>

          <div className="section-cta">
            <a href={authLinks.signup} className="btn btn--primary">
              Try a free mock interview
              <SiteIcon name="arrow-up-right" size={17} />
            </a>
          </div>
        </div>

        <article className="card report" aria-label="Sample interview report">
          <div className="report__head">
            <div>
              <span className="report__meta">Sample report · Technical · 20 min</span>
              <h3 className="report__title">Frontend Engineer</h3>
            </div>
            <span className="pill">
              <SiteIcon name="clock" size={13} />
              Saved to history
            </span>
          </div>

          <div className="report__summary">
            <ScoreRing score={82} size={112} stroke={10} />
            <p>
              A confident session with well-structured answers. You explained your
              debugging approach clearly; adding measurable outcomes would make your
              project stories land harder.
            </p>
          </div>

          <ul className="comp-list" style={{ marginTop: 22 }}>
            {competencies.map((item) => (
              <li key={item.name}>
                <span>{item.name}</span>
                <b>{item.score}/10</b>
                <span className="comp-bar">
                  <i style={{ '--v': `${item.score * 10}%` } as CSSProperties} />
                </span>
                <small>{item.note}</small>
              </li>
            ))}
          </ul>

          <div className="report__cols">
            <div>
              <h4>
                <SiteIcon name="check-circle" size={16} />
                Strengths
              </h4>
              <ul>
                <li>Broke the problem into clear steps</li>
                <li>Used precise technical vocabulary</li>
              </ul>
            </div>
            <div>
              <h4>
                <SiteIcon name="trending-up" size={16} />
                What to improve
              </h4>
              <ul>
                <li>Quantify the impact of your projects</li>
                <li>Pause to confirm the question first</li>
              </ul>
            </div>
          </div>

          <div className="report__transcript">
            <p>
              <b>Alex:</b> How would you find the cause of a slow page load?
            </p>
            <p>
              <b>You:</b> I&apos;d start in the network panel to see whether the time is
              spent on the server or in rendering…
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
