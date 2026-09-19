import { useState } from 'react'
import type { SVGProps } from 'react'
import { Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

// Icone do X (antigo Twitter): a lucide-react so tem o passaro antigo,
// por isso desenhamos o "X" a mao, do mesmo tamanho que os outros icones.
function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.9 2h3.1l-7.6 8.7L23 22h-6.9l-5.4-6.6L4.6 22H1.5l8.1-9.3L1 2h7.1l4.9 6.1L18.9 2Zm-1.2 18h1.9L7.4 4H5.4l12.3 16Z" />
    </svg>
  )
}

function Footer() {
  const { t } = useLanguage()

  // Estado local apenas para dar feedback visual ao subscrever a newsletter
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <footer id="contacto" className="footer">
      <div className="footer__glow-line" aria-hidden="true" />

      <div className="container footer__top">
        <div className="footer__intro">
          <h2>
            {t.footer.headingLine1} <br /> {t.footer.headingLine2}
          </h2>
          <p>{t.footer.blurb}</p>
        </div>

        <form className="footer__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder={t.footer.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label={t.footer.emailLabel}
          />
          <button type="submit">
            {sent ? t.footer.subscribed : t.footer.subscribe}
            <ArrowRight size={16} />
          </button>
        </form>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Coca-Cola" className="footer__logo" />
          <p>{t.footer.brandBlurb}</p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#" aria-label="X (Twitter)"><XIcon width={18} height={18} /></a>
          </div>
        </div>

        {t.footer.columns.map((col) => (
          <div className="footer__column" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Coca-Cola. {t.footer.rights}</span>
        <div className="footer__legal">
          {t.footer.legal.map((label) => (
            <a href="#" key={label}>{label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
