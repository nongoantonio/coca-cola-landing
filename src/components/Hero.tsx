import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import bottle from '../assets/bottle.png'
import Bubbles from './Bubbles'
import LemonSlice from './decor/LemonSlice'
import BottleCap from './decor/BottleCap'
import './Hero.css'

function Hero() {
  // Dispara a sequencia de entrada uma unica vez, apos a montagem do componente
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="topo" className={`hero ${ready ? 'hero--ready' : ''}`}>
      <div className="hero__glow" />
      <Bubbles count={16} />

      {/* Decoracoes flutuantes: limao e tampas, no lugar das folhas/laranja da referencia */}
      <BottleCap size={92} rotate={-8} className="hero__decor hero__decor--cap-a" />
      <BottleCap size={62} rotate={14} className="hero__decor hero__decor--cap-b" />
      <LemonSlice size={168} className="hero__decor hero__decor--lemon" />

      <div className="container hero__stage">
        <div className="hero__visual">
          <div className="hero__wordmark" aria-hidden="true">
            <span className="hero__word hero__word--left">COCA</span>
            <span className="hero__word hero__word--right">COLA</span>
          </div>

          <img src={bottle} alt="" className="hero__bottle" />
        </div>

        <div className="hero__copy">
          <p className="section-kicker">Receita original desde 1886</p>
          <h1 className="hero__title">
            Destape a felicidade a cada gole.
          </h1>
          <p className="hero__lead">
            O mesmo sabor inconfundivel que junta geracoes a mesma mesa,
            em mais de duzentos paises, todos os dias.
          </p>
          <div className="hero__actions">
            <a href="#sabor" className="btn btn--primary">
              Descobrir o sabor
            </a>
            <a href="#historia" className="btn btn--ghost">
              Conhecer a historia
            </a>
          </div>
        </div>
      </div>

      <a href="#historia" className="hero__scroll" aria-label="Descer para a proxima seccao">
        <span>Explorar</span>
        <ChevronDown size={18} />
      </a>
    </section>
  )
}

export default Hero
