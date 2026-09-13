import { motion, useReducedMotion } from 'motion/react'
import { Code } from '@phosphor-icons/react/dist/csr/Code'

const items = ['Pixel Code Studio', 'Sites sob medida', 'Plataformas web', 'Bots e automações', 'Experiências para jogos', 'Design com identidade', 'Projetos publicados']

export function TechMarquee() {
  const reduceMotion = useReducedMotion()
  return (
    <div className="tech-marquee" aria-label={items.join(', ')}>
      <motion.div className="tech-marquee__track" animate={reduceMotion ? undefined : { x: ['0%', '-50%'] }} transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}>
        {[0, 1].map((set) => <div className="tech-marquee__set" key={set} aria-hidden={set === 1}>{items.map((item) => <span key={`${set}-${item}`}><Code aria-hidden="true" />{item}</span>)}</div>)}
      </motion.div>
    </div>
  )
}
