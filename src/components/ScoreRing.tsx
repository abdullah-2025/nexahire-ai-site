import type { CSSProperties } from 'react'

/** Interview score ring, as in the app's report: bronze value on a taupe-300 track. */
export default function ScoreRing({
  score,
  size = 92,
  stroke = 8,
}: {
  score: number
  size?: number
  stroke?: number
}) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - score / 100)

  return (
    <div className="score-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle
          className="score-ring__track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
        />
        <circle
          className="score-ring__value"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ '--circ': circumference } as CSSProperties}
        />
      </svg>
      <span className="score-ring__label">
        <strong>{score}</strong>
        <span>of 100</span>
      </span>
    </div>
  )
}
