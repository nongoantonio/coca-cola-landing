import beach from '../assets/lifestyle-beach.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import './Lifestyle.css'

// Seccao emocional, com uma fotografia de pessoas reais a partilhar um
// momento. Depois de tanto produto em destaque, esta seccao mostra o
// porque: a Coca-Cola como parte de estar junto de quem se ama.
function Lifestyle() {
  const { t } = useLanguage()

  return (
    <section className="lifestyle" aria-labelledby="lifestyle-title">
      <img src={beach} alt={t.lifestyle.photoAlt} className="lifestyle__photo" />
      <div className="lifestyle__veil" aria-hidden="true" />

      <div className="container lifestyle__inner">
        <p className="section-kicker lifestyle__kicker">{t.lifestyle.kicker}</p>
        <h2 id="lifestyle-title" className="lifestyle__quote">
          {t.lifestyle.quoteLine1}
          <br />
          {t.lifestyle.quoteLine2}
        </h2>
        <svg
          className="lifestyle__swoosh"
          width="180"
          height="30"
          viewBox="0 0 180 30"
          aria-hidden="true"
        >
          <path
            d="M4 20 C 50 4, 130 4, 176 22"
            fill="none"
            stroke="var(--cc-red-bright)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <p className="lifestyle__text">{t.lifestyle.text}</p>
      </div>
    </section>
  )
}

export default Lifestyle
