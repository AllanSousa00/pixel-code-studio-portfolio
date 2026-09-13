import { ArrowUpRight } from '@phosphor-icons/react/dist/csr/ArrowUpRight'
import { Code } from '@phosphor-icons/react/dist/csr/Code'
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { Link } from '@/lib/router'
import { contact } from '@/data/portfolio'
import { Reveal } from './common/Reveal'

export function CreatorSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? 'creator-section is-compact' : 'creator-section'}>
      <div className="site-shell creator-grid">
        <Reveal className="creator-portrait">
          <div className="creator-placeholder" role="img" aria-label="Espaço reservado para uma foto real de Allan Sousa" data-photo-placeholder>
            <span>AS</span>
            <small>Foto real<br />a adicionar</small>
          </div>
          <p><Code aria-hidden="true" /> Criador e desenvolvedor</p>
        </Reveal>
        <Reveal className="creator-copy" delay={.1}>
          <p className="eyebrow">Quem está por trás da Pixel</p>
          <h2>Allan Sousa transforma ideias em produtos que podem ser vistos e usados.</h2>
          <p>Allan é o criador e desenvolvedor por trás da Pixel Code Studio. É ele quem conecta planejamento, interface e desenvolvimento nos projetos apresentados neste portfólio.</p>
          <p>A Pixel reúne esse trabalho em uma marca voltada a sites, plataformas, bots, automações e experiências digitais com estrutura própria. Cada projeto começa pelo que precisa funcionar e termina com uma entrega publicada.</p>
          <div className="creator-actions">
            <Link className="button button--primary" href="/sobre">Conhecer o desenvolvedor <ArrowUpRight aria-hidden="true" /></Link>
            <a className="button button--ghost" href={contact.github} target="_blank" rel="noopener noreferrer"><GithubLogo weight="fill" aria-hidden="true" /> Ver GitHub</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
