type BrandLogoProps = {
  variant?: 'default' | 'footer'
}

export default function BrandLogo({ variant = 'default' }: BrandLogoProps) {
  return (
    <span className={`brand-logo brand-logo--${variant}`}>
      <span className="brand-logo__mark" aria-hidden="true">
        n<span>h</span>
        <i />
      </span>
      <span className="brand-logo__name">NexaHire</span>
    </span>
  )
}
