export type ProjectCategory = 'Plataformas' | 'Educação' | 'Eventos' | 'Sistemas'

export type Project = {
  slug: string
  name: string
  kind: string
  category: ProjectCategory
  summary: string
  challenge: string
  objective: string
  solution: string
  result: string
  process: string[]
  technologies: string[]
  image: string
  imageSmall: string
  imageCompact: string
  showcase?: string
  imageWidth: number
  imageHeight: number
  live: string
  repo?: string
  featured: boolean
  caseStudy: boolean
  status: 'Publicado'
}

export const contact = {
  email: 'allancruzsousa519@gmail.com',
  whatsapp: import.meta.env.VITE_WHATSAPP_URL?.trim() || 'https://wa.me/5583996309727?text=Ol%C3%A1%21%20Encontrei%20a%20Pixel%20Code%20Studio%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
  discord: import.meta.env.VITE_DISCORD_URL?.trim() || 'https://discord.gg/n8fzg8KFV5',
  github: 'https://github.com/AllanSousa00',
  linkedin: 'https://www.linkedin.com/in/allan-da-cruz-sousa-a068903bb/',
  youtube: import.meta.env.VITE_YOUTUBE_URL?.trim() || 'https://www.youtube.com/channel/UCS7H6p65cZb3YR7E3qXZDew',
  instagram: import.meta.env.VITE_INSTAGRAM_URL?.trim() || '',
}

export const projects: Project[] = [
  {
    slug: 'vertice-enem',
    name: 'Vértice ENEM',
    kind: 'Plataforma educacional',
    category: 'Educação',
    summary: 'Biblioteca editorial de repertórios socioculturais com busca, autenticação e uma experiência feita para transformar referência em argumento.',
    challenge: 'Organizar um catálogo extenso de repertórios sem tornar a pesquisa cansativa ou esconder o contexto necessário para usar cada referência.',
    objective: 'Criar uma plataforma de estudo clara, navegável e útil para quem prepara redações do ENEM.',
    solution: 'A informação foi dividida em jornadas curtas, com busca, páginas editoriais e áreas autenticadas conectadas por uma linguagem visual consistente.',
    result: 'O conteúdo passou a existir em uma plataforma publicada, responsiva e preparada para consulta por tema e contexto.',
    process: ['Mapeamento do conteúdo', 'Arquitetura de navegação', 'Sistema visual', 'Desenvolvimento e publicação'],
    technologies: ['React', 'TypeScript', 'Cloudflare'],
    image: '/projects/vertice-enem.webp',
    imageSmall: '/projects/vertice-enem-720.webp',
    imageCompact: '/projects/vertice-enem-480.webp',
    showcase: '/projects/vertice-enem-showcase.webp',
    imageWidth: 1440,
    imageHeight: 1835,
    live: 'https://vertice-enem.contato-repertoryd.workers.dev',
    featured: true,
    caseStudy: true,
    status: 'Publicado',
  },
  {
    slug: 'conexoes-modernistas',
    name: 'Conexões Modernistas',
    kind: 'Jogo educacional ao vivo',
    category: 'Educação',
    summary: 'Experiência para sala de aula com partidas individuais e ao vivo, códigos de acesso e conteúdo sobre as três gerações modernistas.',
    challenge: 'Transformar conteúdo literário em uma dinâmica que pudesse funcionar tanto individualmente quanto em uma atividade coletiva.',
    objective: 'Criar uma experiência de aprendizagem rápida, compreensível e adequada ao ritmo da sala de aula.',
    solution: 'O projeto reúne acesso por código, modos de jogo distintos, rodadas de conteúdo e feedback visual para orientar cada participante.',
    result: 'A proposta foi publicada como uma experiência web responsiva que conecta conteúdo, interação e uso em grupo.',
    process: ['Definição da dinâmica', 'Fluxos de acesso', 'Interface de jogo', 'Validação responsiva'],
    technologies: ['React', 'Experiência multiplayer', 'UX educacional'],
    image: '/projects/conexoes-modernistas.webp',
    imageSmall: '/projects/conexoes-modernistas-720.webp',
    imageCompact: '/projects/conexoes-modernistas-480.webp',
    showcase: '/projects/conexoes-modernistas-showcase.webp',
    imageWidth: 1280,
    imageHeight: 980,
    live: 'https://conexoes-modernistas.contato-repertoryd.workers.dev',
    featured: true,
    caseStudy: true,
    status: 'Publicado',
  },
  {
    slug: 'simitec-2026',
    name: 'SIMITEC 2026',
    kind: 'Portal de evento',
    category: 'Eventos',
    summary: 'Portal para evento escolar com programação, inscrições, galeria, atendimento e conteúdo institucional em uma experiência editorial.',
    challenge: 'Reunir informações de evento, inscrição e atendimento em uma página longa sem perder a orientação do visitante.',
    objective: 'Apresentar o evento com clareza e conduzir diferentes públicos às informações e ações necessárias.',
    solution: 'Uma hierarquia editorial separa programação, conteúdo institucional, galeria e chamada para inscrição em blocos fáceis de escanear.',
    result: 'O evento ganhou um ponto de acesso público e responsivo para concentrar sua comunicação principal.',
    process: ['Inventário de conteúdo', 'Hierarquia editorial', 'Componentes responsivos', 'Publicação no Cloudflare Pages'],
    technologies: ['JavaScript', 'Design editorial', 'Cloudflare Pages'],
    image: '/projects/simitec.webp',
    imageSmall: '/projects/simitec-720.webp',
    imageCompact: '/projects/simitec-480.webp',
    showcase: '/projects/simitec-showcase.webp',
    imageWidth: 1280,
    imageHeight: 5503,
    live: 'https://simitec-ofc.pages.dev',
    featured: true,
    caseStudy: true,
    status: 'Publicado',
  },
  {
    slug: 'repertoryd',
    name: 'Repertoryd',
    kind: 'Produto digital',
    category: 'Plataformas',
    summary: 'Plataforma de estudo com catálogo de filmes e séries, repertórios por eixo temático, redações, simulados e área autenticada.',
    challenge: 'Conectar diferentes formatos de estudo em uma experiência única sem deixar o catálogo difícil de explorar.',
    objective: 'Permitir que o estudante encontre referências e pratique em fluxos relacionados.',
    solution: 'Catálogo, eixos temáticos, simulados e área autenticada foram organizados em uma arquitetura comum.',
    result: 'O produto está publicado como uma plataforma de estudo acessível em diferentes tamanhos de tela.',
    process: ['Arquitetura do produto', 'Organização do catálogo', 'Fluxos autenticados', 'Entrega web'],
    technologies: ['JavaScript', 'Autenticação', 'Arquitetura de plataforma'],
    image: '/projects/repertoryd.webp',
    imageSmall: '/projects/repertoryd-720.webp',
    imageCompact: '/projects/repertoryd-480.webp',
    showcase: '/projects/repertoryd-showcase.webp',
    imageWidth: 1280,
    imageHeight: 720,
    live: 'https://repertoryd.pages.dev',
    featured: true,
    caseStudy: false,
    status: 'Publicado',
  },
  {
    slug: 'portugues-em-jogos',
    name: 'Português em Jogos',
    kind: 'Hub de jogos',
    category: 'Educação',
    summary: 'Hub responsivo que organiza quiz e trilha de habilidades em experiências independentes, rápidas e preparadas para uso educacional.',
    challenge: 'Apresentar atividades diferentes sem confundir o aluno e manter cada jogo acessível em telas menores.',
    objective: 'Criar um ponto de entrada simples para experiências de aprendizagem em língua portuguesa.',
    solution: 'Uma interface de hub organiza os jogos em percursos claros, com identidade comum e acesso direto.',
    result: 'As atividades passaram a ter uma vitrine publicada, responsiva e fácil de compartilhar.',
    process: ['Mapeamento das atividades', 'Navegação do hub', 'Gamificação visual', 'Revisão responsiva'],
    technologies: ['JavaScript', 'Gamificação', 'Design responsivo'],
    image: '/projects/portugues-em-jogos.webp',
    imageSmall: '/projects/portugues-em-jogos-720.webp',
    imageCompact: '/projects/portugues-em-jogos-480.webp',
    imageWidth: 1280,
    imageHeight: 720,
    live: 'https://portugues-em-jogos.pages.dev',
    repo: 'https://github.com/AllanSousa00/Jogos-de-L-ngua-Portuguesa',
    featured: false,
    caseStudy: false,
    status: 'Publicado',
  },
  {
    slug: 'central-de-autorizacoes',
    name: 'Central de Autorizações',
    kind: 'Fluxo operacional',
    category: 'Sistemas',
    summary: 'Formulário em etapas para receber solicitações de direitos de uso, organizar dados e conduzir cada pedido para análise.',
    challenge: 'Coletar informações detalhadas sem expor o solicitante a um formulário longo e desorganizado.',
    objective: 'Conduzir solicitações de forma progressiva e entregar dados mais completos para análise.',
    solution: 'O preenchimento foi dividido em etapas com contexto, validação e uma sequência previsível.',
    result: 'O fluxo está publicado e centraliza as informações necessárias para cada solicitação.',
    process: ['Levantamento dos campos', 'Fluxo em etapas', 'Validação', 'Integração e entrega'],
    technologies: ['Formulários', 'Integração', 'Automação'],
    image: '/projects/site-de-pedidos.webp',
    imageSmall: '/projects/site-de-pedidos-720.webp',
    imageCompact: '/projects/site-de-pedidos-480.webp',
    imageWidth: 1280,
    imageHeight: 1184,
    live: 'https://site-de-pedidos-pt.pages.dev',
    featured: false,
    caseStudy: false,
    status: 'Publicado',
  },
  {
    slug: 'portal-de-direitos',
    name: 'Portal de Direitos',
    kind: 'Sistema de solicitações',
    category: 'Sistemas',
    summary: 'Experiência acessível para pedidos de uso de software, com fluxo progressivo, finalidade detalhada e contato centralizado.',
    challenge: 'Explicar o pedido e reunir os dados de uso de maneira compreensível para pessoas com diferentes níveis de familiaridade técnica.',
    objective: 'Criar um fluxo claro para registrar solicitações de uso de software.',
    solution: 'A interface combina orientação, campos progressivos e linguagem direta para reduzir dúvidas durante o preenchimento.',
    result: 'O sistema foi disponibilizado em uma experiência web que organiza o contato e o pedido.',
    process: ['Análise do pedido', 'Estrutura de formulário', 'Acessibilidade', 'Publicação'],
    technologies: ['HTML', 'JavaScript', 'UX de formulário'],
    image: '/projects/portal-direitos.webp',
    imageSmall: '/projects/portal-direitos-720.webp',
    imageCompact: '/projects/portal-direitos-480.webp',
    imageWidth: 1280,
    imageHeight: 1264,
    live: 'https://portal-de-direitos-calculadora.pages.dev',
    repo: 'https://github.com/AllanSousa00/Calculadora',
    featured: false,
    caseStudy: false,
    status: 'Publicado',
  },
]

export const services = [
  {
    slug: 'sites',
    number: '01',
    title: 'Sites com objetivo claro',
    summary: 'Landing pages, portais e experiências institucionais que apresentam a marca e conduzem o visitante a uma ação.',
    examples: ['Landing pages', 'Portfólios', 'Portais institucionais'],
    related: ['simitec-2026'],
  },
  {
    slug: 'plataformas',
    number: '02',
    title: 'Plataformas sob medida',
    summary: 'Produtos digitais com áreas autenticadas, catálogos, formulários e regras construídas para o fluxo do projeto.',
    examples: ['Catálogos', 'Áreas autenticadas', 'Sistemas de solicitação'],
    related: ['vertice-enem', 'repertoryd'],
  },
  {
    slug: 'bots-automacoes',
    number: '03',
    title: 'Bots e automações',
    summary: 'Soluções para Discord, WhatsApp e Telegram que conectam atendimento, pedidos, pagamentos e rotinas operacionais.',
    examples: ['Bots para Discord', 'Fluxos de atendimento', 'Integrações'],
    related: ['central-de-autorizacoes'],
  },
  {
    slug: 'jogos',
    number: '04',
    title: 'Experiências para jogos',
    summary: 'Interfaces e sistemas para experiências de comunidade e projetos relacionados a Minecraft, FiveM e Roblox.',
    examples: ['Sites de comunidade', 'Launchers', 'Sistemas personalizados'],
    related: ['portugues-em-jogos'],
  },
]

export const technologies = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Produto', items: ['UX', 'Design responsivo', 'Acessibilidade', 'Arquitetura de informação'] },
  { category: 'Sistemas', items: ['Autenticação', 'Formulários', 'Integrações', 'Automação'] },
  { category: 'Infraestrutura', items: ['Cloudflare Pages', 'Cloudflare Workers', 'Git', 'GitHub'] },
]

export const processSteps = [
  { number: '01', title: 'Entendimento', text: 'A ideia, o público, as restrições e a ação principal são organizados antes da interface.' },
  { number: '02', title: 'Planejamento', text: 'Escopo, conteúdo, arquitetura e prioridades viram um caminho de execução compreensível.' },
  { number: '03', title: 'Desenvolvimento', text: 'A solução é construída em ciclos curtos, com decisões visuais e técnicas conectadas.' },
  { number: '04', title: 'Revisão', text: 'Os fluxos principais, a responsividade, o conteúdo e os estados de erro são verificados.' },
  { number: '05', title: 'Entrega', text: 'O produto é publicado e conferido no ambiente em que será usado.' },
  { number: '06', title: 'Suporte', text: 'Manutenção e evolução podem ser combinadas conforme a necessidade do projeto.' },
]

export const faqs = [
  { question: 'Como funciona a contratação?', answer: 'Você apresenta a ideia pelo WhatsApp, Discord ou e-mail. O escopo é analisado e a proposta é combinada antes do desenvolvimento.' },
  { question: 'A Pixel faz projetos personalizados?', answer: 'Sim. O serviço pode partir de uma estrutura já conhecida ou ser planejado para uma necessidade específica.' },
  { question: 'Como o prazo é definido?', answer: 'O prazo depende do escopo, das integrações e do conteúdo necessário. Ele é informado depois que o pedido for compreendido.' },
  { question: 'Quais formas de pagamento estão disponíveis?', answer: 'O fluxo comercial da Pixel trabalha com Pix ou cartão de crédito. As condições são apresentadas no atendimento.' },
  { question: 'Posso pedir alterações?', answer: 'Sim. Ajustes dentro do escopo seguem a revisão combinada. Funcionalidades novas ou mudanças fora do escopo são avaliadas separadamente.' },
  { question: 'Existe manutenção depois da entrega?', answer: 'A manutenção pode ser combinada como uma etapa separada, de acordo com o tipo de produto e a necessidade de evolução.' },
  { question: 'Como acompanho meu pedido?', answer: 'O acompanhamento é organizado pelos canais oficiais informados durante o atendimento, com o histórico do pedido centralizado.' },
]

export const verifiedReviews: Array<{ quote: string; author: string; project?: string }> = []

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
