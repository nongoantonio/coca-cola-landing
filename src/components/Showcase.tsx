import { useRef } from 'react'
import bottle from '../assets/bottle.png'
import can from '../assets/can.png'
import './Showcase.css'

const STATS = [
  { value: '200+', label: 'Paises onde e vendida' },
  { value: '1,9 mM', label: 'Servicos consumidos por dia' },
  { value: '2', label: 'Formatos: garrafa e lata' },
]

function Showcase() {
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
          <img src={bottle} alt="Garrafa de Coca-Cola" className="showcase__bottle" />
          <img src={can} alt="Lata de Coca-Cola" className="showcase__can" />
        </div>

        <div className="showcase__content">
          <p className="section-kicker">Pelo mundo</p>
          <h2 className="showcase__title">Um sabor, milhoes de historias.</h2>
          <p className="showcase__lead">
            De Lisboa a Tokyo, a mesma receita atravessa fronteiras e culturas
            sem perder aquilo que a torna reconhecivel em qualquer lugar.
          </p>

          <dl className="showcase__stats">
            {STATS.map((stat) => (
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
