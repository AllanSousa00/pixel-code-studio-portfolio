import { Quotes } from '@phosphor-icons/react/dist/csr/Quotes'
import { ShieldCheck } from '@phosphor-icons/react/dist/csr/ShieldCheck'
import { verifiedReviews } from '@/data/portfolio'
import { Reveal } from './common/Reveal'
import { SectionHeading } from './common/SectionHeading'

export function ReviewsSection() {
  return (
    <section className="section-block reviews-section">
      <div className="site-shell">
        <Reveal><SectionHeading eyebrow="Avaliações" title={<>Confiança se constrói com <em>prova real.</em></>} text="Só publicamos relatos ligados a uma entrega e liberados para aparecer aqui." /></Reveal>
        {verifiedReviews.length ? (
          <div className="reviews-grid">{verifiedReviews.map((review) => <blockquote key={`${review.author}-${review.quote}`}><Quotes aria-hidden="true" /><p>{review.quote}</p><footer>{review.author}{review.project && <span>{review.project}</span>}</footer></blockquote>)}</div>
        ) : (
          <Reveal className="reviews-empty">
            <ShieldCheck weight="duotone" aria-hidden="true" />
            <div><h3>Nenhum depoimento público ainda.</h3><p>As avaliações verificadas serão publicadas somente depois da autorização de quem contratou. Enquanto isso, os projetos reais e seus links públicos estão disponíveis para conferência.</p></div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
