'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

/* Three.js loads after the headline has painted, and never without WebGL. */
const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false })

function supportsWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export default function HeroStage() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [active, setActive] = useState(true)
  const [reduced, setReduced] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!supportsWebGL()) return
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const syncMotion = () => setReduced(query.matches)
    syncMotion()
    query.addEventListener('change', syncMotion)

    // Shader compilation can block the main thread, so the scene mounts once the
    // headline has mostly unfolded; the mark then finishes the sentence.
    let idle: number | undefined
    const start = () => setEnabled(true)
    const timer = window.setTimeout(() => {
      if (window.requestIdleCallback) idle = window.requestIdleCallback(start, { timeout: 600 })
      else start()
    }, query.matches ? 0 : 1100)

    return () => {
      query.removeEventListener('change', syncMotion)
      window.clearTimeout(timer)
      if (idle !== undefined) window.cancelIdleCallback(idle)
    }
  }, [])

  // Stop rendering while the hero is off screen.
  useEffect(() => {
    const stage = ref.current
    if (!stage) return
    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), { rootMargin: '80px' })
    observer.observe(stage)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`hero__stage${ready ? ' is-ready' : ''}`} aria-hidden="true">
      {enabled && <HeroScene active={active} reduced={reduced} onReady={() => setReady(true)} />}
    </div>
  )
}
