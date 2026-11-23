'use client'

/*
 * Hero centrepiece: the NexaHire mark as a ceramic-and-bronze sculpture.
 * Sequence: the N draws itself, then the bronze node (the hire) settles on the
 * right stem and sends out a voice pulse. Afterwards it floats, leans toward the
 * pointer, and turns away as the hero scrolls out. Colours are read from tokens.css.
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, Lightformer } from '@react-three/drei'
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import {
  INDICES_PER_SEGMENT,
  NODE_POSITION,
  NODE_RADIUS,
  STROKE_RADIUS,
  TUBULAR_SEGMENTS,
  createMark,
} from './markGeometry'

type Palette = { stone: string; ink: string; bronze: string; sand: string; taupe: string }

const BASE_ROTATION = { x: 0.1, y: -0.46 }
const PULSE_EVERY = 3.4
const PULSE_LENGTH = 2.6

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))

function readPalette(): Palette {
  const css = getComputedStyle(document.documentElement)
  const token = (name: string) => css.getPropertyValue(name).trim()
  return {
    stone: token('--stone-50'),
    ink: token('--ink-900'),
    bronze: token('--bronze-600'),
    sand: token('--sand-500'),
    taupe: token('--taupe-300'),
  }
}

/* Pointer in viewport space (-1…1), shared by the sculpture and the moving light. */
function usePointer() {
  const pointer = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.current.y = -((event.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
  return pointer
}

/* How far the hero has scrolled out of view, 0…1. */
function useHeroExit() {
  const exit = useRef(0)
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>('.hero')
    if (!hero) return
    const update = () => {
      exit.current = clamp01(window.scrollY / Math.max(1, hero.offsetHeight))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])
  return exit
}

/* Keep the sculpture the same apparent size in portrait and landscape stages. */
function FitCamera() {
  const get = useThree((state) => state.get)
  const size = useThree((state) => state.size)
  useLayoutEffect(() => {
    const { camera } = get()
    const aspect = size.width / Math.max(1, size.height)
    camera.position.z = aspect < 0.9 ? 7.3 * Math.min(1.3, 0.9 / aspect) : 7.3
    camera.updateProjectionMatrix()
  }, [get, size])
  return null
}

function Sculpture({ palette, reduced }: { palette: Palette; reduced: boolean }) {
  const { curve, geometry, start } = useMemo(() => createMark(), [])
  const group = useRef<THREE.Group>(null)
  const head = useRef<THREE.Mesh>(null)
  const node = useRef<THREE.Group>(null)
  const ringA = useRef<THREE.Mesh>(null)
  const ringB = useRef<THREE.Mesh>(null)
  const light = useRef<THREE.PointLight>(null)
  // Intro time advances by capped frame deltas, so a shader-compile stall pauses
  // the sequence instead of skipping it.
  const introTime = useRef(0)
  const pointer = usePointer()
  const exit = useHeroExit()

  useEffect(() => () => geometry.dispose(), [geometry])

  useFrame((state, delta) => {
    const now = state.clock.elapsedTime
    introTime.current += Math.min(delta, 1 / 30)
    const t = reduced ? 10 : introTime.current

    // 1 · The N draws itself, a rounded tip leading the stroke.
    const draw = easeInOutCubic(clamp01((t - 0.15) / 1.7))
    geometry.setDrawRange(0, Math.ceil(draw * TUBULAR_SEGMENTS) * INDICES_PER_SEGMENT)
    if (head.current) {
      head.current.visible = draw > 0
      head.current.position.copy(curve.getPointAt(Math.max(draw, 0.0001)))
    }

    // 2 · The node appears above the stem and settles onto it.
    const appear = easeOutCubic(clamp01((t - 1.55) / 0.55))
    const settle = easeOutExpo(clamp01((t - 1.75) / 1.1))
    if (node.current) {
      node.current.scale.setScalar(Math.max(0.0001, appear))
      node.current.position.set(NODE_POSITION.x, NODE_POSITION.y + (1 - settle) * 0.85, 0)
    }

    // 3 · Voice pulse: two rings breathe out from the node once it has landed.
    const sinceLanding = t - 2.6
    ;[ringA.current, ringB.current].forEach((ring, index) => {
      if (!ring) return
      const material = ring.material as THREE.MeshBasicMaterial
      const local = sinceLanding - index * 0.9
      if (reduced || local < 0) {
        ring.visible = false
        return
      }
      const phase = (local % PULSE_EVERY) / PULSE_LENGTH
      ring.visible = phase < 1
      const eased = easeOutCubic(clamp01(phase))
      ring.scale.setScalar(0.45 + eased * 0.6)
      material.opacity = 0.55 * (1 - eased)
    })

    // 4 · Pose: idle float, lean toward the pointer, turn away on scroll.
    const g = group.current
    if (!g) return
    const p = reduced ? { x: 0, y: 0 } : pointer.current
    const out = exit.current
    const targetY = BASE_ROTATION.y + p.x * 0.36 + out * 1.1
    const targetX = BASE_ROTATION.x - p.y * 0.2 + out * 0.25
    if (reduced) {
      g.rotation.set(targetX, targetY, 0)
    } else {
      g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 2.6, delta)
      g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 2.6, delta)
      g.rotation.z = Math.sin(now * 0.5) * 0.025
      g.position.y = Math.sin(now * 0.8) * 0.06 + out * 0.45
    }

    if (light.current) {
      light.current.position.x = THREE.MathUtils.damp(light.current.position.x, 0.6 + p.x * 3.2, 3, delta)
      light.current.position.y = THREE.MathUtils.damp(light.current.position.y, 1.2 + p.y * 2.2, 3, delta)
    }
  })

  return (
    <>
      <pointLight ref={light} position={[0.6, 1.2, 3.4]} intensity={9} distance={12} decay={2} color={palette.sand} />
      <group ref={group} rotation={[BASE_ROTATION.x, BASE_ROTATION.y, 0]}>
        {/* The N: warm stone ceramic with a clear glaze */}
        <mesh geometry={geometry}>
          <meshPhysicalMaterial
            color={palette.stone}
            roughness={0.34}
            clearcoat={0.85}
            clearcoatRoughness={0.16}
            sheen={0.5}
            sheenColor={palette.sand}
            envMapIntensity={0.95}
          />
        </mesh>
        <mesh position={start}>
          <sphereGeometry args={[STROKE_RADIUS, 36, 24]} />
          <meshPhysicalMaterial color={palette.stone} roughness={0.34} clearcoat={0.85} clearcoatRoughness={0.16} />
        </mesh>
        <mesh ref={head} visible={false}>
          <sphereGeometry args={[STROKE_RADIUS, 36, 24]} />
          <meshPhysicalMaterial color={palette.stone} roughness={0.34} clearcoat={0.85} clearcoatRoughness={0.16} />
        </mesh>

        {/* The node: polished bronze, plus its voice pulse */}
        <group ref={node} position={NODE_POSITION} scale={0.0001}>
          <mesh>
            <sphereGeometry args={[NODE_RADIUS, 48, 32]} />
            <meshPhysicalMaterial
              color={palette.bronze}
              metalness={0.92}
              roughness={0.3}
              clearcoat={0.5}
              clearcoatRoughness={0.25}
              envMapIntensity={3.2}
            />
          </mesh>
          <mesh ref={ringA} visible={false}>
            <torusGeometry args={[1, 0.011, 8, 120]} />
            <meshBasicMaterial color={palette.sand} transparent opacity={0} depthWrite={false} toneMapped={false} />
          </mesh>
          <mesh ref={ringB} visible={false}>
            <torusGeometry args={[1, 0.011, 8, 120]} />
            <meshBasicMaterial color={palette.sand} transparent opacity={0} depthWrite={false} toneMapped={false} />
          </mesh>
        </group>
      </group>
    </>
  )
}

export default function HeroScene({
  active,
  reduced,
  onReady,
}: {
  active: boolean
  reduced: boolean
  onReady: () => void
}) {
  const palette = useMemo(() => readPalette(), [])

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.05, 6.4], fov: 32 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={reduced ? 'demand' : active ? 'always' : 'never'}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.NeutralToneMapping
        gl.toneMappingExposure = 1.05
        gl.setClearColor(0x000000, 0)
        onReady()
      }}
    >
      <FitCamera />
      <ambientLight intensity={0.35} color={palette.taupe} />
      <directionalLight position={[3, 4.5, 5]} intensity={2.4} color={palette.stone} />
      <directionalLight position={[-4, -1.5, -3]} intensity={1.6} color={palette.sand} />

      {/* Studio reflections, built locally: no HDR download. */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2.6} color={palette.stone} position={[0, 5, 2]} scale={[10, 4, 1]} />
        <Lightformer form="rect" intensity={1.6} color={palette.sand} position={[5, 0.5, 1]} scale={[3, 8, 1]} />
        <Lightformer form="rect" intensity={1.1} color={palette.bronze} position={[-5, -1, 1]} scale={[3, 8, 1]} />
        <Lightformer form="ring" intensity={1.4} color={palette.stone} position={[0, 0, -6]} scale={4} />
      </Environment>

      <Sculpture palette={palette} reduced={reduced} />

      <ContactShadows
        position={[0, -1.5, 0]}
        scale={5.5}
        blur={2.8}
        far={3}
        opacity={0.55}
        resolution={512}
        color={palette.ink}
        frames={reduced ? 1 : Infinity}
      />
    </Canvas>
  )
}
