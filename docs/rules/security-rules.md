# Regras de segurança

- Nunca commitar segredos, tokens, client secrets, chaves de analytics ou dados de cartão.
- O frontend não é autoridade para RBAC, autenticação, pagamento ou autorização.
- Preservar OAuth state, CSRF, sessões, HMAC, SSRF, rate limit, idempotência e confirmação crítica no sistema privado.
- `public/_headers` mantém CSP, `frame-ancestors`, `object-src`, `form-action`, Referrer-Policy, Permissions-Policy, COOP e MIME sniffing protegido.
- Imagens e scripts são locais; CSP não deve ser afrouxada sem necessidade documentada.
- Links externos devem ser reais e verificáveis. Não inventar Instagram, avaliações, clientes, endereços ou integrações.
- `robots.txt` e sitemap expõem apenas a página pública canônica; não registrar fragmentos de hash como rotas independentes.
- Logs de CI e runtime não devem vazar segredos nem objetos gigantes.
- Mudanças destrutivas em arquivos ou Git exigem escopo resolvido e preservação de trabalho do proprietário.
