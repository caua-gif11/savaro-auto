import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return <Reveal className={`section-heading ${light ? 'heading-light' : ''}`}>
    <span className="eyebrow"><i />{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </Reveal>;
}
