import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import type { Theme } from '../hooks/useTheme'
import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const { t, lang, toggleLanguage } = useLanguage()

  // Controla o fundo da barra ao fazer scroll
  const [scrolled, setScrolled] = useState(false)
  // Controla o menu em ecrãs pequenos
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#historia', label: t.nav.history },
    { href: '#sabor', label: t.nav.taste },
    { href: '#mundo', label: t.nav.world },
    { href: '#contacto', label: t.nav.contact },
  ]

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#topo" className="navbar__brand">
          <img src={logo} alt="Coca-Cola" className="navbar__logo" />
        </a>

        <nav className="navbar__links" aria-label={lang === 'pt' ? 'Navegação principal' : 'Main navigation'}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <LanguageToggle lang={lang} onToggle={toggleLanguage} />
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#mundo" className="navbar__cta">
            {t.nav.cta}
          </a>
          <button
            className="navbar__toggle"
            aria-label={
              open
                ? lang === 'pt' ? 'Fechar menu' : 'Close menu'
                : lang === 'pt' ? 'Abrir menu' : 'Open menu'
            }
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu movel */}
      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#mundo" onClick={() => setOpen(false)} className="navbar__mobile-cta">
          {t.nav.cta}
        </a>
      </div>
    </header>
  )
}

export default Navbar
