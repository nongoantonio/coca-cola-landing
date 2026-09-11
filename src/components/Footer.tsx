import { useState } from 'react'
import { Instagram, Facebook, Youtube, Twitter, ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Explorar',
    links: ['Historia', 'O Sabor', 'Pelo Mundo', 'Sustentabilidade'],
  },
  {
    title: 'Produtos',
    links: ['Coca-Cola Original', 'Coca-Cola Zero', 'Coca-Cola Sem Cafeina', 'Edicoes Limitadas'],
  },
  {
    title: 'Suporte',
    links: ['Perguntas Frequentes', 'Contacto', 'Imprensa', 'Carreiras'],
  },
]

function Footer() {
  // Estado local apenas para dar feedback visual ao subscrever a newsletter
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <footer id="contacto" className="footer">
      <div className="footer__glow-line" aria-hidden="true" />

      <div className="container footer__top">
        <div className="footer__intro">
          <h2>
            Junte-se a conversa. <br /> Sabor todos os dias.
          </h2>
          <p>Novidades, edicoes limitadas e as historias por tras da marca, direto na sua caixa de entrada.</p>
        </div>

        <form className="footer__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="o.seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="O seu endereco de email"
          />
          <button type="submit">
            {sent ? 'Subscrito' : 'Subscrever'}
            <ArrowRight size={16} />
          </button>
        </form>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={logo} alt="Coca-Cola" className="footer__logo" />
          <p>
            Desde 1886 a espalhar frescura e momentos de felicidade partilhada,
            um gole a cada vez.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div className="footer__column" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} Coca-Cola. Todos os direitos reservados.</span>
        <div className="footer__legal">
          <a href="#">Privacidade</a>
          <a href="#">Termos</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
