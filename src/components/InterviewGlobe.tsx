'use client'

import { useEffect, useRef } from 'react'

type Point = {
  lat: number
  lon: number
  weight: number
}

const TAU = Math.PI * 2
const DEG = Math.PI / 180

function inEllipse(
  lat: number,
  lon: number,
  centerLat: number,
  centerLon: number,
  latRadius: number,
  lonRadius: number,
) {
  const x = (lon - centerLon) / lonRadius
  const y = (lat - centerLat) / latRadius
  return x * x + y * y <= 1
}

function isLand(lat: number, lon: number) {
  return (
    inEllipse(lat, lon, 47, -108, 28, 46) ||
    inEllipse(lat, lon, 25, -98, 17, 22) ||
    inEllipse(lat, lon, -17, -61, 40, 24) ||
    inEllipse(lat, lon, 52, 18, 18, 34) ||
    inEllipse(lat, lon, 18, 20, 37, 30) ||
    inEllipse(lat, lon, 43, 72, 28, 66) ||
    inEllipse(lat, lon, 16, 106, 24, 30) ||
    inEllipse(lat, lon, -25, 135, 15, 21) ||
    inEllipse(lat, lon, -42, 173, 8, 7) ||
    inEllipse(lat, lon, 65, -42, 13, 17)
  )
}

function createLandPoints() {
  const points: Point[] = []

  for (let lat = -78; lat <= 78; lat += 5) {
    const longitudeStep = 5 / Math.max(Math.cos(lat * DEG), 0.32)

    for (let lon = -180; lon < 180; lon += longitudeStep) {
      if (isLand(lat, lon)) {
        points.push({
          lat,
          lon,
          weight: 0.72 + ((lat + lon + 360) % 7) / 25,
        })
      }
    }
  }

  return points
}

const LAND_POINTS = createLandPoints()

export default function InterviewGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')

    if (!canvas || !context) return

    let frame = 0
    let rotation = -0.38
    let targetRotation = rotation
    let visible = true
    let dragging = false
    let lastPointerX = 0
    let width = 0
    let height = 0
    let pixelRatio = 1

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = Math.max(1, bounds.width)
      height = Math.max(1, bounds.height)
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)

      const radius = Math.min(width, height) * 0.44
      const centerX = width / 2
      const centerY = height / 2
      const glow = context.createRadialGradient(
        centerX - radius * 0.25,
        centerY - radius * 0.25,
        radius * 0.08,
        centerX,
        centerY,
        radius * 1.08,
      )
      glow.addColorStop(0, 'rgba(118, 167, 173, 0.12)')
      glow.addColorStop(0.72, 'rgba(20, 65, 71, 0.11)')
      glow.addColorStop(1, 'rgba(4, 46, 51, 0)')
      context.fillStyle = glow
      context.beginPath()
      context.arc(centerX, centerY, radius * 1.08, 0, TAU)
      context.fill()

      context.save()
      context.beginPath()
      context.arc(centerX, centerY, radius, 0, TAU)
      context.clip()

      context.strokeStyle = 'rgba(118, 167, 173, 0.13)'
      context.lineWidth = 0.7

      for (let latitude = -60; latitude <= 60; latitude += 30) {
        const y = Math.sin(latitude * DEG) * radius
        const latitudeRadius = Math.cos(latitude * DEG) * radius
        context.beginPath()
        context.ellipse(
          centerX,
          centerY - y,
          latitudeRadius,
          latitudeRadius * 0.18,
          0,
          0,
          TAU,
        )
        context.stroke()
      }

      for (let longitude = 0; longitude < 180; longitude += 30) {
        const angle = longitude * DEG + rotation
        context.beginPath()
        context.ellipse(
          centerX,
          centerY,
          Math.max(Math.abs(Math.cos(angle)) * radius, 0.5),
          radius,
          0,
          0,
          TAU,
        )
        context.stroke()
      }

      const projected = LAND_POINTS.map((point) => {
        const latitude = point.lat * DEG
        const longitude = point.lon * DEG + rotation
        const cosLatitude = Math.cos(latitude)
        const depth = cosLatitude * Math.cos(longitude)

        return {
          x: centerX + cosLatitude * Math.sin(longitude) * radius,
          y: centerY - Math.sin(latitude) * radius,
          depth,
          weight: point.weight,
        }
      }).filter((point) => point.depth > -0.08)

      projected.sort((a, b) => a.depth - b.depth)

      for (const point of projected) {
        const alpha = 0.16 + Math.max(0, point.depth) * 0.8
        const size = (0.8 + Math.max(0, point.depth) * 1.35) * point.weight
        context.fillStyle = `rgba(118, 167, 173, ${alpha})`
        context.beginPath()
        context.arc(point.x, point.y, size, 0, TAU)
        context.fill()
      }

      context.restore()

      context.strokeStyle = 'rgba(118, 167, 173, 0.48)'
      context.lineWidth = 1
      context.beginPath()
      context.arc(centerX, centerY, radius, 0, TAU)
      context.stroke()
    }

    const animate = () => {
      if (!dragging && !motionQuery.matches) targetRotation += 0.0018
      rotation += (targetRotation - rotation) * 0.12
      draw()
      frame = visible ? requestAnimationFrame(animate) : 0
    }

    const onPointerDown = (event: PointerEvent) => {
      dragging = true
      lastPointerX = event.clientX
      canvas.setPointerCapture(event.pointerId)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return
      targetRotation += (event.clientX - lastPointerX) * 0.008
      lastPointerX = event.clientX
    }

    const onPointerUp = (event: PointerEvent) => {
      dragging = false
      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId)
      }
    }

    const resizeObserver = new ResizeObserver(resize)
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !frame) animate()
    })

    resizeObserver.observe(canvas)
    intersectionObserver.observe(canvas)
    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointercancel', onPointerUp)
    resize()
    animate()

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      canvas.removeEventListener('pointerdown', onPointerDown)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerup', onPointerUp)
      canvas.removeEventListener('pointercancel', onPointerUp)
    }
  }, [])

  return (
    <div
      className="interview-globe"
      role="img"
      aria-label="Interactive rotating globe connecting candidates with live employers"
    >
      <canvas ref={canvasRef} aria-hidden="true" />
      <span className="interview-globe__orbit interview-globe__orbit--one" />
      <span className="interview-globe__orbit interview-globe__orbit--two" />
    </div>
  )
}
