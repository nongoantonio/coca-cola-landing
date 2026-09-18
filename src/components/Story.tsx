import FlipCard from './FlipCard'
import { useLanguage } from '../i18n/LanguageContext'
import './Story.css'

function Story() {
  const { t } = useLanguage()

  return (
    <section id="historia" className="story">
      <div className="container story__grid">
        <div className="story__text">
          <p className="section-kicker">{t.story.kicker}</p>
          <h2 className="story__title">{t.story.title}</h2>
          <p className="story__lead">{t.story.lead}</p>

          <ol className="story__timeline">
            {t.story.milestones.map((m) => (
              <li key={m.year}>
                <span className="story__year">{m.year}</span>
                <span className="story__event">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="story__card">
          <FlipCard />
          <p className="story__hint">{t.story.hint}</p>
        </div>
      </div>
    </section>
  )
}

export default Story
