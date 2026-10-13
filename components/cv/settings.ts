export type SectionId =
  | 'summary'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'education'
  | 'certifications'
  | 'softSkills'

export type Column = 'main' | 'side'

export type SectionConfig = { id: SectionId; visible: boolean; column: Column }

export type Template = 'classic' | 'sidebar' | 'minimal'
export type TextSize = 'compact' | 'normal' | 'large'

export type CvSettings = {
  template:  Template
  accent:    string
  size:      TextSize
  showPhoto: boolean
  sections:  SectionConfig[]
  /** Keys of individual entries hidden from the CV (e.g. "exp-2", "proj-3") */
  hidden:    string[]
}

export const TEMPLATES: Template[] = ['classic', 'sidebar', 'minimal']
export const TEXT_SIZES: TextSize[] = ['compact', 'normal', 'large']
export const ACCENTS = ['#07ac4b', '#0f766e', '#1d4ed8', '#334155', '#9f1239', '#b45309']

export const FONT_SIZE: Record<TextSize, string> = {
  compact: '9pt',
  normal:  '10pt',
  large:   '11pt',
}

export const DEFAULT_SETTINGS: CvSettings = {
  template:  'sidebar',
  accent:    '#07ac4b',
  size:      'normal',
  showPhoto: true,
  sections: [
    { id: 'summary',        visible: true,  column: 'main' },
    { id: 'experience',     visible: true,  column: 'main' },
    { id: 'projects',       visible: true,  column: 'main' },
    { id: 'education',      visible: true,  column: 'main' },
    { id: 'skills',         visible: true,  column: 'side' },
    { id: 'certifications', visible: true,  column: 'side' },
    { id: 'softSkills',     visible: true,  column: 'side' },
  ],
  hidden: [],
}

/** Merges saved settings with the defaults so new/removed sections never break an old save */
export function normalizeSettings(raw: unknown): CvSettings {
  if (!raw || typeof raw !== 'object') return DEFAULT_SETTINGS
  const saved = raw as Partial<CvSettings>
  const known = new Set(DEFAULT_SETTINGS.sections.map((s) => s.id))
  const sections = (Array.isArray(saved.sections) ? saved.sections : [])
    .filter((s) => s && known.has(s.id))
  for (const def of DEFAULT_SETTINGS.sections) {
    if (!sections.some((s) => s.id === def.id)) sections.push(def)
  }
  return {
    template:  TEMPLATES.includes(saved.template as Template) ? saved.template! : DEFAULT_SETTINGS.template,
    accent:    typeof saved.accent === 'string' ? saved.accent : DEFAULT_SETTINGS.accent,
    size:      TEXT_SIZES.includes(saved.size as TextSize) ? saved.size! : DEFAULT_SETTINGS.size,
    showPhoto: typeof saved.showPhoto === 'boolean' ? saved.showPhoto : DEFAULT_SETTINGS.showPhoto,
    sections,
    hidden:    Array.isArray(saved.hidden) ? saved.hidden.filter((h) => typeof h === 'string') : [],
  }
}

export function tint(hex: string, alpha: number) {
  const n = parseInt(hex.replace('#', ''), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`
}
