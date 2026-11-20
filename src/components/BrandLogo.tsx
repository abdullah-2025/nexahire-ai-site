type BrandLogoProps = {
  variant?: 'default' | 'footer'
}

/*
 * NexaHire mark: a geometric N whose path climbs into a figure. The right
 * stem and the node above it read as a person (the hire); the node is the
 * AI match. Standalone files live in /public/brand.
 */
export default function BrandLogo({ variant = 'default' }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant}`}>
      <svg
        className="brand-logo__mark"
        viewBox="0 0 64 64"
        aria-hidden="true"
        focusable="false"
      >
        <rect className="brand-logo__tile" width="64" height="64" rx="16" />
        <path
          className="brand-logo__n"
          d="M20 48V22l24 26V31"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle className="brand-logo__node" cx="44" cy="17" r="5.25" />
      </svg>
      <span className="brand-logo__name">
        Nexa<span>Hire</span>
      </span>
    </span>
  )
}
