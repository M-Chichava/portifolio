import type { L } from './translations'

export const personal = {
  name:      'Marcos Chichava',
  role:      { en: 'Software Engineer', pt: 'Engenheiro de Software' } as L,
  roles: [
    { en: 'Software Engineer',   pt: 'Engenheiro de Software'    },
    { en: 'FullStack Developer', pt: 'Desenvolvedor FullStack'   },
    { en: 'Mobile Developer',    pt: 'Desenvolvedor Mobile'      },
  ] as L[],
  bio: {
    en: 'Software Engineer at Maputo Port Development Company with 5+ years building enterprise-grade web and mobile applications. Specialized in Angular, .NET, React Native and Micro Frontend Architecture.',
    pt: 'Engenheiro de Software na Maputo Port Development Company com mais de 5 anos a desenvolver aplicações web e móveis de nível empresarial. Especializado em Angular, .NET, React Native e Arquitectura Micro Frontend.',
  } as L,
  location:  { en: 'Maputo, Mozambique', pt: 'Maputo, Moçambique' } as L,
  email:     'chichavapro@gmail.com',
  phone:     '+258 846-970-987',
  whatsapp:  'https://api.whatsapp.com/send?phone=258846970987&text=Hello!',
  github:    'https://github.com/M-Chichava',
  linkedin:  'https://linkedin.com/in/marcos-chichava-bs321631',
  instagram: 'https://www.instagram.com/mfchichava/',
  messenger: 'https://m.me/crypticalcoder',
  website:   'https://m-chichava.github.io/portifolio/',
  cv:        '/portifolio/assets/Resume.pdf',
}

export const stats = [
  { value: '5+',  label: { en: 'Years of Experience', pt: 'Anos de Experiência'  } as L },
  { value: '15+', label: { en: 'Projects Completed',  pt: 'Projectos Concluídos' } as L },
  { value: '20+', label: { en: 'Technologies',        pt: 'Tecnologias'          } as L },
]

export type SkillLevel = 'Advanced' | 'Intermediate' | 'Beginner'

export const skillLevels: Record<SkillLevel, L> = {
  Advanced:     { en: 'Advanced',     pt: 'Avançado'      },
  Intermediate: { en: 'Intermediate', pt: 'Intermédio'    },
  Beginner:     { en: 'Beginner',     pt: 'Iniciante'     },
}

export const skillCategories: { label: L; skills: { name: string; level: SkillLevel }[] }[] = [
  {
    label: { en: 'Frontend', pt: 'Frontend' },
    skills: [
      { name: 'Angular',     level: 'Advanced'     },
      { name: 'NgRx Store',  level: 'Advanced'     },
      { name: 'React',       level: 'Advanced'     },
      { name: 'Next.js',     level: 'Advanced'     },
      { name: 'TypeScript',  level: 'Advanced'     },
      { name: 'JavaScript',  level: 'Advanced'     },
      { name: 'Vite',        level: 'Advanced'     },
      { name: 'Tailwind',    level: 'Advanced'     },
      { name: 'HTML / CSS',  level: 'Advanced'     },
      { name: 'Vue.js',      level: 'Intermediate' },
    ],
  },
  {
    label: { en: 'Mobile', pt: 'Mobile' },
    skills: [
      { name: 'React Native',   level: 'Advanced'     },
      { name: 'Expo',           level: 'Advanced'     },
      { name: 'TypeScript',     level: 'Advanced'     },
      { name: 'Zustand',        level: 'Advanced'     },
    ],
  },
  {
    label: { en: 'Backend', pt: 'Backend' },
    skills: [
      { name: '.NET Core / C#',   level: 'Advanced'     },
      { name: '.NET Framework',   level: 'Advanced'     },
      { name: 'VB.NET',           level: 'Intermediate' },
      { name: 'Web API (.NET)',    level: 'Advanced'     },
      { name: 'Node.js',          level: 'Intermediate' },
      { name: 'REST APIs',        level: 'Advanced'     },
    ],
  },
  {
    label: { en: 'Architecture', pt: 'Arquitectura' },
    skills: [
      { name: 'Micro Frontend',   level: 'Advanced'     },
      { name: 'NgRx / Flux',      level: 'Advanced'     },
      { name: 'Domain-Driven',    level: 'Intermediate' },
      { name: 'REST Design',      level: 'Advanced'     },
      { name: 'CI/CD Pipelines',  level: 'Intermediate' },
    ],
  },
  {
    label: { en: 'Database', pt: 'Bases de Dados' },
    skills: [
      { name: 'SQL Server',  level: 'Advanced'     },
      { name: 'PostgreSQL',  level: 'Intermediate' },
      { name: 'MySQL',       level: 'Intermediate' },
      { name: 'MongoDB',     level: 'Intermediate' },
    ],
  },
  {
    label: { en: 'Tools & DevOps', pt: 'Ferramentas & DevOps' },
    skills: [
      { name: 'Git / GitHub',  level: 'Advanced'     },
      { name: 'Docker',        level: 'Advanced' },
      { name: 'Figma',         level: 'Advanced'     },
      { name: 'VS Code',       level: 'Advanced'     },
      { name: 'Jira / Scrum',  level: 'Advanced'     },
    ],
  },
]

export type ProjectCategory = 'mobile' | 'web' | 'design'

export type Project = {
  id: number
  title: string
  description: L
  image: string
  tags: string[]
  category: ProjectCategory
  url: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Moz Net Salary - Mobile App',
    description: {
      en: 'Salary calculator for Mozambican workers. Calculates IRPS & INSS in real time. 6 languages, biometric lock, fully offline.',
      pt: 'Calculadora de salário para trabalhadores moçambicanos. Calcula IRPS e INSS em tempo real. 6 idiomas, bloqueio biométrico, totalmente offline.',
    },
    image: '/portifolio/assets/moznetsalary.svg',
    tags: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
    category: 'mobile',
    url: 'https://play.google.com/store/apps/details?id=com.chichavapro.mzsalary',
    featured: true,
  },
  {
    id: 2,
    title: 'Moz Net Salary Enterprise - Web App',
    description: {
      en: 'Enterprise-grade salary management platform tailored for Mozambique, supporting net salary calculations, tax compliance, payroll automation, and secure employee data management.',
      pt: 'Plataforma empresarial de gestão salarial adaptada a Moçambique, com cálculo de salário líquido, conformidade fiscal, automatização de processamento salarial e gestão segura de dados dos colaboradores.',
    },
    image: '/portifolio/assets/moz-net-salary-web.png',
    tags: ['React', 'TypeScript', '.NET API', 'SQL Server'],
    category: 'web',
    url: 'https://m-chichava.github.io/moz-net-salary/',
  },
  {
    id: 3,
    title: 'Restaurant Management System',
    description: {
      en: 'Comprehensive restaurant management system with POS integration, order tracking, inventory control, staff management, and real-time reporting to streamline operations.',
      pt: 'Sistema completo de gestão de restaurantes com integração POS, acompanhamento de pedidos, controlo de inventário, gestão de pessoal e relatórios em tempo real para optimizar as operações.',
    },
    image: '/portifolio/assets/restaurant-management.png',
    tags: ['React', 'TypeScript', '.NET API', 'SQL Server'],
    category: 'web',
    url: '',
  }
]

export const projectFilters: ('all' | ProjectCategory)[] = ['all', 'mobile', 'web', 'design']

export const services: { icon: string; title: L; description: L; items: L[] }[] = [
  {
    icon: 'Smartphone',
    title: { en: 'Mobile App Development', pt: 'Desenvolvimento Mobile' },
    description: {
      en: 'Cross-platform iOS & Android apps with React Native and Expo SDK.',
      pt: 'Aplicações multiplataforma iOS e Android com React Native e Expo SDK.',
    },
    items: [
      { en: 'React Native + Expo',               pt: 'React Native + Expo' },
      { en: 'App Store & Play Store submission', pt: 'Publicação na App Store e Play Store' },
      { en: 'Offline-first architecture',        pt: 'Arquitectura offline-first' },
      { en: 'Biometric & secure storage',        pt: 'Biometria e armazenamento seguro' },
    ],
  },
  {
    icon: 'Globe',
    title: { en: 'Web App Development', pt: 'Desenvolvimento Web' },
    description: {
      en: 'Scalable enterprise web applications with Angular, React and Micro Frontend architecture.',
      pt: 'Aplicações web empresariais escaláveis com Angular, React e arquitectura Micro Frontend.',
    },
    items: [
      { en: 'Angular + NgRx',              pt: 'Angular + NgRx' },
      { en: 'Micro Frontend Architecture', pt: 'Arquitectura Micro Frontend' },
      { en: 'Next.js / React',             pt: 'Next.js / React' },
      { en: 'REST API design',             pt: 'Desenho de APIs REST' },
    ],
  },
  {
    icon: 'Palette',
    title: { en: 'UI/UX Design', pt: 'Design UI/UX' },
    description: {
      en: 'User-centered design balancing aesthetics with usability and accessibility.',
      pt: 'Design centrado no utilizador, equilibrando estética, usabilidade e acessibilidade.',
    },
    items: [
      { en: 'Figma prototyping',          pt: 'Prototipagem em Figma' },
      { en: 'Design systems',             pt: 'Design systems' },
      { en: 'Wireframing & mockups',      pt: 'Wireframes e mockups' },
      { en: 'User experience audits',     pt: 'Auditorias de experiência do utilizador' },
    ],
  },
  {
    icon: 'Server',
    title: { en: 'Backend Development', pt: 'Desenvolvimento Backend' },
    description: {
      en: 'Robust server-side solutions with .NET Core, .NET Framework and Web API.',
      pt: 'Soluções de servidor robustas com .NET Core, .NET Framework e Web API.',
    },
    items: [
      { en: '.NET Core / Web API',            pt: '.NET Core / Web API' },
      { en: '.NET Framework / VB.NET',        pt: '.NET Framework / VB.NET' },
      { en: 'RESTful services',               pt: 'Serviços RESTful' },
      { en: 'Database design & optimization', pt: 'Desenho e optimização de bases de dados' },
    ],
  },
]

export type TimelineEntry = {
  title:       L
  institution: string
  /** Use the literal "Present" for ongoing entries; it is translated at render time */
  period:      string
  left:        boolean
}

export type ExperienceEntry = TimelineEntry & {
  bullets?: L[]
  tech?:    string[]
}

export const experience: ExperienceEntry[] = [
  {
    title:       { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    institution: 'Maputo Port Development Company',
    period:      '11/2025 – Present',
    left:        true,
  },
  {
    title:       { en: 'Software Developer', pt: 'Desenvolvedor de Software' },
    institution: 'Millennium BIM',
    period:      '06/2022 – 11/2025',
    left:        false,
    bullets: [
      {
        en: 'Lead developer of the Crédito Nova Vida (CNV) management application, working with product owners to implement new business rules across the full credit lifecycle.',
        pt: 'Desenvolvedor principal da aplicação de gestão do Crédito Nova Vida (CNV), em colaboração com os proprietários do produto na implementação de novas regras de negócio em todo o ciclo de vida do crédito.',
      },
      {
        en: 'Automated the disbursement of airtime sold via IZI/SmartIZI to mobile operators (Vodacom, TMcel, Movitel) with Windows services that build reconciliation files and process payments.',
        pt: 'Automatizei o desembolso de recargas vendidas via IZI/SmartIZI às operadoras (Vodacom, TMcel, Movitel) com serviços Windows que geram ficheiros de reconciliação e processam os pagamentos.',
      },
      {
        en: 'Prototyped and built a new Angular SPA for BackOffice complaint management, replacing a slow legacy app and significantly reducing response times.',
        pt: 'Prototipei e implementei uma nova SPA em Angular para gestão de reclamações no BackOffice, substituindo uma aplicação lenta e reduzindo significativamente os tempos de resposta.',
      },
      {
        en: 'Automated the allocation of credit proposals to analysts based on availability and workload, balancing distribution and reducing manual effort.',
        pt: 'Automatizei a alocação de propostas de crédito aos analistas com base na disponibilidade e fila de trabalho, equilibrando a distribuição e reduzindo o esforço manual.',
      },
      {
        en: 'Delivered NUIB visibility in the IZI app, letting customers view their unique bank identification number.',
        pt: 'Implementei a visualização do NUIB no IZI, permitindo aos clientes consultar o seu Número Único de Identificação Bancária.',
      },
      {
        en: 'Built an RPA (UiPath) for certificate-expiry monitoring and a Python/Appium availability monitor for SmartIZI with real-time email alerts.',
        pt: 'Criei uma RPA (UiPath) para monitoria de expiração de certificados e um monitor de disponibilidade do SmartIZI em Python/Appium com alertas por email em tempo real.',
      },
    ],
    tech: ['C#', '.NET', '.NET Framework', 'Angular', 'NgRx', 'React + Vite', 'TypeScript', 'SQL Server', 'Azure', 'Jenkins', 'UiPath', 'Python'],
  },
  {
    title:       { en: 'Web Developer & Designer', pt: 'Desenvolvedor Web & Designer' },
    institution: 'Experience & Technology',
    period:      '01/2022 – 06/2022',
    left:        true,
    bullets: [
      {
        en: 'Designed and implemented internal and external solutions: RESTful APIs with .NET/.NET Core (C#), Angular web apps, database design and requirements engineering.',
        pt: 'Desenhei e implementei soluções internas e externas: APIs RESTful com .NET/.NET Core (C#), aplicações web em Angular, desenho de bases de dados e engenharia de requisitos.',
      },
    ],
    tech: ['.NET Core', 'C#', 'Angular', 'NgRx', 'PostgreSQL', 'Clean Architecture', 'CQRS', 'Figma'],
  },
  {
    title:       { en: 'Web FrontEnd Developer', pt: 'Desenvolvedor Web FrontEnd' },
    institution: 'Espaço de Inovação - UEM',
    period:      '02/2021 – 06/2021',
    left:        false,
  },
]

export type EducationEntry = TimelineEntry & { kind: 'degree' | 'cert' }

export const education: EducationEntry[] = [
  { title: { en: 'UX Expert Certification',    pt: 'Certificação UX Expert'      }, institution: 'Udacity',     period: '2023', left: true,  kind: 'cert' },
  { title: { en: 'Scrum Master Certification', pt: 'Certificação Scrum Master'   }, institution: 'Udemy',       period: '2022', left: false, kind: 'cert' },
  { title: { en: 'Web API Development',        pt: 'Desenvolvimento de Web APIs' }, institution: 'XP Educação', period: '2021', left: true,  kind: 'cert' },
  { title: { en: 'Software Engineering',       pt: 'Engenharia Informática'      }, institution: 'Eduardo Mondlane University', period: '2017–2021', left: false, kind: 'degree' },
]

/** Additional courses shown only on the CV */
export const certifications: { title: string; institution: string; period: string }[] = [
  { title: 'Complete Microsoft SQL Server Database Administration', institution: 'Udemy', period: '2023' },
  { title: 'Building Reports with SQL Server Reporting Services (SSRS)', institution: 'Udemy', period: '2023' },
  { title: 'Creativity, Design Thinking and Innovation for Business', institution: 'Udemy', period: '2023' },
  { title: 'Critical Thinking Strategies for Better Decisions', institution: 'Udemy', period: '2023' },
  { title: 'CRM - Customer Relationship Management', institution: 'Udemy', period: '2023' },
]

export const softSkills: L[] = [
  { en: 'Problem solving',               pt: 'Resolução de problemas'      },
  { en: 'Solution-oriented',             pt: 'Foco na solução'             },
  { en: 'Technical communication',       pt: 'Comunicação técnica'         },
  { en: 'Cross-functional collaboration', pt: 'Colaboração interfuncional' },
  { en: 'Ownership',                     pt: 'Sentido de propriedade'      },
  { en: 'Adaptability',                  pt: 'Adaptabilidade'              },
  { en: 'Fast learner',                  pt: 'Aprendizagem rápida'         },
]
