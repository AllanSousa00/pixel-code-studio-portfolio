# Matriz de conformidade

Estados permitidos: `PASS`, `FAIL`, `N/A`, `BLOCKED`. Severidades: `BLOCKER`, `CRITICAL`, `MAJOR`, `MINOR`, `PREFERENCE`.

| ID | Regra | Área | Severidade | Como validar | Automática? | Ferramenta | Estado atual |
|---|---|---|---|---|:---:|---|---|
| ARC-01 | Portfólio separado de bot/dashboard | Arquitetura | BLOCKER | Revisar rotas e imports | Parcial | rg + revisão | PASS |
| ARC-02 | Dados em fonte única | Frontend | MAJOR | Inspecionar catálogo editorial em `src/App.tsx` | Parcial | rg | PASS |
| DES-01 | Tokens Pixel e anti-slop | Design | MAJOR | Revisão de `index.css` e screenshots | Não | UI review | PASS |
| DES-02 | Dials conscientes 7/4/5 | Design | MINOR | `design-rules.md` + CSS | Não | revisão | PASS |
| MOT-01 | Motion com função e reduced motion | Frontend | MAJOR | CSS, Motion e browser | Parcial | Playwright | PASS |
| A11Y-01 | Contraste, foco, teclado e labels | Acessibilidade | CRITICAL | Lighthouse + browser | Parcial | Lighthouse/Playwright | PASS |
| MOB-01 | Sem overflow em mobile/tablet | Responsividade | CRITICAL | `scrollWidth` e screenshots | Sim | Playwright | PASS |
| SEO-01 | Metas, canonical, OG, sitemap e robots por rota | SEO | MAJOR | HTML, `src/lib/seo.ts`, sitemap e robots | Parcial | testes + browser | PASS |
| SEC-01 | CSP e headers seguros | Segurança | BLOCKER | Ler `_headers`, request de preview/deploy | Sim | teste + curl | PASS |
| SEC-02 | Sem segredo/dado sensível no bundle | Segurança | BLOCKER | rg/build | Parcial | rg + review | PASS |
| TEST-01 | Lint/typecheck/test/build | Qualidade | BLOCKER | Executar scripts npm | Sim | npm | PASS |
| TEST-02 | Fluxos reais no browser | Qualidade | MAJOR | Home→projeto→case→contato→obrigado, filtros, breadcrumbs e 404 | Parcial | Playwright/CLI | PASS |
| PERF-01 | LCP/CLS/bundle/imagens revisados | Performance | MAJOR | Lighthouse e auditoria | Parcial | Lighthouse | PASS |
| CONTENT-01 | Sem métricas/depoimentos inventados | Conteúdo | BLOCKER | Revisar data/copy | Não | revisão | PASS |
| CONTENT-02 | Foto/Instagram/Analytics ausentes ficam explícitos | Conteúdo | MAJOR | Revisar pendências | Não | revisão | PASS |
| DEP-01 | Dependências justificadas e licenciadas | Engenharia | MAJOR | package + atribuições | Parcial | npm/review | PASS |
| EXT-01 | Ferramentas externas fixadas por SHA | Governança | MAJOR | `external-tools.md` | Sim | git | PASS |
| EXT-02 | Skills não sobrescrevem Pixel | Governança | MAJOR | design docs + review | Não | revisão | PASS |
| DIS-01 | Features removidas não reintroduzidas | Discord | BLOCKER | rg por rotas/termos | Sim | rg | PASS |
| DIS-02 | Components V2 preservados no privado | Discord | N/A | Fora deste repositório | Não | revisão | N/A — bot/dashboard fora do escopo |
| DB-01 | Pagamentos/SQLite/Oracle preservados | Backend | N/A | Inspecionar sistema oficial | Não | revisão privada | N/A — sem backend neste repo |
