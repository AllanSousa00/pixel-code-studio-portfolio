import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Briefcase } from '@phosphor-icons/react/dist/csr/Briefcase'
import { EnvelopeSimple } from '@phosphor-icons/react/dist/csr/EnvelopeSimple'
import { GithubLogo } from '@phosphor-icons/react/dist/csr/GithubLogo'
import { House } from '@phosphor-icons/react/dist/csr/House'
import { List } from '@phosphor-icons/react/dist/csr/List'
import { Stack } from '@phosphor-icons/react/dist/csr/Stack'
import { User } from '@phosphor-icons/react/dist/csr/User'
import { X } from '@phosphor-icons/react/dist/csr/X'
import { contact } from '@/data/portfolio'
import { Link, useRouter } from '@/lib/router'

const navigation = [
  { label: 'Início', href: '/', icon: House },
  { label: 'Serviços', href: '/servicos', icon: Stack },
  { label: 'Projetos', href: '/projetos', icon: Briefcase },
  { label: 'Sobre', href: '/sobre', icon: User },
  { label: 'Contato', href: '/contato', icon: EnvelopeSimple },
]

export function SiteHeader() {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const closeRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    if (open) {
      wasOpen.current = true
      requestAnimationFrame(() => closeRef.current?.focus())
    } else if (wasOpen.current) {
      requestAnimationFrame(() => triggerRef.current?.focus())
      wasOpen.current = false
    }
    return () => document.body.classList.remove('menu-open')
  }, [open])

  useEffect(() => {
    if (!open) return
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [open])

  return (
    <header className="site-header">
      <motion.nav
        className="nav-pill"
        initial={reduceMotion ? false : { opacity: 0, y: -18, scale: .96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        aria-label="Navegação principal"
      >
        <Link className="nav-brand" href="/" aria-label="Pixel Code Studio — início">
          <img src="/brand/mark-64.webp" width="64" height="64" alt="" />
          <span>Pixel Code</span>
        </Link>

        <div className="nav-links">
          {navigation.map(({ label, href, icon: Icon }) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
            return (
              <Link className={active ? 'nav-link is-active' : 'nav-link'} href={href} key={href} aria-current={active ? 'page' : undefined}>
                <Icon weight={active ? 'fill' : 'regular'} aria-hidden="true" />
                <span>{label}</span>
              </Link>
            )
          })}
        </div>

        <a className="nav-github" href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="Ver GitHub de Allan Sousa">
          <GithubLogo weight="fill" aria-hidden="true" />
        </a>
        <button ref={triggerRef} className="menu-trigger" type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="mobile-menu" aria-label="Abrir menu">
          <List aria-hidden="true" />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onPointerDown={() => setOpen(false)}>
            <motion.div
              id="mobile-menu"
              className="mobile-menu"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: .98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10, scale: .98 }}
              transition={{ duration: .22 }}
              onPointerDown={(event) => event.stopPropagation()}
              onKeyDown={(event) => {
                if (event.key !== 'Tab') return
                const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'))
                if (!focusable.length) return
                const first = focusable[0]
                const last = focusable[focusable.length - 1]
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu principal"
            >
              <div className="mobile-menu__top">
                <span>Ir para</span>
                <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Fechar menu"><X aria-hidden="true" /></button>
              </div>
              <div className="mobile-menu__links">
                {navigation.map(({ label, href, icon: Icon }, index) => (
                  <Link href={href} key={href} onClick={() => setOpen(false)} aria-current={(href === '/' ? pathname === '/' : pathname.startsWith(href)) ? 'page' : undefined}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <Icon aria-hidden="true" />
                    {label}
                  </Link>
                ))}
              </div>
              <Link className="button button--primary mobile-menu__cta" href="/contato" onClick={() => setOpen(false)}>Falar sobre um projeto <EnvelopeSimple aria-hidden="true" /></Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
