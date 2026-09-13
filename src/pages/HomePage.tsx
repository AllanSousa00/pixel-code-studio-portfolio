import { motion, useReducedMotion } from 'motion/react'
import { ArrowDownRight } from '@phosphor-icons/react/dist/csr/ArrowDownRight'
import { ArrowRight } from '@phosphor-icons/react/dist/csr/ArrowRight'
import { BracketsCurly } from '@phosphor-icons/react/dist/csr/BracketsCurly'
import { Browser } from '@phosphor-icons/react/dist/csr/Browser'
import { Check } from '@phosphor-icons/react/dist/csr/Check'
import { Code } from '@phosphor-icons/react/dist/csr/Code'
import { Compass } from '@phosphor-icons/react/dist/csr/Compass'
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { Palette } from '@phosphor-icons/react/dist/csr/Palette'
import { Robot } from '@phosphor-icons/react/dist/csr/Robot'
import { RocketLaunch } from '@phosphor-icons/react/dist/csr/RocketLaunch'
import { Sparkle } from '@phosphor-icons/react/dist/csr/Sparkle'
import { Stack } from '@phosphor-icons/react/dist/csr/Stack'
import { CreatorSection } from '@/components/CreatorSection'
import { FaqSection } from '@/components/FaqSection'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { ReviewsSection } from '@/components/ReviewsSection'
import { TechMarquee } from '@/components/TechMarquee'
import { Reveal } from '@/components/common/Reveal'
import { SectionHeading } from '@/components/common/SectionHeading'
import { contact, faqs, processSteps, projects, services, technologies } from '@/data/portfolio'
import { Link } from '@/lib/router'
import { SITE_URL, usePageMeta } from '@/lib/seo'

const serviceIcons = [Browser, Stack, Robot, BracketsCurly]
const processIcons = [Compass, Palette, Code, Check, RocketLaunch, Sparkle]

export default function HomePage() {
  const reduceMotion = useReducedMotion()
  const homeSchema = [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Pixel Code Studio', url: SITE_URL, inLanguage: 'pt-BR' },
    { '@context': 'https://schema.org', '@type': 'Organization', name: 'Pixel Code Studio', url: SITE_URL, logo: `${SITE_URL}/brand/logo-dark.webp`, founder: { '@type': 'Person', name: 'Allan Sousa' }, sameAs: [contact.github, contact.linkedin, contact.youtube] },
    { '@context': 'https://schema.org', '@type': 'Person', name: 'Allan Sousa', url: `${SITE_URL}/sobre`, jobTitle: 'Criador e desenvolvedor', worksFor: { '@type': 'Organization', name: 'Pixel Code Studio' }, sameAs: [contact.github, contact.linkedin] },
    { '@context': 'https://schema.org', '@type': 'ProfessionalService', name: 'Pixel Code Studio', url: SITE_URL, areaServed: 'Brasil', serviceType: ['Desenvolvimento de sites', 'Plataformas web', 'Bots e automações', 'Experiências digitais'] },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
  ]
  usePageMeta({ title: 'Pixel Code Studio — Sites, plataformas, bots e sistemas', description: 'Conheça os projetos reais e os serviços digitais desenvolvidos por Allan Sousa na Pixel Code Studio.', path: '/', jsonLd: homeSchema })

  return (
    <>
      <section className="home-hero" id="inicio">
        <div className="home-hero__grid" aria-hidden="true" />
        <motion.div className="hero-pixel hero-pixel--lime" aria-hidden="true" animate={reduceMotion ? undefined : { y: [0, -18, 0], rotate: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }} />
        <motion.div className="hero-pixel hero-pixel--violet" aria-hidden="true" animate={reduceMotion ? undefined : { y: [0, 20, 0], rotate: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }} />
        <div className="site-shell home-hero__inner">
          <motion.div className="home-hero__copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <p className="eyebrow"><span className="status-dot" /> Desenvolvimento independente · projetos publicados</p>
            <h1>Produtos digitais com <em>identidade</em> e função.</h1>
            <p className="home-hero__lead">A Pixel Code Studio cria sites, plataformas, bots e experiências sob medida. Planejamento, interface e desenvolvimento reunidos por Allan Sousa.</p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/projetos">Ver projetos reais <ArrowDownRight aria-hidden="true" /></Link>
              <Link className="button button--ghost" href="/contato">Falar sobre um projeto <ArrowRight aria-hidden="true" /></Link>
            </div>
            <Link className="creator-byline" href="/sobre"><span>AS</span><span>Criado e desenvolvido por <strong>Allan Sousa</strong></span><ArrowRight aria-hidden="true" /></Link>
          </motion.div>
          <motion.aside className="home-hero__proof" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .7, delay: .15 }} aria-label="Resumo do portfólio">
            <div className="proof-window__bar"><i /><i /><i /><span>pixelcode.studio/work</span></div>
            <div className="proof-window__screen">
              <img src="/projects/vertice-enem-720.webp" width="720" height="918" alt="Interface real do projeto Vértice ENEM" fetchPriority="high" />
              <div><small>Projeto publicado</small><strong>Vértice ENEM</strong><Link href="/projetos/vertice-enem">Abrir case <ArrowRight aria-hidden="true" /></Link></div>
            </div>
            <div className="proof-window__footer"><span><strong>{String(projects.length).padStart(2, '0')}</strong> projetos no portfólio</span><a href={contact.github} target="_blank" rel="noopener noreferrer"><GithubLogo weight="fill" aria-hidden="true" /> GitHub</a></div>
          </motion.aside>
        </div>
      </section>

      <TechMarquee />

      <section className="section-block featured-section" id="projetos">
        <div className="site-shell">
          <Reveal><SectionHeading eyebrow="Trabalhos selecionados" title={<>Projetos reais, com acesso <em>para conferir.</em></>} text="A seleção alterna sozinha, mas também responde ao toque e ao teclado. Abra cada projeto para entender decisões, processo e resultado." action={<Link className="text-link" href="/projetos">Ver todos os projetos <ArrowRight aria-hidden="true" /></Link>} /></Reveal>
          <Reveal delay={.08}><FeaturedProjects projects={projects.filter((project) => project.featured)} /></Reveal>
        </div>
      </section>

      <section className="section-block service-home" id="servicos">
        <div className="site-shell">
          <Reveal><SectionHeading eyebrow="O que a Pixel desenvolve" title={<>Do primeiro mapa ao produto <em>publicado.</em></>} text="Serviços agrupados por resultado para ficar claro o que pode ser construído e como cada área se conecta." /></Reveal>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = serviceIcons[index]
              return <Reveal key={service.slug} delay={index * .06}><article id={service.slug}><div className="service-card__top"><span>{service.number}</span><Icon weight="duotone" aria-hidden="true" /></div><h3>{service.title}</h3><p>{service.summary}</p><ul>{service.examples.map((example) => <li key={example}>{example}</li>)}</ul><Link className="text-link" href={`/servicos#${service.slug}`}>Conhecer este serviço <ArrowRight aria-hidden="true" /></Link></article></Reveal>
            })}
          </div>
        </div>
      </section>

      <section className="section-block cases-home">
        <div className="site-shell">
          <Reveal><SectionHeading eyebrow="Cases" title={<>Problema, decisão e entrega <em>no mesmo contexto.</em></>} text="Cada case explica o que precisava ser resolvido e como a solução publicada foi construída, sem números inventados." /></Reveal>
          <div className="case-strip">
            {projects.filter((project) => project.caseStudy).map((project, index) => <Reveal key={project.slug} delay={index * .07}><article><span>{String(index + 1).padStart(2, '0')}</span><div><p>{project.category}</p><h3>{project.name}</h3></div><p>{project.challenge}</p><Link href={`/cases/${project.slug}`} aria-label={`Ver case de ${project.name}`}><ArrowRight aria-hidden="true" /></Link></article></Reveal>)}
          </div>
        </div>
      </section>

      <CreatorSection />

      <section className="section-block tech-section">
        <div className="site-shell">
          <Reveal><SectionHeading eyebrow="Tecnologias e prática" title={<>Ferramentas escolhidas pelo que o projeto <em>precisa fazer.</em></>} text="Sem porcentagens de habilidade. O que aparece aqui está relacionado às entregas apresentadas no portfólio." /></Reveal>
          <div className="tech-grid">{technologies.map((group, index) => <Reveal key={group.category} delay={index * .05}><article><span>{String(index + 1).padStart(2, '0')}</span><h3>{group.category}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section-block process-section" id="processo">
        <div className="site-shell">
          <Reveal><SectionHeading eyebrow="Como o trabalho acontece" title={<>Um caminho claro entre a ideia e a <em>entrega.</em></>} text="O escopo pode mudar, mas a sequência mantém decisões, revisão e publicação visíveis." /></Reveal>
          <div className="process-grid">{processSteps.map((step, index) => { const Icon = processIcons[index]; return <Reveal key={step.number} delay={index * .045}><article><div><span>{step.number}</span><motion.i animate={reduceMotion ? undefined : { y: [0, -5, 0], rotate: [0, 4, 0] }} transition={{ duration: 4 + index * .3, repeat: Infinity, ease: 'easeInOut' }}><Icon aria-hidden="true" /></motion.i></div><h3>{step.title}</h3><p>{step.text}</p></article></Reveal> })}</div>
        </div>
      </section>

      <ReviewsSection />
      <FaqSection />

      <section className="final-cta" id="contato">
        <div className="final-cta__grid" aria-hidden="true" />
        <div className="site-shell"><Reveal><p className="eyebrow">Próximo projeto</p><h2>Tem uma ideia que precisa sair do papel e <em>funcionar?</em></h2><p>Conte o que você quer construir. A Pixel analisa o escopo e conversa com você pelo canal que fizer mais sentido.</p><div><Link className="button button--dark" href="/contato">Solicitar um orçamento <ArrowRight aria-hidden="true" /></Link><Link className="button button--outline-dark" href="/sobre">Conhecer Allan Sousa</Link></div></Reveal></div>
      </section>
    </>
  )
}
