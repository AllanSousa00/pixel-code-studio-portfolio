/**
 * Adapted from Spotlight by Julien Thibeaut, published on 21st.dev.
 * Source: https://21st.dev/@ibelick/components/spotlight
 * Upstream: https://github.com/ibelick/motion-primitives
 * License: MIT
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useSpring, useTransform } from 'motion/react'

export function Spotlight({ className = '', size = 420, springOptions = { bounce: 0, stiffness: 160, damping: 24 } }) {
  const containerRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const [parentElement, setParentElement] = useState(null)
  const reduceMotion = useReducedMotion()
  const mouseX = useSpring(0, springOptions)
  const mouseY = useSpring(0, springOptions)
  const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
  const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`)

  useEffect(() => {
    const parent = containerRef.current?.parentElement
    if (parent) setParentElement(parent)
  }, [])

  const handleMouseMove = useCallback((event) => {
    if (!parentElement || reduceMotion) return
    const { left, top } = parentElement.getBoundingClientRect()
    mouseX.set(event.clientX - left)
    mouseY.set(event.clientY - top)
  }, [mouseX, mouseY, parentElement, reduceMotion])

  useEffect(() => {
    if (!parentElement || reduceMotion) return undefined
    const abortController = new AbortController()
    parentElement.addEventListener('pointermove', handleMouseMove, { signal: abortController.signal })
    parentElement.addEventListener('pointerenter', () => setIsHovered(true), { signal: abortController.signal })
    parentElement.addEventListener('pointerleave', () => setIsHovered(false), { signal: abortController.signal })
    return () => abortController.abort()
  }, [handleMouseMove, parentElement, reduceMotion])

  return (
    <motion.div
      ref={containerRef}
      aria-hidden="true"
      className={`spotlight-effect ${className}`.trim()}
      animate={{ opacity: isHovered && !reduceMotion ? 1 : 0 }}
      style={{ width: size, height: size, left: spotlightLeft, top: spotlightTop }}
      transition={{ duration: 0.2 }}
    />
  )
}
