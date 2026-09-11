import { useMemo } from 'react'
import './Bubbles.css'

interface BubblesProps {
  count?: number
  className?: string
}

// Gera bolhas decorativas com tamanho, posicao e atraso pseudo-aleatorios.
// Representa a gaseificacao da bebida - motivo visual ligado ao proprio produto.
function Bubbles({ count = 14, className = '' }: BubblesProps) {
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        size: Math.round(4 + Math.random() * 10),
        duration: (9 + Math.random() * 10).toFixed(1),
        delay: (Math.random() * 10).toFixed(1),
        drift: Math.round(Math.random() * 40 - 20),
      })),
    [count],
  )

  return (
    <div className={`bubbles ${className}`} aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubbles__item"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            // @ts-expect-error propriedade customizada usada no CSS
            '--drift': `${b.drift}px`,
          }}
        />
      ))}
    </div>
  )
}

export default Bubbles
