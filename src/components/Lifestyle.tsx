import beach from '../assets/lifestyle-beach.jpg'
import './Lifestyle.css'

// Seccao emocional, com uma fotografia de pessoas reais a partilhar um
// momento. Depois de tanto produto em destaque, esta seccao mostra o
// porque: a Coca-Cola como parte de estar junto de quem se ama.
function Lifestyle() {
  return (
    <section className="lifestyle" aria-labelledby="lifestyle-title">
      <img
        src={beach}
        alt="Grupo de amigos a rir e a brindar com Coca-Cola ao por do sol, junto ao mar"
        className="lifestyle__photo"
      />
      <div className="lifestyle__veil" aria-hidden="true" />

      <div className="container lifestyle__inner">
        <p className="section-kicker lifestyle__kicker">Sabor que une o mundo</p>
        <h2 id="lifestyle-title" className="lifestyle__quote">
          Juntos e
          <br />
          melhor.
        </h2>
        <svg
          className="lifestyle__swoosh"
          width="180"
          height="30"
          viewBox="0 0 180 30"
          aria-hidden="true"
        >
          <path
            d="M4 20 C 50 4, 130 4, 176 22"
            fill="none"
            stroke="var(--cc-red-bright)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <p className="lifestyle__text">
          Um brinde ao fim de tarde, entre amigos, com o mar por perto.
          E nesses momentos simples que a Coca-Cola faz mais sentido.
        </p>
      </div>
    </section>
  )
}

export default Lifestyle
