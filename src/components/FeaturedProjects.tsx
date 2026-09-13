import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react/dist/csr/ArrowRight'
import { Pause } from '@phosphor-icons/react/dist/csr/Pause'
import { Play } from '@phosphor-icons/react/dist/csr/Play'
import type { Project } from '@/data/portfolio'
import { Link } from '@/lib/router'

export function FeaturedProjects({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (paused || reduceMotion || projects.length < 2) return
    const timer = window.setInterval(() => setActive((current) => (current + 1) % projects.length), 6200)
    return () => window.clearInterval(timer)
  }, [paused, projects.length, reduceMotion])

  const project = projects[active]
  if (!project) return null

  return (
    <div className="feature-showcase" aria-live="polite">
      <div className="feature-showcase__tabs" role="tablist" aria-label="Projetos em destaque">
        {projects.map((item, index) => (
          <button key={item.slug} type="button" role="tab" aria-selected={active === index} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)}>
            <span>{String(index + 1).padStart(2, '0')}</span>{item.name}
          </button>
        ))}
      </div>
      <div className="feature-showcase__stage">
        <AnimatePresence mode="wait">
          <motion.article
            key={project.slug}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 36, scale: .985 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -28, scale: .985 }}
            transition={{ duration: reduceMotion ? .14 : .58, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="feature-showcase__media">
              <img src={project.showcase || project.imageSmall} width={project.showcase ? 640 : project.imageWidth} height={project.showcase ? 416 : project.imageHeight} alt={`Tela real do projeto ${project.name}`} loading={active === 0 ? 'eager' : 'lazy'} decoding="async" />
            </div>
            <div className="feature-showcase__copy">
              <span>{project.kind}</span>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="feature-showcase__meta"><strong>{project.status}</strong><span>{project.technologies.slice(0, 2).join(' · ')}</span></div>
              <Link className="button button--primary" href={`/projetos/${project.slug}`}>Ver projeto completo <ArrowRight aria-hidden="true" /></Link>
            </div>
          </motion.article>
        </AnimatePresence>
        <button className="showcase-control" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Continuar troca automática' : 'Pausar troca automática'}>{paused ? <Play weight="fill" aria-hidden="true" /> : <Pause weight="fill" aria-hidden="true" />}{paused ? 'Continuar' : 'Pausar'}</button>
      </div>
    </div>
  )
}
