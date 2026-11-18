import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Disc3, Filter, Gauge, MapPin, Phone, Settings2, ShieldCheck, Sparkles, Zap, X } from 'lucide-react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Reveal from './components/Reveal.jsx';
import SectionHeading from './components/SectionHeading.jsx';
import { business, categories, gallery, imageUrl, serviceContent, whatsappLink } from './data/site.js';

const iconByName = { engine: Gauge, disc: Disc3, settings: Settings2, filter: Filter, zap: Zap, circle: Disc3, sparkles: Sparkles, car: ShieldCheck };

function Hero() {
  return <section className="hero" id="inicio">
    <img className="hero-image" src={imageUrl('photo-1492144534655-ae79c964c9d7', 2200)} alt="Automóvel em destaque sob iluminação dramática" fetchPriority="high" />
    <div className="hero-shade" /><div className="hero-grid" />
    <div className="hero-content wrap">
      <Reveal className="hero-copy">
        <span className="hero-kicker"><i /> AUTOPARTES &amp; SOLUÇÕES AUTOMOTIVAS</span>
        <h1>Seu veículo<br />merece as <em>peças certas.</em></h1>
        <p>Conheça a Brothers Auto Peças e Serviços e entre em contato para consultar suas necessidades automotivas.</p>
        <div className="hero-actions"><a className="button button-red" href={whatsappLink('Olá! Acessei o site da Brothers Auto Peças e gostaria de consultar uma peça.')} target="_blank" rel="noreferrer">Consultar pelo WhatsApp <ArrowUpRight size={17} /></a><a className="button button-ghost" href="#empresa">Conhecer a empresa <ArrowDown size={15} /></a></div>
      </Reveal>
      <div className="hero-aside"><span>01 <i /> 03</span><small>Mogi das Cruzes<br />São Paulo · Brasil</small></div>
      <a className="hero-scroll" href="#empresa"><span>ROLE PARA EXPLORAR</span><i /></a>
    </div>
    <div className="hero-bottom-line"><span>PRECISÃO</span><span>CONFIANÇA</span><span>DEDICAÇÃO</span></div>
  </section>;
}

function About() {
  return <section className="about-section section-pad" id="empresa"><div className="wrap about-grid">
    <Reveal className="about-visual"><img src={imageUrl('photo-1487754180451-c456f719a1fc', 1200)} alt="Profissional inspeciona um veículo na oficina" loading="lazy" /><div className="about-stamp"><span>PEÇAS</span><b>&amp;</b><span>SERVIÇOS</span><i>• MOGI DAS CRUZES •</i></div><div className="visual-caption"><span>01 / SOBRE A BROTHERS</span><span>COMPROMISSO COM SEU VEÍCULO</span></div></Reveal>
    <div className="about-copy"><SectionHeading eyebrow="Nossa empresa" title={<>Conheça a <em>Brothers.</em></>} />
      <Reveal><p className="lead-copy">A Brothers Auto Peças e Serviços é uma empresa voltada ao segmento automotivo, oferecendo atendimento para quem procura peças e soluções para seu veículo.</p><p>Estamos em Mogi das Cruzes e prontos para conversar sobre o que você precisa. Fale com nossa equipe para consultar sua necessidade automotiva.</p><a className="text-link" href={whatsappLink('Olá! Gostaria de conhecer melhor a Brothers Auto Peças e Serviços.')} target="_blank" rel="noreferrer">Converse com a Brothers <ArrowUpRight size={17} /></a></Reveal>
      <div className="about-points"><div><span>01</span><b>Atendimento próximo</b></div><div><span>02</span><b>Consulta direta</b></div><div><span>03</span><b>Em Mogi das Cruzes</b></div></div>
    </div>
  </div></section>;
}

function Categories() {
  return <section className="parts-section section-pad" id="pecas"><div className="wrap">
    <div className="parts-head"><SectionHeading eyebrow="O que você procura?" title={<>Encontre a categoria<br />que <em>precisa.</em></>} description="Consulte nossa equipe sobre a peça certa para seu veículo. Disponibilidade sujeita a confirmação." /><div className="parts-index">02 <i /> 08</div></div>
    <div className="category-grid">{categories.map((item, index) => { const Icon = iconByName[item.icon]; return <Reveal key={item.name} delay={index * 45} className="category-card">
      <div className="category-image"><img src={imageUrl(item.image, 700)} alt={`Imagem ilustrativa de peça da categoria ${item.name.toLowerCase()}`} loading="lazy" /><span className="category-number">0{index + 1}</span><span className="category-icon"><Icon size={20} strokeWidth={1.6} /></span></div>
      <div className="category-info"><h3>{item.name}</h3><p>{item.description}</p><a href={whatsappLink(`Olá! Gostaria de consultar ${item.name.toLowerCase()} para meu veículo.`)} target="_blank" rel="noreferrer" aria-label={`Consultar ${item.name} pelo WhatsApp`}>Consultar <ArrowUpRight size={15} /></a></div>
    </Reveal>; })}</div>
    <div className="parts-note"><span><i /> Consulta pelo WhatsApp</span><p>As imagens são ilustrativas. Consulte a equipe sobre aplicação e disponibilidade.</p></div>
  </div></section>;
}

function Services() {
  return <section className="services-section section-pad" id="servicos"><div className="wrap services-layout">
    <div className="services-copy"><SectionHeading eyebrow="Atendimento" title={<>Serviços e soluções<br /><em>automotivas.</em></>} description="Entre em contato para conversar sobre o que você procura." />
      <Reveal className="service-disclaimer"><span className="service-icon"><Settings2 size={21} /></span><div><b>{serviceContent.status}</b><p>{serviceContent.description}</p></div></Reveal>
      <a className="button button-outline" href={whatsappLink('Olá! Gostaria de consultar quais serviços automotivos a Brothers oferece.')} target="_blank" rel="noreferrer">Consultar serviços <ArrowUpRight size={16} /></a>
    </div>
    <Reveal className="services-image"><img src={imageUrl('photo-1486262715619-67b85e0b08d3', 1300)} alt="Detalhe de um motor automotivo" loading="lazy" /><div className="services-image-overlay"><span>ATENÇÃO A CADA DETALHE</span><b>Uma conversa<br />começa aqui.</b><span className="service-line" /></div><span className="image-index">BROTHERS / 02</span></Reveal>
  </div></section>;
}

function Gallery() {
  const [active, setActive] = useState(null);
  const close = () => setActive(null);
  const step = (direction) => setActive((active + direction + gallery.length) % gallery.length);
  useEffect(() => {
    if (active === null) return;
    const onKey = (event) => { if (event.key === 'Escape') close(); if (event.key === 'ArrowRight') step(1); if (event.key === 'ArrowLeft') step(-1); };
    document.addEventListener('keydown', onKey); document.body.classList.add('lightbox-open');
    return () => { document.removeEventListener('keydown', onKey); document.body.classList.remove('lightbox-open'); };
  }, [active]);
  return <section className="gallery-section section-pad" id="galeria"><div className="wrap">
    <div className="gallery-head"><SectionHeading eyebrow="Galeria" title={<>O universo <em>Brothers.</em></>} description="Um olhar sobre o universo automotivo que nos inspira." /><span className="gallery-count">06 <i /> IMAGENS</span></div>
    <div className="gallery-grid">{gallery.map((item, index) => <Reveal key={item.image} delay={index * 45} className={`gallery-item gallery-item-${index + 1}`}><button onClick={() => setActive(index)} aria-label={`Ampliar imagem: ${item.label}`}><img src={imageUrl(item.image, 1000)} alt={item.alt} loading="lazy" /><span className="gallery-overlay"><small>0{index + 1} / 06</small><b>{item.label}</b><i><ArrowUpRight size={17} /></i></span></button></Reveal>)}</div>
  </div>{active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de imagens" onClick={(e) => e.target === e.currentTarget && close()}><button className="lightbox-close" onClick={close} aria-label="Fechar galeria"><X /></button><button className="lightbox-arrow lightbox-prev" onClick={() => step(-1)} aria-label="Imagem anterior"><ChevronLeft /></button><figure><img src={imageUrl(gallery[active].image, 1800)} alt={gallery[active].alt} /><figcaption><span>0{active + 1} / 06</span>{gallery[active].label}</figcaption></figure><button className="lightbox-arrow lightbox-next" onClick={() => step(1)} aria-label="Próxima imagem"><ChevronRight /></button></div>}</section>;
}

function Callout() {
  return <section className="callout-section"><div className="callout-backdrop" /><div className="wrap callout-inner"><Reveal><span className="eyebrow"><i /> FALE COM A BROTHERS</span><h2>Está procurando uma peça<br />para seu <em>veículo?</em></h2><p>Fale com nossa equipe e consulte a disponibilidade.</p><a className="button button-white" href={whatsappLink('Olá! Acessei o site da Brothers Auto Peças e gostaria de consultar uma peça.')} target="_blank" rel="noreferrer">Chamar no WhatsApp <ArrowUpRight size={17} /></a></Reveal><div className="callout-mark">B<span>.</span></div></div></section>;
}

function Location() {
  const mapSrc = 'https://www.google.com/maps?q=Brothers%20Auto%20Pe%C3%A7as%20e%20Servi%C3%A7os%2C%20Av.%20Jap%C3%A3o%2C%204987%2C%20Mogi%20das%20Cruzes%20SP&output=embed';
  return <section className="location-section section-pad" id="contato"><div className="wrap">
    <div className="location-heading"><SectionHeading eyebrow="Onde estamos" title={<>Perto de <em>você.</em></>} description="Estamos em Mogi das Cruzes. Fale com a equipe ou abra a rota no mapa." /><span className="location-coord">MOGI DAS CRUZES<br />23°31'23.5"S 46°11'10.7"W</span></div>
    <div className="location-grid"><Reveal className="map-frame"><iframe title="Mapa de localização da Brothers Auto Peças e Serviços" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><span className="map-tag"><MapPin size={15} /> MOGI DAS CRUZES · SP</span></Reveal>
      <Reveal className="location-card"><span className="eyebrow"><i /> VISITE OU FALE CONOSCO</span><h3>Brothers Auto Peças<br />e Serviços</h3><div className="contact-row"><span className="contact-icon"><MapPin size={19} /></span><div><small>ENDEREÇO</small><p>{business.address}</p></div></div><div className="contact-row"><span className="contact-icon"><Phone size={18} /></span><div><small>WHATSAPP</small><p>{business.phoneDisplay}</p></div></div><a className="button button-red location-button" href={business.map} target="_blank" rel="noreferrer">Abrir rota no mapa <ArrowUpRight size={17} /></a></Reveal>
    </div>
  </div></section>;
}

export default function App() {
  return <><Header /><main><Hero /><About /><Categories /><Services /><Gallery /><Callout /><Location /></main><Footer /><a className="floating-whatsapp" href={business.whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Brothers pelo WhatsApp"><Phone size={21} /></a></>;
}
