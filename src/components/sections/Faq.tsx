'use client'

import { useState } from 'react'
import Link from 'next/link'
import { faqs } from '@/data/faqs'
import SiteIcon from '../SiteIcon'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section">
      <div className="container-x faq">
        <div className="faq__aside reveal">
          <span className="kicker">FAQ</span>
          <h2 className="h-section">
            Questions, <span className="serif">answered.</span>
          </h2>
          <p className="lead">
            How the interviews, reports, jobs and plans work. Something missing?
          </p>
          <Link href="/contact" className="link">
            Contact the NexaHire team
          </Link>
        </div>

        <div className="faq__list reveal">
          {faqs.map(({ question, answer }, index) => (
            <div key={question} className={`faq-item${open === index ? ' open' : ''}`}>
              <h3 style={{ margin: 0 }}>
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  className="faq-q"
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  {question}
                  <span className="pm">
                    <SiteIcon name="plus" size={16} />
                  </span>
                </button>
              </h3>
              <div
                className="faq-a"
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div>
                  <p>{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
