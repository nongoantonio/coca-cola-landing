import { useLanguage } from '../i18n/LanguageContext'
import './Features.css'

// Cartoes sem icones: apenas numero, titulo e texto - uma leitura mais
// editorial e sobria, sem o "ruido" de icones genericos.
function Features() {
  const { t } = useLanguage()

  return (
    <section id="sabor" className="features">
      <div className="container">
        <div className="features__header">
          <p className="section-kicker">{t.features.kicker}</p>
          <h2 className="features__title">{t.features.title}</h2>
        </div>

        <div className="features__grid">
          {t.features.items.map(({ title, text }, i) => (
            <article className="features__card" key={title}>
              <span className="features__index">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
