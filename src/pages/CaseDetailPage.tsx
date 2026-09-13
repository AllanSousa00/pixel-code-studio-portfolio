import { ArrowRight } from '@phosphor-icons/react/dist/csr/ArrowRight'
import { ArrowUpRight } from '@phosphor-icons/react/dist/csr/ArrowUpRight'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { Reveal } from '@/components/common/Reveal'
import { getProject } from '@/data/portfolio'
import { Link } from '@/lib/router'
import { breadcrumbSchema, SITE_URL, usePageMeta } from '@/lib/seo'
import NotFoundPage from './NotFoundPage'

export default function CaseDetailPage({ slug }: { slug: string }) {
  const project = getProject(slug)
  const valid = project?.caseStudy ? project : undefined
  usePageMeta({ title: valid ? `Case ${valid.name} — Pixel Code Studio` : 'Case não encontrado — Pixel Code Studio', description: valid ? `Entenda o desafio, a solução e o resultado do projeto ${valid.name}.` : 'O case solicitado não foi encontrado.', path: `/cases/${slug}`, type: 'article', image: valid?.imageSmall, noIndex: !valid, jsonLd: valid ? [breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Projetos', path: '/projetos' }, { name: `Case ${valid.name}`, path: `/cases/${valid.slug}` }]), { '@context': 'https://schema.org', '@type': 'CreativeWork', name: `Case ${valid.name}`, description: valid.summary, url: `${SITE_URL}/cases/${valid.slug}`, creator: { '@type': 'Person', name: 'Allan Sousa' } }] : undefined })
  if (!valid) return <NotFoundPage embedded />

  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Projetos', href: '/projetos' }, { label: `Case ${valid.name}` }]} />
      <article className="case-detail">
        <header className="case-detail__hero site-shell"><div><p className="eyebrow">Case · {valid.category}</p><h1>{valid.name}</h1><p className="lead">{valid.summary}</p><div><Link className="button button--primary" href={`/projetos/${valid.slug}`}>Ver página do projeto <ArrowRight aria-hidden="true" /></Link><a className="button button--ghost" href={valid.live} target="_blank" rel="noopener noreferrer">Abrir entrega <ArrowUpRight aria-hidden="true" /></a></div></div><figure><img src={valid.imageSmall} srcSet={`${valid.imageCompact} 480w, ${valid.imageSmall} 720w`} sizes="(max-width: 900px) calc(100vw - 32px), 46vw" width={valid.imageWidth} height={valid.imageHeight} alt={`Interface real usada no case ${valid.name}`} fetchPriority="high" /><figcaption>Captura da versão publicada</figcaption></figure></header>

        <section className="section-block case-narrative"><div className="site-shell"><Reveal><div className="case-chapter"><span>01 · Contexto</span><h2>O que precisava ser resolvido</h2><p>{valid.challenge}</p></div></Reveal><Reveal><div className="case-chapter"><span>02 · Objetivo</span><h2>O resultado buscado</h2><p>{valid.objective}</p></div></Reveal><Reveal><div className="case-chapter"><span>03 · Desenvolvimento</span><h2>Como a solução ganhou forma</h2><p>{valid.solution}</p><ol>{valid.process.map((step) => <li key={step}>{step}</li>)}</ol></div></Reveal><Reveal><div className="case-chapter"><span>04 · Entrega</span><h2>O que passou a existir</h2><p>{valid.result}</p><ul>{valid.technologies.map((item) => <li key={item}>{item}</li>)}</ul></div></Reveal></div></section>

        <section className="final-cta final-cta--case"><div className="site-shell"><Reveal><p className="eyebrow">Projeto parecido</p><h2>Quer aplicar uma solução assim em outra ideia?</h2><p>Conte o contexto. A Pixel avalia o escopo e organiza uma proposta para o que você realmente precisa.</p><Link className="button button--dark" href="/contato">Falar sobre meu projeto <ArrowRight aria-hidden="true" /></Link></Reveal></div></section>
      </article>
    </>
  )
}
