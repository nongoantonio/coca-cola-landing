import type { Lang } from '../i18n/translations'
import './LanguageToggle.css'

interface LanguageToggleProps {
  lang: Lang
  onToggle: () => void
}

// Botao pill com as duas opcoes visiveis (PT / EN); a opcao ativa
// fica destacada, tal como um seletor de idioma habitual.
function LanguageToggle({ lang, onToggle }: LanguageToggleProps) {
  return (
    <button
      type="button"
      className="language-toggle"
      onClick={onToggle}
      aria-label={lang === 'pt' ? 'Switch to English' : 'Mudar para Portugues'}
      title={lang === 'pt' ? 'Switch to English' : 'Mudar para Portugues'}
    >
      <span className={lang === 'pt' ? 'is-active' : ''}>PT</span>
      <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  )
}

export default LanguageToggle
