import FlipCard from './FlipCard'
import './Story.css'

const MILESTONES = [
  { year: '1886', text: 'Nasce em Atlanta, criada pelo farmaceutico John Pemberton.' },
  { year: '1899', text: 'A garrafa contour comeca a ganhar forma e identidade propria.' },
  { year: '1971', text: 'A cancao "I\'d Like to Buy the World a Coke" torna-se hino global.' },
  { year: 'Hoje', text: 'Presente em mais de 200 paises, sempre com a mesma receita de origem.' },
]

function Story() {
  return (
    <section id="historia" className="story">
      <div className="container story__grid">
        <div className="story__text">
          <p className="section-kicker">A nossa historia</p>
          <h2 className="story__title">Mais de um seculo a criar momentos.</h2>
          <p className="story__lead">
            Do balcao de uma farmacia em Atlanta ate a mesa de milhoes de
            familias, a Coca-Cola cresceu sem nunca perder o essencial: um
            sabor que reconhece de olhos fechados.
          </p>

          <ol className="story__timeline">
            {MILESTONES.map((m) => (
              <li key={m.year}>
                <span className="story__year">{m.year}</span>
                <span className="story__event">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="story__card">
          <FlipCard />
          <p className="story__hint">Passe o rato sobre o cartao</p>
        </div>
      </div>
    </section>
  )
}

export default Story
