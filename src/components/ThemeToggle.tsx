import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../hooks/useTheme'
import './ThemeToggle.css'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
}

// Botao que alterna entre modo claro e escuro.
// Os dois icones estao sempre no DOM: so deslizam/rodam conforme o tema ativo.
function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
      title={isDark ? 'Modo claro' : 'Modo escuro'}
    >
      <span className={`theme-toggle__icon ${isDark ? 'is-active' : ''}`}>
        <Moon size={18} strokeWidth={1.9} />
      </span>
      <span className={`theme-toggle__icon ${!isDark ? 'is-active' : ''}`}>
        <Sun size={18} strokeWidth={1.9} />
      </span>
    </button>
  )
}

export default ThemeToggle
