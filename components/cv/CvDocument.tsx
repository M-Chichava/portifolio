'use client'
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react'
import {
  personal, experience, education, certifications, projects, skillCategories, softSkills,
} from '@/lib/data'
import type { L } from '@/lib/translations'
import { useLang } from '@/components/LanguageProvider'
import { FONT_SIZE, tint, type Column, type CvSettings, type SectionId } from './settings'

const stripProtocol = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

/** Every entry the builder can hide individually, keyed the same way the document renders them */
export function cvItems(section: SectionId, tr: (v: L) => string): { key: string; label: string }[] {
  switch (section) {
    case 'experience':
      return experience.map((e, i) => ({ key: `exp-${i}`, label: `${tr(e.title)} · ${e.institution}` }))
    case 'projects':
      return projects.map((p) => ({ key: `proj-${p.id}`, label: p.title }))
    case 'education':
      return education
        .map((e, i) => ({ e, i }))
        .filter(({ e }) => e.kind === 'degree')
        .map(({ e, i }) => ({ key: `edu-${i}`, label: tr(e.title) }))
    case 'certifications':
      return [
        ...education
          .map((e, i) => ({ e, i }))
          .filter(({ e }) => e.kind === 'cert')
          .map(({ e, i }) => ({ key: `edu-${i}`, label: tr(e.title) })),
        ...certifications.map((c, i) => ({ key: `cert-${i}`, label: c.title })),
      ]
    case 'skills':
      return skillCategories.map((c, i) => ({ key: `skill-${i}`, label: tr(c.label) }))
    case 'softSkills':
      return softSkills.map((s, i) => ({ key: `soft-${i}`, label: tr(s) }))
    default:
      return []
  }
}

type Props = { settings: CvSettings; editable: boolean }

export default function CvDocument({ settings, editable }: Props) {
  const { t, tr } = useLang()
  const { template, accent, size, showPhoto, sections, hidden } = settings
  const isHidden = (key: string) => hidden.includes(key)
  const period = (p: string) => p.replace('Present', t.common.present)

  const contacts = [
    { icon: Mail,     text: personal.email,                  href: `mailto:${personal.email}` },
    { icon: Phone,    text: personal.phone,                  href: `tel:${personal.phone.replace(/[^\d+]/g, '')}` },
    { icon: MapPin,   text: tr(personal.location) },
    { icon: Linkedin, text: stripProtocol(personal.linkedin), href: personal.linkedin },
    { icon: Github,   text: stripProtocol(personal.github),   href: personal.github },
    { icon: Globe,    text: stripProtocol(personal.website),  href: personal.website },
  ]

  const heading = (id: SectionId, column: Column) => (
    <h2
      className={`cv-heading ${column === 'side' && template === 'sidebar' ? 'cv-heading-side' : ''}`}
      style={{ color: accent, borderColor: template === 'classic' ? accent : undefined }}
    >
      {t.cv.sections[id]}
    </h2>
  )

  const body = (id: SectionId, column: Column) => {
    const side = column === 'side' && template === 'sidebar'
    switch (id) {
      case 'summary':
        return <p className="cv-text">{tr(personal.bio)}</p>

      case 'experience':
        return (
          <div className="space-y-[0.9em]">
            {experience.map((e, i) => isHidden(`exp-${i}`) ? null : (
              <div key={i} className="cv-entry">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="cv-entry-title">{tr(e.title)}</p>
                  <p className="cv-meta shrink-0">{period(e.period)}</p>
                </div>
                <p className="cv-entry-sub" style={{ color: accent }}>{e.institution}</p>
                {e.bullets && e.bullets.length > 0 && (
                  <ul className="cv-list">
                    {e.bullets.map((b, j) => <li key={j}>{tr(b)}</li>)}
                  </ul>
                )}
                {e.tech && e.tech.length > 0 && (
                  <p className="cv-meta mt-[0.3em]">
                    <span className="font-semibold">{t.cv.tech}:</span> {e.tech.join(' · ')}
                  </p>
                )}
              </div>
            ))}
          </div>
        )

      case 'projects':
        return (
          <div className="space-y-[0.7em]">
            {projects.map((p) => isHidden(`proj-${p.id}`) ? null : (
              <div key={p.id} className="cv-entry">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="cv-entry-title">{p.title}</p>
                  {p.url && (
                    <a href={p.url} className="cv-meta shrink-0" style={{ color: accent }}>{p.url.includes('play.google.com') ? 'Google Play' : stripProtocol(p.url)}</a>
                  )}
                </div>
                <p className="cv-text">{tr(p.description)}</p>
                <p className="cv-meta mt-[0.2em]">{p.tags.join(' · ')}</p>
              </div>
            ))}
          </div>
        )

      case 'education':
        return (
          <div className="space-y-[0.6em]">
            {education.map((e, i) => e.kind !== 'degree' || isHidden(`edu-${i}`) ? null : (
              <div key={i} className="cv-entry">
                <div className={side ? '' : 'flex items-baseline justify-between gap-3'}>
                  <p className="cv-entry-title">{tr(e.title)}</p>
                  <p className="cv-meta shrink-0">{e.period}</p>
                </div>
                <p className="cv-entry-sub" style={{ color: accent }}>{e.institution}</p>
              </div>
            ))}
          </div>
        )

      case 'certifications': {
        const certs = [
          ...education
            .map((e, i) => ({ key: `edu-${i}`, title: tr(e.title), institution: e.institution, period: e.period, kind: e.kind }))
            .filter((c) => c.kind === 'cert'),
          ...certifications.map((c, i) => ({ key: `cert-${i}`, ...c })),
        ].filter((c) => !isHidden(c.key))
        return (
          <ul className="space-y-[0.4em]">
            {certs.map((c) => (
              <li key={c.key} className="cv-entry">
                <p className="cv-text font-semibold leading-snug">{c.title}</p>
                <p className="cv-meta">{c.institution} · {c.period}</p>
              </li>
            ))}
          </ul>
        )
      }

      case 'skills':
        return (
          <div className={side ? 'space-y-[0.6em]' : 'space-y-[0.3em]'}>
            {skillCategories.map((c, i) => isHidden(`skill-${i}`) ? null : side ? (
              <div key={i}>
                <p className="cv-text font-semibold">{tr(c.label)}</p>
                <div className="flex flex-wrap gap-[0.3em] mt-[0.25em]">
                  {c.skills.map((s) => (
                    <span key={s.name} className="cv-chip" style={{ backgroundColor: tint(accent, 0.12) }}>{s.name}</span>
                  ))}
                </div>
              </div>
            ) : (
              <p key={i} className="cv-text">
                <span className="font-semibold">{tr(c.label)}:</span> {c.skills.map((s) => s.name).join(', ')}
              </p>
            ))}
          </div>
        )

      case 'softSkills': {
        const items = softSkills.filter((_, i) => !isHidden(`soft-${i}`)).map(tr)
        return side
          ? <ul className="cv-list">{items.map((s) => <li key={s}>{s}</li>)}</ul>
          : <p className="cv-text">{items.join(' · ')}</p>
      }
    }
  }

  const renderSections = (column?: Column) =>
    sections
      .filter((s) => s.visible && (!column || s.column === column))
      .map((s) => {
        const col = column ?? 'main'
        if (template === 'minimal') {
          return (
            <section key={s.id} className="cv-section grid grid-cols-[22%_1fr] gap-[1.2em]">
              {heading(s.id, col)}
              <div>{body(s.id, col)}</div>
            </section>
          )
        }
        return (
          <section key={s.id} className="cv-section">
            {heading(s.id, col)}
            {body(s.id, col)}
          </section>
        )
      })

  const photo = showPhoto && (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img src="/portifolio/assets/profile.jpg" alt={personal.name} className="cv-photo" style={{ borderColor: accent }} />
  )

  const contactList = (vertical: boolean) => (
    <ul className={vertical ? 'space-y-[0.45em]' : 'flex flex-wrap gap-x-[1.2em] gap-y-[0.3em] justify-center'}>
      {contacts.map(({ icon: Icon, text, href }) => (
        <li key={text} className="cv-meta flex items-center gap-[0.4em] min-w-0">
          <Icon className="shrink-0" style={{ color: accent, width: '1.1em', height: '1.1em' }} />
          {href ? <a href={href} className="truncate">{text}</a> : <span className="truncate">{text}</span>}
        </li>
      ))}
    </ul>
  )

  const name = <h1 className="cv-name">{personal.name}</h1>
  const role = <p className="cv-role" style={{ color: accent }}>{tr(personal.role)}</p>

  return (
    <article
      className={`cv-doc cv-${template}`}
      style={{ fontSize: FONT_SIZE[size] }}
      contentEditable={editable}
      suppressContentEditableWarning
      spellCheck={false}
    >
      {template === 'sidebar' && (
        <div className="grid grid-cols-[34%_1fr] min-h-[inherit]">
          <aside className="cv-side" style={{ backgroundColor: tint(accent, 0.07) }}>
            {photo && <div className="flex justify-center mb-[1.2em]">{photo}</div>}
            <section className="cv-section">
              <h2 className="cv-heading cv-heading-side" style={{ color: accent }}>{t.cv.contact}</h2>
              {contactList(true)}
            </section>
            {renderSections('side')}
          </aside>
          <div className="cv-main">
            <header className="mb-[1.4em] pb-[1em] border-b-2" style={{ borderColor: accent }}>
              {name}
              {role}
            </header>
            {renderSections('main')}
          </div>
        </div>
      )}

      {template === 'classic' && (
        <div className="cv-pad">
          <header className="text-center mb-[1.4em]">
            {photo && <div className="flex justify-center mb-[0.8em]">{photo}</div>}
            {name}
            {role}
            <div className="mt-[0.8em]">{contactList(false)}</div>
          </header>
          {renderSections()}
        </div>
      )}

      {template === 'minimal' && (
        <div className="cv-pad">
          <header className="flex items-center gap-[1.4em] mb-[1.6em] pb-[1.2em] border-b border-zinc-200">
            {photo}
            <div className="flex-1 min-w-0">
              {name}
              {role}
            </div>
            <div className="w-[38%]">{contactList(true)}</div>
          </header>
          {renderSections()}
        </div>
      )}
    </article>
  )
}
