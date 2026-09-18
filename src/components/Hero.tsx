import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import can from '../assets/can.png'
import heroIce from '../assets/hero-ice.jpg'
import Bubbles from './Bubbles'
import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()

  // Dispara a sequencia de entrada uma unica vez, apos a montagem do componente
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="topo" className={`hero ${ready ? 'hero--ready' : ''}`}>
      <img src={heroIce} alt="" className="hero__bg-photo" aria-hidden="true" />
      <div className="hero__glow" />
      <Bubbles count={16} />

      <div className="container hero__stage">
        <div className="hero__visual">
          <div className="hero__wordmark" aria-hidden="true">
            <span className="hero__word hero__word--left">COCA</span>
            <span className="hero__word hero__word--right">COLA</span>
          </div>

          <img src={can} alt="" className="hero__can" />
        </div>

        <div className="hero__copy">
          <p className="section-kicker">{t.hero.kicker}</p>
          <h1 className="hero__title">
            {t.hero.titleLine1}
            <br />
            {t.hero.titleLine2}
            <br />
            {t.hero.titleLine3}
          </h1>
          <p className="hero__lead">{t.hero.lead}</p>
          <div className="hero__actions">
            <a href="#sabor" className="btn btn--primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#historia" className="btn btn--ghost">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <a href="#historia" className="hero__scroll" aria-label={t.hero.scroll}>
        <span>{t.hero.scroll}</span>
        <ChevronDown size={18} />
      </a>
    </section>
  )
}

export default Hero
