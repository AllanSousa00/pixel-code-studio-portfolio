"use client"

import { useEffect, useRef, useState, type CSSProperties } from "react"
import {
  BriefcaseBusiness,
  House,
  Mail,
  Route,
  UserRound,
  WandSparkles,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { GitHubLogo } from "@/components/ui/github-logo"

type NavItem = {
  label: string
  icon?: LucideIcon
  githubLogo?: boolean
  href: string
  sectionId?: string
}

const navItems: NavItem[] = [
  { label: "Início", icon: House, href: "#inicio", sectionId: "inicio" },
  { label: "Sobre mim", icon: UserRound, href: "/sobre" },
  { label: "Projetos", icon: BriefcaseBusiness, href: "#projetos", sectionId: "projetos" },
  { label: "Serviços", icon: WandSparkles, href: "#servicos", sectionId: "servicos" },
  { label: "Processo", icon: Route, href: "#processo", sectionId: "processo" },
  { label: "GitHub", githubLogo: true, href: "https://github.com/AllanSousa00" },
  { label: "Contato", icon: Mail, href: "#contato", sectionId: "contato" },
]

const MOBILE_LABEL_WIDTH = 72

type BottomNavBarProps = {
  className?: string
  defaultIndex?: number
}

export function BottomNavBar({
  className,
  defaultIndex = 0,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)
  const scrollFrame = useRef<number | null>(null)
  const navigatingTo = useRef<number | null>(null)

  function stopScrollAnimation() {
    if (scrollFrame.current !== null) cancelAnimationFrame(scrollFrame.current)
    scrollFrame.current = null
    navigatingTo.current = null
  }

  useEffect(() => {
    window.addEventListener("wheel", stopScrollAnimation, { passive: true })
    window.addEventListener("touchstart", stopScrollAnimation, { passive: true })

    return () => {
      stopScrollAnimation()
      window.removeEventListener("wheel", stopScrollAnimation)
      window.removeEventListener("touchstart", stopScrollAnimation)
    }
  }, [])

  useEffect(() => {
    const sectionId = decodeURIComponent(window.location.hash.slice(1))
    const index = navItems.findIndex((item) => item.sectionId === sectionId)
    if (index < 0) return

    const frame = requestAnimationFrame(() => {
      const section = document.getElementById(sectionId)
      if (!section) return

      setActiveIndex(index)
      window.scrollTo(0, Math.max(0, section.getBoundingClientRect().top + window.scrollY - 92))
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const visibleSections = navItems
      .map((item, index) => ({ element: item.sectionId ? document.getElementById(item.sectionId) : null, index }))
      .filter((entry): entry is { element: HTMLElement; index: number } => Boolean(entry.element))

    const observer = new IntersectionObserver(
      (entries) => {
        if (navigatingTo.current !== null) return

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        const match = visibleSections.find(({ element }) => element === visible?.target)
        if (match) setActiveIndex(match.index)
      },
      { rootMargin: "-28% 0px -55%", threshold: [0.05, 0.25, 0.5] },
    )

    visibleSections.forEach(({ element }) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  function scrollToSection(element: HTMLElement, href: string, index: number) {
    stopScrollAnimation()
    navigatingTo.current = index

    const startY = window.scrollY
    const headerOffset = 92
    const targetY = Math.max(0, element.getBoundingClientRect().top + startY - headerOffset)
    const distance = targetY - startY

    if (window.location.hash !== href) window.history.pushState(null, "", href)

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || Math.abs(distance) < 2) {
      window.scrollTo(0, targetY)
      navigatingTo.current = null
      return
    }

    const duration = Math.min(1400, Math.max(760, Math.abs(distance) * 0.3))
    let startedAt: number | null = null

    const move = (now: number) => {
      startedAt ??= now
      const progress = Math.min((now - startedAt) / duration, 1)
      const eased = progress < 0.5
        ? 4 * progress ** 3
        : 1 - (-2 * progress + 2) ** 3 / 2

      window.scrollTo(0, startY + distance * eased)

      if (progress < 1) {
        scrollFrame.current = requestAnimationFrame(move)
      } else {
        scrollFrame.current = null
        navigatingTo.current = null
      }
    }

    scrollFrame.current = requestAnimationFrame(move)
  }

  function selectItem(item: NavItem, index: number) {
    setActiveIndex(index)
    if (item.sectionId) {
      const section = document.getElementById(item.sectionId)
      if (section) scrollToSection(section, item.href, index)
      else window.location.assign(`/${item.href}`)
      return
    }
    if (item.href.startsWith("/")) {
      window.location.assign(item.href)
      return
    }
    if (item.href.startsWith("mailto:")) window.location.assign(item.href)
    else window.open(item.href, "_blank", "noopener,noreferrer")
  }

  return (
    <nav
      role="navigation"
      aria-label="Navegação rápida"
      className={cn(
        "bottom-nav-bar bg-card/90 dark:bg-card/90 border border-border rounded-full flex items-center p-1.5 shadow-2xl space-x-1 min-w-[320px] max-w-[calc(100vw-20px)] h-[58px] backdrop-blur-xl",
        className,
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon
        const isActive = activeIndex === idx

        return (
          <button
            key={item.label}
            className={cn(
              "flex items-center justify-center px-3 py-2 rounded-full transition-colors duration-200 relative h-11 min-w-11 max-h-11 cursor-pointer",
              isActive
                ? "bg-primary text-primary-foreground gap-2"
                : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            onClick={() => selectItem(item, idx)}
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}
            type="button"
          >
            {item.githubLogo
              ? <GitHubLogo size={20} className="shrink-0 transition-colors duration-200" />
              : Icon && <Icon size={20} strokeWidth={2} aria-hidden className="shrink-0 transition-colors duration-200" />}

            <span
              className={cn("bottom-nav-bar__label shrink-0 overflow-hidden flex items-center max-w-[72px]", isActive && "is-active")}
              style={{ "--nav-label-width": `${MOBILE_LABEL_WIDTH}px` } as CSSProperties}
            >
              <span
                className={cn(
                  "font-bold text-xs whitespace-nowrap select-none overflow-hidden text-ellipsis leading-[1.9]",
                  isActive ? "text-primary-foreground" : "opacity-0",
                )}
                title={item.label}
              >
                {item.label}
              </span>
            </span>
          </button>
        )
      })}
    </nav>
  )
}

export default BottomNavBar
