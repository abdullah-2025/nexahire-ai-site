import * as THREE from 'three'

/*
 * The NexaHire mark in 3D. Source: BrandLogo's 64×64 SVG, path "M20 48V22l24 26V31"
 * (stroke 8, round caps and joins) with the node at (44, 17), r 5.25.
 * One SVG unit = 1/16 of a scene unit, centred on (32, 32) with y flipped.
 */
const UNIT = 1 / 16
const toScene = (x: number, y: number) => new THREE.Vector3((x - 32) * UNIT, (32 - y) * UNIT, 0)

/* A touch slimmer than the SVG stroke (4): in the round, full weight reads inflated. */
export const STROKE_RADIUS = 3.5 * UNIT
export const NODE_RADIUS = 5.25 * UNIT
export const NODE_POSITION = toScene(44, 17)

export const TUBULAR_SEGMENTS = 240
export const RADIAL_SEGMENTS = 36
/** Index count for one tubular segment: two triangles per radial step. */
export const INDICES_PER_SEGMENT = RADIAL_SEGMENTS * 6

/* Straight runs joined by short quadratic fillets, so the tube bends like the
   SVG's round joins instead of kinking. */
function filletedPath(points: THREE.Vector3[], radius: number) {
  const path = new THREE.CurvePath<THREE.Vector3>()
  let from = points[0]
  for (let i = 1; i < points.length - 1; i++) {
    const corner = points[i]
    const into = corner.clone().sub(from).normalize()
    const out = points[i + 1].clone().sub(corner).normalize()
    const a = corner.clone().addScaledVector(into, -radius)
    const b = corner.clone().addScaledVector(out, radius)
    path.add(new THREE.LineCurve3(from, a))
    path.add(new THREE.QuadraticBezierCurve3(a, corner, b))
    from = b
  }
  path.add(new THREE.LineCurve3(from, points[points.length - 1]))
  return path
}

export function createMark() {
  const curve = filletedPath([toScene(20, 48), toScene(20, 22), toScene(44, 48), toScene(44, 31)], 0.16)
  const geometry = new THREE.TubeGeometry(curve, TUBULAR_SEGMENTS, STROKE_RADIUS, RADIAL_SEGMENTS, false)
  return { curve, geometry, start: curve.getPointAt(0) }
}
