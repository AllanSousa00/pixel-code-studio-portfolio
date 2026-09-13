# Regras de testes e qualidade

## Pipeline mínimo

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Use `npm run preview` para validar o artefato produzido. Se um script não existir em um domínio fora deste repositório, registre como N/A, não invente resultado.

## Browser e visual

Mudança significativa de UI deve passar por Playwright/CLI com locators semânticos e fluxos reais: Home → Projeto → Case → Contato → envio → Obrigado; navegação direta; filtros; tema; menu mobile; teclado; foco; erro e estado vazio. Capture desktop e mobile. Teste no mínimo 390×844, 768×1024, 1440×900 e 1600×1100, zoom 100%/200% quando aplicável. Chromium, Firefox e WebKit devem ser usados quando disponíveis; indisponibilidade deve ser registrada.

Verifique console sem erros inesperados, rede sem requests quebradas recorrentes, overflow, clipping, alinhamento, contraste, touch targets, reduced motion, texto longo e imagens responsivas. Para performance, registre LCP, CLS, INP/TBT, FCP, bundle e imagens antes/depois quando a tarefa for otimização.

## Julgamento

Ferramentas de design não substituem observação humana. Documente KEEP, FIX e QUICK WINS; corrija problemas reais e liste pendências. Nunca remova teste só porque começou a falhar depois da mudança.
