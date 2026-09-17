import { useId } from 'react'

interface LemonSliceProps {
  size?: number
  className?: string
}

// Rodela de limao, desenhada com camadas (casca, alburgo branco, polpa e
// gomos) para dar profundidade real, tal como a laranja da referencia.
function LemonSlice({ size = 180, className = '' }: LemonSliceProps) {
  // IDs unicos por instancia, para o componente poder repetir-se sem colisoes
  const uid = useId()
  const fleshId = `lemon-flesh-${uid}`
  const rindId = `lemon-rind-${uid}`
  const shadowId = `lemon-shadow-${uid}`

  const segments = 10
  const center = 100
  const fleshRadius = 74

  // Gera as linhas dos gomos matematicamente, a partir do centro da rodela
  const wedgeLines = Array.from({ length: segments }, (_, i) => {
    const angle = (i / segments) * Math.PI * 2
    const x2 = center + Math.cos(angle) * fleshRadius
    const y2 = center + Math.sin(angle) * fleshRadius
    return { x1: center, y1: center, x2, y2 }
  })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={fleshId} cx="35%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#fffbe8" />
          <stop offset="55%" stopColor="#fdf1a8" />
          <stop offset="100%" stopColor="#f6de6d" />
        </radialGradient>
        <linearGradient id={rindId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e7d43a" />
          <stop offset="50%" stopColor="#c9b62e" />
          <stop offset="100%" stopColor="#a89522" />
        </linearGradient>
        <filter id={shadowId} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#3a2e00" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter={`url(#${shadowId})`}>
        {/* casca exterior */}
        <circle cx={center} cy={center} r="96" fill={`url(#${rindId})`} />
        {/* alburgo branco */}
        <circle cx={center} cy={center} r="86" fill="#fffef2" />
        {/* polpa */}
        <circle cx={center} cy={center} r={fleshRadius} fill={`url(#${fleshId})`} />

        {/* gomos, gerados a partir do centro */}
        {wedgeLines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="#fffef2"
            strokeOpacity="0.75"
            strokeWidth="2"
          />
        ))}

        {/* miolo central */}
        <circle cx={center} cy={center} r="9" fill="#fffef2" opacity="0.9" />
        <circle cx={center} cy={center} r="9" fill="none" stroke="#e4d27a" strokeWidth="1.5" />

        {/* gotas de brilho, para dar sensacao de sumo fresco */}
        <ellipse cx="72" cy="66" rx="14" ry="8" fill="#ffffff" opacity="0.4" transform="rotate(-30 72 66)" />
        <circle cx="128" cy="118" r="4" fill="#ffffff" opacity="0.55" />
        <circle cx="118" cy="70" r="2.6" fill="#ffffff" opacity="0.5" />

        {/* rebordo da casca, textura */}
        <circle cx={center} cy={center} r="96" fill="none" stroke="#8a7a1c" strokeOpacity="0.35" strokeWidth="1.5" />
      </g>
    </svg>
  )
}

export default LemonSlice
