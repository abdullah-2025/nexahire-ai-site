'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import SiteIcon from './SiteIcon'

/** Scroll behavior for the home page: reveal-on-scroll and the back-to-top button. */
export default function SiteSections({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const totop = root.querySelector('#totop')

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            reveal.unobserve(entry.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    root.querySelectorAll('.reveal').forEach((el) => reveal.observe(el))

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        totop?.classList.toggle('show', window.scrollY > 700)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      reveal.disconnect()
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className="site-sections">
      {children}
      <a href="#top" id="totop" aria-label="Back to top">
        <SiteIcon name="arrow-up" size={18} />
      </a>
    </div>
  )
}
