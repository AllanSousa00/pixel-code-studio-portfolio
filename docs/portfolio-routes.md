# Mapa de navegação — Pixel Code Studio

Base canônica: `https://pixel-code-studio-portfolio.pages.dev`.

| URL | Função | Indexável | Title | Meta description | Canonical |
|---|---|:---:|---|---|---|
| `/#inicio` | Hero, identidade e CTA inicial | Sim | Pixel Code Studio — Portfólio | `/` |
| `/#projetos` | Galeria automática de sete projetos reais | Sim | Pixel Code Studio — Portfólio | `/` |
| `/#servicos` | Serviços de sites, plataformas, bots e jogos | Sim | Pixel Code Studio — Portfólio | `/` |
| `/#processo` | Quatro etapas de trabalho | Sim | Pixel Code Studio — Portfólio | `/` |
| `/#contato` | E-mail, WhatsApp e Discord | Sim | Pixel Code Studio — Portfólio | `/` |

## Comportamento técnico

- O fallback `public/_redirects` entrega `index.html` para qualquer entrada direta do SPA.
- A navbar atualiza a hash, faz rolagem suave com duração moderada e marca a seção visível.
- O sitemap publica somente a URL canônica da página única; fragmentos não são URLs independentes para buscadores.
