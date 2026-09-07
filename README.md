# Pixel Code Studio — Portfólio

Portfólio comercial de Allan Sousa e da Pixel Code Studio. A página apresenta sete projetos reais publicados, serviços, processo de trabalho e links para as demonstrações.

**Site publicado:** https://pixel-code-studio-portfolio.pages.dev

## Stack

- React 19 e Vite
- Motion (`motion/react`) para animações, gestos, scroll e transições
- Lucide React para iconografia
- CSS responsivo com suporte a `prefers-reduced-motion`

## Recursos integrados

- [Motion](https://github.com/motiondivision/motion): biblioteca de animação instalada pelo pacote atual `motion` e importada de `motion/react`.
- [21st.dev Community Components](https://21st.dev/community/components): componentes `BackgroundPaths`, `TextRotate`, `Spotlight` e `Marquee` incorporados como componentes reutilizáveis e adaptados à identidade do estúdio.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): sistema visual pesquisado e persistido em `design-system/pixel-code-studio-portfolio`.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Validação

```bash
npm run lint
npm run build
```

## Publicação

```bash
npm run deploy
```

As imagens em `public/projects` são capturas das aplicações reais em produção, comprimidas em WebP para o portfólio.

As atribuições dos componentes abertos usados no projeto estão documentadas em `ATTRIBUTIONS.md`.
