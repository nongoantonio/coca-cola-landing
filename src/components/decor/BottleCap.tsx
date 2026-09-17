import { useId } from 'react'

interface BottleCapProps {
  size?: number
  className?: string
  rotate?: number
}

// Tampa de garrafa, vista de cima com uma ligeira inclinacao.
// As ranhuras (flutes) da coroa sao calculadas em vez de desenhadas a mao,
// para o espacamento ficar sempre perfeito, seja qual for o tamanho.
function BottleCap({ size = 130, className = '', rotate = 0 }: BottleCapProps) {
  // IDs unicos por instancia: evita colisoes quando a tampa aparece 2x na pagina
  const uid = useId()
  const faceId = `cap-face-${uid}`
  const shadowId = `cap-shadow-${uid}`
  const arcId = `cap-arc-${uid}`

  const flutes = 24
  const center = 100
  const outerR = 88
  const innerR = 76

  const teeth = Array.from({ length: flutes }, (_, i) => {
    const angle = (i / flutes) * Math.PI * 2
    const x1 = center + Math.cos(angle) * innerR
    const y1 = center + Math.sin(angle) * innerR
    const x2 = center + Math.cos(angle) * outerR
    const y2 = center + Math.sin(angle) * outerR
    // alterna o tom para sugerir luz e sombra em cada ranhura
    const shade = i % 2 === 0 ? '#8a0313' : '#5c020c'
    return { x1, y1, x2, y2, shade, key: i }
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={faceId} cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#ff3346" />
          <stop offset="55%" stopColor="#d30d24" />
          <stop offset="100%" stopColor="#8f0716" />
        </radialGradient>
        <filter id={shadowId} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter={`url(#${shadowId})`}>
        {/* anel exterior metalico, base das ranhuras */}
        <circle cx={center} cy={center} r={outerR} fill="#b30d1f" />

        {/* ranhuras da coroa, geradas em torno do circulo */}
        {teeth.map((t) => (
          <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} stroke={t.shade} strokeWidth="5" />
        ))}

        {/* face superior da tampa */}
        <circle cx={center} cy={center} r={innerR} fill={`url(#${faceId})`} stroke="#ffffff" strokeOpacity="0.15" strokeWidth="1.5" />

        {/* assinatura da marca, em arco */}
        <path id={arcId} d="M 55 118 A 48 48 0 0 1 145 118" fill="none" />
        <text fontSize="17" fill="#ffffff" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" fontWeight="700" letterSpacing="0.5">
          <textPath href={`#${arcId}`} startOffset="50%" textAnchor="middle">
            Coca-Cola
          </textPath>
        </text>

        {/* brilho especular */}
        <ellipse cx="76" cy="72" rx="26" ry="16" fill="#ffffff" opacity="0.22" transform="rotate(-25 76 72)" />
      </g>
    </svg>
  )
}

export default BottleCap
