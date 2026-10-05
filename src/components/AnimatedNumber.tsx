'use client'

import { useEffect, useRef, type HTMLAttributes } from 'react'

type AnimatedNumberProps = HTMLAttributes<HTMLSpanElement> & {
  target: number
  from?: number
  suffix?: string
  duration?: number
  threshold?: number
}

export default function AnimatedNumber({
  target,
  from = 0,
  suffix = '',
  duration = 2000,
  threshold = 0.5,
  ...props
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          const value = Math.round(
            from + (target - from) * (1 - Math.pow(1 - progress, 3)),
          )
          el.textContent = value.toLocaleString('en-US') + suffix
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [target, from, suffix, duration, threshold])

  return (
    <span ref={ref} {...props}>
      {from}
      {suffix}
    </span>
  )
}
