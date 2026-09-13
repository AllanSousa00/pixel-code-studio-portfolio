# Ferramentas externas — registro fixado

Auditoria e registro: 13 de setembro de 2026. Os SHAs são os HEADs consultados nesta data; não tratar a branch viva como regra silenciosa. Cada fonte foi acessada e seu README, licença e estrutura relevante foram revisados em proporção ao uso.

| Repositório | SHA consultado | Versão/estado | README/SKILL/LICENSE/docs/scripts | Decisão no portfólio |
|---|---|---|---|---|
| `pbakaus/impeccable` | `cb56ed6c19a07329a9fa0cd4e657bee040156593` | CLI/skill instalado localmente | README, `PRODUCT.md`, `DESIGN.md`, comandos e detectores; Apache-2.0 | Instalado em `.agents/skills/impeccable`; usado para detectores e documentação; não governa o visual sozinho. |
| `alchaincyf/huashu-design` | `a790f704d85f277cc93d2081b0840d00036969bb` | Skill MIT | README, `SKILL.md`, `references/`, `assets/`, `scripts/`, `demos/` e SECURITY | Skill instalada localmente; usada como lente de revisão HTML/filosofia; nenhum asset ou runtime entrou no bundle. |
| `nextlevelbuilder/ui-ux-pro-max-skill` | `7f69fed6a2717900085f1bc3b263721f8ba025e2` | Skill MIT | README, skills, scripts e design-system | Instalado em `.agents/skills`; sistema visual persistido em `design-system/`; recomendações foram filtradas pela Pixel. |
| `Leonxlnx/taste-skill` | `ccbc15639c97057cbfcf32ecebc38ef716e4bb37` | `design-taste-frontend` v2 experimental | README, `skills/`, `scripts/`, CHANGELOG e licença MIT | Instalado em `.agents/skills`; dials 7/4/5 registrados; usado para anti-slop e redesign audit. |
| `microsoft/playwright` | `d1ead3ecca23182f2d06d761c28e3d4edafb6595` | Framework Apache-2.0 | README, API, browser matrix e docs | CLI/browser usado para fluxos, screenshots e responsividade; não foi adicionado pacote runtime ao bundle. |
| `motiondivision/motion` | consultado no mapa de recursos | `motion` em `package.json` | README, React docs e licença MIT | `motion/react` para presença, reveal, menu e showcase; reduced motion preservado. |
| `phosphor-icons/react` | consultado no mapa de recursos | `@phosphor-icons/react` | README, imports e licença MIT | Biblioteca primária com imports diretos. |
| `GriffinJohnston/ldrs` | consultado no mapa de recursos | `ldrs` em `package.json` | README, Ring React e licença MIT | Só `Ring` no loader lazy; sem splash longo. |

## Limites de integração

As fontes externas foram instrumentos de análise. Não foram copiadas galerias, logos, código com licença incerta ou integrações do bot/dashboard. A identidade, copy, tokens, dados e arquitetura final continuam sendo da Pixel Code Studio.

## Instalação local das lentes

Os skills instalados em `.agents/skills/` são ferramentas de desenvolvimento, não dependências do site publicado. O estado deve ser atualizado conscientemente e revisado antes de qualquer upgrade.
