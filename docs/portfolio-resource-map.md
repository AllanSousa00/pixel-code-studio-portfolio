# Mapa de recursos — portfólio Pixel Code Studio

**Auditoria:** 13 de setembro de 2026.

| Fonte | URL | Acessado | O que foi estudado | O que entrou no resultado | Onde | Licença / condição | Observações |
|---|---|:---:|---|---|---|---|---|
| Motion | https://motion.dev/docs/react | ✓ | `motion`, gestos, scroll e movimento reduzido | Hero, reveals, processo, scroll progress e microinterações da galeria | `src/App.tsx`, `src/components/ui/*` | MIT | Import real por `motion/react`; movimento não essencial respeita `prefers-reduced-motion`. |
| Motion GitHub | https://github.com/motiondivision/motion | ✓ | README, pacote React, tree shaking, atividade e licença | Dependência `motion` já existente foi mantida e ampliada | `package.json` | MIT | Substitui animações globais improvisadas. |
| 21st.dev | https://21st.dev/community/components | ✓ | Hero, project showcase, gallery e CTA | Referências de ritmo para hero, galeria elástica e CTA de contato | `src/App.tsx`, `src/components/ui/elastic-gallery.tsx` | Componentes avaliados individualmente; padrões selecionados eram MIT | Tudo foi refeito com tokens Pixel, sem código global ou dependências extras. |
| UI UX Pro Max | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | ✓ | Design system, tipografia, hierarquia, conversão, responsividade, acessibilidade e anti padrões | Sistema gerado com dials 7/6/4, depois adaptado à paleta real | `design-system/pixel-code-studio-portfolio`, `src/index.css` | MIT | Ferramenta local executada com `--design-system --persist --force`. |
| Lucide Icons | https://github.com/lucide-icons/lucide | ✓ | README, imports por ícone, variantes e licença | Iconografia da navbar, hero, serviços, processo, galeria e contato | `src/App.tsx`, `src/components/ui/*` | ISC | Imports diretos e apenas ícones usados entram no bundle. |
| Allan Sousa no GitHub | https://github.com/AllanSousa00 | ✓ | Perfil público, repositórios e links já fornecidos | Link público do criador e repositórios confirmados de projetos | Sobre, footer e detalhes | Conteúdo público; licença varia por repositório | Nenhum projeto ou número foi inventado a partir do perfil. |
| Awwwards Portfolios | https://www.awwwards.com/websites/portfolio/ | ✓ | Ritmo editorial, relação entre imagem e copy e transições | Imagens grandes, hierarquia assimétrica e composição por seções | `src/App.tsx`, `src/index.css` | Pesquisa visual; sem cópia de código | Composição adaptada à Pixel, sem cursor customizado nem smooth scroll pesado. |
| CodePen | https://codepen.io/leogono/pen/nzjdxW e https://codepen.io/Cairo32/pen/KwwpmZ | ✓ | Galerias e transições de portfólio | Nenhum código copiado | — | Licença não confirmada nas páginas avaliadas | As opções dependiam de hover, jQuery ou imagens externas; a interação foi implementada localmente com Motion. |
| Reo Bot | https://github.com/RayExo/Reo-Bot | ✓ | README, estrutura de bot/dashboard, dependências e licença | Nenhum código entrou no portfólio público | — | MIT | O prompt define explicitamente que dashboard e bot ficam fora deste escopo. |
| Strix | https://github.com/usestrix/strix | ✓ | README, modelo de análise, requisitos Docker e LLM, licença | Checklist de superfície, links e headers aplicado manualmente | `_headers`, validação e auditoria | Apache-2.0 | A execução completa exige Docker e provedor LLM; desproporcional para esta SPA pública. |

## Decisões de dependência

- `lucide-react`: mantido por cobrir a iconografia do design anterior com imports diretos.
- `motion`: mantido porque oferece scroll, transições, gestos e suporte a movimento reduzido.
- `clsx`, `tailwind-merge` e `tw-animate-css`: mantidos para a estrutura shadcn/Tailwind existente.
- `@phosphor-icons/react` e `ldrs`: não são necessários na página única restaurada.
