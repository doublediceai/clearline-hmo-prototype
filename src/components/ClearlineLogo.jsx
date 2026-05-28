/**
 * Clearline brand mark — recreated as inline SVG.
 * gradId must be unique per page instance to avoid SVG gradient ID collisions.
 */
export default function ClearlineLogo({ gradId = 'clg', className = 'h-8 w-auto' }) {
  return (
    <svg viewBox="0 0 130 96" fill="none" className={className}>
      <defs>
        <linearGradient id={gradId} x1="6" y1="6" x2="124" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1AD68A" />
          <stop offset="0.45" stopColor="#00BFD4" />
          <stop offset="1" stopColor="#1848D6" />
        </linearGradient>
      </defs>

      {/* Outer C-shaped loop */}
      <path
        d="M84 18 C66 8 28 10 15 32 C4 52 15 76 43 82 C58 86 76 80 84 66"
        stroke={`url(#${gradId})`}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Inner interlocked figure-8 loops */}
      <path
        d="M84 66 C96 56 96 38 84 28 C72 18 54 20 50 34 C46 48 60 60 74 56 C88 52 94 34 82 24 C70 14 52 18 48 34"
        stroke={`url(#${gradId})`}
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
