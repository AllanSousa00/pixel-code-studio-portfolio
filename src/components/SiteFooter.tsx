import { useEffect, useState } from 'react'
import { ArrowUp } from '@phosphor-icons/react/dist/csr/ArrowUp'
import { DiscordLogo } from '@phosphor-icons/react/dist/csr/DiscordLogo'
import { EnvelopeSimple } from '@phosphor-icons/react/dist/csr/EnvelopeSimple'
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { LinkedinLogo } from '@phosphor-icons/react/dist/csr/LinkedinLogo'
import { Moon } from '@phosphor-icons/react/dist/csr/Moon'
import { Sun } from '@phosphor-icons/react/dist/csr/Sun'
import { WhatsappLogo } from '@phosphor-icons/react/dist/csr/WhatsappLogo'
import { YoutubeLogo } from '@phosphor-icons/react/dist/csr/YoutubeLogo'
import { InstagramLogo } from '@phosphor-icons/react/dist/csr/InstagramLogo'
import { contact, projects, services } from '@/data/portfolio'
import { Link } from '@/lib/router'

type Theme = 'dark' | 'light'

function initialTheme(): Theme {
  const value = document.documentElement.dataset.theme
  return value === 'light' ? 'light' : 'dark'
}

export function SiteFooter() {
  const [theme, setTheme] = useState<Theme>(initialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f4f3ed' : '#080809')
    localStorage.setItem('pixel-code-theme', theme)
  }, [theme])

  const socials = [
    { label: 'GitHub', href: contact.github, icon: GithubLogo },
    { label: 'LinkedIn', href: contact.linkedin, icon: LinkedinLogo },
    { label: 'YouTube', href: contact.youtube, icon: YoutubeLogo },
    { label: 'WhatsApp', href: contact.whatsapp, icon: WhatsappLogo },
    { label: 'Discord', href: contact.discord, icon: DiscordLogo },
    ...(contact.instagram ? [{ label: 'Instagram', href: contact.instagram, icon: InstagramLogo }] : []),
  ]

  return (
    <footer className="site-footer">
      <div className="footer-main site-shell">
        <div className="footer-brand">
          <Link href="/" aria-label="Pixel Code Studio — início"><img src={theme === 'light' ? '/brand/logo-light-340.webp' : '/brand/logo-dark-340.webp'} width="340" height="76" alt="Pixel Code Studio" loading="lazy" /></Link>
          <p>Sites, plataformas, bots e experiências digitais desenvolvidos por Allan Sousa.</p>
          <Link className="text-link" href="/contato">Falar sobre um projeto <EnvelopeSimple aria-hidden="true" /></Link>
        </div>
        <nav aria-label="Páginas do site">
          <h2>Explore</h2>
          <Link href="/">Início</Link><Link href="/projetos">Projetos</Link><Link href="/servicos">Serviços</Link><Link href="/sobre">Sobre</Link><Link href="/contato">Contato</Link>
        </nav>
        <nav aria-label="Serviços">
          <h2>Serviços</h2>
          {services.map((service) => <Link href={`/servicos#${service.slug}`} key={service.slug}>{service.title}</Link>)}
        </nav>
        <nav aria-label="Projetos em destaque">
          <h2>Projetos</h2>
          {projects.filter((project) => project.featured).slice(0, 4).map((project) => <Link href={`/projetos/${project.slug}`} key={project.slug}>{project.name}</Link>)}
        </nav>
      </div>
      <div className="footer-utility site-shell">
        <div className="social-links" aria-label="Canais oficiais">
          {socials.map(({ label, href, icon: Icon }) => <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}><Icon weight="fill" aria-hidden="true" /></a>)}
        </div>
        <div className="theme-controls" role="group" aria-label="Tema e navegação">
          <button type="button" className={theme === 'light' ? 'is-active' : ''} onClick={() => setTheme('light')} aria-label="Usar tema claro" aria-pressed={theme === 'light'}><Sun aria-hidden="true" /></button>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo"><ArrowUp aria-hidden="true" /></button>
          <button type="button" className={theme === 'dark' ? 'is-active' : ''} onClick={() => setTheme('dark')} aria-label="Usar tema escuro" aria-pressed={theme === 'dark'}><Moon aria-hidden="true" /></button>
        </div>
      </div>
      <div className="footer-bottom site-shell">
        <small>© {new Date().getFullYear()} Pixel Code Studio · Criado e desenvolvido por Allan Sousa.</small>
        <Link href="/privacidade">Privacidade</Link>
      </div>
    </footer>
  )
}
