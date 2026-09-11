import { Sparkles, Snowflake, Leaf, Globe2 } from 'lucide-react'
import './Features.css'

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Bolhas que fazem a diferenca',
    text: 'A carbonatacao certa para aquele arrepio de frescura logo no primeiro gole.',
  },
  {
    icon: Snowflake,
    title: 'Melhor bem gelada',
    text: 'Servida entre 2 e 4 graus, revela todo o seu sabor e refrescancia.',
  },
  {
    icon: Leaf,
    title: 'Formula que nao muda',
    text: 'O mesmo equilibrio de sabor, protegido e mantido desde a receita original.',
  },
  {
    icon: Globe2,
    title: 'O mesmo sabor em todo o lado',
    text: 'De Lisboa a Tokyo, a experiencia Coca-Cola mantem-se sempre igual.',
  },
]

function Features() {
  return (
    <section id="sabor" className="features">
      <div className="container">
        <div className="features__header">
          <p className="section-kicker">Porque escolher Coca-Cola</p>
          <h2 className="features__title">Um sabor pensado em cada detalhe.</h2>
        </div>

        <div className="features__grid">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <article className="features__card" key={title}>
              <div className="features__icon">
                <Icon size={22} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
