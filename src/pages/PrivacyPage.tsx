import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { PageHero } from '@/components/common/PageHero'
import { contact } from '@/data/portfolio'
import { breadcrumbSchema, usePageMeta } from '@/lib/seo'

export default function PrivacyPage() {
  usePageMeta({ title: 'Política de Privacidade — Pixel Code Studio', description: 'Entenda como o portfólio da Pixel Code Studio trata contato, armazenamento local e serviços externos.', path: '/privacidade', jsonLd: breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Privacidade', path: '/privacidade' }]) })
  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Privacidade' }]} />
      <PageHero eyebrow="Privacidade" title={<>Informação clara sobre o que o site <em>faz com seus dados.</em></>} description="Esta política descreve o comportamento atual do portfólio público da Pixel Code Studio." />
      <article className="legal-page site-shell">
        <p className="legal-page__date">Última atualização: 13 de setembro de 2026.</p>
        <section><h2>1. Dados do formulário</h2><p>O formulário de contato funciona no navegador e prepara uma mensagem no aplicativo de e-mail do visitante. O portfólio não possui backend de formulário e não armazena esses campos em banco de dados.</p></section>
        <section><h2>2. Contato por serviços externos</h2><p>Ao escolher WhatsApp, Discord, GitHub, LinkedIn ou YouTube, você acessa um serviço externo sujeito aos próprios termos e políticas de privacidade.</p></section>
        <section><h2>3. Armazenamento local</h2><p>O site usa o armazenamento local do navegador apenas para lembrar a preferência de tema claro ou escuro.</p></section>
        <section><h2>4. Analytics e cookies</h2><p>Nenhum identificador do Google Analytics está configurado nesta versão. Por isso, o portfólio não carrega Analytics nem exibe um banner de consentimento sem necessidade.</p></section>
        <section><h2>5. Hospedagem e registros técnicos</h2><p>O site é hospedado na infraestrutura da Cloudflare. A provedora pode processar registros técnicos necessários à segurança e à entrega do conteúdo conforme suas próprias políticas.</p></section>
        <section><h2>6. Atualizações</h2><p>Esta política deve ser revisada se o comportamento do site mudar, especialmente com a inclusão de formulário com backend, analytics ou novos serviços externos.</p></section>
        <section><h2>7. Contato</h2><p>Dúvidas sobre esta política podem ser enviadas para <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p></section>
      </article>
    </>
  )
}
