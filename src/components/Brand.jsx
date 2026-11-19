const logoSrc = (import.meta.env.BASE_URL || '/') + 'save-car-logo.jpg';

export default function Brand({ compact = false }) {
  return <a className={'brand' + (compact ? ' brand-compact' : '')} href="#inicio" aria-label="Save Car Funilaria e Pintura, início">
    <img src={logoSrc} alt="" />
    <span className="brand-copy"><strong>Save Car</strong><small>FUNILARIA <b>•</b> PINTURA</small></span>
  </a>;
}
