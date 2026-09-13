# Regras de frontend

- Stack oficial: React 19, TypeScript, Vite, Tailwind CSS v4, `motion`, `@phosphor-icons/react` e `ldrs` apenas no loader lazy.
- Rotas públicas usam History API em `src/lib/router.tsx`, slugs reais e fallback `public/_redirects`.
- `src/data/portfolio.ts` é a fonte única dos projetos, contatos, serviços, FAQ e processo. Não duplicar cópia editorial nos componentes.
- Todo `<img>` precisa de `alt` útil, dimensões/`sizes` coerentes e asset local ou URL pública verificável. Imagens do portfólio são capturas reais das aplicações.
- Metadata, canonical, Open Graph, Twitter e JSON-LD são atualizados por rota em `src/lib/seo.ts`.
- O formulário de contato valida o mínimo no cliente e prepara `mailto:`; não deve afirmar persistência de lead sem backend real.
- Informação essencial deve funcionar no teclado e no mobile. Testar 390px, 768px, 1440px e 1600px, além de zoom 200% nas páginas principais.
- Não reintroduzir componentes deletados de `src/components/ui` só por compatibilidade de documentação antiga; atualize a documentação quando a arquitetura mudar.
