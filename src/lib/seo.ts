import { useEffect } from 'react'

export const SITE_URL = 'https://pixel-code-studio-portfolio.pages.dev'
const DEFAULT_TITLE = 'Pixel Code Studio — Portfólio'
const DEFAULT_DESCRIPTION = 'Sites, plataformas e automações com identidade própria, funcionamento claro e uma base pronta para crescer.'
const SOCIAL_IMAGE = `${SITE_URL}/brand/og-pixel-code-studio.png`

function setMeta(selector: string, attribute: 'name' | 'property', key: string, value: string) {
  let node = document.head.querySelector<HTMLMetaElement>(selector)
  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(attribute, key)
    document.head.appendChild(node)
  }
  node.content = value
}

function resetMeta() {
  document.title = DEFAULT_TITLE
  setMeta('meta[name="description"]', 'name', 'description', DEFAULT_DESCRIPTION)
  setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow')
  setMeta('meta[property="og:title"]', 'property', 'og:title', DEFAULT_TITLE)
  setMeta('meta[property="og:description"]', 'property', 'og:description', DEFAULT_DESCRIPTION)
  setMeta('meta[property="og:url"]', 'property', 'og:url', SITE_URL)
  setMeta('meta[property="og:image"]', 'property', 'og:image', SOCIAL_IMAGE)
  setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
  setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', DEFAULT_TITLE)
  setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', DEFAULT_DESCRIPTION)
  setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', SOCIAL_IMAGE)
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
  canonical.href = `${SITE_URL}/`
}

export function usePageMeta({ title, description, path, noIndex = false }: { title: string; description: string; path: string; noIndex?: boolean }) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', 'og:image', SOCIAL_IMAGE)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', SOCIAL_IMAGE)
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
    canonical.href = canonicalUrl
    return resetMeta
  }, [description, noIndex, path, title])
}
