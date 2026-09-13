# Regras de design

- Fonte final: Pixel Code Studio. Ferramentas como Taste, Huashu, UI UX Pro Max, Impeccable, 21st.dev e Awwwards são referências de revisão.
- Direção: `dark`, limpa, tecnológica, quadrada, organizada e profissional; o tema claro deve manter contraste e a mesma identidade sem inverter tokens cegamente.
- Tokens atuais ficam em `src/index.css`; não espalhe cores de marca em componentes.
- Dials conscientes do portfólio: `DESIGN_VARIANCE: 7`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 5`.
- Não usar gradiente purple-blue genérico, glow excessivo, cards dentro de cards, pills em tudo, texto cinza sobre fundo colorido ou movimento sem função.
- Motion deve usar `motion/react`, transform/opacity quando possível e desligar autoplay/efeitos com `prefers-reduced-motion`.
- Todo estado interativo deve possuir foco visível, label, feedback de erro/sucesso e alternativa que não dependa de hover.
- Marca externa usa logo/asset oficial e registro no mapa de recursos.
- Antes de uma UI significativa: crítica de hierarquia e clareza, auditoria de overflow/estados, adaptação para mobile/tablet/desktop e revisão visual.
