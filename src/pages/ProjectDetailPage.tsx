import { ArrowLeft } from '@phosphor-icons/react/dist/csr/ArrowLeft'
import { ArrowUpRight } from '@phosphor-icons/react/dist/csr/ArrowUpRight'
import { CheckCircle } from '@phosphor-icons/react/dist/csr/CheckCircle'
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { ProjectCard } from '@/components/ProjectCard'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { Reveal } from '@/components/common/Reveal'
import { getProject, projects } from '@/data/portfolio'
import { Link } from '@/lib/router'
import { breadcrumbSchema, SITE_URL, usePageMeta } from '@/lib/seo'
import NotFoundPage from './NotFoundPage'

export default function ProjectDetailPage({ slug }: { slug: string }) {
  const project = getProject(slug)
  usePageMeta({
    title: project ? `${project.name} — Projeto da Pixel Code Studio` : 'Projeto não encontrado — Pixel Code Studio',
    description: project?.summary || 'O projeto solicitado não foi encontrado no portfólio da Pixel Code Studio.',
    path: `/projetos/${slug}`,
    type: 'article',
    image: project?.imageSmall,
    noIndex: !project,
    jsonLd: project ? [
      breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Projetos', path: '/projetos' }, { name: project.name, path: `/projetos/${project.slug}` }]),
      { '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.name, description: project.summary, url: `${SITE_URL}/projetos/${project.slug}`, image: `${SITE_URL}${project.imageSmall}`, creator: { '@type': 'Person', name: 'Allan Sousa' } },
    ] : undefined,
  })
  if (!project) return <NotFoundPage embedded />

  const related = projects.filter((item) => item.slug !== project.slug && (item.category === project.category || item.featured)).slice(0, 2)

  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Projetos', href: '/projetos' }, { label: project.name }]} />
      <article className="project-detail">
        <header className="project-detail__hero site-shell">
          <div>
            <p className="eyebrow">{project.kind} · {project.status}</p>
            <h1>{project.name}</h1>
            <p className="lead">{project.summary}</p>
            <div className="project-detail__actions"><a className="button button--primary" href={project.live} target="_blank" rel="noopener noreferrer">Abrir projeto publicado <ArrowUpRight aria-hidden="true" /></a>{project.repo && <a className="button button--ghost" href={project.repo} target="_blank" rel="noopener noreferrer"><GithubLogo weight="fill" aria-hidden="true" /> Ver código</a>}</div>
          </div>
          <dl><div><dt>Categoria</dt><dd>{project.category}</dd></div><div><dt>Estado</dt><dd>{project.status}</dd></div><div><dt>Tecnologias</dt><dd>{project.technologies.join(', ')}</dd></div><div><dt>Desenvolvimento</dt><dd>Allan Sousa</dd></div></dl>
        </header>

        <div className="project-detail__cover site-shell"><img src={project.image} srcSet={`${project.imageCompact} 480w, ${project.imageSmall} 720w, ${project.image} ${project.imageWidth}w`} sizes="(max-width: 1280px) calc(100vw - 32px), 1240px" width={project.imageWidth} height={project.imageHeight} alt={`Interface publicada do projeto ${project.name}`} fetchPriority="high" /></div>

        <section className="section-block project-story"><div className="site-shell"><Reveal><div className="story-intro"><p className="eyebrow">Visão do projeto</p><h2>Da necessidade à <em>solução publicada.</em></h2></div></Reveal><div className="story-grid"><Reveal><article><span>01</span><h3>Desafio</h3><p>{project.challenge}</p></article></Reveal><Reveal delay={.08}><article><span>02</span><h3>Objetivo</h3><p>{project.objective}</p></article></Reveal><Reveal delay={.16}><article><span>03</span><h3>Solução</h3><p>{project.solution}</p></article></Reveal><Reveal delay={.24}><article><span>04</span><h3>Resultado</h3><p>{project.result}</p></article></Reveal></div></div></section>

        <section className="section-block project-process"><div className="site-shell two-column"><Reveal><div><p className="eyebrow">Construção</p><h2>Etapas que deram forma ao projeto.</h2><p>O processo abaixo registra a estrutura usada nesta entrega sem atribuir métricas que não foram medidas.</p></div></Reveal><div>{project.process.map((step, index) => <Reveal key={step} delay={index * .07}><div className="project-process__step"><CheckCircle weight="duotone" aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong></div></Reveal>)}</div></div></section>

        {project.caseStudy && <section className="case-callout"><div className="site-shell"><Reveal><div><p className="eyebrow">Case relacionado</p><h2>Veja as decisões com mais contexto.</h2><p>O case organiza problema, abordagem, execução e resultado qualitativo desta entrega.</p><Link className="button button--dark" href={`/cases/${project.slug}`}>Ler case completo <ArrowUpRight aria-hidden="true" /></Link></div></Reveal></div></section>}

        <section className="section-block related-projects"><div className="site-shell"><div className="related-heading"><h2>Continue pelo portfólio</h2><Link className="text-link" href="/projetos">Ver todos</Link></div><div className="project-grid project-grid--two">{related.map((item) => <ProjectCard project={item} key={item.slug} />)}</div><Link className="back-link" href="/projetos"><ArrowLeft aria-hidden="true" /> Voltar aos projetos</Link></div></section>
      </article>
    </>
  )
}
