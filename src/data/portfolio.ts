export type Project = {
  name: string
  kind: string
  description: string
  image: string
  imageSmall: string
  imageWidth: number
  imageHeight: number
  live: string
  repo?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: 'Vértice ENEM',
    kind: 'Plataforma educacional',
    description: 'Biblioteca editorial de repertórios socioculturais, com busca, autenticação e uma experiência pensada para transformar referência em argumento.',
    image: '/projects/vertice-enem.webp',
    imageSmall: '/projects/vertice-enem-720.webp',
    imageWidth: 1440,
    imageHeight: 1835,
    live: 'https://vertice-enem.contato-repertoryd.workers.dev',
    tags: ['React', 'TypeScript', 'Cloudflare'],
  },
  {
    name: 'Conexões Modernistas',
    kind: 'Jogo educacional ao vivo',
    description: 'Experiência para sala de aula com partidas individuais e ao vivo, códigos de acesso e conteúdo sobre as três gerações modernistas.',
    image: '/projects/conexoes-modernistas.webp',
    imageSmall: '/projects/conexoes-modernistas-720.webp',
    imageWidth: 1280,
    imageHeight: 980,
    live: 'https://conexoes-modernistas.contato-repertoryd.workers.dev',
    tags: ['React', 'Multiplayer', 'UX educacional'],
  },
  {
    name: 'SIMITEC 2026',
    kind: 'Portal de evento',
    description: 'Portal completo para evento escolar, reunindo programação, inscrições, galeria, atendimento e conteúdo institucional em uma só experiência.',
    image: '/projects/simitec.webp',
    imageSmall: '/projects/simitec-720.webp',
    imageWidth: 1280,
    imageHeight: 5503,
    live: 'https://simitec-ofc.pages.dev',
    tags: ['JavaScript', 'Design editorial', 'Cloudflare Pages'],
  },
  {
    name: 'Repertoryd',
    kind: 'Produto digital',
    description: 'Plataforma de estudo com catálogo de filmes e séries, repertórios por eixo temático, redações, simulados e área autenticada.',
    image: '/projects/repertoryd.webp',
    imageSmall: '/projects/repertoryd-720.webp',
    imageWidth: 1280,
    imageHeight: 720,
    live: 'https://repertoryd.pages.dev',
    tags: ['JavaScript', 'Autenticação', 'Plataforma'],
  },
  {
    name: 'Português em Jogos',
    kind: 'Hub de jogos',
    description: 'Hub responsivo que organiza quiz e trilha de habilidades em experiências independentes, rápidas e preparadas para uso educacional.',
    image: '/projects/portugues-em-jogos.webp',
    imageSmall: '/projects/portugues-em-jogos-720.webp',
    imageWidth: 1280,
    imageHeight: 720,
    live: 'https://portugues-em-jogos.pages.dev',
    repo: 'https://github.com/AllanSousa00/Jogos-de-L-ngua-Portuguesa',
    tags: ['JavaScript', 'Gamificação', 'Responsivo'],
  },
  {
    name: 'Central de Autorizações',
    kind: 'Fluxo operacional',
    description: 'Formulário em etapas para receber solicitações de direitos de uso, organizar dados e conduzir cada pedido para análise.',
    image: '/projects/site-de-pedidos.webp',
    imageSmall: '/projects/site-de-pedidos-720.webp',
    imageWidth: 1280,
    imageHeight: 1184,
    live: 'https://site-de-pedidos-pt.pages.dev',
    tags: ['Formulários', 'Integração', 'Automação'],
  },
  {
    name: 'Portal de Direitos',
    kind: 'Sistema de solicitações',
    description: 'Experiência acessível para pedidos de uso de software, com fluxo progressivo, finalidade detalhada e contato centralizado.',
    image: '/projects/portal-direitos.webp',
    imageSmall: '/projects/portal-direitos-720.webp',
    imageWidth: 1280,
    imageHeight: 1264,
    live: 'https://portal-de-direitos-calculadora.pages.dev',
    repo: 'https://github.com/AllanSousa00/Calculadora',
    tags: ['HTML', 'JavaScript', 'UX de formulário'],
  },
]

export const services = [
  { number: '01', title: 'Sites que apresentam e vendem', text: 'Landing pages, portais e experiências institucionais com mensagem clara, identidade própria e navegação que leva à ação.' },
  { number: '02', title: 'Plataformas sob medida', text: 'Produtos digitais com áreas autenticadas, catálogos, painéis, formulários, integrações e regras específicas para o seu negócio.' },
  { number: '03', title: 'Bots e automações', text: 'Bots para Discord, WhatsApp e Telegram, além de fluxos que conectam atendimento, pedidos, pagamentos e operação.' },
  { number: '04', title: 'Experiências para jogos', text: 'Lojas, launchers, servidores e sistemas para Minecraft, FiveM e Roblox com apresentação profissional e comunidade no centro.' },
]

export const categoryByProject: Record<string, string> = {
  'Vértice ENEM': 'Educação',
  'Conexões Modernistas': 'Educação',
  'SIMITEC 2026': 'Eventos',
  Repertoryd: 'Plataformas',
  'Português em Jogos': 'Educação',
  'Central de Autorizações': 'Sistemas',
  'Portal de Direitos': 'Sistemas',
}

export const projectDetails: Record<string, { challenge: string; solution: string; result: string }> = {
  'Vértice ENEM': {
    challenge: 'Organizar repertórios socioculturais sem esconder o contexto necessário para usar cada referência.',
    solution: 'A informação foi dividida em jornadas curtas, com busca, páginas editoriais e áreas conectadas por uma linguagem visual consistente.',
    result: 'O conteúdo passou a existir em uma plataforma publicada e preparada para consulta por tema e contexto.',
  },
  'Conexões Modernistas': {
    challenge: 'Transformar conteúdo literário em uma dinâmica que funcionasse individualmente e em atividade coletiva.',
    solution: 'O projeto reúne acesso por código, modos de jogo distintos, rodadas de conteúdo e feedback visual.',
    result: 'A proposta foi publicada como uma experiência web responsiva que conecta conteúdo e interação.',
  },
  'SIMITEC 2026': {
    challenge: 'Reunir informações de evento, inscrição e atendimento sem perder a orientação do visitante.',
    solution: 'Uma hierarquia editorial separa programação, conteúdo institucional, galeria e chamada para inscrição.',
    result: 'O evento ganhou um ponto de acesso público e responsivo para concentrar sua comunicação.',
  },
}

export function slugify(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
