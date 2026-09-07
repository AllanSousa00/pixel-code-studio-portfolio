"use client"

import { useEffect, useState, type ReactNode } from "react"
import { ArrowUp, Mail, Moon, Sun } from "lucide-react"
import { DiscordIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon, YouTubeIcon } from "@/components/ui/social-brand-icons"

type Theme = "dark" | "light"

const contactLink = "mailto:allancruzsousa519@gmail.com?subject=Quero%20criar%20um%20projeto%20com%20a%20Pixel%20Code%20Studio"
const whatsappLink = import.meta.env.VITE_WHATSAPP_URL?.trim() || "https://wa.me/5583996309727?text=Ol%C3%A1%21%20Encontrei%20a%20Pixel%20Code%20Studio%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
const discordLink = import.meta.env.VITE_DISCORD_URL?.trim() || "https://discord.gg/n8fzg8KFV5"

const navigation = [
  {
    title: "Explore",
    links: [
      { label: "Início", href: "#inicio" },
      { label: "Projetos", href: "#projetos" },
      { label: "Serviços", href: "#servicos" },
      { label: "Processo", href: "#processo" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Sites sob medida", href: "#servicos" },
      { label: "Plataformas web", href: "#servicos" },
      { label: "Bots e automações", href: "#servicos" },
      { label: "Experiências para jogos", href: "#servicos" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Começar uma conversa", href: "#contato" },
      { label: "Enviar um e-mail", href: contactLink },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/allan-da-cruz-sousa-a068903bb/", external: true },
      { label: "GitHub", href: "https://github.com/AllanSousa00", external: true },
    ],
  },
]

const optionalSocials: Array<{ label: string; href?: string; icon: ReactNode }> = [
  { label: "WhatsApp", href: whatsappLink, icon: <WhatsAppIcon aria-hidden="true" /> },
  { label: "Discord", href: discordLink, icon: <DiscordIcon aria-hidden="true" /> },
  { label: "Instagram", href: import.meta.env.VITE_INSTAGRAM_URL, icon: <InstagramIcon aria-hidden="true" /> },
  { label: "YouTube", href: import.meta.env.VITE_YOUTUBE_URL, icon: <YouTubeIcon aria-hidden="true" /> },
]

const socialLinks: Array<{ label: string; href: string; icon: ReactNode }> = [
  { label: "E-mail", href: contactLink, icon: <Mail aria-hidden="true" /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/allan-da-cruz-sousa-a068903bb/", icon: <LinkedInIcon aria-hidden="true" /> },
  ...optionalSocials.filter((social): social is { label: string; href: string; icon: ReactNode } => Boolean(social.href)),
]

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark"
  const storedTheme = window.localStorage.getItem("pixel-code-theme")
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"
}

function ThemeToggle({ theme, onChange }: { theme: Theme; onChange: (theme: Theme) => void }) {
  return (
    <div className="theme-toggle" role="group" aria-label="Escolher tema do site">
      <button type="button" className={theme === "light" ? "is-active" : ""} onClick={() => onChange("light")} aria-pressed={theme === "light"} aria-label="Usar tema claro">
        <Sun aria-hidden="true" />
      </button>
      <button type="button" className="theme-toggle__top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Voltar ao topo">
        <ArrowUp aria-hidden="true" />
      </button>
      <button type="button" className={theme === "dark" ? "is-active" : ""} onClick={() => onChange("dark")} aria-pressed={theme === "dark"} aria-label="Usar tema escuro">
        <Moon aria-hidden="true" />
      </button>
    </div>
  )
}

export function SiteFooter() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "light" ? "#f4f3ed" : "#080809")
    window.localStorage.setItem("pixel-code-theme", theme)
  }, [theme])

  return (
    <footer className="site-footer">
      <div className="site-footer__intro">
        <a className="brand brand--footer" href="#inicio" aria-label="Pixel Code Studio — início">
          <span className="brand-mark" aria-hidden="true"><span>P</span></span>
          <span>Pixel Code<br /><strong>Studio</strong></span>
        </a>
        <p>
          Transformamos ideias em sites, plataformas e automações com identidade própria,
          funcionamento claro e uma base pronta para crescer.
        </p>
        <a className="site-footer__cta" href={contactLink}>Conte sua ideia <Mail aria-hidden="true" /></a>
      </div>

      <div className="site-footer__navigation" aria-label="Mapa do site">
        {navigation.map((group) => (
          <nav key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            <ul>
              {group.links.map((link) => (
                <li key={`${group.title}-${link.label}`}>
                  <a href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="site-footer__utility">
        <div className="site-footer__socials" aria-label="Canais da Pixel Code Studio">
          {socialLinks.map(({ label, href, icon }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label} title={label}>
              {icon}
            </a>
          ))}
        </div>
        <ThemeToggle theme={theme} onChange={setTheme} />
      </div>

      <div className="site-footer__bottom">
        <small>© {new Date().getFullYear()} Pixel Code Studio · Desenvolvido por Allan Sousa</small>
        <span>Projetos digitais com personalidade.</span>
      </div>
    </footer>
  )
}

export default SiteFooter
