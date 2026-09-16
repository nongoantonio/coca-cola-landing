import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'
import ThemeToggle from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'
import './Navbar.css'

interface NavbarProps {
  theme: Theme
  onToggleTheme: () => void
}

const LINKS = [
  { href: '#historia', label: 'Historia' },
  { href: '#sabor', label: 'O Sabor' },
  { href: '#mundo', label: 'Pelo Mundo' },
  { href: '#contacto', label: 'Contacto' },
]

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  // Controla o fundo da barra ao fazer scroll
  const [scrolled, setScrolled] = useState(false)
  // Controla o menu em ecrãs pequenos
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--solid' : ''}`}>
      <div className="container navbar__inner">
        <a href="#topo" className="navbar__brand">
          <img src={logo} alt="Coca-Cola" className="navbar__logo" />
        </a>

        <nav className="navbar__links" aria-label="Navegacao principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#mundo" className="navbar__cta">
            Encontrar perto de mim
          </a>
        </div>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Menu movel */}
      <div className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#mundo" onClick={() => setOpen(false)} className="navbar__mobile-cta">
          Encontrar perto de mim
        </a>
      </div>
    </header>
  )
}

export default Navbar
