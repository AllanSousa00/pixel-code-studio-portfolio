import { ArrowLeft } from '@phosphor-icons/react/dist/csr/ArrowLeft'
import { Briefcase } from '@phosphor-icons/react/dist/csr/Briefcase'
import { Link } from '@/lib/router'
import { usePageMeta } from '@/lib/seo'

export default function NotFoundPage({ embedded = false }: { embedded?: boolean }) {
  usePageMeta({ title: 'Página não encontrada — Pixel Code Studio', description: 'A rota que você tentou acessar não existe no portfólio da Pixel Code Studio.', path: window.location.pathname, noIndex: true })
  return (
    <section className={embedded ? 'status-page status-page--embedded' : 'status-page'}>
      <div className="status-card status-card--404">
        <div className="pixel-404" aria-hidden="true"><span>4</span><i /><span>4</span></div>
        <p className="eyebrow">Rota fora do mapa</p>
        <h1>Esse pixel não foi encontrado.</h1>
        <p>O endereço pode ter mudado ou nunca ter existido. Você pode voltar ao início, explorar os projetos ou abrir o contato.</p>
        <div><Link className="button button--primary" href="/"><ArrowLeft aria-hidden="true" /> Voltar ao início</Link><Link className="button button--ghost" href="/projetos"><Briefcase aria-hidden="true" /> Ver projetos</Link><Link className="text-link" href="/contato">Abrir contato</Link></div>
      </div>
    </section>
  )
}
