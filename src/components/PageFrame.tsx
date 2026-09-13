import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import type { ReactNode } from 'react'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'
import { MobileCTA } from './common/MobileCTA'

export function PageFrame({ children, pageKey }: { children: ReactNode; pageKey: string }) {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 30, restDelta: .001 })

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="conteudo"
          key={pageKey}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: reduceMotion ? .12 : .34, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <SiteFooter />
      <MobileCTA />
    </>
  )
}
