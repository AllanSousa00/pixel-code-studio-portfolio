# Regras de frontend

- Stack oficial: React 19, TypeScript, Vite, Tailwind CSS v4, `motion` e `lucide-react`.
- A home usa âncoras semânticas (`#inicio`, `#projetos`, `#servicos`, `#processo`, `#contato`) e o roteador em `src/lib/router.tsx` mantém as páginas internas acessíveis pelo fallback `public/_redirects`.
- O catálogo editorial de projetos, serviços, processo e contatos fica em `src/App.tsx`; não criar cópias divergentes nos componentes.
- Todo `<img>` precisa de `alt` útil, dimensões/`sizes` coerentes e asset local ou URL pública verificável. Imagens do portfólio são capturas reais das aplicações.
- Metadata e canonical são atualizados por rota em `src/lib/seo.ts`; o `index.html` fornece os valores iniciais da home.
- O formulário de contato valida o mínimo no cliente e prepara `mailto:`; não deve afirmar persistência de lead sem backend real.
- Informação essencial deve funcionar no teclado e no mobile. Testar 390px, 768px, 1440px e 1600px, além de zoom 200% nas páginas principais.
- Não reintroduzir páginas internas ou componentes do redesign novo apenas por compatibilidade documental; o visual anterior é a referência vigente.
