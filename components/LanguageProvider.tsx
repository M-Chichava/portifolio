'use client'
import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { dictionaries, type Dict, type L, type Lang } from '@/lib/translations'

const STORAGE_KEY = 'lang'

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
  tr: (value: L) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en')

  // The site is statically exported, so the saved/browser language is applied after hydration
  useEffect(() => {
    let initial: Lang = navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'en' || saved === 'pt') initial = saved
    } catch {}
    setLangState(initial)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try { localStorage.setItem(STORAGE_KEY, next) } catch {}
  }, [])

  const tr = useCallback((value: L) => value[lang], [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang], tr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
