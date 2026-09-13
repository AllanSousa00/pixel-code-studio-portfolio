import { motion } from 'motion/react'
import type { ReactNode } from 'react'

export function PageHero({ eyebrow, title, description, aside }: { eyebrow: string; title: ReactNode; description: string; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid" aria-hidden="true" />
      <div className="site-shell page-hero__inner">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
        </motion.div>
        {aside && <motion.div className="page-hero__aside" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .18 }}>{aside}</motion.div>}
      </div>
    </section>
  )
}
