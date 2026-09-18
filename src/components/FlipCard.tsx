import logo from '../assets/logo.png'
import bottle from '../assets/bottle.png'
import { useLanguage } from '../i18n/LanguageContext'
import './FlipCard.css'

// Cartao que expande ao passar o rato (hover), inspirado no snippet
// fornecido: o circulo com o logotipo transforma-se num painel vermelho
// e a garrafa "salta" para fora enquanto o texto desliza para dentro.
function FlipCard() {
  const { t } = useLanguage()

  return (
    <div className="flip-card">
      <div className="flip-card__circle">
        <img src={logo} alt="Coca-Cola" className="flip-card__logo" />
      </div>

      <div className="flip-card__content">
        <h3>{t.flipCard.title}</h3>
        <p>{t.flipCard.text}</p>
        <a href="#mundo">{t.flipCard.link}</a>
      </div>

      <img src={bottle} alt={t.showcase.bottleAlt} className="flip-card__product" />
    </div>
  )
}

export default FlipCard
