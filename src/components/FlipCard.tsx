import logo from '../assets/logo.png'
import bottle from '../assets/bottle.png'
import './FlipCard.css'

// Cartao que expande ao passar o rato (hover), inspirado no snippet
// fornecido: o circulo com o logotipo transforma-se num painel vermelho
// e a garrafa "salta" para fora enquanto o texto desliza para dentro.
function FlipCard() {
  return (
    <div className="flip-card">
      <div className="flip-card__circle">
        <img src={logo} alt="Coca-Cola" className="flip-card__logo" />
      </div>

      <div className="flip-card__content">
        <h3>Coca-Cola Original</h3>
        <p>
          A formula que nunca mudou de espirito: bolhas vivas, um toque de
          caramelo e aquele frescor que so ela sabe dar. E o sabor contra o
          qual todos os outros sao comparados.
        </p>
        <a href="#mundo">Ver onde encontrar</a>
      </div>

      <img src={bottle} alt="Garrafa de Coca-Cola" className="flip-card__product" />
    </div>
  )
}

export default FlipCard
