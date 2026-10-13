export type Lang = 'en' | 'pt'
export type L = Record<Lang, string>

export const LANGS: Lang[] = ['en', 'pt']

const en = {
  nav: {
    home: 'Home', about: 'About', skills: 'Skills', services: 'Services',
    work: 'Work', contact: 'Contact',
  },
  common: {
    downloadCv: 'Download CV',
    present: 'Present',
    toggleTheme: 'Toggle theme',
    toggleMenu: 'Toggle menu',
    switchLang: 'Switch language',
  },
  hero: {
    available: 'Available for projects',
    hello: "Hello, I'm 👋",
    contact: 'Contact Me',
  },
  about: {
    subtitle: 'Get to know me',
    title: 'About Me',
    yearsExp: ['Years', 'Exp.'],
    basedIn: 'Based in',
    extra: ', I work with startups and businesses to deliver clean, maintainable code — from pixel-perfect frontends to scalable APIs and cross-platform mobile apps.',
  },
  skills: { subtitle: 'What I know', title: 'Skills' },
  services: { subtitle: 'What I offer', title: 'Services' },
  qualifications: {
    subtitle: 'My journey', title: 'Qualifications',
    experience: 'Experience', education: 'Education',
  },
  projects: {
    subtitle: 'My recent work', title: 'Featured Projects',
    featured: 'Featured', liveDemo: 'Live demo', googlePlay: 'Get it on Google Play',
    filters: { all: 'All', mobile: 'Mobile', web: 'Web', design: 'Design' },
  },
  contact: {
    subtitle: 'Get in touch', title: 'Contact Me',
    talk: "Let's talk",
    intro: "Have a project in mind or want to collaborate? I'm always open to new opportunities. Reach out via any channel below.",
    writeMe: 'Write me →',
    send: 'Send a message',
    name: 'Name', namePh: 'Your name',
    email: 'Email', emailPh: 'your@email.com',
    message: 'Message', messagePh: 'Tell me about your project...',
    sending: 'Sending...', submit: 'Send Message',
    success: 'Message sent successfully!',
    error: 'Failed to send. Try emailing directly.',
  },
  footer: { tagline: 'FullStack & Mobile Developer', privacy: 'Privacy Policy' },
}

export type Dict = typeof en

const pt: Dict = {
  nav: {
    home: 'Início', about: 'Sobre', skills: 'Competências', services: 'Serviços',
    work: 'Projectos', contact: 'Contacto',
  },
  common: {
    downloadCv: 'Baixar CV',
    present: 'Presente',
    toggleTheme: 'Alternar tema',
    toggleMenu: 'Abrir menu',
    switchLang: 'Mudar idioma',
  },
  hero: {
    available: 'Disponível para projectos',
    hello: 'Olá, eu sou 👋',
    contact: 'Contacte-me',
  },
  about: {
    subtitle: 'Conheça-me',
    title: 'Sobre Mim',
    yearsExp: ['Anos de', 'Exp.'],
    basedIn: 'Baseado em',
    extra: ', trabalho com startups e empresas para entregar código limpo e sustentável — desde frontends com detalhe ao pixel até APIs escaláveis e aplicações móveis multiplataforma.',
  },
  skills: { subtitle: 'O que sei', title: 'Competências' },
  services: { subtitle: 'O que ofereço', title: 'Serviços' },
  qualifications: {
    subtitle: 'O meu percurso', title: 'Qualificações',
    experience: 'Experiência', education: 'Formação',
  },
  projects: {
    subtitle: 'Trabalho recente', title: 'Projectos em Destaque',
    featured: 'Destaque', liveDemo: 'Ver online', googlePlay: 'Disponível no Google Play',
    filters: { all: 'Todos', mobile: 'Mobile', web: 'Web', design: 'Design' },
  },
  contact: {
    subtitle: 'Entre em contacto', title: 'Contacte-me',
    talk: 'Vamos conversar',
    intro: 'Tem um projecto em mente ou quer colaborar? Estou sempre aberto a novas oportunidades. Fale comigo por qualquer um dos canais abaixo.',
    writeMe: 'Escrever →',
    send: 'Enviar mensagem',
    name: 'Nome', namePh: 'O seu nome',
    email: 'Email', emailPh: 'seu@email.com',
    message: 'Mensagem', messagePh: 'Fale-me sobre o seu projecto...',
    sending: 'A enviar...', submit: 'Enviar Mensagem',
    success: 'Mensagem enviada com sucesso!',
    error: 'Falha no envio. Tente enviar um email directamente.',
  },
  footer: { tagline: 'Desenvolvedor FullStack & Mobile', privacy: 'Política de Privacidade' },
}

export const dictionaries: Record<Lang, Dict> = { en, pt }
