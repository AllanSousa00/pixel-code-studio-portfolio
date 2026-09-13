# Mapa de recursos — portfólio Pixel Code Studio

**Auditoria:** 13 de setembro de 2026.

| Fonte | URL | Acessado | O que foi estudado | O que entrou no resultado | Onde | Licença / condição | Observações |
|---|---|:---:|---|---|---|---|---|
| Motion | https://motion.dev/docs/react | ✓ | `motion`, `AnimatePresence`, gestos, layout e movimento reduzido | Transições de rota, reveals, menu, FAQ, showcase e microinterações | `src/App.tsx`, `src/components/*` | MIT | Import real por `motion/react`; autoplay é desativado com movimento reduzido. |
| Motion GitHub | https://github.com/motiondivision/motion | ✓ | README, pacote React, tree shaking, atividade e licença | Dependência `motion` já existente foi mantida e ampliada | `package.json` | MIT | Substitui animações globais improvisadas. |
| 21st.dev | https://21st.dev/community/components | ✓ | Hero, project showcase, gallery, accordion, CTA e portfolio templates | Showcase com abas e troca automática; FAQ expansível; composição de CTA | `FeaturedProjects.tsx`, `FaqSection.tsx`, `HomePage.tsx` | Componentes avaliados individualmente; padrões selecionados eram MIT | Tudo foi refeito com tokens Pixel, sem código global ou dependências extras. |
| UI UX Pro Max | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | ✓ | Design system, tipografia, hierarquia, conversão, responsividade, acessibilidade e anti padrões | Sistema gerado com dials 7/6/4, depois adaptado à paleta real | `design-system/pixel-code-studio-portfolio`, `src/index.css` | MIT | Ferramenta local executada com `--design-system --persist --force`. |
| Phosphor Icons | https://github.com/phosphor-icons/react | ✓ | README, imports por ícone, variantes e licença | Biblioteca principal de ícones com imports diretos por módulo | navegação, páginas e componentes | MIT | Lucide foi removido do bundle. |
| LDRS | https://github.com/GriffinJohnston/ldrs | ✓ | README, API React, tamanho, estrutura e licença | Componente `Ring` no fallback das rotas lazy | `RouteLoader.tsx` | MIT | Uso curto e não bloqueante; nenhum splash longo. |
| Allan Sousa no GitHub | https://github.com/AllanSousa00 | ✓ | Perfil público, repositórios e links já fornecidos | Link público do criador e repositórios confirmados de projetos | Sobre, footer e detalhes | Conteúdo público; licença varia por repositório | Nenhum projeto ou número foi inventado a partir do perfil. |
| Awwwards Portfolios | https://www.awwwards.com/websites/portfolio/ | ✓ | Ritmo editorial, relação entre imagem e copy, cases e transições | Capítulos dos cases, imagens grandes e hierarquia assimétrica | páginas de case e projeto | Pesquisa visual; sem cópia de código | Composição adaptada à Pixel, sem cursor customizado nem smooth scroll pesado. |
| CodePen | https://codepen.io/leogono/pen/nzjdxW e https://codepen.io/Cairo32/pen/KwwpmZ | ✓ | Galerias e transições de portfólio | Nenhum código copiado | — | Licença não confirmada nas páginas avaliadas | As opções dependiam de hover, jQuery ou imagens externas; a interação foi implementada localmente com Motion. |
| Reo Bot | https://github.com/RayExo/Reo-Bot | ✓ | README, estrutura de bot/dashboard, dependências e licença | Nenhum código entrou no portfólio público | — | MIT | O prompt define explicitamente que dashboard e bot ficam fora deste escopo. |
| Strix | https://github.com/usestrix/strix | ✓ | README, modelo de análise, requisitos Docker e LLM, licença | Checklist de superfície, links e headers aplicado manualmente | `_headers`, validação e auditoria | Apache-2.0 | A execução completa exige Docker e provedor LLM; desproporcional para esta SPA pública. |

## Decisões de dependência

- `@phosphor-icons/react`: mantido por cobrir a iconografia com uma família única.
- `motion`: mantido porque oferece transições, presença, gestos e suporte a movimento reduzido.
- `ldrs`: mantido apenas para o Ring do code splitting; é pequeno e não duplica outra UI existente.
- `lucide-react`, `clsx`, `tailwind-merge` e `tw-animate-css`: removidos porque deixaram de ser usados.
