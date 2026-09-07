/**
 * Adapted from Text Rotate by Daniel Petho, published on 21st.dev.
 * Source: https://21st.dev/@danielpetho/components/text-rotate
 * Upstream: https://github.com/danielpetho/fancy
 * License: MIT
 */
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import { AnimatePresence, motion } from 'motion/react'

const joinClasses = (...classes) => classes.filter(Boolean).join(' ')
const motionElements = { span: motion.span, strong: motion.strong, p: motion.p }

const splitIntoCharacters = (text) => {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('pt-BR', { granularity: 'grapheme' })
    return Array.from(segmenter.segment(text), ({ segment }) => segment)
  }
  return Array.from(text)
}

const TextRotate = forwardRef(function TextRotate(
  {
    texts,
    as = 'span',
    rotationInterval = 2300,
    initial = { y: '100%', opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: '-120%', opacity: 0 },
    transition = { type: 'spring', damping: 25, stiffness: 300 },
    staggerDuration = 0.018,
    staggerFrom = 'last',
    splitBy = 'characters',
    loop = true,
    auto = true,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    onNext,
    ...props
  },
  ref,
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex]
    if (splitBy === 'characters') {
      return currentText.split(' ').map((word, index, words) => ({
        characters: splitIntoCharacters(word),
        needsSpace: index !== words.length - 1,
      }))
    }
    const parts = splitBy === 'words' ? currentText.split(' ') : splitBy === 'lines' ? currentText.split('\n') : currentText.split(splitBy)
    return parts.map((part, index) => ({ characters: [part], needsSpace: index !== parts.length - 1 }))
  }, [currentTextIndex, splitBy, texts])

  const changeIndex = useCallback((nextIndex) => {
    setCurrentTextIndex(nextIndex)
    onNext?.(nextIndex)
  }, [onNext])

  const next = useCallback(() => {
    setCurrentTextIndex((current) => {
      const nextIndex = current === texts.length - 1 ? (loop ? 0 : current) : current + 1
      if (nextIndex !== current) onNext?.(nextIndex)
      return nextIndex
    })
  }, [loop, onNext, texts.length])

  const previous = useCallback(() => {
    setCurrentTextIndex((current) => {
      const nextIndex = current === 0 ? (loop ? texts.length - 1 : current) : current - 1
      if (nextIndex !== current) onNext?.(nextIndex)
      return nextIndex
    })
  }, [loop, onNext, texts.length])

  useImperativeHandle(ref, () => ({
    next,
    previous,
    jumpTo: (index) => changeIndex(Math.max(0, Math.min(index, texts.length - 1))),
    reset: () => changeIndex(0),
  }), [changeIndex, next, previous, texts.length])

  useEffect(() => {
    if (!auto) return undefined
    const timer = window.setInterval(next, rotationInterval)
    return () => window.clearInterval(timer)
  }, [auto, next, rotationInterval])

  const getDelay = useCallback((index, total) => {
    if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration
    if (staggerFrom === 'center') return Math.abs(Math.floor(total / 2) - index) * staggerDuration
    if (typeof staggerFrom === 'number') return Math.abs(staggerFrom - index) * staggerDuration
    return index * staggerDuration
  }, [staggerDuration, staggerFrom])

  const MotionComponent = motionElements[as] ?? motion.span
  const totalCharacters = elements.reduce((sum, word) => sum + word.characters.length, 0)

  return (
    <MotionComponent className={joinClasses('text-rotate', mainClassName)} layout transition={transition} {...props}>
      <span className="sr-only" aria-live="polite">{texts[currentTextIndex]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={currentTextIndex} className={joinClasses('text-rotate__line', splitBy === 'lines' && 'text-rotate__line--column')} aria-hidden="true" layout>
          {elements.map((word, wordIndex) => {
            const previousCount = elements.slice(0, wordIndex).reduce((sum, item) => sum + item.characters.length, 0)
            return (
              <span className={joinClasses('text-rotate__segment', splitLevelClassName)} key={`${word.characters.join('')}-${wordIndex}`}>
                {word.characters.map((character, characterIndex) => {
                  const itemIndex = previousCount + characterIndex
                  return (
                    <span className={elementLevelClassName} key={`${character}-${characterIndex}`}>
                      <motion.span className="text-rotate__character" initial={initial} animate={animate} exit={exit} transition={{ ...transition, delay: getDelay(itemIndex, totalCharacters) }}>
                        {character}
                      </motion.span>
                    </span>
                  )
                })}
                {word.needsSpace && <span>&nbsp;</span>}
              </span>
            )
          })}
        </motion.span>
      </AnimatePresence>
    </MotionComponent>
  )
})

export default TextRotate
