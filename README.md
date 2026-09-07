# Pixel Code Studio — Portfólio

Portfólio comercial de Allan Sousa e da Pixel Code Studio. A página apresenta sete projetos reais publicados, serviços, processo de trabalho e links para as demonstrações.

**Site publicado:** https://pixel-code-studio-portfolio.pages.dev

## Stack

- React 19, TypeScript e Vite
- Tailwind CSS v4 com estrutura e aliases compatíveis com shadcn/ui
- Motion (`motion/react`) para animações, gestos, scroll e transições
- Lucide React para iconografia
- CSS responsivo com suporte a `prefers-reduced-motion`

## Recursos integrados

- [Motion](https://github.com/motiondivision/motion): biblioteca de animação instalada pelo pacote atual `motion` e importada de `motion/react`.
- [21st.dev Community Components](https://21st.dev/community/components): componentes `BackgroundPaths`, `TextRotate`, `Spotlight` e `Marquee` incorporados como componentes reutilizáveis e adaptados à identidade do estúdio.
- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill): sistema visual pesquisado e persistido em `design-system/pixel-code-studio-portfolio`.
- `BottomNavBar`: navegação animada em `src/components/ui`, posicionada no cabeçalho e personalizada para as seções e os contatos do portfólio.
- `ElasticGallery`: galeria em acordeão em `src/components/ui`, aplicada às capturas reais dos sete projetos com avanço automático, pausa e interação por ponteiro, toque e teclado.

Os componentes de interface ficam em `src/components/ui`, conforme o alias `@/components/ui` do shadcn. Os estilos globais e tokens do Tailwind ficam em `src/index.css`.

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
