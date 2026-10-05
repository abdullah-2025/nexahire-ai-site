'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { faqs } from '@/data/faqs'
import ScrubHeading from '../ScrubHeading'
import SiteIcon from '../SiteIcon'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  const [visible, setVisible] = useState<Set<number>>(() => new Set())
  const list = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const revealed = entries.filter((entry) => entry.isIntersecting)
        if (!revealed.length) return
        setVisible(
          (previous) =>
            new Set([
              ...previous,
              ...revealed.map((entry) =>
                Number((entry.target as HTMLElement).dataset.index),
              ),
            ]),
        )
        revealed.forEach((entry) => observer.unobserve(entry.target))
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    list.current
      ?.querySelectorAll('.faq-item')
      .forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className="relative py-16 lg:py-24">
      <div className="container-x max-w-3xl">
        <div className="mb-12 text-center">
          <ScrubHeading className="h-section">
            We&apos;ve got <span className="serif">answers</span>
          </ScrubHeading>
        </div>
        <div ref={list} className="space-y-3" id="faq-list">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={question}
              className={`faq-item reveal${visible.has(index) ? ' visible' : ''}${open === index ? ' open' : ''}`}
              data-react-reveal=""
              data-index={index}
              style={
                { '--d': `${(index * 0.06).toFixed(2)}s` } as CSSProperties
              }
            >
              <button
                className="faq-q"
                aria-expanded={open === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpen(open === index ? null : index)}
              >
                {question}
                <span className="pm">
                  <SiteIcon name="plus" className="h-4 w-4" />
                </span>
              </button>
              <div className="faq-a" id={`faq-answer-${index}`}>
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
