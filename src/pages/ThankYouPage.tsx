import { ArrowRight } from '@phosphor-icons/react/dist/csr/ArrowRight'
import { CheckCircle } from '@phosphor-icons/react/dist/csr/CheckCircle'
import { Link } from '@/lib/router'
import { usePageMeta } from '@/lib/seo'

export default function ThankYouPage() {
  usePageMeta({ title: 'Mensagem preparada — Pixel Code Studio', description: 'Revise e envie sua mensagem para concluir o contato com a Pixel Code Studio.', path: '/obrigado', noIndex: true })
  return <section className="status-page"><div className="status-card"><CheckCircle weight="duotone" aria-hidden="true" /><p className="eyebrow">Próximo passo</p><h1>Sua mensagem foi preparada.</h1><p>O aplicativo de e-mail foi aberto. Revise o conteúdo e toque em enviar para concluir o contato. Allan responderá assim que possível.</p><div><Link className="button button--primary" href="/projetos">Ver projetos enquanto isso <ArrowRight aria-hidden="true" /></Link><Link className="button button--ghost" href="/">Voltar à página inicial</Link></div></div></section>
}
