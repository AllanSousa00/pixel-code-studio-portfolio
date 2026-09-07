"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  BriefcaseBusiness,
  GitFork,
  House,
  Mail,
  Route,
  WandSparkles,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  icon: LucideIcon
  href: string
  sectionId?: string
}

const navItems: NavItem[] = [
  { label: "Início", icon: House, href: "#inicio", sectionId: "inicio" },
  { label: "Projetos", icon: BriefcaseBusiness, href: "#projetos", sectionId: "projetos" },
  { label: "Serviços", icon: WandSparkles, href: "#servicos", sectionId: "servicos" },
  { label: "Processo", icon: Route, href: "#processo", sectionId: "processo" },
  { label: "GitHub", icon: GitFork, href: "https://github.com/AllanSousa00" },
  { label: "Contato", icon: Mail, href: "mailto:allancruzsousa519@gmail.com?subject=Quero%20criar%20um%20projeto%20com%20a%20Pixel%20Code%20Studio" },
]

const MOBILE_LABEL_WIDTH = 72

type BottomNavBarProps = {
  className?: string
  defaultIndex?: number
  stickyBottom?: boolean
}

export function BottomNavBar({
  className,
  defaultIndex = 0,
  stickyBottom = false,
}: BottomNavBarProps) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex)

  useEffect(() => {
    const visibleSections = navItems
      .map((item, index) => ({ element: item.sectionId ? document.getElementById(item.sectionId) : null, index }))
      .filter((entry): entry is { element: HTMLElement; index: number } => Boolean(entry.element))

    const observer = new IntersectionObserver(
      (entries) => {
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

  function selectItem(item: NavItem, index: number) {
    setActiveIndex(index)
    if (item.sectionId) {
      document.getElementById(item.sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" })
      return
    }
    if (item.href.startsWith("mailto:")) window.location.assign(item.href)
    else window.open(item.href, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.nav
      initial={{ scale: 0.9, opacity: 0, y: 18 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 26, delay: 0.5 }}
      role="navigation"
      aria-label="Navegação rápida"
      className={cn(
        "bg-card/90 dark:bg-card/90 border border-border rounded-full flex items-center p-1.5 shadow-2xl space-x-1 min-w-[320px] max-w-[calc(100vw-20px)] h-[58px] backdrop-blur-xl",
        stickyBottom && "fixed inset-x-0 bottom-4 mx-auto z-[70] w-fit",
        className,
      )}
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon
        const isActive = activeIndex === idx

        return (
          <motion.button
            key={item.label}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "flex items-center justify-center px-3 py-2 rounded-full transition-colors duration-200 relative h-11 min-w-11 max-h-11 cursor-pointer",
              isActive
                ? "bg-primary text-primary-foreground gap-2"
                : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            onClick={() => selectItem(item, idx)}
            aria-label={item.label}
            aria-current={isActive && item.sectionId ? "page" : undefined}
            type="button"
          >
            <Icon size={20} strokeWidth={2} aria-hidden className="shrink-0 transition-colors duration-200" />

            <motion.span
              initial={false}
              animate={{
                width: isActive ? `${MOBILE_LABEL_WIDTH}px` : "0px",
                opacity: isActive ? 1 : 0,
                marginLeft: isActive ? "4px" : "0px",
              }}
              transition={{
                width: { type: "spring", stiffness: 350, damping: 32 },
                opacity: { duration: 0.19 },
                marginLeft: { duration: 0.19 },
              }}
              className="overflow-hidden flex items-center max-w-[72px]"
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
            </motion.span>
          </motion.button>
        )
      })}
    </motion.nav>
  )
}

export default BottomNavBar
