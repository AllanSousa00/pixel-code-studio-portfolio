# Design System — Pixel Code Studio Portfolio

**Atualizado:** 2026-09-13
**Fonte de decisão:** UI UX Pro Max executado com o perfil `creative software studio developer portfolio dark editorial accessible conversion` e adaptado à identidade Pixel existente.
**Dials:** variação 7/10 · movimento 4/10 · densidade 5/10.

## Direção

O sistema combina storytelling editorial, contraste alto e geometria inspirada em pixels. A estrutura apresenta trabalho real antes de efeitos decorativos. A marca e Allan Sousa aparecem como partes da mesma autoria.

- Visual escuro, limpo, tecnológico e organizado.
- Formas majoritariamente quadradas; pílulas ficam restritas à navegação e filtros.
- Imagens reais de projeto são a prova visual principal.
- Movimento explica continuidade: entrada de página, troca de projeto, menu, FAQ e feedback.
- O conteúdo permanece legível sem animação, hover ou JavaScript de terceiros.

## Tokens de cor

| Papel | Tema escuro | Tema claro | Uso |
|---|---:|---:|---|
| Fundo | `#080809` | `#F4F3ED` | canvas principal |
| Painel | `#101012` | `#FFFEFA` | cards e blocos |
| Texto | `#F7F7F2` | `#131315` | títulos e corpo principal |
| Texto secundário | `#AAAAB1` | `#56565D` | descrições |
| Verde Pixel | `#C7FF38` | `#4F7000` | CTA, foco, estado ativo |
| Violeta Pixel | `#9975FF` | `#633EE2` | profundidade, ícones, apoio |

O verde do tema claro foi escurecido para manter contraste. Não usar verde elétrico com texto branco. O violeta não substitui o CTA principal.

## Tipografia

- Display: Archivo, pesos 700–850, tracking negativo em títulos grandes.
- Corpo: Space Grotesk, pesos 400–700, linha entre 1.55 e 1.75.
- H1: `clamp(48px, 7.4vw, 108px)`, um por página.
- H2: `clamp(38px, 6vw, 82px)`.
- Corpo: 15–17px; textos auxiliares nunca menores que 10px.
- Fontes locais em WOFF2, com preload e `font-display: swap`.

## Espaçamento e largura

- Conteúdo: máximo 1240px.
- Respiro lateral: 24px no desktop e 16px no mobile.
- Seções: 120px no desktop e 82px no mobile.
- Escala base: 4, 8, 12, 16, 24, 32, 48, 64, 82, 120.

## Componentes

- Navbar: pílula compacta, fixa, com 44px mínimos por alvo e menu modal no mobile.
- Botão primário: verde Pixel, texto de alto contraste e rótulo que descreve a ação.
- Cards: borda de 1px, fundo de painel, imagem com dimensão explícita; sem card dentro de card.
- Project showcase: abas visíveis, transição de 580ms e controle de pausa; conteúdo essencial acessível por toque e teclado.
- FAQ: botão completo como alvo, `aria-expanded`, animação de altura e estado final legível com movimento reduzido.
- Formulário: quatro campos, validação direta, feedback textual e comportamento real declarado.
- Loading: Ring da LDRS apenas durante code splitting; nunca como splash longo.

## Motion

- Biblioteca: `motion/react`.
- Reveal: 560ms, `cubic-bezier(.22,1,.36,1)`.
- Troca de projeto: 580ms, saída antes da entrada.
- Rota: 340ms, `AnimatePresence` em modo `wait`.
- Hovers: 200–300ms, sem deslocar a estrutura.
- `prefers-reduced-motion`: remove parallax, autoplay e transições não essenciais.

## Responsividade

- 390px: navegação por menu, projeto sem hover, CTA fixo com safe area.
- 768px: grids passam para uma ou duas colunas conforme conteúdo.
- 1024px: cards e serviços mantêm hierarquia com textos completos.
- 1366–1600px: largura máxima impede linhas longas e mantém ritmo editorial.

## Acessibilidade

- Foco violeta de 3px em todos os controles.
- Alvo mínimo de 44px.
- Link “Pular para o conteúdo”.
- Estrutura semântica de heading; um H1 por página.
- Imagens informativas com alt contextual; arte decorativa com `aria-hidden`.
- Menu fecha com Escape, bloqueia scroll e recebe foco.
- Informação não depende de cor, hover ou animação.

## Anti padrões

- Não usar frases genéricas, métricas sem fonte, depoimentos fictícios ou barras de habilidade.
- Não usar emojis como iconografia estrutural.
- Não misturar famílias de ícones; Phosphor é a biblioteca principal.
- Não aplicar glow, gradiente ou pílulas em todo elemento.
- Não esconder informações essenciais em hover.
- Não criar um novo visual futurista ou gamer sem contexto.
