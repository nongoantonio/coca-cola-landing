interface IceCubeProps {
  size?: number
  className?: string
}

// Ilustracao vetorial de um cubo de gelo, usada como elemento decorativo
// flutuante no Hero (equivalente as folhas/laranjas da referencia original).
function IceCube({ size = 90, className = '' }: IceCubeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ice-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#cfeeff" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="ice-left" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bfe8ff" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8ecbe8" stopOpacity="0.45" />
        </linearGradient>
        <linearGradient id="ice-right" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e8f9ff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#a9d9ef" stopOpacity="0.5" />
        </linearGradient>
        <filter id="ice-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000000" floodOpacity="0.35" />
        </filter>
      </defs>

      <g filter="url(#ice-shadow)">
        {/* face de cima */}
        <path d="M60 6 L112 34 L60 62 L8 34 Z" fill="url(#ice-top)" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="1" />
        {/* face esquerda */}
        <path d="M8 34 L60 62 L60 114 L8 86 Z" fill="url(#ice-left)" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1" />
        {/* face direita */}
        <path d="M112 34 L60 62 L60 114 L112 86 Z" fill="url(#ice-right)" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1" />
        {/* brilho */}
        <path d="M20 40 L38 50 L38 66 L20 56 Z" fill="#ffffff" opacity="0.5" />
      </g>
    </svg>
  )
}

export default IceCube
