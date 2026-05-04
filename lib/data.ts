export const personal = {
  name:      'Marcos Chichava',
  role:      'Software Engineer',
  roles:     ['Software Engineer', 'FullStack Developer', 'Mobile Developer'],
  bio:       'Software Engineer at Maputo Port Development Company with 5+ years building enterprise-grade web and mobile applications. Specialized in Angular, .NET, React Native and Micro Frontend Architecture.',
  location:  'Maputo, Mozambique',
  email:     'chichavapro@gmail.com',
  phone:     '+258 846-970-987',
  whatsapp:  'https://api.whatsapp.com/send?phone=258846970987&text=Hello!',
  github:    'https://github.com/M-Chichava',
  linkedin:  'https://linkedin.com/in/marcos-chichava-bs321631',
  instagram: 'https://www.instagram.com/mfchichava/',
  messenger: 'https://m.me/crypticalcoder',
  cv:        '/portifolio/assets/Resume.pdf',
}

export const stats = [
  { value: '5+',  label: 'Years of Experience' },
  { value: '15+', label: 'Projects Completed'  },
  { value: '20+', label: 'Technologies'         },
]

export const skillCategories = [
  {
    label: 'Frontend',
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
    label: 'Mobile',
    skills: [
      { name: 'React Native',   level: 'Advanced'     },
      { name: 'Expo',           level: 'Advanced'     },
      { name: 'TypeScript',     level: 'Advanced'     },
      { name: 'Zustand',        level: 'Advanced'     },
    ],
  },
  {
    label: 'Backend',
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
    label: 'Architecture',
    skills: [
      { name: 'Micro Frontend',   level: 'Advanced'     },
      { name: 'NgRx / Flux',      level: 'Advanced'     },
      { name: 'Domain-Driven',    level: 'Intermediate' },
      { name: 'REST Design',      level: 'Advanced'     },
      { name: 'CI/CD Pipelines',  level: 'Intermediate' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'SQL Server',  level: 'Advanced'     },
      { name: 'PostgreSQL',  level: 'Intermediate' },
      { name: 'MySQL',       level: 'Intermediate' },
      { name: 'MongoDB',     level: 'Intermediate' },
    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git / GitHub',  level: 'Advanced'     },
      { name: 'Docker',        level: 'Advanced' },
      { name: 'Figma',         level: 'Advanced'     },
      { name: 'VS Code',       level: 'Advanced'     },
      { name: 'Jira / Scrum',  level: 'Advanced'     },
    ],
  },
]

export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  url: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Moz Net Salary - Mobile App',
    description: 'Salary calculator for Mozambican workers. Calculates IRPS & INSS in real time. 6 languages, biometric lock, fully offline.',
    image: '/portifolio/assets/moznetsalary.svg',
    tags: ['React Native', 'Expo', 'TypeScript', 'Zustand'],
    category: 'mobile',
    url: '',
    featured: true,
  },
  {
    id: 2,
    title: 'Moz Net Salary Enterprise - Web App',
    description: 'Enterprise-grade salary management platform tailored for Mozambique, supporting net salary calculations, tax compliance, payroll automation, and secure employee data management.',
    image: '/portifolio/assets/moz-net-salary-web.png',
    tags: ['React', 'TypeScript', '.NET API', 'SQL Server'],
    category: 'web',
    url: '',
  },
  {
    id: 3,
    title: 'Restaurant Management System',
    description: 'Comprehensive restaurant management system with POS integration, order tracking, inventory control, staff management, and real-time reporting to streamline operations.',
    image: '/portifolio/assets/restaurant-management.png',
    tags: ['React', 'TypeScript', '.NET API', 'SQL Server'],
    category: 'web',
    url: '',
  }
]

export const projectFilters = ['All', 'Mobile', 'Web', 'Design']

export const services = [
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Cross-platform iOS & Android apps with React Native and Expo SDK.',
    items: ['React Native + Expo', 'App Store & Play Store submission', 'Offline-first architecture', 'Biometric & secure storage'],
  },
  {
    icon: 'Globe',
    title: 'Web App Development',
    description: 'Scalable enterprise web applications with Angular, React and Micro Frontend architecture.',
    items: ['Angular + NgRx', 'Micro Frontend Architecture', 'Next.js / React', 'REST API design'],
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'User-centered design balancing aesthetics with usability and accessibility.',
    items: ['Figma prototyping', 'Design systems', 'Wireframing & mockups', 'User experience audits'],
  },
  {
    icon: 'Server',
    title: 'Backend Development',
    description: 'Robust server-side solutions with .NET Core, .NET Framework and Web API.',
    items: ['.NET Core / Web API', '.NET Framework / VB.NET', 'RESTful services', 'Database design & optimization'],
  },
]


export const experience = [
  {
    title:       'Software Engineer',
    institution: 'Maputo Port Development Company',
    period:      '11/2025 – Present',
    left:        true,
  },
  {
    title:       'Software Developer',
    institution: 'Millennium BIM',
    period:      '06/2022 – 11/2025',
    left:        false,
  },
  {
    title:       'Web Developer & Designer',
    institution: 'Experience & Technology',
    period:      '01/2022 – 06/2022',
    left:        true,
  }, 
  {
    title:       'Web FrontEnd Developer',
    institution: 'Espaço de Inovação - UEM',
    period:      '02/2021 – 06/2021',
    left:        false,
  },
]


export const education = [
  { title: 'UX Expert Certification',   institution: 'Udacity',         period: '2023',        left: true  },
  { title: 'Scrum Master Certification', institution: 'Udemy',           period: '2022',        left: false },
  { title: 'Web API Development',        institution: 'XP Educação',     period: '2021',        left: true  },
  { title: 'Software Engineering',       institution: 'Eduardo Mondlane University', period: '2017–2021', left: false },
]