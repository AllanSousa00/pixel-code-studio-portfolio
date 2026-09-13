# Constituição operacional — Pixel Code Studio

Versão persistida em 13 de setembro de 2026 a partir da constituição global fornecida pelo proprietário. Ela resume as regras permanentes; a solicitação explícita atual do proprietário tem precedência, seguida de segurança, integridade de dados, arquitetura, Design System, constituição e ferramentas externas.

## Ciclo de trabalho

Toda tarefa começa com preflight: ler `AGENTS.md`, identificar domínio, ler a documentação e o código afetados, revisar o working tree, listar riscos, comportamentos imutáveis, dados ausentes e testes. Toda tarefa termina com postflight: diff, lint, typecheck, testes, build, comportamento real, responsividade, acessibilidade, segurança, performance, regressões e matriz de conformidade.

Não declare sucesso só porque a página abriu. Execute e observe os fluxos reais, incluindo estados vazios, erros, conteúdo longo, navegação direta e retorno do browser.

## Autoridade e escopo

O site público representa Pixel Code Studio e Allan, o desenvolvedor por trás da Pixel. A dashboard e o bot são um sistema separado e preservam loja, pedidos, propostas, pagamentos, tickets, moderação, segurança e auditoria. Não crie um segundo backend, banco ou lógica paralela para eles dentro do portfólio.

Repositórios e skills externos devem ser lidos, testados quando aplicável e registrados, mas não podem inventar negócio, trocar a arquitetura, enfraquecer segurança ou substituir a identidade Pixel.

## Produto e conteúdo

Não invente idade, experiência, clientes, empresas, métricas, resultados, depoimentos, foto, endereço, URL ou analytics. Use `TODO`, placeholder explícito ou pendência quando faltar informação. Cases devem comunicar problema, solução, execução e resultado sem números fabricados. Reviews vazias devem explicar que ainda não há depoimentos públicos verificados.

O site deve manter rotas amigáveis, 404, CTA, breadcrumbs, FAQ, página de obrigado, privacidade, títulos/metas únicos, Open Graph, sitemap, robots, alt text, schema real e CTA mobile. Analytics só pode ser ativado com ID real.

## Design e UX

O Design System Pixel é a fonte única: visual escuro ou claro legível, limpo, tecnológico, mais quadrado, organizado e profissional. Não use futurismo exagerado, glow em tudo, gradiente roxo-azul genérico, cards aninhados, pills indiscriminadas, ícone em quadrado acima de todo título, cinza sobre fundo colorido ou fontes sem decisão.

A interface importante define conscientemente `DESIGN_VARIANCE`, `MOTION_INTENSITY` e `VISUAL_DENSITY`. Para este portfólio: 7, 4 e 5. Motion serve a feedback, estado, hierarquia e continuidade; prefira transform/opacity e respeite `prefers-reduced-motion`. Informação essencial não depende só de hover. Alvos de toque ficam próximos de 44px e texto longo faz wrap/reflow.

Phosphor Icons é a biblioteca primária. Marcas usam assets oficiais. Cada asset externo exige origem, licença, uso comercial, atribuição e registro.

## Engenharia e dados

Prefira a solução simples que preserve clareza, segurança, performance e evolução. Não instale pacote por moda; antes verifique solução existente, peso, licença e manutenção. Não crie um depósito genérico de utils. Não remova teste para silenciar regressão e não apague dado operacional como “limpeza”. Migrations históricas nunca são editadas; queries são medidas antes/depois quando houver banco.

Na fronteira com o backend, mantenha OAuth state, CSRF, RBAC, sessão, HMAC, SSRF, rate limit, idempotência e confirmação crítica. Frontend não é autoridade para validação sensível. Cartões não armazenam PAN/CVV. Logs não expõem segredos nem objetos gigantes.

## Operação e publicação

Cloudflare continua sendo a camada pública vigente. Nunca assuma Oracle, tunnel, runtime, segredo ou integração: inspecione o estado real. O fallback SPA, CSP, headers, robots e sitemap deste projeto devem ser verificados antes de publicar. Commits devem separar mudanças relevantes e comandos destrutivos como `git reset --hard` e `git clean -fdx` são proibidos sem autorização explícita.

## Ferramentas e revisão

UI significativa passa por UI UX Pro Max, Taste, Impeccable, Huashu quando aplicável, Playwright, acessibilidade e performance. Essas lentes geram recomendações; a decisão é comparada com produto, conteúdo real, identidade Pixel e segurança. Não execute uma ferramenta sem ler e agir sobre o resultado.

As funcionalidades removidas da comunidade (Perfil/Personalizar Perfil, Atividades, Jogos e grupos/LFG) não podem voltar com outro nome. A dashboard permanece consolidada em aproximadamente dez áreas e não retorna a CRUD genérico ou sidebar gigante.
