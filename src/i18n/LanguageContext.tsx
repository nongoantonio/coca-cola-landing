import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from './translations'
import type { Lang } from './translations'

const STORAGE_KEY = 'cc-lang'

interface LanguageContextValue {
  lang: Lang
  toggleLanguage: () => void
  t: typeof translations.pt
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

// Le o idioma guardado; sem escolha anterior, comeca em portugues
function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'pt'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  return saved === 'en' ? 'en' : 'pt'
}

// Fornece o idioma atual e as traducoes a toda a aplicacao
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const toggleLanguage = () => setLang((current) => (current === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook usado por qualquer componente que precise de texto traduzido
export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage tem de ser usado dentro de um LanguageProvider')
  }
  return ctx
}
