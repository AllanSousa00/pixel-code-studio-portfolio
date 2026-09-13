import { useMemo, useState } from 'react'
import { motion } from 'motion/react'
import { Briefcase } from '@phosphor-icons/react/dist/csr/Briefcase'
import { ProjectCard } from '@/components/ProjectCard'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { projects, type ProjectCategory } from '@/data/portfolio'
import { breadcrumbSchema, usePageMeta } from '@/lib/seo'

type Filter = 'Todos' | ProjectCategory

export default function ProjectsPage() {
  const filters: Filter[] = ['Todos', ...Array.from(new Set(projects.map((project) => project.category)))]
  const [filter, setFilter] = useState<Filter>('Todos')
  const visible = useMemo(() => filter === 'Todos' ? projects : projects.filter((project) => project.category === filter), [filter])
  usePageMeta({ title: 'Projetos — Pixel Code Studio', description: 'Explore os sites, plataformas, sistemas e experiências digitais publicados pela Pixel Code Studio.', path: '/projetos', jsonLd: breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Projetos', path: '/projetos' }]) })

  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Projetos' }]} />
      <PageHero eyebrow="Portfólio de projetos" title={<>Trabalhos reais, <em>abertos para explorar.</em></>} description="Cada página reúne contexto, tecnologias, decisões e um link para a entrega publicada." aside={<div className="page-stat"><Briefcase weight="duotone" aria-hidden="true" /><strong>{projects.length}</strong><span>projetos documentados</span></div>} />
      <section className="section-block projects-index">
        <div className="site-shell">
          <div className="filter-bar" role="tablist" aria-label="Filtrar projetos">{filters.map((item) => <button key={item} type="button" role="tab" aria-selected={filter === item} className={filter === item ? 'is-active' : ''} onClick={() => setFilter(item)}>{item}<span>{item === 'Todos' ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}</div>
          <motion.div className="project-grid" layout>{visible.map((project, index) => <motion.div className={index === 0 ? 'project-grid__item project-grid__item--wide' : 'project-grid__item'} key={project.slug} layout initial={{ opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}><ProjectCard project={project} priority={index === 0} className={index === 0 ? 'project-card--wide' : ''} /></motion.div>)}</motion.div>
          {!visible.length && <Reveal className="empty-state"><h2>Nenhum projeto nesta categoria.</h2><p>Escolha outro filtro para continuar explorando.</p></Reveal>}
        </div>
      </section>
    </>
  )
}
