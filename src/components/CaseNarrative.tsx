import { MotionConfig, motion } from 'motion/react'
import type { ProjectChapter } from '../data/portfolio'

type CaseNarrativeProps = {
  chapters: ProjectChapter[]
  tags: string[]
}

const list = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function CaseNarrative({ chapters, tags }: CaseNarrativeProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.div
        className="case-narrative"
        variants={list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {chapters.map((chapter, index) => (
          <motion.article className="case-chapter" variants={item} key={chapter.title}>
            <span className="case-chapter__number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <div className="case-chapter__content">
              <span className="case-chapter__label">{chapter.label}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </div>
          </motion.article>
        ))}

        <motion.aside className="case-stack" variants={item} aria-label="Tecnologias utilizadas">
          <span>Base do projeto</span>
          <ul>
            {tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
        </motion.aside>
      </motion.div>
    </MotionConfig>
  )
}
