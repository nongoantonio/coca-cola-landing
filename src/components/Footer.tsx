import { useState } from 'react'
import { Instagram, Facebook, Youtube, Twitter, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'
import { useLanguage } from '../i18n/LanguageContext'
import './Footer.css'

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
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
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
