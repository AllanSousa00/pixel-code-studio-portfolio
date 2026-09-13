import { useMemo, useState, type FormEvent } from 'react'
import { ArrowRight } from '@phosphor-icons/react/dist/csr/ArrowRight'
import { DiscordLogo } from '@phosphor-icons/react/dist/csr/DiscordLogo'
import { EnvelopeSimple } from '@phosphor-icons/react/dist/csr/EnvelopeSimple'
import { PaperPlaneTilt } from '@phosphor-icons/react/dist/csr/PaperPlaneTilt'
import { WhatsappLogo } from '@phosphor-icons/react/dist/csr/WhatsappLogo'
import { Breadcrumbs } from '@/components/common/Breadcrumbs'
import { PageHero } from '@/components/common/PageHero'
import { contact, services } from '@/data/portfolio'
import { useRouter } from '@/lib/router'
import { breadcrumbSchema, usePageMeta } from '@/lib/seo'

type FormState = 'idle' | 'preparing' | 'error'

export default function ContactPage() {
  const { search, navigate } = useRouter()
  const typeFromUrl = useMemo(() => new URLSearchParams(search).get('tipo') || '', [search])
  const [state, setState] = useState<FormState>('idle')
  const [error, setError] = useState('')
  usePageMeta({ title: 'Contato — Pixel Code Studio', description: 'Apresente sua ideia à Pixel Code Studio pelo formulário, WhatsApp ou Discord e solicite um orçamento.', path: '/contato', jsonLd: breadcrumbSchema([{ name: 'Início', path: '/' }, { name: 'Contato', path: '/contato' }]) })

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('preparing')
    setError('')
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') || '').trim()
    const reply = String(data.get('reply') || '').trim()
    const projectType = String(data.get('type') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (name.length < 2 || reply.length < 5 || projectType.length < 2 || message.length < 20) {
      setError('Revise os campos. A mensagem precisa ter pelo menos 20 caracteres.')
      setState('error')
      return
    }
    const subject = encodeURIComponent(`Novo projeto — ${projectType}`)
    const body = encodeURIComponent(`Olá, sou ${name}.\n\nContato para resposta: ${reply}\nTipo de projeto: ${projectType}\n\nIdeia:\n${message}`)
    const mailto = `mailto:${contact.email}?subject=${subject}&body=${body}`
    window.location.href = mailto
    window.setTimeout(() => navigate('/obrigado?canal=email'), 260)
  }

  return (
    <>
      <Breadcrumbs items={[{ label: 'Início', href: '/' }, { label: 'Contato' }]} />
      <PageHero eyebrow="Contato" title={<>Conte o que você quer <em>construir.</em></>} description="Escolha um canal rápido ou prepare uma mensagem completa. Allan recebe o contexto e responde assim que possível." />
      <section className="section-block contact-page"><div className="site-shell contact-layout">
        <aside className="contact-channels">
          <p className="eyebrow">Canais diretos</p><h2>Comece pelo caminho mais confortável.</h2>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsappLogo weight="fill" aria-hidden="true" /><span><strong>WhatsApp</strong><small>Conversa direta sobre escopo e orçamento</small></span><ArrowRight aria-hidden="true" /></a>
          <a href={contact.discord} target="_blank" rel="noopener noreferrer"><DiscordLogo weight="fill" aria-hidden="true" /><span><strong>Discord</strong><small>Entre no servidor oficial da Pixel</small></span><ArrowRight aria-hidden="true" /></a>
          <a href={`mailto:${contact.email}`}><EnvelopeSimple weight="fill" aria-hidden="true" /><span><strong>E-mail</strong><small>{contact.email}</small></span><ArrowRight aria-hidden="true" /></a>
          <p className="response-note"><span className="status-dot" /> Não existe prazo de resposta publicado. A mensagem será respondida assim que possível.</p>
        </aside>

        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="contact-form__heading"><span>Briefing inicial</span><strong>Quatro campos para começar</strong></div>
          <label>Seu nome<input name="name" required minLength={2} autoComplete="name" placeholder="Como podemos chamar você?" /></label>
          <label>Contato para resposta<input name="reply" required minLength={5} autoComplete="email" inputMode="email" placeholder="E-mail, WhatsApp ou Discord" /></label>
          <label>Tipo de projeto<select name="type" required defaultValue={typeFromUrl}><option value="" disabled>Selecione uma opção</option>{services.map((service) => <option value={service.title} key={service.slug}>{service.title}</option>)}<option value="Projeto personalizado">Projeto personalizado</option></select></label>
          <label>Conte sua ideia<textarea name="message" required minLength={20} rows={6} placeholder="O que precisa ser criado, para quem e qual resultado você espera?" /></label>
          {error && <p className="form-feedback form-feedback--error" role="alert">{error}</p>}
          <p className="form-privacy">Ao continuar, seu aplicativo de e-mail será aberto com a mensagem preenchida. O site não armazena os dados deste formulário.</p>
          <button className="button button--primary" type="submit" disabled={state === 'preparing'}>{state === 'preparing' ? 'Preparando mensagem…' : 'Preparar e-mail'} <PaperPlaneTilt aria-hidden="true" /></button>
        </form>
      </div></section>
    </>
  )
}
