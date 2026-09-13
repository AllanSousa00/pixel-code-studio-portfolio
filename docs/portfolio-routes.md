# Mapa de rotas — Pixel Code Studio

Base canônica: `https://pixel-code-studio-portfolio.pages.dev`.

| URL | Função | Indexável | Title | Meta description | Canonical |
|---|---|:---:|---|---|---|
| `/` | Marca, serviços, projetos, cases, Allan, confiança e contato | Sim | Pixel Code Studio — Sites, plataformas, bots e sistemas | Conheça os projetos reais e os serviços digitais desenvolvidos por Allan Sousa na Pixel Code Studio. | `/` |
| `/sobre` | Marca, criador, atuação, princípios e projetos representativos | Sim | Sobre Allan Sousa — Pixel Code Studio | Conheça Allan Sousa, o criador e desenvolvedor por trás dos projetos da Pixel Code Studio. | `/sobre` |
| `/servicos` | Detalhamento de serviços e projetos relacionados | Sim | Serviços — Pixel Code Studio | Sites, plataformas web, bots, automações e experiências digitais desenvolvidos sob medida pela Pixel Code Studio. | `/servicos` |
| `/projetos` | Catálogo com filtros não vazios | Sim | Projetos — Pixel Code Studio | Explore os sites, plataformas, sistemas e experiências digitais publicados pela Pixel Code Studio. | `/projetos` |
| `/projetos/:slug` | Contexto, imagem, tecnologia, processo, links e case do projeto | Sim quando existe | `[Projeto] — Projeto da Pixel Code Studio` | Resumo único do projeto | rota do projeto |
| `/cases/:slug` | Problema, objetivo, desenvolvimento, entrega e CTA | Sim quando existe | `Case [Projeto] — Pixel Code Studio` | Descrição única do case | rota do case |
| `/contato` | Canais diretos e briefing que prepara e-mail | Sim | Contato — Pixel Code Studio | Apresente sua ideia à Pixel Code Studio pelo formulário, WhatsApp ou Discord e solicite um orçamento. | `/contato` |
| `/obrigado` | Orienta o envio depois de abrir o aplicativo de e-mail | Não | Mensagem preparada — Pixel Code Studio | Revise e envie sua mensagem para concluir o contato com a Pixel Code Studio. | `/obrigado` |
| `/privacidade` | Comportamento real de dados, armazenamento e terceiros | Sim | Política de Privacidade — Pixel Code Studio | Entenda como o portfólio da Pixel Code Studio trata contato, armazenamento local e serviços externos. | `/privacidade` |
| qualquer outra | 404 personalizada | Não | Página não encontrada — Pixel Code Studio | A rota que você tentou acessar não existe no portfólio da Pixel Code Studio. | rota solicitada |

## Slugs públicos

Projetos: `vertice-enem`, `conexoes-modernistas`, `simitec-2026`, `repertoryd`, `portugues-em-jogos`, `central-de-autorizacoes`, `portal-de-direitos`.

Cases: `vertice-enem`, `conexoes-modernistas`, `simitec-2026`.

## Comportamento técnico

- O fallback `public/_redirects` entrega `index.html` para URLs internas do SPA.
- A navegação usa History API, preserva URLs semânticas e reage a `popstate`.
- Breadcrumbs aparecem nas páginas internas.
- Metadata, canonical e JSON-LD são atualizados por rota.
- O sitemap inclui apenas páginas públicas indexáveis; `/obrigado` e 404 ficam fora.
