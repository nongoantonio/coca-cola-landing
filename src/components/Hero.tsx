import { useEffect, useState } from 'react'
import can from '../assets/can.png'
import heroIce from '../assets/hero-ice.jpg'
import Bubbles from './Bubbles'
import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

// Hero em duas colunas: texto a esquerda, imagem a direita - a mesma
// estrutura da referencia, mas com a nossa lata sobreposta a foto do
// gelo, para juntar os dois elementos num unico bloco visual.
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
      <div className="hero__glow" />
      <Bubbles count={12} />

      <div className="container hero__grid">
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

        <div className="hero__media">
          <img src={heroIce} alt="" className="hero__photo" />
          <div className="hero__photo-veil" aria-hidden="true" />
          <img src={can} alt="Lata de Coca-Cola" className="hero__can" />
        </div>
      </div>
    </section>
  )
}

export default Hero
