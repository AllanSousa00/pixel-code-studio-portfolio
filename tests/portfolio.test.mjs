import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)

test('sitemap publica rotas principais e exclui fluxos privados', async () => {
  const sitemap = await readFile(new URL('public/sitemap.xml', root), 'utf8')
  for (const path of ['/', '/sobre', '/servicos', '/projetos', '/contato', '/privacidade', '/cases/vertice-enem']) {
    assert.match(sitemap, new RegExp(`<loc>https://pixel-code-studio-portfolio\\.pages\\.dev${path === '/' ? '/' : path}</loc>`))
  }
  assert.doesNotMatch(sitemap, /\/(?:admin|dashboard|auth|obrigado)/)
})

test('robots bloqueia áreas privadas e aponta para o sitemap', async () => {
  const robots = await readFile(new URL('public/robots.txt', root), 'utf8')
  for (const path of ['/dashboard', '/admin', '/auth', '/api', '/checkout', '/callback', '/preview']) assert.match(robots, new RegExp(`Disallow: ${path}`))
  assert.match(robots, /Sitemap: https:\/\/pixel-code-studio-portfolio\.pages\.dev\/sitemap\.xml/)
})

test('headers incluem controles de segurança e fallback de SPA', async () => {
  const headers = await readFile(new URL('public/_headers', root), 'utf8')
  const redirects = await readFile(new URL('public/_redirects', root), 'utf8')
  assert.match(headers, /Content-Security-Policy:/)
  assert.match(headers, /X-Content-Type-Options: nosniff/)
  assert.match(headers, /frame-ancestors 'none'/)
  assert.match(redirects, /\/\* \/index\.html 200/)
})

test('rotas públicas e metadados permanecem no shell atual', async () => {
  const router = await readFile(new URL('src/Router.tsx', root), 'utf8')
  const pages = await readFile(new URL('src/pages/PortfolioPages.tsx', root), 'utf8')
  for (const route of ['/sobre', '/projetos', '/servicos', '/contato', '/privacidade', '/obrigado']) {
    assert.match(pages, new RegExp(`'${route}'`))
  }
  assert.match(router, /lazy\(\(\) => import\('\.\/App'\)\)/)
  assert.match(router, /lazy\(\(\) => import\('\.\/pages\/PortfolioPages'\)\)/)
  assert.match(pages, /function NotFoundPage/)
  assert.match(pages, /function FaqSection\(\)/)
  const navbar = await readFile(new URL('src/components/ui/bottom-nav-bar.tsx', root), 'utf8')
  assert.match(navbar, /label: "Sobre mim"/)
  assert.match(navbar, /UserRound/)
  const seo = await readFile(new URL('src/lib/seo.ts', root), 'utf8')
  assert.match(seo, /twitter:card/)
  assert.match(seo, /link\[rel="canonical"\]/)
})
