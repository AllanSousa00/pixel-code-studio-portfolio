# Pixel Code Studio — design vigente

## Direção

O portfólio é editorial e tecnológico, com grade visível, contraste alto e elementos quadrados com raio moderado. A identidade usa preto/papel, branco quente, lime e violeta; o tema claro troca os tokens para manter legibilidade sem virar uma inversão automática.

## Dials

```text
DESIGN_VARIANCE: 7
MOTION_INTENSITY: 4
VISUAL_DENSITY: 5
```

## Tipografia

`Archivo` conduz títulos e números; `Space Grotesk` conduz texto, navegação e metadados. Os arquivos locais carregam apenas a família variável utilizada.

## Movimento

Motion comunica entrada, mudança de estado, continuidade e feedback. O showcase troca projetos em intervalo moderado com saída e entrada sutis; reveals usam opacity/transform. `prefers-reduced-motion` desliga autoplay e transições não essenciais.

## Componentes e dados

A página usa a navbar em pílula no topo, galeria elástica, marquee, serviços, processo, CTA de contato e footer. O catálogo editorial fica em `src/App.tsx`; os blocos visuais reutilizáveis ficam em `src/components/ui`. Lucide Icons é a biblioteca do design restaurado. Imagens têm alt, `sizes` e versões locais responsivas.

## Anti-patterns evitados

Sem gradiente roxo-azul genérico, cards aninhados, glow em tudo, pills indiscriminadas, cinza sobre fundo colorido, ícones decorativos sem função ou informação essencial dependente de hover.

## Revisão

Antes de uma mudança visual relevante, use a matriz em `docs/rules/compliance-matrix.md`, as lentes registradas em `docs/rules/external-tools.md` e valide com Playwright, Lighthouse, teclado, zoom, reduced motion e screenshots.
