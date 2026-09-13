import { ArrowRight } from '@phosphor-icons/react/dist/csr/ArrowRight'
import { Code } from '@phosphor-icons/react/dist/csr/Code'
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { Lightbulb } from '@phosphor-icons/react/dist/csr/Lightbulb'
import { Target } from '@phosphor-icons/react/dist/csr/Target'
import { Wrench } from '@phosphor-icons/react/dist/csr/Wrench'
import { CreatorSection } from '@/components/CreatorSection'
import { ProjectCard } from '@/components/ProjectCard'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { PageHero } from '@/components/common/PageHero'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { contact, projects, technologies } from '@/data/portfolio'
import { Link } from '@/lib/router'
import { breadcrumbSchema, SITE_URL, usePageMeta } from '@/lib/seo'

const principles = [
  { icon: Target, title: 'Função antes do efeito', text: 'A interface nasce da ação que a pessoa precisa realizar e do conteúdo que ela precisa entender.' },
  { icon: Lightbulb, title: 'Identidade no contexto', text: 'Cada projeto recebe uma linguagem visual coerente com seu público e com a forma como será usado.' },
  { icon: Wrench, title: 'Construção verificável', text: 'Responsividade, navegação, estados e entrega publicada fazem parte do trabalho, não ficam para depois.' },
]

export default function AboutPage() {
  usePageMeta({ title: 'Sobre Allan Sousa — Pixel Code Studio', description: 'Conheça Allan Sousa, o criador e desenvolvedor por trás dos projetos da Pixel Code Studio.', path: '/sobre', jsonLd: [breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Sobre', path: '/sobre' }]), { '@context': 'https://schema.org', '@type': 'Person', name: 'Allan Sousa', url: `${SITE_URL}/sobre`, jobTitle: 'Criador e desenvolvedor', worksFor: { '@type': 'Organization', name: 'Pixel Code Studio' }, sameAs: [contact.github, contact.linkedin] }] })
  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Sobre' }]} />
      <PageHero eyebrow="Marca + pessoa + trabalho" title={<>A Pixel tem identidade. E tem uma pessoa <em>por trás dela.</em></>} description="A Pixel Code Studio é a marca que reúne os produtos digitais planejados e desenvolvidos por Allan Sousa." aside={<div className="page-stat page-stat--creator"><span>AS</span><strong>Allan Sousa</strong><small>Criador e desenvolvedor</small></div>} />
      <CreatorSection compact />
      <section className="section-block about-story"><div className="site-shell two-column"><Reveal><div><p className="eyebrow">Como a Pixel se apresenta</p><h2>Uma marca construída a partir do trabalho que já existe.</h2></div></Reveal><Reveal delay={.1}><div className="prose"><p>A Pixel reúne projetos de desenvolvimento, interface e automação em uma identidade única. O portfólio mostra entregas publicadas, explica como foram construídas e abre um caminho direto para novos pedidos.</p><p>Allan atua em todo esse percurso: entende a necessidade, organiza o produto, constrói a interface, desenvolve e prepara a publicação. Quando uma demanda pede algo diferente, ela é avaliada pelo problema que precisa resolver.</p><p>Dados como formação, tempo de experiência ou números de clientes não aparecem aqui porque ainda não foram fornecidos para publicação.</p></div></Reveal></div></section>
      <section className="section-block principles-section"><div className="site-shell"><Reveal><SectionHeading eyebrow="Princípios de trabalho" title={<>Clareza no processo. Personalidade na <em>entrega.</em></>} /></Reveal><div className="principles-grid">{principles.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * .07}><article><Icon weight="duotone" aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article></Reveal>)}</div></div></section>
      <section className="section-block about-tech"><div className="site-shell two-column"><Reveal><div><p className="eyebrow">Áreas de atuação</p><h2>Tecnologia, interface e produto no mesmo fluxo.</h2><p>As ferramentas variam conforme a entrega. O foco permanece na combinação entre experiência de uso, implementação e publicação.</p><a className="button button--ghost" href={contact.github} target="_blank" rel="noopener noreferrer"><GithubLogo weight="fill" aria-hidden="true" /> Ver GitHub público</a></div></Reveal><div className="about-tech__list">{technologies.map((group, index) => <Reveal key={group.category} delay={index * .05}><div><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.category}</h3><p>{group.items.join(' · ')}</p></div></Reveal>)}</div></div></section>
      <section className="section-block creator-projects"><div className="site-shell"><Reveal><SectionHeading eyebrow="Projetos que representam o trabalho" title={<>Produtos diferentes. A mesma atenção à <em>experiência.</em></>} text="Três entregas que mostram plataformas, educação e comunicação de evento." /></Reveal><div className="project-grid project-grid--three">{projects.filter((project) => project.caseStudy).map((project) => <ProjectCard project={project} key={project.slug} />)}</div><Link className="button button--primary centered-action" href="/projetos">Explorar portfólio completo <ArrowRight aria-hidden="true" /></Link></div></section>
      <section className="final-cta"><div className="site-shell"><Reveal><p className="eyebrow"><Code aria-hidden="true" /> Contato direto</p><h2>Quer conversar com quem vai desenvolver?</h2><p>Fale com Allan pelos canais oficiais da Pixel e explique o que precisa ser construído.</p><Link className="button button--dark" href="/contato">Falar sobre um projeto <ArrowRight aria-hidden="true" /></Link></Reveal></div></section>
    </>
  )
}
