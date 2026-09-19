import { useEffect, useState } from 'react'
import can from '../assets/can.png'
import heroIce from '../assets/hero-ice.jpg'
import Bubbles from './Bubbles'
import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

// Hero em duas colunas: texto a esquerda, imagem a direita - a mesma
// estrutura da referencia, mas com a nossa lata sobreposta a foto do
// gelo, para juntar os dois elementos num unico bloco visual.
// Hero: texto a esquerda com uma lata pequena ao lado do titulo; o lado
// direito nao tem grafismo proprio, so a foto de fundo (garrafa no gelo)
// como enfase visual, sem elementos a competir com ela.
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
      <Bubbles count={12} />

      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <img src={can} alt="Lata de Coca-Cola" className="hero__can-small" />
            <p className="section-kicker">{t.hero.kicker}</p>
          </div>
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
    </section>
  )
}

export default Hero
