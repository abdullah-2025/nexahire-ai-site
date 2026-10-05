'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import SiteIcon from './SiteIcon'

/** One scroll pass for reveals, heading highlights, and the readiness score. */
export default function SiteSections({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const abort = new AbortController()
    const signal = abort.signal
    const wrap = root.querySelector<HTMLElement>('#rd-wrap')
    const arc = root.querySelector<SVGCircleElement>('#rd-arc')
    const number = root.querySelector<HTMLElement>('#rd-num')
    const bars = Array.from(root.querySelectorAll<HTMLElement>('.rd-bar > div'))
    const values = Array.from(root.querySelectorAll<HTMLElement>('.rd-val'))
    const orbs = Array.from(root.querySelectorAll<HTMLElement>('.rd-orb'))
    const headings = Array.from(
      root.querySelectorAll<HTMLElement>('[data-scrub]'),
    ).map((el) => ({ el, words: Array.from(el.querySelectorAll('.sw')) }))
    const totop = root.querySelector('#totop')
    let readinessVisible = false
    let frame = 0

    function update() {
      frame = 0
      const vh = window.innerHeight
      totop?.classList.toggle('show', window.scrollY > 700)
      for (const { el, words } of headings) {
        const top = el.getBoundingClientRect().top
        if (top < vh + 100 && top > -200) {
          const progress = Math.min(
            1,
            Math.max(0, (vh * 0.88 - top) / (vh * 0.42)),
          )
          const highlighted = Math.round(progress * words.length)
          words.forEach((word, index) =>
            word.classList.toggle('on', index < highlighted),
          )
        }
      }
      if (wrap && arc && number && readinessVisible) {
        const rect = wrap.getBoundingClientRect()
        const progress = Math.min(
          1,
          Math.max(0, (vh * 0.9 - rect.top) / (vh * 0.55)),
        )
        arc.style.strokeDashoffset = String(
          314.16 - ((78 * progress) / 100) * 314.16,
        )
        number.textContent = String(Math.round(78 * progress))
        bars.forEach((bar, index) => {
          const value = Number(bar.dataset.t) * progress
          bar.style.width = `${value}%`
          if (values[index]) values[index].textContent = `${Math.round(value)}%`
        })
        const movement = (rect.top + rect.height / 2 - vh / 2) / vh
        orbs.forEach((orb) => {
          orb.style.transform = `translateY(${movement * Number(orb.dataset.speed)}px)`
        })
      }
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const readinessObserver = new IntersectionObserver(
      ([entry]) => {
        readinessVisible = entry.isIntersecting
        schedule()
      },
      { rootMargin: '100px' },
    )
    if (wrap) readinessObserver.observe(wrap)
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            revealObserver.unobserve(entry.target)
          }
        }),
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    root
      .querySelectorAll('.reveal:not([data-react-reveal])')
      .forEach((el) => revealObserver.observe(el))

    root.querySelectorAll<HTMLElement>('.spot').forEach((card) => {
      let rect: DOMRect | null = null
      card.addEventListener(
        'pointerenter',
        () => {
          rect = card.getBoundingClientRect()
        },
        { passive: true, signal },
      )
      card.addEventListener(
        'pointermove',
        (event) => {
          rect ??= card.getBoundingClientRect()
          card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
          card.style.setProperty('--my', `${event.clientY - rect.top}px`)
        },
        { passive: true, signal },
      )
      card.addEventListener(
        'pointerleave',
        () => {
          rect = null
        },
        { passive: true, signal },
      )
    })
    const nodes = root.querySelectorAll<HTMLElement>('.pipeline-node')
    const cards = root.querySelectorAll<HTMLElement>('.step-card')
    cards.forEach((card, index) => {
      card.addEventListener(
        'mouseenter',
        () => nodes[index]?.classList.add('active'),
        { passive: true, signal },
      )
      card.addEventListener(
        'mouseleave',
        () => nodes[index]?.classList.remove('active'),
        { passive: true, signal },
      )
    })
    nodes.forEach((node, index) => {
      node.style.cursor = 'pointer'
      node.addEventListener(
        'click',
        () =>
          cards[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          }),
        { signal },
      )
    })
    window.addEventListener('scroll', schedule, { passive: true, signal })
    window.addEventListener('resize', schedule, { passive: true, signal })
    update()

    return () => {
      abort.abort()
      revealObserver.disconnect()
      readinessObserver.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className="site-sections">
      {children}
      <a href="#top" id="totop" aria-label="Back to top">
        <SiteIcon name="arrow-up" className="h-5 w-5" />
      </a>
    </div>
  )
}
