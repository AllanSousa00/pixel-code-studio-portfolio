/* oxlint-disable react/only-export-components -- router context and its Link belong to the same tiny routing boundary */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type MouseEvent, type ReactNode } from 'react'

type RouterValue = {
  pathname: string
  search: string
  hash: string
  navigate: (to: string, options?: { replace?: boolean }) => void
}

const RouterContext = createContext<RouterValue | null>(null)

function getLocation() {
  return { pathname: window.location.pathname.replace(/\/{2,}/g, '/').replace(/\/$/, '') || '/', search: window.location.search, hash: window.location.hash }
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(getLocation)

  useEffect(() => {
    const onPopState = () => setLocation(getLocation())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = useCallback((to: string, options?: { replace?: boolean }) => {
    const target = new URL(to, window.location.origin)
    const href = `${target.pathname}${target.search}${target.hash}`
    if (options?.replace) window.history.replaceState(null, '', href)
    else window.history.pushState(null, '', href)
    setLocation(getLocation())
    if (target.hash) {
      window.setTimeout(() => document.getElementById(decodeURIComponent(target.hash.slice(1)))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [])

  const value = useMemo(() => ({ ...location, navigate }), [location, navigate])
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>
}

export function useRouter() {
  const value = useContext(RouterContext)
  if (!value) throw new Error('useRouter deve ser usado dentro de RouterProvider')
  return value
}

export function Link({ href, children, className, onClick, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { navigate } = useRouter()
  const isInternal = Boolean(href?.startsWith('/'))

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (event.defaultPrevented || !href || !isInternal || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    event.preventDefault()
    navigate(href)
  }

  return <a href={href} className={className} onClick={handleClick} {...props}>{children}</a>
}
