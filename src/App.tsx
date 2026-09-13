import { lazy, Suspense, useEffect } from 'react'
import { MotionConfig } from 'motion/react'
import { PageFrame } from '@/components/PageFrame'
import { RouteLoader } from '@/components/common/RouteLoader'
import { RouterProvider, useRouter } from '@/lib/router'
import HomePage from '@/pages/HomePage'

const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'))
const CaseDetailPage = lazy(() => import('@/pages/CaseDetailPage'))
const ServicesPage = lazy(() => import('@/pages/ServicesPage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const ContactPage = lazy(() => import('@/pages/ContactPage'))
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'))
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function Routes() {
  const { pathname, hash } = useRouter()
  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    const scroll = () => document.getElementById(id)?.scrollIntoView({ block: 'start' })
    const quick = window.setTimeout(scroll, 100)
    const afterLazy = window.setTimeout(scroll, 500)
    return () => { window.clearTimeout(quick); window.clearTimeout(afterLazy) }
  }, [hash, pathname])
  let page

  if (pathname === '/') page = <HomePage />
  else if (pathname === '/projetos') page = <ProjectsPage />
  else if (pathname.startsWith('/projetos/')) page = <ProjectDetailPage slug={decodeURIComponent(pathname.slice('/projetos/'.length))} />
  else if (pathname.startsWith('/cases/')) page = <CaseDetailPage slug={decodeURIComponent(pathname.slice('/cases/'.length))} />
  else if (pathname === '/servicos') page = <ServicesPage />
  else if (pathname === '/sobre') page = <AboutPage />
  else if (pathname === '/contato') page = <ContactPage />
  else if (pathname === '/obrigado') page = <ThankYouPage />
  else if (pathname === '/privacidade') page = <PrivacyPage />
  else page = <NotFoundPage />

  return <PageFrame pageKey={pathname}><Suspense fallback={<RouteLoader />}>{page}</Suspense></PageFrame>
}

export default function App() {
  return <MotionConfig reducedMotion="user"><RouterProvider><Routes /></RouterProvider></MotionConfig>
}
