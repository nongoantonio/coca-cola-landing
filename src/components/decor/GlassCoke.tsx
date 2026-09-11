interface GlassCokeProps {
  size?: number
  className?: string
}

// Ilustracao vetorial de um copo com Coca-Cola, gelo e bolhas.
// Substitui a laranja/folhas da referencia por um elemento proprio da marca.
function GlassCoke({ size = 170, className = '' }: GlassCokeProps) {
  return (
    <svg
      width={size}
      height={size * 1.3}
      viewBox="0 0 160 210"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="glass-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a0b12" />
          <stop offset="55%" stopColor="#3d0508" />
          <stop offset="100%" stopColor="#1a0203" />
        </linearGradient>
        <linearGradient id="glass-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.18" />
        </linearGradient>
        <filter id="glass-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      <g filter="url(#glass-shadow)">
        {/* corpo do copo (trapezio) */}
        <path
          d="M28 40 L132 40 L118 196 Q80 208 42 196 Z"
          fill="url(#glass-liquid)"
        />
        {/* vidro por cima do liquido, com transparencia */}
        <path
          d="M28 40 L132 40 L118 196 Q80 208 42 196 Z"
          fill="url(#glass-body)"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="2"
        />

        {/* bolhas dentro do copo */}
        <circle cx="60" cy="90" r="2.4" fill="#ffffff" opacity="0.55" />
        <circle cx="95" cy="110" r="1.8" fill="#ffffff" opacity="0.5" />
        <circle cx="70" cy="140" r="2" fill="#ffffff" opacity="0.45" />
        <circle cx="100" cy="160" r="1.6" fill="#ffffff" opacity="0.4" />
        <circle cx="55" cy="170" r="1.4" fill="#ffffff" opacity="0.4" />

        {/* cubos de gelo a flutuar no topo */}
        <g opacity="0.92">
          <path d="M46 34 L66 26 L82 36 L62 46 Z" fill="#eaf9ff" stroke="#ffffff" strokeOpacity="0.6" />
          <path d="M46 34 L62 46 L62 58 L46 48 Z" fill="#bfe8ff" />
          <path d="M82 36 L62 46 L62 58 L82 48 Z" fill="#d8f2ff" />
        </g>
        <g opacity="0.9">
          <path d="M84 28 L100 22 L112 30 L96 38 Z" fill="#eaf9ff" stroke="#ffffff" strokeOpacity="0.6" />
          <path d="M84 28 L96 38 L96 48 L84 40 Z" fill="#bfe8ff" />
          <path d="M112 30 L96 38 L96 48 L112 40 Z" fill="#d8f2ff" />
        </g>

        {/* espuma / bolhas a rebentar na superficie */}
        <ellipse cx="80" cy="38" rx="50" ry="7" fill="#ffffff" opacity="0.18" />

        {/* palhinha */}
        <rect x="93" y="6" width="10" height="120" rx="5" fill="#ffe4e6" stroke="#ff2d3f" strokeWidth="2" transform="rotate(10 98 66)" />

        {/* brilho lateral do vidro */}
        <path d="M40 46 L48 46 L38 190 L32 188 Z" fill="#ffffff" opacity="0.22" />

        {/* gotas de condensacao no exterior */}
        <circle cx="34" cy="80" r="2.2" fill="#ffffff" opacity="0.5" />
        <circle cx="126" cy="100" r="2" fill="#ffffff" opacity="0.45" />
        <circle cx="30" cy="130" r="1.6" fill="#ffffff" opacity="0.4" />
        <circle cx="122" cy="150" r="1.8" fill="#ffffff" opacity="0.4" />
      </g>
    </svg>
  )
}

export default GlassCoke
