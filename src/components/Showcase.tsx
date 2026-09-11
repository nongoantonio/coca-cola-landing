import { useRef } from 'react'
import bottle from '../assets/bottle.png'
import Bubbles from './Bubbles'
import './Showcase.css'

const STATS = [
  { value: '200+', label: 'paises onde e vendida' },
  { value: '1,9 mM', label: 'servicos consumidos por dia' },
  { value: '500+', label: 'marcas na familia Coca-Cola' },
]

function Showcase() {
  const stageRef = useRef<HTMLDivElement>(null)

  // Move a garrafa ligeiramente de acordo com a posicao do rato (paralaxe)
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const stage = stageRef.current
    if (!stage) return

    const rect = stage.getBoundingClientRect()
    const relativeX = (event.clientX - rect.left) / rect.width - 0.5
    const relativeY = (event.clientY - rect.top) / rect.height - 0.5

    stage.style.setProperty('--rx', `${relativeY * -10}deg`)
    stage.style.setProperty('--ry', `${relativeX * 14}deg`)
  }

  const handleMouseLeave = () => {
    const stage = stageRef.current
    if (!stage) return
    stage.style.setProperty('--rx', '0deg')
    stage.style.setProperty('--ry', '0deg')
  }

  return (
    <section id="mundo" className="showcase">
      <Bubbles count={10} className="showcase__bubbles" />

      <div className="container showcase__inner">
        <div className="showcase__header">
          <p className="section-kicker">Pelo mundo</p>
          <h2>Um sabor, milhoes de historias.</h2>
        </div>

        <div
          className="showcase__stage"
          ref={stageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <img src={bottle} alt="Garrafa de Coca-Cola em destaque" className="showcase__bottle" />

          {STATS.map((stat, i) => (
            <div className={`showcase__stat showcase__stat--${i + 1}`} key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Showcase
