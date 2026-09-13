# Regras de backend e infraestrutura

Este repositório não contém o backend, bot ou dashboard operacional. Portanto, regras de pagamentos, banco, OAuth administrativo, Discord REST/Gateway e Oracle são de preservação e integração futura, não de implementação no portfólio.

Quando uma integração for criada, ela deve usar os serviços de domínio existentes do sistema oficial, sem segundo backend, banco ou lógica paralela. Pagamentos precisam de idempotência, webhook assinado, conciliação, referência, moeda e status do provedor. Cartão nunca armazena PAN/CVV/dados brutos.

Cloudflare é a camada pública vigente. Runtime, tunnel, Oracle, variáveis e segredos devem ser inspecionados, nunca assumidos. O frontend não valida autorização sensível nem recebe segredo.
