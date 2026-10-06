'use client'

import Image from 'next/image'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from 'react'
import { features } from '@/data/features'
import ScrubHeading from '../ScrubHeading'
import SiteIcon from '../SiteIcon'

export default function Features() {
  const [selected, setSelected] = useState(0)
  const [displayed, setDisplayed] = useState(0)
  const [front, setFront] = useState(0)
  const [images, setImages] = useState([0, 0])
  const [swapping, setSwapping] = useState(false)
  const [chipsVisible, setChipsVisible] = useState(false)
  const stage = useRef<HTMLDivElement>(null)
  const tabs = useRef<HTMLDivElement>(null)
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])
  const paused = useRef(false)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )
  const chipTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const current = useRef(0)
  const frontLayer = useRef(0)
  const visibleFeature = useRef(0)
  const feature = features[displayed]

  const select = useCallback((index: number) => {
    if (current.current === index) return
    current.current = index
    setSelected(index)
  }, [])

  useEffect(() => {
    const el = stage.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          chipTimer.current = setTimeout(() => {
            if (current.current === visibleFeature.current)
              setChipsVisible(true)
          }, 500)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    const interval = setInterval(() => {
      if (
        !paused.current &&
        !document.hidden &&
        !tabs.current?.matches(':focus-within')
      )
        select((current.current + 1) % features.length)
    }, 6000)
    return () => {
      observer.disconnect()
      clearInterval(interval)
      clearTimeout(chipTimer.current)
      clearTimeout(hoverTimer.current)
    }
  }, [select])

  useEffect(() => {
    clearTimeout(chipTimer.current)
    if (selected === visibleFeature.current) {
      setDisplayed(selected)
      setSwapping(false)
      if (selected !== 0 || stage.current?.classList.contains('visible')) {
        setChipsVisible(true)
      }
      return
    }
    let cancelled = false
    const animations: Animation[] = []
    let timer: ReturnType<typeof setTimeout> | undefined
    const outgoingIndex = frontLayer.current
    const incomingIndex = 1 - outgoingIndex
    const outgoing = imageRefs.current[outgoingIndex]
    const incoming = imageRefs.current[incomingIndex]
    if (!outgoing || !incoming) return
    const wipe = (
      image: HTMLImageElement,
      from: string,
      to: string,
      duration: number,
    ) => {
      const animation = image.animate([{ clipPath: from }, { clipPath: to }], {
        duration,
        easing: 'cubic-bezier(.7,0,.25,1)',
        fill: 'forwards',
      })
      animations.push(animation)
      return animation.finished
    }
    async function transition() {
      setChipsVisible(false)
      setSwapping(true)
      const preload = new window.Image()
      const loaded = new Promise<void>((resolve) => {
        preload.onload = preload.onerror = () => resolve()
        preload.src = features[selected].image
      })
      try {
        await Promise.all([
          loaded,
          wipe(outgoing!, 'inset(0 0 0 0)', 'inset(100% 0 0 0)', 650),
        ])
        if (cancelled) return
        setImages((previous) =>
          previous.map((value, index) =>
            index === incomingIndex ? selected : value,
          ),
        )
        setDisplayed(selected)
        incoming!.src = features[selected].image
        await incoming!.decode().catch(() => {})
        if (cancelled) return
        await wipe(incoming!, 'inset(100% 0 0 0)', 'inset(0 0 0 0)', 750)
        if (cancelled) return
        frontLayer.current = incomingIndex
        visibleFeature.current = selected
        setFront(incomingIndex)
        setSwapping(false)
        timer = setTimeout(() => setChipsVisible(true), 120)
      } catch {
        if (!cancelled) {
          frontLayer.current = incomingIndex
          visibleFeature.current = selected
          setImages((previous) =>
            previous.map((value, index) =>
              index === incomingIndex ? selected : value,
            ),
          )
          setDisplayed(selected)
          setFront(incomingIndex)
          setSwapping(false)
          setChipsVisible(true)
        }
      }
    }
    void transition()
    return () => {
      cancelled = true
      animations.forEach((animation) => animation.cancel())
      clearTimeout(timer)
    }
  }, [selected])

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const offset = (
      { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 } as Record<
        string,
        number
      >
    )[event.key]
    if (offset) {
      event.preventDefault()
      ;(
        tabs.current?.children[
          (index + offset + features.length) % features.length
        ] as HTMLButtonElement
      )?.focus()
    }
  }

  return (
    <div
      id="features"
      className="container-x mt-16 grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16"
    >
      <div className="reveal">
        <div className="mb-3 inline-flex items-center gap-2 px-2 text-[11px] font-semibold uppercase tracking-[.15em] text-[color:var(--muted)]">
          <span className="h-2 w-2 rounded-[3px] bg-[color:var(--violet)]" />
          Platform
        </div>
        <ScrubHeading className="h-section mb-6 px-2">
          Career impact across <span className="serif">every step</span>
        </ScrubHeading>
        <div
          id="fx-tabs"
          ref={tabs}
          role="tablist"
          className="space-y-1"
          aria-label="Platform features"
        >
          {features.map((item, index) => (
            <button
              key={item.title}
              id={`feature-tab-${index}`}
              role="tab"
              className={`fx-tab ${selected === index ? 'active' : ''}`}
              aria-selected={selected === index}
              aria-controls="fx-stage"
              tabIndex={selected === index ? 0 : -1}
              onClick={(event) => {
                select(index)
                event.currentTarget.blur()
              }}
              onMouseEnter={() => {
                paused.current = true
                clearTimeout(hoverTimer.current)
                hoverTimer.current = setTimeout(() => select(index), 140)
              }}
              onMouseLeave={() => {
                clearTimeout(hoverTimer.current)
                paused.current = false
              }}
              onFocus={() => select(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              <span className="flex items-center gap-3">
                <span className="fx-ic">
                  <SiteIcon name={item.icon} className="h-4 w-4" />
                </span>
                <span className="fx-title flex-1 text-[15.5px] font-semibold">
                  {item.title}
                </span>
                <span className="fx-dot" />
                <span className="fx-num text-[11px] font-bold">
                  0{index + 1}
                </span>
              </span>
              <span className="fx-desc">
                <p className="pl-[42px] pr-6 pt-2 text-[13.5px] leading-relaxed text-[color:var(--muted)]">
                  {item.description}
                </p>
              </span>
            </button>
          ))}
        </div>
      </div>
      <div
        id="fx-stage"
        ref={stage}
        role="tabpanel"
        aria-labelledby={`feature-tab-${selected}`}
        className="reveal relative mx-auto aspect-[1.08/1] w-full max-w-[560px]"
        style={{ '--d': '.15s' } as CSSProperties}
      >
        <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-indigo-600/25 via-violet-600/20 to-sky-500/20 blur-3xl" />
        <div
          className={`fx-panel fx-panel-l${swapping ? ' swap' : ''}`}
          id="fx-pl"
        />
        <div
          className={`fx-panel fx-panel-r${swapping ? ' swap' : ''}`}
          id="fx-pr"
        />
        <div className="absolute bottom-0 left-[9%] right-[9%] top-0 z-[2] overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-sky-50 shadow-2xl shadow-indigo-200/30 border border-[color:var(--line)]">
          {images.map((image, index) => (
            <Image
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el
              }}
              id={index === 0 ? 'fx-a' : 'fx-b'}
              className={`fx-layer${front === index ? ' on' : ''}`}
              src={features[image].image}
              alt={front === index ? features[image].title : ''}
              aria-hidden={front !== index}
              fill
              unoptimized
              loading="eager"
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent" />
        </div>
        <div className="fx-frame" />
        <div
          id="fx-chips"
          className={`pointer-events-none absolute inset-0 z-[4]${chipsVisible ? ' show' : ''}`}
        >
          <div
            className="chip glass-chip absolute right-[12%] top-[10%] grid h-9 w-9 place-items-center rounded-xl text-[color:var(--violet)]"
            style={{ '--i': 3 } as CSSProperties}
          >
            <SiteIcon id="fx-ico" name={feature.chipIcon} className="h-4 w-4" />
          </div>
          <div
            id="fx-tags"
            className="absolute bottom-[26%] left-[12%] flex flex-col gap-1.5"
          >
            {feature.tags.map(([icon, label], index) => (
              <div
                key={label}
                className="chip glass-chip inline-flex w-fit items-center gap-1.5 rounded-md px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-700"
                style={{ '--i': index } as CSSProperties}
              >
                <SiteIcon
                  name={icon}
                  className="h-3 w-3 text-[color:var(--violet)]"
                />
                {label}
              </div>
            ))}
          </div>
          <div
            className="chip absolute bottom-[14%] right-[4%]"
            style={{ '--i': 4 } as CSSProperties}
          >
            <div className="fx-float glass-chip rounded-xl px-3.5 py-2.5">
              <div id="fx-ct" className="text-[11.5px] font-bold text-[color:var(--ink)]">
                {feature.caption}
              </div>
              <div
                id="fx-cs"
                className="mt-0.5 text-[10px] text-[color:var(--muted)]"
              >
                {feature.subtitle}
              </div>
              <div className="mt-2 h-1 w-28 overflow-hidden rounded-full bg-indigo-100">
                <div className="fx-bar h-full w-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
