# Mapa de rotas — Pixel Code Studio

Base canônica: `https://pixel-code-studio-portfolio.pages.dev`.

| URL | Função | Indexável | Canonical |
|---|---|:---:|---|
| `/` | Home com hero, galeria, serviços, processo, contato e footer | Sim | `/` |
| `/sobre` | Perfil de Allan da Cruz Souza, forma de trabalho, trajetória, tecnologias e projetos representativos | Sim | `/sobre` |
| `/servicos` | Detalhamento de serviços e FAQ | Sim | `/servicos` |
| `/projetos` | Catálogo filtrável dos sete projetos reais | Sim | `/projetos` |
| `/projetos/:slug` | Imagem, contexto, solução, tecnologias e entrega | Sim quando existe | rota do projeto |
| `/cases/:slug` | Narrativa do projeto com a mesma linguagem visual | Sim quando existe | rota do case |
| `/contato` | WhatsApp, Discord, e-mail e briefing | Sim | `/contato` |
| `/obrigado` | Confirmação após preparar o e-mail | Não | `/obrigado` |
| `/privacidade` | Comportamento real de dados e serviços externos | Sim | `/privacidade` |
| qualquer outra | 404 personalizada | Não | rota solicitada |

## Slugs públicos

Projetos: `vertice-enem`, `conexoes-modernistas`, `simitec-2026`, `repertoryd`, `portugues-em-jogos`, `central-de-autorizacoes`, `portal-de-direitos`.

Cases usam os mesmos slugs. A home continua usando as âncoras `#inicio`, `#projetos`, `#servicos`, `#processo` e `#contato`.

## Comportamento técnico

- `src/lib/router.tsx` preserva navegação interna, `pushState` e retorno pelo browser.
- `src/lib/seo.ts` atualiza título, descrição, robots e canonical por rota.
- `public/_redirects` entrega `index.html` para entradas diretas do SPA; o cliente renderiza a 404 quando a rota não é reconhecida.
- A navbar mantém o formato anterior e retorna à home quando usada em uma página interna.
- O sitemap lista somente páginas públicas reais; `/obrigado` e 404 ficam fora.
