'use client'

import Image from 'next/image'
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent,
} from 'react'
import { tools } from '@/data/features'
import SiteIcon from '../SiteIcon'

const AUTOPLAY_MS = 7000
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

export default function Toolkit() {
  const [selected, setSelected] = useState(0)
  const [userChose, setUserChose] = useState(false)
  const [paused, setPaused] = useState(false)
  const tabs = useRef<HTMLDivElement>(null)
  // The server snapshot reports reduced motion, so nothing autoplays before hydration.
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => true,
  )
  // Autoplay only when motion is allowed, and stop for good once the user picks a tab.
  const autoplay = !reducedMotion && !userChose

  useEffect(() => {
    if (!autoplay || paused) return
    const timer = window.setTimeout(() => {
      if (!document.hidden) setSelected((index) => (index + 1) % tools.length)
    }, AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [autoplay, paused, selected])

  function choose(index: number) {
    setSelected(index)
    setUserChose(true)
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const offset = ({ ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 } as Record<string, number>)[event.key]
    if (!offset) return
    event.preventDefault()
    const next = (index + offset + tools.length) % tools.length
    choose(next)
    ;(tabs.current?.children[next] as HTMLButtonElement | undefined)?.focus()
  }

  const tool = tools[selected]

  return (
    <section id="toolkit" className="section">
      <div className="container-x">
        <div className="section-head reveal">
          <span className="kicker">Supporting tools</span>
          <h2 className="h-section">
            Everything around the interview, <span className="serif">in one place.</span>
          </h2>
          <p className="lead">
            Strong interviews start with a strong CV and a clear plan. These tools are
            included on every plan, including Student Free.
          </p>
        </div>

        <div
          className="toolkit"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div ref={tabs} role="tablist" aria-label="Supporting tools" className="toolkit__tabs reveal">
            {tools.map((item, index) => (
              <button
                key={item.title}
                id={`tool-tab-${index}`}
                type="button"
                role="tab"
                className="toolkit__tab"
                aria-selected={selected === index}
                aria-controls="tool-panel"
                tabIndex={selected === index ? 0 : -1}
                onClick={() => choose(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span className="icon-tile">
                  <SiteIcon name={item.icon} size={18} />
                </span>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
                {autoplay && selected === index && (
                  <span className="toolkit__progress" aria-hidden="true">
                    <i
                      key={`${selected}-${paused}`}
                      style={{ '--dur': `${AUTOPLAY_MS}ms`, animationPlayState: paused ? 'paused' : 'running' } as CSSProperties}
                    />
                  </span>
                )}
              </button>
            ))}
          </div>

          <div
            id="tool-panel"
            role="tabpanel"
            aria-labelledby={`tool-tab-${selected}`}
            className="toolkit__stage reveal"
            style={{ '--d': '.1s' } as CSSProperties}
          >
            {tools.map((item, index) => (
              <Image
                key={item.image}
                src={item.image}
                alt={index === selected ? item.alt : ''}
                aria-hidden={index !== selected}
                className={`toolkit__image${index === selected ? ' is-active' : ''}`}
                fill
                sizes="(min-width: 1024px) 640px, 100vw"
                priority={index === 0}
              />
            ))}
            <div className="toolkit__caption">
              <div>
                <strong>{tool.caption}</strong>
                <span>{tool.detail}</span>
              </div>
              <span className="pill">Included free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
