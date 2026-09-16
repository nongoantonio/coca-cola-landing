import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'cc-theme'

// Le o tema guardado; se nao existir, segue a preferencia do sistema operativo
function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'light' || saved === 'dark') return saved

  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches
  return prefersLight ? 'light' : 'dark'
}

// Hook que controla o tema do site e sincroniza com o atributo data-theme
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  // Sempre que o tema muda, aplica-o ao <html> e guarda a escolha
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
