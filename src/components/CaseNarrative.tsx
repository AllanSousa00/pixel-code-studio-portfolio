import { MotionConfig, motion } from 'motion/react'
import type { ProjectChapter } from '../data/portfolio'

type CaseNarrativeProps = {
  chapters: ProjectChapter[]
  tags: string[]
}

export default function CaseNarrative({ chapters, tags }: CaseNarrativeProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="case-narrative"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.12 }}
      >
        <div className="case-copy">
          {chapters.map((chapter) => (
          <section className="case-copy__section" key={chapter.title}>
            <div className="case-chapter__content">
              <span className="case-chapter__label">{chapter.label}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </div>
          </section>
          ))}
        </div>

        <aside className="case-stack" aria-label="Tecnologias utilizadas">
          <span>Feito com</span>
          <ul>
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </aside>
      </motion.div>
    </MotionConfig>
  )
}
