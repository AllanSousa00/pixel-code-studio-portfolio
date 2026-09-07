/**
 * Adapted from Background Paths by Dorian Baffier, published on 21st.dev.
 * Source: https://21st.dev/@kokonutd/components/background-paths
 * Upstream: https://github.com/kokonut-labs/kokonutui
 * License: MIT
 */
import { memo, useMemo } from 'react'
import { motion, useReducedMotion } from 'motion/react'

function generateAestheticPath(index, position, type) {
  const amplitude = type === 'primary' ? 150 : type === 'secondary' ? 100 : 60
  const phase = index * 0.2
  const segments = type === 'primary' ? 10 : type === 'secondary' ? 8 : 6
  const points = []

  for (let step = 0; step <= segments; step += 1) {
    const progress = step / segments
    const eased = 1 - (1 - progress) ** 2
    const baseX = 2400 + (-4800 * eased)
    const baseY = 800 + ((-1600 + index * 25) * eased)
    const amplitudeFactor = 1 - eased * 0.3
    const wave = Math.sin(progress * Math.PI * 3 + phase) * (amplitude * 0.7 * amplitudeFactor)
      + Math.cos(progress * Math.PI * 4 + phase) * (amplitude * 0.3 * amplitudeFactor)
      + Math.sin(progress * Math.PI * 2 + phase) * (amplitude * 0.2 * amplitudeFactor)
    points.push({ x: baseX * position, y: baseY + wave })
  }

  return points.map((point, pointIndex) => {
    if (pointIndex === 0) return `M ${point.x} ${point.y}`
    const previous = points[pointIndex - 1]
    return `C ${previous.x + (point.x - previous.x) * 0.4} ${previous.y}, ${previous.x + (point.x - previous.x) * 0.6} ${point.y}, ${point.x} ${point.y}`
  }).join(' ')
}

const pathGroups = [
  { type: 'primary', count: 8, duration: 8, shift: 15, opacity: 0.18, width: 3.5 },
  { type: 'secondary', count: 10, duration: 6, shift: 10, opacity: 0.13, width: 2.5 },
  { type: 'accent', count: 6, duration: 4, shift: 5, opacity: 0.1, width: 1.5 },
]

const FloatingPaths = memo(function FloatingPaths({ position }) {
  const reduceMotion = useReducedMotion()
  const groups = useMemo(() => pathGroups.map((group) => ({
    ...group,
    paths: Array.from({ length: group.count }, (_, index) => ({
      id: `${group.type}-${position}-${index}`,
      d: generateAestheticPath(index, position, group.type),
      opacity: group.opacity + index * 0.015,
      width: group.width + index * 0.18,
    })),
  })), [position])

  return groups.map((group) => (
    <g key={group.type} opacity={group.type === 'primary' ? 1 : 0.78}>
      {group.paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="url(#pixel-path-gradient)"
          strokeLinecap="round"
          strokeWidth={path.width}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={reduceMotion ? { opacity: path.opacity, scale: 1 } : { opacity: path.opacity, scale: 1, y: [0, -group.shift, 0] }}
          transition={{ opacity: { duration: 1 }, scale: { duration: 1 }, y: { duration: group.duration, repeat: Infinity, ease: 'easeInOut' } }}
        />
      ))}
    </g>
  ))
})

export default memo(function BackgroundPaths() {
  return (
    <div className="path-field" aria-hidden="true">
      <svg fill="none" preserveAspectRatio="xMidYMid slice" viewBox="-2400 -800 4800 1600">
        <defs>
          <linearGradient id="pixel-path-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#c7ff38" stopOpacity="0.72" />
            <stop offset="52%" stopColor="#f4f4ef" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9975ff" stopOpacity="0.72" />
          </linearGradient>
        </defs>
        <FloatingPaths position={1} />
      </svg>
    </div>
  )
})
