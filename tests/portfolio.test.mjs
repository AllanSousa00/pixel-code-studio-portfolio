import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const root = new URL('../', import.meta.url)

test('sitemap publica a única página canônica e exclui fluxos privados', async () => {
  const sitemap = await readFile(new URL('public/sitemap.xml', root), 'utf8')
  assert.match(sitemap, /<loc>https:\/\/pixel-code-studio-portfolio\.pages\.dev\/</)
  assert.doesNotMatch(sitemap, /<loc>[^<]+\/(?:sobre|servicos|projetos|contato|privacidade|cases)\b/)
  assert.doesNotMatch(sitemap, /\/(?:admin|dashboard|auth|obrigado)</)
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
