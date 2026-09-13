import { useEffect } from 'react'

export const SITE_URL = 'https://pixel-code-studio-portfolio.pages.dev'

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>

type PageMeta = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  jsonLd?: JsonLd
  noIndex?: boolean
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function usePageMeta({ title, description, path, type = 'website', image = '/brand/og-pixel-code-studio.png', jsonLd, noIndex = false }: PageMeta) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === '/' ? '/' : path}`
    const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`
    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMeta('meta[property="og:type"]', 'property', 'og:type', type)
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', 'Identidade visual da Pixel Code Studio')
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl

    document.getElementById('page-json-ld')?.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.id = 'page-json-ld'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => document.getElementById('page-json-ld')?.remove()
  }, [description, image, jsonLd, noIndex, path, title, type])
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
