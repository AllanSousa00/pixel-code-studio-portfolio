import { lazy, Suspense } from 'react'
import { useRouter } from './lib/router'

const HomePage = lazy(() => import('./App'))
const PortfolioPages = lazy(() => import('./pages/PortfolioPages'))

function RouteFallback() {
  return <main className="route-fallback" aria-busy="true"><span className="sr-only">Carregando página…</span></main>
}

export function PortfolioRouter() {
  const { pathname } = useRouter()
  const Page = pathname === '/' ? HomePage : PortfolioPages
  return <Suspense fallback={<RouteFallback />}><Page /></Suspense>
}
