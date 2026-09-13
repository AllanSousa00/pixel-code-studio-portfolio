import { motion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react/dist/csr/ArrowUpRight'
import type { Project } from '@/data/portfolio'
import { Link } from '@/lib/router'

export function ProjectCard({ project, priority = false, className = '' }: { project: Project; priority?: boolean; className?: string }) {
  return (
    <motion.article className={`project-card ${className}`} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 340, damping: 25 }}>
      <Link href={`/projetos/${project.slug}`} className="project-card__media" aria-label={`Conhecer o projeto ${project.name}`}>
        <img
          src={project.image}
          srcSet={`${project.imageCompact} 480w, ${project.imageSmall} 720w, ${project.image} ${project.imageWidth}w`}
          sizes="(max-width: 700px) calc(100vw - 32px), (max-width: 1100px) 50vw, 42vw"
          width={project.imageWidth}
          height={project.imageHeight}
          alt={`Interface real do projeto ${project.name}`}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
        <span className="project-card__status">{project.status}</span>
      </Link>
      <div className="project-card__body">
        <div><span>{project.kind}</span><h3><Link href={`/projetos/${project.slug}`}>{project.name}</Link></h3></div>
        <p>{project.summary}</p>
        <ul aria-label={`Tecnologias de ${project.name}`}>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
        <Link className="text-link" href={`/projetos/${project.slug}`}>{project.caseStudy ? 'Ver projeto e case' : 'Conhecer o projeto'} <ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </motion.article>
  )
}
