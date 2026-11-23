'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import SiteIcon from './SiteIcon'

/* Home page wrapper: the back-to-top button. Entrance motion lives in MotionDirector. */
export default function SiteSections({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const totop = ref.current?.querySelector('#totop')
    if (!totop) return

    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        totop.classList.toggle('show', window.scrollY > 700)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
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
