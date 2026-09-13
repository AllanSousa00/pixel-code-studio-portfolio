# Pixel Code Studio — Portfólio

Portfólio comercial de Allan Sousa e da Pixel Code Studio. A página apresenta sete projetos reais publicados, serviços, processo de trabalho e links para as demonstrações.

**Site publicado:** https://pixel-code-studio-portfolio.pages.dev

## Stack

- React 19, TypeScript e Vite
- Tailwind CSS v4 com estrutura e aliases compatíveis com shadcn/ui
- Motion (`motion/react`) para animações, gestos, scroll e transições
- Phosphor Icons para iconografia
- Assets oficiais de marca quando a marca aparece nos links
- CSS responsivo com suporte a `prefers-reduced-motion`

## Recursos integrados

- [Motion](https://github.com/motiondivision/motion): biblioteca de animação instalada pelo pacote atual `motion` e importada de `motion/react`.
- [21st.dev Community Components](https://21st.dev/community/components): padrões de hero, showcase, galeria, FAQ e CTA avaliados e reimplementados com tokens Pixel.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): sistema visual pesquisado e persistido em `design-system/pixel-code-studio-portfolio`.
- [Taste, Impeccable e Huashu Design](docs/rules/external-tools.md): lentes de revisão instaladas localmente e filtradas pela identidade Pixel.

Os componentes de interface ficam em `src/components` e `src/components/common`; a estrutura continua compatível com o alias e a configuração shadcn em `components.json`. Os estilos globais e tokens do Tailwind ficam em `src/index.css`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run typecheck
npm run build
```

## Publicação

```bash
npm run deploy
```

As imagens em `public/projects` são capturas das aplicações reais em produção, comprimidas em WebP para o portfólio.

As atribuições dos componentes abertos usados no projeto estão documentadas em `ATTRIBUTIONS.md`.

As regras de trabalho ficam em `AGENTS.md` e `docs/rules/`. O relatório da última auditoria está em `docs/portfolio-final-audit.md`.
