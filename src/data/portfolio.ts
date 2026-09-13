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

export type ProjectChapter = {
  label: string
  title: string
  text: string
}

export type ProjectDetail = {
  storyTitle: string
  storyIntro: string
  chapters: ProjectChapter[]
}

export const projectDetails: Record<string, ProjectDetail> = {
  'Vértice ENEM': {
    storyTitle: 'Sobre o Vértice ENEM',
    storyIntro: 'Eu criei o Vértice ENEM para reunir repertórios em um lugar que fosse rápido de consultar e útil de verdade na hora de escrever.',
    chapters: [
      { label: 'Por que fiz', title: 'Repertório precisa de contexto', text: 'Uma lista enorme de referências não bastava. Eu queria mostrar o que cada repertório significa e em quais temas ele pode ajudar.' },
      { label: 'O que construí', title: 'Busca e leitura no mesmo lugar', text: 'Organizei o conteúdo por eixos temáticos e criei páginas próprias para cada referência, além das áreas de redação e autenticação.' },
      { label: 'Como ficou', title: 'Uma biblioteca pronta para estudar', text: 'Hoje o projeto está publicado e funciona no celular e no computador. O estudante pode pesquisar uma ideia, entender o contexto e levar essa referência para a redação.' },
    ],
  },
  'Conexões Modernistas': {
    storyTitle: 'Sobre o Conexões Modernistas',
    storyIntro: 'Este projeto surgiu para transformar o conteúdo sobre modernismo em uma atividade que a turma pudesse jogar junto.',
    chapters: [
      { label: 'Por que fiz', title: 'Uma aula com participação', text: 'A ideia era fugir de uma apresentação passiva e fazer os alunos interagirem com as três gerações modernistas.' },
      { label: 'O que construí', title: 'Modo individual e partida ao vivo', text: 'Criei duas formas de jogar. Nas partidas ao vivo, cada participante entra pelo código da sala e acompanha as rodadas.' },
      { label: 'Como ficou', title: 'Pronto para abrir no navegador', text: 'O projeto funciona sem instalação e também pode ser usado individualmente para revisar o conteúdo.' },
    ],
  },
  'SIMITEC 2026': {
    storyTitle: 'Sobre o SIMITEC 2026',
    storyIntro: 'O portal reúne as informações do evento e dá ao visitante um endereço único para consultar a programação e fazer sua inscrição.',
    chapters: [
      { label: 'Por que fiz', title: 'Tudo estava espalhado', text: 'Programação, inscrições, galeria e atendimento precisavam aparecer juntos sem deixar a página confusa.' },
      { label: 'O que construí', title: 'Informação prática primeiro', text: 'Organizei o portal em torno da programação e das inscrições. As outras áreas entram depois, na ordem em que o visitante costuma precisar delas.' },
      { label: 'Como ficou', title: 'Um endereço para o evento inteiro', text: 'O site está publicado e se adapta ao celular, ao computador e às telas usadas na apresentação do evento.' },
    ],
  },
  Repertoryd: {
    storyTitle: 'Sobre o Repertoryd',
    storyIntro: 'No Repertoryd eu reuni filmes, séries, repertórios, redações e simulados para que o estudante não precise usar várias ferramentas separadas.',
    chapters: [
      { label: 'Por que fiz', title: 'Uma referência sozinha não ajuda muito', text: 'Eu queria que cada filme ou série viesse acompanhado de uma explicação simples sobre onde ele pode ser usado.' },
      { label: 'O que construí', title: 'Catálogo ligado ao estudo', text: 'Conectei as obras aos eixos temáticos e às áreas de repertório, redação e simulado. A conta do usuário mantém o acesso organizado.' },
      { label: 'Como ficou', title: 'Da pesquisa para a prática', text: 'A pessoa pode encontrar uma obra, entender sua relação com o tema e continuar estudando dentro da própria plataforma.' },
    ],
  },
  'Português em Jogos': {
    storyTitle: 'Sobre o Português em Jogos',
    storyIntro: 'Eu montei este hub para apresentar exercícios de português de um jeito mais leve e fácil de acessar.',
    chapters: [
      { label: 'Por que fiz', title: 'Exercício não precisa parecer prova', text: 'A proposta era manter o conteúdo didático sem copiar para a tela a aparência de uma atividade impressa.' },
      { label: 'O que construí', title: 'Um quiz e uma trilha', text: 'Separei as duas experiências em jogos próprios e criei uma página inicial simples para explicar e abrir cada uma.' },
      { label: 'Como ficou', title: 'Atividades rápidas e responsivas', text: 'O hub funciona no celular e no computador e pode ser usado em atividades educacionais curtas.' },
    ],
  },
  'Central de Autorizações': {
    storyTitle: 'Sobre a Central de Autorizações',
    storyIntro: 'A Central organiza os pedidos de direitos de uso para que as informações importantes cheguem juntas à análise.',
    chapters: [
      { label: 'Por que fiz', title: 'Cada pedido chegava de um jeito', text: 'Quando não existe um padrão, a análise pode começar sem contexto, finalidade ou contato suficiente.' },
      { label: 'O que construí', title: 'Um formulário dividido em etapas', text: 'Coloquei as perguntas na ordem certa e deixei apenas uma parte do pedido visível por vez.' },
      { label: 'Como ficou', title: 'Informações prontas para análise', text: 'No final do fluxo, contexto, finalidade e contato seguem organizados dentro da mesma solicitação.' },
    ],
  },
  'Portal de Direitos': {
    storyTitle: 'Sobre o Portal de Direitos',
    storyIntro: 'O Portal conduz um pedido de uso de software sem colocar um formulário longo inteiro na primeira tela.',
    chapters: [
      { label: 'Por que fiz', title: 'O pedido precisava ser mais simples', text: 'Finalidade, contexto e contato são necessários, mas não precisam aparecer todos de uma vez.' },
      { label: 'O que construí', title: 'Uma pergunta de cada vez', text: 'Dividi o processo em etapas e mantive as instruções próximas dos campos a que elas pertencem.' },
      { label: 'Como ficou', title: 'Um fluxo previsível para os dois lados', text: 'Quem solicita entende o próximo passo, e quem recebe encontra os dados organizados no mesmo registro.' },
    ],
  },
}

export function slugify(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
