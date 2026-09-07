import type { ComponentType, ReactNode } from 'react'
import {
  MotionConfig,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Braces,
  Check,
  Code2,
  Compass,
  Layers3,
  Mail,
  MousePointer2,
  Palette,
  Rocket,
  Sparkles,
  Zap,
} from 'lucide-react'
import BackgroundPaths from './components/ui/BackgroundPaths'
import BottomNavBar from './components/ui/bottom-nav-bar'
import { ElasticGallery } from './components/ui/elastic-gallery'
import { GitHubLogo } from './components/ui/github-logo'
import { Marquee } from './components/ui/Marquee'
import SiteFooter from './components/ui/footer'
import { DiscordIcon, WhatsAppIcon } from './components/ui/social-brand-icons'
import TextRotate from './components/ui/TextRotate'

const TypedTextRotate = TextRotate as ComponentType<{
  texts: string[]
  as?: 'span' | 'strong' | 'p'
  mainClassName?: string
  rotationInterval?: number
}>

type Project = {
  name: string
  kind: string
  description: string
  image: string
  live: string
  repo?: string
  tags: string[]
}

const projects: Project[] = [
  {
    name: 'Vértice ENEM',
    kind: 'Plataforma educacional',
    description: 'Biblioteca editorial de repertórios socioculturais, com busca, autenticação e uma experiência pensada para transformar referência em argumento.',
    image: '/projects/vertice-enem.webp',
    live: 'https://vertice-enem.contato-repertoryd.workers.dev',
    tags: ['React', 'TypeScript', 'Cloudflare'],
  },
  {
    name: 'Conexões Modernistas',
    kind: 'Jogo educacional ao vivo',
    description: 'Experiência para sala de aula com partidas individuais e ao vivo, códigos de acesso e conteúdo sobre as três gerações modernistas.',
    image: '/projects/conexoes-modernistas.webp',
    live: 'https://conexoes-modernistas.contato-repertoryd.workers.dev',
    tags: ['React', 'Multiplayer', 'UX educacional'],
  },
  {
    name: 'SIMITEC 2026',
    kind: 'Portal de evento',
    description: 'Portal completo para evento escolar, reunindo programação, inscrições, galeria, atendimento e conteúdo institucional em uma só experiência.',
    image: '/projects/simitec.webp',
    live: 'https://simitec-ofc.pages.dev',
    tags: ['JavaScript', 'Design editorial', 'Cloudflare Pages'],
  },
  {
    name: 'Repertoryd',
    kind: 'Produto digital',
    description: 'Plataforma de estudo com catálogo de filmes e séries, repertórios por eixo temático, redações, simulados e área autenticada.',
    image: '/projects/repertoryd.webp',
    live: 'https://repertoryd.pages.dev',
    tags: ['JavaScript', 'Autenticação', 'Plataforma'],
  },
  {
    name: 'Português em Jogos',
    kind: 'Hub de jogos',
    description: 'Hub responsivo que organiza quiz e trilha de habilidades em experiências independentes, rápidas e preparadas para uso educacional.',
    image: '/projects/portugues-em-jogos.webp',
    live: 'https://portugues-em-jogos.pages.dev',
    repo: 'https://github.com/AllanSousa00/Jogos-de-L-ngua-Portuguesa',
    tags: ['JavaScript', 'Gamificação', 'Responsivo'],
  },
  {
    name: 'Central de Autorizações',
    kind: 'Fluxo operacional',
    description: 'Formulário em etapas para receber solicitações de direitos de uso, organizar dados e conduzir cada pedido para análise.',
    image: '/projects/site-de-pedidos.webp',
    live: 'https://site-de-pedidos-pt.pages.dev',
    tags: ['Formulários', 'Integração', 'Automação'],
  },
  {
    name: 'Portal de Direitos',
    kind: 'Sistema de solicitações',
    description: 'Experiência acessível para pedidos de uso de software, com fluxo progressivo, finalidade detalhada e contato centralizado.',
    image: '/projects/portal-direitos.webp',
    live: 'https://portal-de-direitos-calculadora.pages.dev',
    repo: 'https://github.com/AllanSousa00/Calculadora',
    tags: ['HTML', 'JavaScript', 'UX de formulário'],
  },
]

const services = [
  { icon: Layers3, number: '01', title: 'Sites que apresentam e vendem', text: 'Landing pages, portais e experiências institucionais com mensagem clara, identidade própria e navegação que leva à ação.' },
  { icon: Braces, number: '02', title: 'Plataformas sob medida', text: 'Produtos digitais com áreas autenticadas, catálogos, painéis, formulários, integrações e regras específicas para o seu negócio.' },
  { icon: Bot, number: '03', title: 'Bots e automações', text: 'Bots para Discord, WhatsApp e Telegram, além de fluxos que conectam atendimento, pedidos, pagamentos e operação.' },
  { icon: Zap, number: '04', title: 'Experiências para jogos', text: 'Lojas, launchers, servidores e sistemas para Minecraft, FiveM e Roblox com apresentação profissional e comunidade no centro.' },
]

const process = [
  { icon: Compass, number: '01', title: 'Direção', text: 'Entendemos o objetivo, o público e o que precisa acontecer depois que alguém acessa o produto.' },
  { icon: Palette, number: '02', title: 'Sistema visual', text: 'Criamos linguagem, hierarquia e interações que tornam o projeto reconhecível e fácil de usar.' },
  { icon: Code2, number: '03', title: 'Construção', text: 'Desenvolvemos em ciclos curtos, validando responsividade, conteúdo e os fluxos mais importantes.' },
  { icon: Rocket, number: '04', title: 'Lançamento', text: 'Publicamos, testamos em produção e deixamos uma base preparada para evolução e manutenção.' },
]

const technologies = ['Pixel Code Studio', 'Sites sob medida', 'Plataformas web', 'Bots e automações', 'Experiências para jogos', 'Design com identidade', 'Projetos reais']
const rotatingWords = ['sites', 'plataformas', 'bots', 'experiências']
const contactLink = 'mailto:allancruzsousa519@gmail.com?subject=Quero%20criar%20um%20projeto%20com%20a%20Pixel%20Code%20Studio'
const whatsappLink = import.meta.env.VITE_WHATSAPP_URL?.trim() || 'https://wa.me/5583996309727?text=Ol%C3%A1%21%20Encontrei%20a%20Pixel%20Code%20Studio%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.'
const discordLink = import.meta.env.VITE_DISCORD_URL?.trim() || 'https://discord.gg/n8fzg8KFV5'

const conversationChannels = [
  {
    name: 'WhatsApp',
    description: 'Converse diretamente sobre orçamento, prazo e detalhes do projeto.',
    href: whatsappLink,
    icon: WhatsAppIcon,
    modifier: 'whatsapp',
  },
  {
    name: 'Discord',
    description: 'Entre no servidor da Pixel Code Studio e acompanhe tudo por lá.',
    href: discordLink,
    icon: DiscordIcon,
    modifier: 'discord',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const } },
}

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
      {children}
    </motion.div>
  )
}

function App() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 30, restDelta: 0.001 })
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, reduceMotion ? 0 : 110])

  return (
    <MotionConfig reducedMotion="user">
      <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
      <header className="site-header">
        <BottomNavBar className="top-nav" />
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <BackgroundPaths />
          <motion.div className="hero-orb hero-orb--lime" animate={reduceMotion ? {} : { x: [0, 24, 0], y: [0, -18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} aria-hidden="true" />
          <motion.div className="hero-orb hero-orb--violet" animate={reduceMotion ? {} : { x: [0, -18, 0], y: [0, 24, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} aria-hidden="true" />
          <motion.div className="hero-content" style={{ y: heroY }}>
            <motion.div className="availability" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}><span aria-hidden="true" /> Projetos selecionados para 2026</motion.div>
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }}>Ideias digitais<br />que saem do <em>óbvio.</em></motion.h1>
            <motion.div className="hero-bottom" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }}>
              <p>Desenhamos e desenvolvemos</p>
              <div className="rotating-line"><TypedTextRotate texts={rotatingWords} as="strong" mainClassName="rotating-word" rotationInterval={2300} /></div>
              <p>com identidade e propósito.</p>
            </motion.div>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}><a className="button button--primary" href="#projetos">Ver projetos <ArrowDownRight aria-hidden="true" /></a><a className="button button--ghost" href="https://github.com/AllanSousa00" target="_blank" rel="noreferrer"><GitHubLogo /> GitHub</a></motion.div>
          </motion.div>
          <div className="hero-side-note" aria-hidden="true"><MousePointer2 /> Scroll para explorar</div>
          <div className="hero-counter" aria-label="Sete experiências publicadas"><strong>07</strong><span>experiências<br />no ar</span></div>
        </section>

        <Marquee className="marquee" speed="normal" label={`Pixel Code Studio: ${technologies.join(', ')}`}>{technologies.map((technology) => <span key={technology}><Code2 aria-hidden="true" /> {technology}</span>)}</Marquee>

        <section className="section projects-section" id="projetos">
          <Reveal className="section-heading"><div><p className="kicker"><Sparkles aria-hidden="true" /> Trabalho selecionado</p><h2>Projetos reais.<br /><em>Resultados visíveis.</em></h2></div><p>Uma seleção de produtos publicados, com interfaces reais e soluções criadas para educação, eventos, operação e comunidades.</p></Reveal>
          <Reveal>
            <ElasticGallery
              items={projects.map((project, index) => ({
                id: String(index + 1).padStart(2, '0'),
                title: project.name,
                category: project.kind,
                description: project.description,
                src: project.image,
                alt: `Interface real do projeto ${project.name}`,
                href: project.live,
                repo: project.repo,
                tags: project.tags,
              }))}
            />
          </Reveal>
        </section>

        <section className="services-section" id="servicos">
          <div className="section services-inner">
            <Reveal className="services-intro"><p className="kicker kicker--dark"><Code2 aria-hidden="true" /> O que fazemos</p><h2>Do primeiro pixel<br />ao produto <em>no ar.</em></h2><p>Você traz a ideia. A gente transforma em uma experiência clara, bonita e pronta para funcionar.</p></Reveal>
            <div className="services-list">{services.map(({ icon: Icon, number, title, text }, index) => <motion.article key={title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-70px' }} transition={{ delay: index * 0.08 }}><span>{number}</span><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></motion.article>)}</div>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <Reveal className="section-heading process-heading"><div><p className="kicker"><Check aria-hidden="true" /> Como acontece</p><h2>Um processo simples.<br /><em>Um resultado marcante.</em></h2></div><p>Visibilidade em cada etapa, decisões explicadas e espaço para ajustar o que realmente importa.</p></Reveal>
          <div className="process-grid">{process.map(({ icon: Icon, number, title, text }, index) => <motion.article key={title} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.09 }}><span>{number}</span><motion.div className="process-icon" animate={reduceMotion ? {} : { y: [0, -6, 0], rotate: [0, 4, 0, -4, 0] }} transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' }}><Icon aria-hidden="true" /></motion.div><h3>{title}</h3><p>{text}</p></motion.article>)}</div>
        </section>

        <section className="cta-section contact-section" id="contato">
          <div className="cta-grid" aria-hidden="true" />
          <Reveal className="cta-copy contact-copy"><p className="kicker kicker--dark"><Sparkles aria-hidden="true" /> Contato</p><h2>Vamos começar<br /><em>uma conversa.</em></h2><p>Escolha o canal mais confortável para falar agora ou envie sua ideia completa por e-mail.</p><a className="button button--light contact-email" href={contactLink}>Conte sua ideia por e-mail <Mail aria-hidden="true" /></a></Reveal>
          <Reveal className="contact-panel">
            <div className="contact-panel__heading"><span>Começar a conversar</span><strong>Escolha um canal</strong></div>
            <div className="contact-options">
              {conversationChannels.map(({ name, description, href, icon: Icon, modifier }) => href ? (
                <a className={`contact-option contact-option--${modifier}`} href={href} target="_blank" rel="noreferrer" key={name}>
                  <span className="contact-option__icon"><Icon aria-hidden="true" /></span>
                  <span className="contact-option__copy"><strong>{name}</strong><small>{description}</small></span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <div className={`contact-option contact-option--${modifier} is-unavailable`} aria-disabled="true" key={name}>
                  <span className="contact-option__icon"><Icon aria-hidden="true" /></span>
                  <span className="contact-option__copy"><strong>{name}</strong><small>{description}</small></span>
                  <span className="contact-option__status">Link pendente</span>
                </div>
              ))}
            </div>
            <p className="contact-panel__note">Para explicar uma ideia com mais detalhes, o e-mail continua sendo o melhor caminho.</p>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </MotionConfig>
  )
}

export default App
