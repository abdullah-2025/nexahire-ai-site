'use client'

import { useState, type FormEvent } from 'react'
import SiteIcon from './SiteIcon'

export default function SignupForm() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <form id="cta-form" className="space-y-3" onSubmit={onSubmit}>
      <input
        className="field"
        type="text"
        name="name"
        placeholder="Your name"
        aria-label="Your name"
        autoComplete="name"
        required
      />
      <input
        className="field"
        type="email"
        name="email"
        placeholder="you@university.edu.pk"
        aria-label="Email address"
        autoComplete="email"
        required
      />
      <button className="btn w-full justify-between" type="submit">
        <span id="cta-label" aria-live="polite">
          {submitted ? "You're on the list ✓" : 'Create Free Account'}
        </span>
        <span
          className="arr"
          style={{ background: 'var(--violet)', color: '#fff' }}
        >
          <SiteIcon name="arrow-right" className="h-4 w-4" />
        </span>
      </button>
    </form>
  )
}
