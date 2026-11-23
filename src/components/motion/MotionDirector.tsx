'use client'

/*
 * Scroll and pointer choreography for the home page. Markup stays server-rendered
 * and fully visible; this component layers motion on top after hydration.
 * Each section has its own idea, tied to what the section says:
 *   hero      copy lifts away as the 3D mark turns (HeroScene)
 *   proof     icon tiles flip up, rules draw between facts
 *   interviews the sample report builds itself: ring, score, bars, transcript
 *   jobs      role cards deal out of a stack as you scroll
 *   toolkit   the stage opens like an aperture, photo drifts in parallax
 *   how it works a rail fills and lights each step in turn
 *   pricing   the featured plan rises first, the others swing in beside it
 *   faq / cta / footer  rules draw, the card opens, the wordmark rises
 * Headings share one typographic reveal (masked lines) so the page reads as one voice.
 * Reduced motion: nothing here runs; the page stays as authored.
 */

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger, SplitText)

type Cleanup = (() => void) | void

const EASE = 'expo.out'

const one = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  root.querySelector<T>(selector)
const all = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(selector))
const onEnter = (trigger: Element, start = 'top 85%') => ({ trigger, start, once: true })

function headings(): Cleanup {
  all('.h-section, .cta-card h2').forEach((heading) => {
    SplitText.create(heading, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: 1.15,
          ease: EASE,
          stagger: 0.09,
          scrollTrigger: onEnter(heading, 'top 88%'),
        }),
    })
  })

  all('.kicker').forEach((kicker) =>
    gsap.from(kicker, { '--kick': 0, opacity: 0, duration: 1, ease: EASE, scrollTrigger: onEnter(kicker, 'top 90%') }),
  )

  all('.section-head .lead, .split .lead, .faq__aside .lead').forEach((lead) =>
    gsap.from(lead, {
      opacity: 0,
      y: 14,
      filter: 'blur(6px)',
      duration: 1.1,
      delay: 0.18,
      ease: EASE,
      clearProps: 'filter',
      scrollTrigger: onEnter(lead, 'top 92%'),
    }),
  )
}

function hero(pointerFine: boolean): Cleanup {
  const section = one('.hero')
  if (!section) return
  const exit = { trigger: section, start: 'top top', end: 'bottom top', scrub: true }
  gsap.to('.hero__copy', { yPercent: -10, opacity: 0.15, ease: 'none', scrollTrigger: exit })
  gsap.to('.hero__grid', { yPercent: 24, ease: 'none', scrollTrigger: exit })

  const glow = one('.hero__glow', section)
  if (!pointerFine || !glow) return
  const x = gsap.quickTo(glow, 'x', { duration: 1.8, ease: 'power3' })
  const y = gsap.quickTo(glow, 'y', { duration: 1.8, ease: 'power3' })
  const onMove = (event: PointerEvent) => {
    x((event.clientX / window.innerWidth - 0.5) * 110)
    y((event.clientY / window.innerHeight - 0.5) * 70)
  }
  window.addEventListener('pointermove', onMove, { passive: true })
  return () => window.removeEventListener('pointermove', onMove)
}

function proof(): Cleanup {
  const strip = one('.proof')
  if (!strip) return
  const items = all('.proof__item', strip)
  gsap
    .timeline({ scrollTrigger: onEnter(strip, 'top 90%') })
    .from(items, { opacity: 0, y: 18, duration: 0.9, ease: EASE, stagger: 0.08 })
    .from(
      all('.icon-tile', strip),
      { rotationX: -100, transformPerspective: 500, transformOrigin: '50% 100%', duration: 1.1, ease: EASE, stagger: 0.08 },
      0.05,
    )
    .from(items, { '--rule': 0, duration: 1.2, ease: 'power3.inOut', stagger: 0.08 }, 0.1)
}

function interviews(pointerFine: boolean): Cleanup {
  const section = one('#interviews')
  if (!section) return
  const steps = all('.steps li', section)
  if (steps.length) {
    gsap.from(steps, {
      opacity: 0,
      x: -18,
      '--rule': 0,
      duration: 1,
      ease: EASE,
      stagger: 0.12,
      scrollTrigger: onEnter(steps[0], 'top 90%'),
    })
  }
  const cta = one('.section-cta', section)
  if (cta) gsap.from(cta, { opacity: 0, y: 14, duration: 0.9, ease: EASE, scrollTrigger: onEnter(cta, 'top 94%') })

  // The sample report assembles itself the way a real one arrives after a session.
  const report = one('.report', section)
  if (!report) return
  const ring = one<SVGCircleElement>('.score-ring__value', report)
  const score = one('.score-ring__label strong', report)
  const finalScore = Number(score?.textContent ?? 0)

  const build = gsap.timeline({ scrollTrigger: onEnter(report, 'top 80%') })
  build.from(report, {
    y: 80,
    rotationX: 14,
    opacity: 0,
    transformPerspective: 1400,
    transformOrigin: '50% 100%',
    duration: 1.3,
    ease: EASE,
  })
  if (ring) {
    const circumference = Number(ring.getAttribute('stroke-dasharray'))
    build.from(ring, { strokeDashoffset: circumference, duration: 1.6, ease: 'power3.out' }, 0.35)
  }
  if (score) {
    const counter = { value: 0 }
    score.textContent = '0'
    build.to(
      counter,
      {
        value: finalScore,
        duration: 1.6,
        ease: 'power3.out',
        onUpdate: () => {
          score.textContent = String(Math.round(counter.value))
        },
      },
      0.35,
    )
  }
  build
    .from(all('.comp-list li', report), { opacity: 0, y: 10, duration: 0.8, ease: EASE, stagger: 0.1 }, 0.45)
    .from(all('.comp-bar i', report), { scaleX: 0, duration: 1.2, ease: EASE, stagger: 0.12 }, 0.6)
    .from(all('.report__cols li', report), { opacity: 0, y: 8, duration: 0.7, ease: EASE, stagger: 0.07 }, 0.95)
    .from(all('.report__transcript p', report), { opacity: 0, y: 10, duration: 0.8, ease: EASE, stagger: 0.45 }, 1.3)

  const restoreScore = () => {
    if (score) score.textContent = String(finalScore)
  }
  if (!pointerFine) return restoreScore

  // Once built, the card answers the pointer with a slight lean.
  let settled = false
  build.eventCallback('onComplete', () => {
    settled = true
  })
  const rotateX = gsap.quickTo(report, 'rotationX', { duration: 0.9, ease: 'power3' })
  const rotateY = gsap.quickTo(report, 'rotationY', { duration: 0.9, ease: 'power3' })
  const onMove = (event: PointerEvent) => {
    if (!settled) return
    const box = report.getBoundingClientRect()
    rotateY(((event.clientX - box.left) / box.width - 0.5) * 5)
    rotateX(-((event.clientY - box.top) / box.height - 0.5) * 4)
  }
  const onLeave = () => {
    if (!settled) return
    rotateX(0)
    rotateY(0)
  }
  report.addEventListener('pointermove', onMove)
  report.addEventListener('pointerleave', onLeave)
  return () => {
    report.removeEventListener('pointermove', onMove)
    report.removeEventListener('pointerleave', onLeave)
    restoreScore()
  }
}

function jobs(): Cleanup {
  const section = one('#jobs')
  if (!section) return
  const stack = one('.job-stack', section)
  const cards = all('.job-card', section)
  const pills = stack ? all('.pill--accent', stack) : []
  const originals = pills.map((pill) => pill.textContent ?? '')

  if (stack && cards.length) {
    gsap.from(stack, { opacity: 0, y: 40, duration: 1, ease: EASE, scrollTrigger: onEnter(stack, 'top 92%') })
    cards.forEach((card, index) => gsap.set(card, { zIndex: cards.length - index }))

    // The roles start as one deck and deal out into the list as you scroll.
    gsap.fromTo(
      cards,
      {
        y: (index: number) => cards[0].offsetTop - cards[index].offsetTop + index * 16,
        scale: (index: number) => 1 - index * 0.05,
        rotation: (index: number) => (index === 0 ? 0 : index % 2 ? -1.6 : 1.4),
      },
      {
        y: 0,
        scale: 1,
        rotation: 0,
        ease: 'none',
        scrollTrigger: { trigger: stack, start: 'top 82%', end: 'top 32%', scrub: 0.8, invalidateOnRefresh: true },
      },
    )

    const count = gsap.timeline({ scrollTrigger: onEnter(stack, 'top 78%') })
    pills.forEach((pill, index) => {
      const text = originals[index]
      const target = parseInt(text, 10)
      if (Number.isNaN(target)) return
      const suffix = text.replace(/^\d+/, '')
      const counter = { value: 0 }
      pill.textContent = `0${suffix}`
      count.to(
        counter,
        {
          value: target,
          duration: 1.3,
          ease: 'power3.out',
          onUpdate: () => {
            pill.textContent = `${Math.round(counter.value)}${suffix}`
          },
        },
        index * 0.12,
      )
    })
  }

  const flow = all('.flow li', section)
  if (flow.length) {
    gsap.fromTo(
      flow,
      { clipPath: 'inset(0% 100% 0% 0% round 20px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 20px)',
        duration: 1.1,
        ease: 'expo.inOut',
        stagger: 0.1,
        clearProps: 'clipPath',
        scrollTrigger: onEnter(flow[0], 'top 90%'),
      },
    )
    gsap.from(all('.flow .icon-tile', section), {
      scale: 0.6,
      opacity: 0,
      duration: 0.9,
      ease: EASE,
      stagger: 0.1,
      delay: 0.45,
      scrollTrigger: onEnter(flow[0], 'top 90%'),
    })
  }

  all('.section-cta, .job-note', section).forEach((element) =>
    gsap.from(element, { opacity: 0, y: 12, duration: 0.9, ease: EASE, scrollTrigger: onEnter(element, 'top 96%') }),
  )

  return () =>
    pills.forEach((pill, index) => {
      pill.textContent = originals[index]
    })
}

function toolkit(): Cleanup {
  const section = one('#toolkit')
  if (!section) return
  const tabs = one('.toolkit__tabs', section)
  if (tabs) {
    gsap.from(all('.toolkit__tab', tabs), {
      opacity: 0,
      x: -20,
      duration: 1,
      ease: EASE,
      stagger: 0.1,
      scrollTrigger: onEnter(tabs, 'top 86%'),
    })
  }

  const stage = one('.toolkit__stage', section)
  const media = one('.toolkit__media', section)
  if (!stage || !media) return
  gsap
    .timeline({ scrollTrigger: onEnter(stage, 'top 84%') })
    .fromTo(
      stage,
      { clipPath: 'inset(14% 12% 14% 12% round 40px)' },
      { clipPath: 'inset(0% 0% 0% 0% round 24px)', duration: 1.5, ease: 'expo.inOut', clearProps: 'clipPath' },
    )
    .from(media, { scale: 1.3, duration: 1.9, ease: EASE }, 0)
    .from(one('.toolkit__caption', stage), { opacity: 0, y: 24, duration: 1, ease: EASE }, 0.95)

  gsap.fromTo(
    media,
    { yPercent: -4 },
    { yPercent: 4, ease: 'none', scrollTrigger: { trigger: stage, start: 'top bottom', end: 'bottom top', scrub: true } },
  )
}

function journey(desktop: boolean): Cleanup {
  const list = one('.journey')
  if (!list) return
  const steps = all('.journey__step', list)
  gsap.from(steps, { opacity: 0, y: 56, duration: 1.1, ease: EASE, stagger: 0.12, scrollTrigger: onEnter(list, 'top 86%') })

  if (desktop) {
    // A rail fills left to right; each step lights as the fill reaches its node.
    let thresholds: number[] = []
    const measure = () => {
      thresholds = steps.map((step) => (step.offsetLeft + 28) / Math.max(1, list.offsetWidth))
    }
    measure()
    let rail: gsap.core.Tween | null = null
    rail = gsap.fromTo(
      list,
      { '--progress': 0 },
      {
        '--progress': 1,
        ease: 'none',
        scrollTrigger: { trigger: list, start: 'top 74%', end: 'bottom 52%', scrub: 0.6, onRefresh: measure },
        onUpdate: () => {
          const progress = rail?.progress() ?? 0
          steps.forEach((step, index) => step.classList.toggle('is-lit', progress >= thresholds[index]))
        },
      },
    )
  } else {
    steps.forEach((step) =>
      ScrollTrigger.create({
        trigger: step,
        start: 'top 68%',
        onEnter: () => step.classList.add('is-lit'),
        onLeaveBack: () => step.classList.remove('is-lit'),
      }),
    )
  }

  return () => steps.forEach((step) => step.classList.remove('is-lit'))
}

function pricing(desktop: boolean): Cleanup {
  const grid = one('.plans')
  if (!grid) return
  const plans = all('.plan', grid)
  const featured = plans.findIndex((plan) => plan.classList.contains('plan--featured'))
  gsap.from(plans, {
    opacity: 0,
    y: (index: number) => (index === featured ? 96 : 60),
    rotationY: (index: number) => (!desktop || index === featured ? 0 : index < featured ? 16 : -16),
    transformOrigin: (index: number) => (index < featured ? '100% 50%' : '0% 50%'),
    transformPerspective: 1600,
    duration: 1.3,
    ease: EASE,
    stagger: { each: 0.14, from: 'center' },
    clearProps: 'transform',
    scrollTrigger: onEnter(grid, 'top 86%'),
  })
  const note = one('.plans__note')
  if (note) gsap.from(note, { opacity: 0, duration: 1, ease: EASE, scrollTrigger: onEnter(note, 'top 96%') })
}

function faq(): Cleanup {
  const items = all('.faq-item')
  if (!items.length) return
  gsap.from(items, {
    opacity: 0,
    y: 18,
    '--rule': 0,
    duration: 0.95,
    ease: EASE,
    stagger: 0.06,
    scrollTrigger: onEnter(items[0], 'top 92%'),
  })
  const link = one('.faq__aside .link')
  if (link) gsap.from(link, { opacity: 0, y: 10, duration: 0.9, delay: 0.3, ease: EASE, scrollTrigger: onEnter(link, 'top 96%') })
}

function closingCard(pointerFine: boolean): Cleanup {
  const card = one('.cta-card')
  if (!card) return

  // The card opens like an aperture as it scrolls up; the end state clears the shadow.
  gsap.fromTo(
    card,
    {
      clipPath: () => {
        const w = card.offsetWidth * 0.09
        const h = card.offsetHeight * 0.14
        return `inset(${h}px ${w}px ${h}px ${w}px round 56px)`
      },
    },
    {
      clipPath: 'inset(-90px -90px -90px -90px round 28px)',
      ease: 'none',
      scrollTrigger: { trigger: card, start: 'top 98%', end: 'top 42%', scrub: 0.7, invalidateOnRefresh: true },
    },
  )
  gsap
    .timeline({ scrollTrigger: onEnter(card, 'top 62%') })
    .from(one('p', card), { opacity: 0, y: 16, filter: 'blur(6px)', duration: 1, ease: EASE, clearProps: 'filter' }, 0.25)
    .from(all('.btn', card), { opacity: 0, y: 16, duration: 0.9, ease: EASE, stagger: 0.08 }, 0.4)

  if (!pointerFine) return
  // The grid brightens under the pointer.
  const onMove = (event: PointerEvent) => {
    const box = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - box.left}px`)
    card.style.setProperty('--my', `${event.clientY - box.top}px`)
  }
  card.addEventListener('pointermove', onMove)
  return () => card.removeEventListener('pointermove', onMove)
}

function footer(): Cleanup {
  const foot = one('.foot')
  if (!foot) return
  gsap.from(all('.foot__brand, .foot__cols nav', foot), {
    opacity: 0,
    y: 24,
    duration: 1,
    ease: EASE,
    stagger: 0.08,
    scrollTrigger: onEnter(foot, 'top 88%'),
  })

  const giant = one('.foot__giant', foot)
  if (!giant) return
  const split = SplitText.create(giant, { type: 'chars', charsClass: 'foot__char', aria: 'none' })
  gsap.from(split.chars, {
    yPercent: 105,
    ease: 'none',
    stagger: 0.06,
    scrollTrigger: { trigger: foot, start: 'top bottom', end: 'bottom bottom', scrub: 0.8 },
  })
}

/* Primary calls to action lean toward the pointer. */
function magnetic(): Cleanup {
  const cleanups = all('.hero .hero__actions .btn, .cta-card .btn, .nav__cta').map((button) => {
    const x = gsap.quickTo(button, 'x', { duration: 0.5, ease: 'power3' })
    const y = gsap.quickTo(button, 'y', { duration: 0.5, ease: 'power3' })
    const onMove = (event: PointerEvent) => {
      const box = button.getBoundingClientRect()
      x((event.clientX - box.left - box.width / 2) * 0.22)
      y((event.clientY - box.top - box.height / 2) * 0.32)
    }
    const onLeave = () => {
      x(0)
      y(0)
    }
    button.addEventListener('pointermove', onMove)
    button.addEventListener('pointerleave', onLeave)
    return () => {
      button.removeEventListener('pointermove', onMove)
      button.removeEventListener('pointerleave', onLeave)
    }
  })
  return () => cleanups.forEach((cleanup) => cleanup())
}

export default function MotionDirector() {
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        desktop: '(min-width: 1024px)',
        fine: '(hover: hover) and (pointer: fine)',
      },
      (context) => {
        const { motion, desktop, fine } = context.conditions as Record<string, boolean>
        if (!motion) return
        const cleanups: Cleanup[] = [
          headings(),
          hero(fine),
          proof(),
          interviews(fine),
          jobs(),
          toolkit(),
          journey(desktop),
          pricing(desktop),
          faq(),
          closingCard(fine),
          footer(),
          fine ? magnetic() : undefined,
        ]
        return () => cleanups.forEach((cleanup) => cleanup?.())
      },
    )

    // Trigger positions go stale when the page height changes (FAQ answers, late fonts).
    let timer = 0
    const refresh = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 160)
    }
    const observer = new ResizeObserver(refresh)
    const main = document.getElementById('main')
    if (main) observer.observe(main)
    document.fonts?.ready.then(refresh)

    return () => {
      window.clearTimeout(timer)
      observer.disconnect()
      mm.revert()
    }
  }, [])

  return null
}
