/**
 * Component API adapted from Marquee by Ali Imam on 21st.dev.
 * Source: https://21st.dev/@designali-in/components/marquee
 */
import { motion, useReducedMotion } from 'motion/react'

const speeds = { slow: 34, normal: 24, fast: 14 }

export function Marquee({ children, className = '', reverse = false, speed = 'normal', label }) {
  const reduceMotion = useReducedMotion()
  return (
    <div className={className} aria-label={label}>
      <motion.div
        className="marquee-track"
        animate={reduceMotion ? {} : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speeds[speed] ?? speeds.normal, repeat: Infinity, ease: 'linear' }}
      >
        <div className="marquee-set">{children}</div>
        <div className="marquee-set" aria-hidden="true">{children}</div>
      </motion.div>
    </div>
  )
}
