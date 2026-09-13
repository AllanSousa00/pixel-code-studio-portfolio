import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react/dist/csr/CaretDown'
import { faqs } from '@/data/portfolio'
import { SectionHeading } from './common/SectionHeading'
import { Reveal } from './common/Reveal'

export function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section className="section-block faq-section">
      <div className="site-shell">
        <Reveal><SectionHeading eyebrow="Perguntas frequentes" title={<>O que você precisa saber <em>antes de começar.</em></>} text="Respostas diretas sobre contratação, prazo, pagamento, alterações e acompanhamento." /></Reveal>
        <div className="faq-list">
          {faqs.map((item, index) => {
            const active = open === index
            return (
              <Reveal key={item.question} delay={Math.min(index * .035, .18)}>
                <div className={active ? 'faq-item is-open' : 'faq-item'}>
                  <h3><button type="button" onClick={() => setOpen(active ? -1 : index)} aria-expanded={active} aria-controls={`faq-${index}`}><span>{String(index + 1).padStart(2, '0')}</span>{item.question}<CaretDown aria-hidden="true" /></button></h3>
                  <AnimatePresence initial={false}>{active && <motion.div id={`faq-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .26 }}><p>{item.answer}</p></motion.div>}</AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
