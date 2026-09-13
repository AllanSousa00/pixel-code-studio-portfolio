import { ArrowRight } from '@phosphor-icons/react/dist/csr/ArrowRight'
import { BracketsCurly } from '@phosphor-icons/react/dist/csr/BracketsCurly'
import { Browser } from '@phosphor-icons/react/dist/csr/Browser'
import { Robot } from '@phosphor-icons/react/dist/csr/Robot'
import { Stack } from '@phosphor-icons/react/dist/csr/Stack'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { getProject, services } from '@/data/portfolio'
import { Link } from '@/lib/router'
import { breadcrumbSchema, usePageMeta } from '@/lib/seo'

const icons = [Browser, Stack, Robot, BracketsCurly]

export default function ServicesPage() {
  usePageMeta({ title: 'Serviços — Pixel Code Studio', description: 'Sites, plataformas web, bots, automações e experiências digitais desenvolvidos sob medida pela Pixel Code Studio.', path: '/servicos', jsonLd: breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Serviços', path: '/servicos' }]) })
  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Serviços' }]} />
      <PageHero eyebrow="Serviços" title={<>Tecnologia aplicada a uma necessidade <em>real.</em></>} description="A Pixel planeja, desenha e desenvolve cada solução a partir do objetivo do projeto, sem encaixar ideias diferentes no mesmo molde." />
      <section className="section-block services-detail"><div className="site-shell">{services.map((service, index) => { const Icon = icons[index]; const related = service.related.map(getProject).filter(Boolean); return <Reveal key={service.slug}><article id={service.slug}><div className="service-detail__number"><span>{service.number}</span><Icon weight="duotone" aria-hidden="true" /></div><div className="service-detail__copy"><h2>{service.title}</h2><p>{service.summary}</p><h3>O que pode ser desenvolvido</h3><ul>{service.examples.map((example) => <li key={example}>{example}</li>)}</ul><Link className="button button--primary" href={`/contato?tipo=${encodeURIComponent(service.title)}`}>Solicitar orçamento deste serviço <ArrowRight aria-hidden="true" /></Link></div><div className="service-detail__related"><span>Projetos relacionados</span>{related.map((project) => project && <Link href={`/projetos/${project.slug}`} key={project.slug}><img src={project.imageCompact} width={480} height={Math.round(480 * project.imageHeight / project.imageWidth)} alt={`Prévia de ${project.name}`} loading="lazy" /><strong>{project.name}</strong><ArrowRight aria-hidden="true" /></Link>)}</div></article></Reveal> })}</div></section>
      <section className="service-note"><div className="site-shell"><Reveal><p className="eyebrow">Projeto fora da lista?</p><h2>Uma necessidade diferente também pode ser analisada.</h2><p>Descreva a ideia e o que ela precisa resolver. Se houver viabilidade técnica e de escopo, a conversa continua com uma proposta específica.</p><Link className="button button--dark" href="/contato">Apresentar uma ideia <ArrowRight aria-hidden="true" /></Link></Reveal></div></section>
    </>
  )
}
