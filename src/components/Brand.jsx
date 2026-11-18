export default function Brand({ compact = false }) {
  return <a className={`brand ${compact ? 'brand-compact' : ''}`} href="#inicio" aria-label="Brothers Auto Peças e Serviços, início">
    <span className="brand-mark" aria-hidden="true"><span>B</span><i /></span>
    <span className="brand-copy"><strong>brothers</strong><small>AUTO PEÇAS <b>·</b> SERVIÇOS</small></span>
  </a>;
}
