import { useLanguage } from '../i18n/LanguageContext'
import './Marquee.css'

function Marquee() {
  const { t } = useLanguage()

  // Duplicamos a lista para o loop de scroll ficar continuo e sem cortes
  const doubled = [...t.marquee, ...t.marquee]

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
