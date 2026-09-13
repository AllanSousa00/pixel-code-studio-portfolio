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
    storyTitle: 'Repertório que chega rápido e continua fazendo sentido.',
    storyIntro: 'O Vértice ENEM organiza referências para quem precisa encontrar, entender e transformar conteúdo em argumento.',
    chapters: [
      { label: 'Ponto de partida', title: 'Encontrar uma referência sem perder o contexto', text: 'Uma lista extensa resolveria a quantidade, mas não ajudaria na hora de escrever. O conteúdo precisava continuar explicando por que cada repertório importa e em quais temas ele pode ser usado.' },
      { label: 'Decisão central', title: 'Busca, leitura e escrita no mesmo caminho', text: 'A navegação foi organizada por eixos temáticos e páginas editoriais. Cada etapa aproxima o estudante da informação certa sem interromper a leitura com controles desnecessários.' },
      { label: 'No ar', title: 'Uma biblioteca feita para virar argumento', text: 'A versão publicada reúne repertórios, redações e acesso autenticado em uma experiência responsiva que pode ser consultada durante toda a preparação para o ENEM.' },
    ],
  },
  'Conexões Modernistas': {
    storyTitle: 'Modernismo virou partida, código e conversa em sala.',
    storyIntro: 'O conteúdo literário ganhou uma dinâmica que funciona tanto no estudo individual quanto em uma atividade conduzida ao vivo.',
    chapters: [
      { label: 'Ponto de partida', title: 'Literatura com ritmo de atividade coletiva', text: 'O desafio era tirar as três gerações modernistas de uma apresentação passiva e criar uma experiência que mantivesse a turma participando do começo ao fim.' },
      { label: 'Decisão central', title: 'Duas formas de jogar, uma mesma linguagem', text: 'O projeto separa o modo individual das partidas ao vivo e usa códigos de acesso para conectar cada participante à rodada certa, com feedback claro a cada resposta.' },
      { label: 'No ar', title: 'Conteúdo que continua depois da explicação', text: 'A experiência publicada permite revisar o tema sozinho ou transformar a aula em uma partida compartilhada, sem exigir instalação.' },
    ],
  },
  'SIMITEC 2026': {
    storyTitle: 'Toda a experiência do evento em um único endereço.',
    storyIntro: 'O portal do SIMITEC 2026 foi pensado para orientar visitantes antes, durante e depois da programação.',
    chapters: [
      { label: 'Ponto de partida', title: 'Muita informação disputando a mesma atenção', text: 'Programação, inscrições, conteúdo institucional, galeria e atendimento precisavam conviver sem transformar a página em um mural difícil de percorrer.' },
      { label: 'Decisão central', title: 'A programação virou o eixo da navegação', text: 'A hierarquia editorial aproxima primeiro as informações práticas e distribui o restante em blocos com ritmo, contraste e chamadas claras para inscrição.' },
      { label: 'No ar', title: 'Um portal que acompanha o evento', text: 'A versão publicada concentra a comunicação do SIMITEC em uma página responsiva, preparada para consulta rápida no celular e apresentação em telas maiores.' },
    ],
  },
  Repertoryd: {
    storyTitle: 'Do catálogo à redação, sem quebrar o ritmo de estudo.',
    storyIntro: 'O Repertoryd reúne descoberta, repertório e prática em uma plataforma que ajuda o estudante a avançar com direção.',
    chapters: [
      { label: 'Ponto de partida', title: 'Referências demais, pouca orientação para usar', text: 'Filmes, séries e temas só seriam úteis se o estudante entendesse a relação entre cada obra e o argumento que deseja construir.' },
      { label: 'Decisão central', title: 'Descoberta e prática passaram a conversar', text: 'O catálogo foi conectado a eixos temáticos, repertórios, redações e simulados. A área autenticada mantém essa jornada organizada em vez de apresentar ferramentas isoladas.' },
      { label: 'No ar', title: 'Um produto que acompanha a preparação', text: 'A plataforma publicada oferece um caminho contínuo entre encontrar uma referência, estudar seu contexto e praticar a aplicação em uma redação.' },
    ],
  },
  'Português em Jogos': {
    storyTitle: 'Praticar português com a lógica de um jogo.',
    storyIntro: 'O hub transforma exercícios em experiências curtas, diretas e fáceis de abrir em qualquer dispositivo.',
    chapters: [
      { label: 'Ponto de partida', title: 'Exercício sem aparência de lista', text: 'O conteúdo precisava continuar didático sem repetir a estrutura de uma atividade impressa dentro da tela.' },
      { label: 'Decisão central', title: 'Duas experiências, um mesmo ponto de entrada', text: 'Quiz e trilha de habilidades foram separados em jogos independentes, enquanto o hub mantém a escolha simples e apresenta cada proposta antes de começar.' },
      { label: 'No ar', title: 'Português praticado jogando', text: 'A publicação reúne atividades responsivas e rápidas, prontas para uso educacional no computador ou no celular.' },
    ],
  },
  'Central de Autorizações': {
    storyTitle: 'Um pedido bem explicado antes da análise começar.',
    storyIntro: 'A Central de Autorizações organiza solicitações de direitos de uso em uma sequência curta e compreensível.',
    chapters: [
      { label: 'Ponto de partida', title: 'Pedidos diferentes chegavam sem o mesmo padrão', text: 'Sem uma estrutura comum, informações essenciais podiam ficar espalhadas ou faltar justamente quando a solicitação chegava à análise.' },
      { label: 'Decisão central', title: 'As perguntas entram na ordem certa', text: 'O formulário foi dividido em etapas para apresentar uma decisão por vez, explicar o que está sendo solicitado e reunir os dados necessários sem sobrecarregar a primeira tela.' },
      { label: 'No ar', title: 'Uma solicitação pronta para ser avaliada', text: 'O fluxo publicado conduz o pedido do início ao envio com contexto, finalidade e contato organizados no mesmo percurso.' },
    ],
  },
  'Portal de Direitos': {
    storyTitle: 'Direitos de uso explicados passo a passo.',
    storyIntro: 'O Portal de Direitos transforma uma solicitação técnica em uma conversa clara para quem pede e para quem avalia.',
    chapters: [
      { label: 'Ponto de partida', title: 'Explicar o uso de software sem criar ruído', text: 'A pessoa precisava informar finalidade, contexto e contato sem enfrentar um formulário longo ou termos soltos desde o primeiro momento.' },
      { label: 'Decisão central', title: 'Cada etapa responde uma dúvida', text: 'O fluxo progressivo separa as escolhas, mantém instruções próximas dos campos e mostra somente o que é necessário para a decisão atual.' },
      { label: 'No ar', title: 'Um registro claro de cada solicitação', text: 'A experiência publicada centraliza o pedido e deixa o caminho mais previsível tanto para quem solicita quanto para quem recebe os dados.' },
    ],
  },
}

export function slugify(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
