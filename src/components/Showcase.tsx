import { useRef } from 'react'
import bottle from '../assets/bottle.png'
import can from '../assets/can.png'
import { useLanguage } from '../i18n/LanguageContext'
import './Showcase.css'

function Showcase() {
  const { t } = useLanguage()
  const stageRef = useRef<HTMLDivElement>(null)

  // Move a composicao ligeiramente de acordo com a posicao do rato (paralaxe)
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const stage = stageRef.current
    if (!stage) return

    const rect = stage.getBoundingClientRect()
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5

    stage.style.setProperty('--rx', `${relativeY * -6}deg`)
    stage.style.setProperty('--ry', `${relativeX * 8}deg`)
  }

  const handleMouseLeave = () => {
    const stage = stageRef.current
    if (!stage) return
    stage.style.setProperty('--rx', '0deg')
    stage.style.setProperty('--ry', '0deg')
  }

  return (
    <section id="mundo" className="showcase">
      <div className="container showcase__grid">
        <div
          className="showcase__visual"
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="showcase__glow" aria-hidden="true" />
          <img src={bottle} alt={t.showcase.bottleAlt} className="showcase__bottle" />
          <img src={can} alt={t.showcase.canAlt} className="showcase__can" />
        </div>

        <div className="showcase__content">
          <p className="section-kicker">{t.showcase.kicker}</p>
          <h2 className="showcase__title">{t.showcase.title}</h2>
          <p className="showcase__lead">{t.showcase.lead}</p>

          <dl className="showcase__stats">
            {t.showcase.stats.map((stat) => (
              <div className="showcase__stat" key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Showcase
