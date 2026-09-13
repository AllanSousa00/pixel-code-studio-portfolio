# Pixel Code Studio — regras do repositório

Este arquivo é a porta de entrada para qualquer agente que altere este projeto. A constituição completa e a matriz de verificação ficam em [`docs/rules/`](docs/rules/README.md). Leia este arquivo e as regras do domínio antes de editar qualquer coisa.

## Escopo

Este diretório é o portfólio público da Pixel Code Studio e de Allan Sousa. O bot Discord, a dashboard administrativa, pagamentos, banco e infraestrutura privada são sistemas relacionados, mas não são implementados aqui. Não reintroduza páginas, comandos ou dados desses sistemas neste SPA.

## Preflight obrigatório

Antes de criar, editar, remover, testar ou publicar:

1. Leia este arquivo e [`docs/rules/global-rules.md`](docs/rules/global-rules.md).
2. Identifique o domínio afetado e leia a regra correspondente em `docs/rules/`.
3. Leia o código e os dados reais envolvidos.
4. Verifique o working tree; nunca sobrescreva trabalho do proprietário.
5. Liste riscos, comportamentos que não podem mudar e testes necessários.
6. Marque dados ausentes como TODO ou pendência explícita. Nunca invente pessoa, cliente, métrica, avaliação, endereço, URL ou identificador.

## Postflight obrigatório

Antes de declarar uma mudança concluída, revise o diff e execute, quando aplicável:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Para UI, navegue com Playwright em 390×844, 768×1024, 1440×900 e 1600×1100; confira teclado, foco, contraste, zoom, reduced motion, console, network e overflow. Faça a auditoria visual, de acessibilidade, SEO, segurança e performance. Registre falhas e pendências em [`docs/portfolio-final-audit.md`](docs/portfolio-final-audit.md) ou no relatório da tarefa.

## Decisões permanentes da Pixel

- O Design System Pixel é a fonte final: escuro, limpo, tecnológico, quadrado, organizado e profissional; sem futurismo exagerado ou efeitos gratuitos.
- Preserve os dados e links reais dos sete projetos no catálogo editorial de `src/App.tsx`.
- Lucide Icons é a biblioteca visual usada pelo design anterior restaurado; `motion` controla o movimento. Respeite `prefers-reduced-motion`.
- A página única organiza os projetos na galeria, os serviços, o processo e o contato sem criar cases ou métricas inventadas.
- O contato usa canais reais e o formulário prepara e-mail; não prometa armazenamento ou backend inexistente.
- A foto do criador, Instagram, analytics e depoimentos só entram quando o proprietário fornecer dados reais e autorização.
- Não reintroduza Perfil/Personalizar Perfil, Atividades ou Jogos e grupos/LFG. Essas decisões pertencem ao bot/dashboard e continuam removidas.
- Não crie CRUD genérico, não espalhe IDs de Discord, não armazene dados de cartão e não coloque segredos no frontend.

## Fontes externas

Ferramentas externas são lentes de revisão, nunca autoridade sobre a identidade Pixel. Versões, licenças, decisões e limites estão em [`docs/rules/external-tools.md`](docs/rules/external-tools.md) e [`docs/portfolio-resource-map.md`](docs/portfolio-resource-map.md). Avalie acessibilidade, peso, licença e manutenção antes de adicionar dependências.

## Comandos úteis

```bash
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
npm run preview
npm run deploy
```
