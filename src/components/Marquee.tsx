import './Marquee.css'

const ITEMS = [
  'DESDE 1886',
  'MAIS DE 200 PAISES',
  'RECEITA ORIGINAL',
  '1,9 MIL MILHOES DE SERVICOS POR DIA',
  'FELICIDADE ENGARRAFADA',
]

function Marquee() {
  // Duplicamos a lista para o loop de scroll ficar continuo e sem cortes
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
            <span className="marquee__dot" aria-hidden="true">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
