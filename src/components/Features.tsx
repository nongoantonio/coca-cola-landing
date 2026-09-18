import { Sparkles, Snowflake, Leaf, Globe2 } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import './Features.css'

const ICONS = [Sparkles, Snowflake, Leaf, Globe2]

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
          {t.features.items.map(({ title, text }, i) => {
            const Icon = ICONS[i]
            return (
              <article className="features__card" key={title}>
                <div className="features__icon">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
