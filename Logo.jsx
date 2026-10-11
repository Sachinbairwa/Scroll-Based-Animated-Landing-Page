export default function Logo({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Algoryx logo">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#2f6fe4" /><stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path d="M32 4 56 18v28L32 60 8 46V18z" fill="#060b18" stroke="url(#lg)" strokeWidth="4" />
      <path d="M20 44 32 18l12 26M25 36h14" fill="none" stroke="url(#lg)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
