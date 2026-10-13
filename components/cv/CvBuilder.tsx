'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowUp, ArrowDown, Eye, EyeOff, GripVertical, Download, RotateCcw,
  PanelLeft, PanelRight, ChevronDown, Check, Pencil,
} from 'lucide-react'
import { personal } from '@/lib/data'
import { useLang } from '@/components/LanguageProvider'
import CvDocument, { cvItems } from './CvDocument'
import {
  ACCENTS, DEFAULT_SETTINGS, TEMPLATES, TEXT_SIZES, normalizeSettings,
  type CvSettings, type SectionConfig,
} from './settings'

const STORAGE_KEY = 'cv-settings-v1'

function Segmented<T extends string>({ value, options, label, onChange }: {
  value: T
  options: T[]
  label: (v: T) => string
  onChange: (v: T) => void
}) {
  return (
    <div className="grid gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-[#09100b]" style={{ gridTemplateColumns: `repeat(${options.length}, 1fr)` }}>
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          aria-pressed={value === o}
          className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            value === o
              ? 'bg-white dark:bg-[#1c2e20] text-brand shadow-sm'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-brand'
          }`}
        >
          {label(o)}
        </button>
      ))}
    </div>
  )
}

export default function CvBuilder() {
  const { t, tr, lang } = useLang()
  const [settings, setSettings] = useState<CvSettings>(DEFAULT_SETTINGS)
  const [loaded, setLoaded]     = useState(false)
  const [editable, setEditable] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [dragIdx, setDragIdx]   = useState<number | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setSettings(normalizeSettings(JSON.parse(saved)))
    } catch {}
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(settings)) } catch {}
  }, [settings, loaded])

  const update = (patch: Partial<CvSettings>) => setSettings((s) => ({ ...s, ...patch }))

  const updateSection = (idx: number, patch: Partial<SectionConfig>) =>
    setSettings((s) => ({ ...s, sections: s.sections.map((sec, i) => (i === idx ? { ...sec, ...patch } : sec)) }))

  const move = (from: number, to: number) => {
    if (to < 0 || to >= settings.sections.length || from === to) return
    setSettings((s) => {
      const sections = [...s.sections]
      const [item] = sections.splice(from, 1)
      sections.splice(to, 0, item)
      return { ...s, sections }
    })
  }

  const toggleItem = (key: string) =>
    setSettings((s) => ({
      ...s,
      hidden: s.hidden.includes(key) ? s.hidden.filter((k) => k !== key) : [...s.hidden, key],
    }))

  const download = () => {
    const previous = document.title
    // Browsers use the document title as the default PDF file name
    document.title = `${personal.name.replace(/\s+/g, '_')}_CV_${lang.toUpperCase()}`
    const restore = () => { document.title = previous; window.removeEventListener('afterprint', restore) }
    window.addEventListener('afterprint', restore)
    window.print()
  }

  const usesColumns = settings.template === 'sidebar'

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#09100b] pt-24 pb-16 px-4 print:p-0 print:bg-white print:min-h-0">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 items-start print:block">

        {/* ── Controls ── */}
        <aside className="w-full lg:w-[340px] shrink-0 space-y-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto print:hidden">
          <div>
            <Link href="/" className="text-brand text-sm font-semibold hover:underline">{t.cv.back}</Link>
            <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight mt-3">{t.cv.pageTitle}</h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{t.cv.pageSubtitle}</p>
          </div>

          <div className="flex gap-2">
            <button onClick={download} className="btn-primary flex-1 justify-center text-sm py-2.5">
              <Download size={16} />
              {t.cv.download}
            </button>
            <button
              onClick={() => setSettings(DEFAULT_SETTINGS)}
              className="px-3 rounded-xl border border-zinc-200 dark:border-[#1c2e20] text-zinc-500 hover:text-brand hover:border-brand/40 transition-all"
              title={t.cv.reset}
              aria-label={t.cv.reset}
            >
              <RotateCcw size={16} />
            </button>
          </div>
          <p className="text-xs text-zinc-400 -mt-2">{t.cv.downloadHint}</p>

          {/* Layout */}
          <div className="card p-4 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">{t.cv.layout}</h2>

            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{t.cv.template}</p>
              <Segmented value={settings.template} options={TEMPLATES} label={(v) => t.cv.templates[v]} onChange={(template) => update({ template })} />
            </div>

            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{t.cv.size}</p>
              <Segmented value={settings.size} options={TEXT_SIZES} label={(v) => t.cv.sizes[v]} onChange={(size) => update({ size })} />
            </div>

            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{t.cv.accent}</p>
              <div className="flex gap-2">
                {ACCENTS.map((c) => (
                  <button
                    key={c}
                    onClick={() => update({ accent: c })}
                    aria-label={c}
                    aria-pressed={settings.accent === c}
                    className="w-8 h-8 rounded-full flex items-center justify-center ring-offset-2 ring-offset-white dark:ring-offset-[#0f1912] transition-all"
                    style={{ backgroundColor: c, boxShadow: settings.accent === c ? `0 0 0 2px ${c}` : undefined }}
                  >
                    {settings.accent === c && <Check size={14} className="text-white" />}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-200 cursor-pointer">
              <input type="checkbox" checked={settings.showPhoto} onChange={(e) => update({ showPhoto: e.target.checked })} className="accent-brand w-4 h-4" />
              {t.cv.photo}
            </label>

            <div>
              <label className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-200 cursor-pointer">
                <input type="checkbox" checked={editable} onChange={(e) => setEditable(e.target.checked)} className="accent-brand w-4 h-4" />
                <Pencil size={13} className="text-zinc-400" />
                {t.cv.editText}
              </label>
              {editable && <p className="text-xs text-zinc-400 mt-1.5 ml-6">{t.cv.editHint}</p>}
            </div>
          </div>

          {/* Structure */}
          <div className="card p-4 space-y-3">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">{t.cv.structure}</h2>
              <p className="text-xs text-zinc-400 mt-1">{t.cv.structureHint}</p>
            </div>

            <ul className="space-y-1.5">
              {settings.sections.map((sec, i) => {
                const items = cvItems(sec.id, tr)
                const shown = items.filter((it) => !settings.hidden.includes(it.key)).length
                const isOpen = expanded === sec.id
                return (
                  <li
                    key={sec.id}
                    draggable
                    onDragStart={() => setDragIdx(i)}
                    onDragOver={(e) => {
                      e.preventDefault()
                      if (dragIdx !== null && dragIdx !== i) { move(dragIdx, i); setDragIdx(i) }
                    }}
                    onDragEnd={() => setDragIdx(null)}
                    className={`rounded-xl border transition-all ${
                      dragIdx === i ? 'border-brand bg-brand/5' : 'border-zinc-200 dark:border-[#1c2e20]'
                    } ${sec.visible ? '' : 'opacity-50'}`}
                  >
                    <div className="flex items-center gap-1 px-2 py-2">
                      <GripVertical size={14} className="text-zinc-300 dark:text-zinc-600 cursor-grab shrink-0" />
                      <button
                        onClick={() => items.length && setExpanded(isOpen ? null : sec.id)}
                        className="flex-1 min-w-0 text-left flex items-center gap-1.5"
                      >
                        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 truncate">{t.cv.sections[sec.id]}</span>
                        {items.length > 0 && (
                          <>
                            <span className="text-[11px] text-zinc-400 shrink-0">{shown}/{items.length}</span>
                            <ChevronDown size={13} className={`text-zinc-400 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </>
                        )}
                      </button>

                      {usesColumns && (
                        <button
                          onClick={() => updateSection(i, { column: sec.column === 'main' ? 'side' : 'main' })}
                          className="p-1.5 rounded-lg text-zinc-400 hover:text-brand hover:bg-brand/10"
                          title={sec.column === 'main' ? t.cv.toSidebar : t.cv.toMain}
                          aria-label={sec.column === 'main' ? t.cv.toSidebar : t.cv.toMain}
                        >
                          {sec.column === 'main' ? <PanelRight size={14} /> : <PanelLeft size={14} />}
                        </button>
                      )}
                      <button onClick={() => move(i, i - 1)} disabled={i === 0}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-brand hover:bg-brand/10 disabled:opacity-30 disabled:pointer-events-none"
                        aria-label={t.cv.moveUp} title={t.cv.moveUp}>
                        <ArrowUp size={14} />
                      </button>
                      <button onClick={() => move(i, i + 1)} disabled={i === settings.sections.length - 1}
                        className="p-1.5 rounded-lg text-zinc-400 hover:text-brand hover:bg-brand/10 disabled:opacity-30 disabled:pointer-events-none"
                        aria-label={t.cv.moveDown} title={t.cv.moveDown}>
                        <ArrowDown size={14} />
                      </button>
                      <button onClick={() => updateSection(i, { visible: !sec.visible })}
                        className={`p-1.5 rounded-lg hover:bg-brand/10 ${sec.visible ? 'text-brand' : 'text-zinc-400'}`}
                        aria-label={sec.visible ? t.cv.hide : t.cv.show} title={sec.visible ? t.cv.hide : t.cv.show}>
                        {sec.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                      </button>
                    </div>

                    {isOpen && (
                      <ul className="px-3 pb-3 pt-1 space-y-1.5 border-t border-zinc-100 dark:border-[#1c2e20]">
                        {items.map((it) => (
                          <li key={it.key}>
                            <label className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={!settings.hidden.includes(it.key)}
                                onChange={() => toggleItem(it.key)}
                                className="accent-brand mt-0.5"
                              />
                              {it.label}
                            </label>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </aside>

        {/* ── Preview ── */}
        <div className="flex-1 min-w-0 w-full overflow-x-auto print:overflow-visible">
          <div className="cv-preview-frame">
            <CvDocument
              // Remount on changes so temporary text edits never fight React's reconciliation
              key={`${lang}-${JSON.stringify(settings)}`}
              settings={settings}
              editable={editable}
            />
          </div>
        </div>

      </div>
    </main>
  )
}
