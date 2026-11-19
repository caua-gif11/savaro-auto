import { ArrowDown, ArrowUpRight, Camera, CarFront, Check, MapPin, Paintbrush, Phone, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import Brand from './components/Brand.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Reveal from './components/Reveal.jsx';
import { business, services, whatsappLink } from './data/site.js';

const iconByName = { wrench: Wrench, paint: Paintbrush, shine: Sparkles, car: CarFront };
function Hero() {
  return <section className="hero" id="inicio">
    <img className="hero-photo" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=85" alt="Automóvel esportivo em destaque" fetchPriority="high" />
    <div className="hero-overlay" />
    <div className="hero-mark" aria-hidden="true">SC<span>.</span></div>
    <div className="wrap hero-content">
      <Reveal className="hero-copy">
        <span className="eyebrow"><i /> FUNILARIA • PINTURA • ESTÉTICA AUTOMOTIVA</span>
        <h1>Seu carro merece<br />voltar a <em>brilhar.</em></h1>
        <p>Funilaria, pintura, polimento e martelinho de ouro em Mogi das Cruzes.</p>
        <div className="hero-actions">
          <a className="button button-yellow" href={whatsappLink()} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={17} /></a>
          <a className="button button-quiet" href="#servicos">Conheça os serviços <ArrowDown size={16} /></a>
        </div>
        <div className="hero-note"><ShieldCheck size={17} /><span>Atendimento a todas as seguradoras</span></div>
      </Reveal>
      <div className="hero-side"><span>01 — 04</span><i /><small>Mogi das Cruzes<br />São Paulo</small></div>
    </div>
    <div className="hero-bottom"><span>ATENÇÃO A CADA DETALHE</span><span>R. JOSÉ DE CARLO, 181 · VILA LAVINIA</span></div>
  </section>;
}

function About() {
  return <section className="about-section section-pad" id="sobre">
    <div className="wrap about-grid">
      <Reveal className="about-photo-wrap">
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=82" alt="Automóvel com acabamento brilhante" loading="lazy" />
        <div className="about-photo-label"><span>Save Car</span><i>ESTÉTICA E REPARAÇÃO AUTOMOTIVA</i></div>
        <span className="photo-corner" aria-hidden="true">SC / 01</span>
      </Reveal>
      <div className="about-copy">
        <span className="eyebrow"><i /> CUIDADO DO COMEÇO AO ACABAMENTO</span>
        <h2>Uma nova fase<br />para o seu <em>carro.</em></h2>
        <Reveal><p>A Save Car Oficina reúne serviços de funilaria, pintura e estética automotiva em Mogi das Cruzes. Conte com a equipe para conversar sobre o que seu veículo precisa.</p>
          <a className="text-link" href={business.instagram} target="_blank" rel="noreferrer">Acompanhe no Instagram <Camera size={17} /></a>
        </Reveal>
        <div className="about-feature"><span><Check size={16} /></span><p>Atendemos todas as seguradoras</p><ShieldCheck size={22} /></div>
      </div>
    </div>
  </section>;
}

function Services() {
  return <section className="services-section section-pad" id="servicos">
    <div className="wrap">
      <div className="section-intro">
        <div><span className="eyebrow"><i /> SERVIÇOS</span><h2>Da reparação<br />ao <em>acabamento.</em></h2></div>
        <p>Conheça os serviços informados pela Save Car. Fale com a oficina para explicar seu caso e combinar uma visita.</p>
      </div>
      <div className="service-grid">{services.map((service, index) => {
        const Icon = iconByName[service.icon];
        return <Reveal className="service-card" delay={index * 70} key={service.name}>
          <div className="service-card-top"><span>0{index + 1}</span><Icon size={26} strokeWidth={1.5} /></div>
          <h3>{service.name}</h3><p>{service.description}</p>
          <a href={whatsappLink('Oi! Gostaria de saber mais sobre ' + service.name.toLowerCase() + '.')} target="_blank" rel="noreferrer">Consultar serviço <ArrowUpRight size={16} /></a>
        </Reveal>;
      })}</div>
      <div className="insurer-note"><ShieldCheck size={20} /><span>Atendimento a todas as seguradoras</span><a href={whatsappLink('Oi! Gostaria de informações sobre atendimento a seguradoras.')} target="_blank" rel="noreferrer">Fale com a equipe <ArrowUpRight size={15} /></a></div>
    </div>
  </section>;
}

function Callout() {
  return <section className="callout-section">
    <div className="callout-pattern" />
    <div className="wrap callout-inner"><Reveal>
      <span className="eyebrow"><i /> VAMOS CONVERSAR?</span>
      <h2>Seu próximo passo<br />começa <em>aqui.</em></h2>
      <p>Chame a Save Car e agende uma visita à oficina.</p>
      <a className="button button-black" href={whatsappLink()} target="_blank" rel="noreferrer"><Phone size={17} /> Falar pelo WhatsApp <ArrowUpRight size={17} /></a>
    </Reveal><div className="callout-stamp">SAVE<br />CAR<span>®</span></div></div>
  </section>;
}

function Location() {
  return <section className="location-section section-pad" id="contato">
    <div className="wrap">
      <div className="location-heading"><div><span className="eyebrow"><i /> VISITE A OFICINA</span><h2>Estamos em <em>Mogi.</em></h2></div>
        <a className="text-link" href={business.map} target="_blank" rel="noreferrer">Abrir rota no mapa <ArrowUpRight size={17} /></a>
      </div>
      <div className="location-grid">
        <div className="map-frame"><iframe title="Mapa da Save Car Oficina em Mogi das Cruzes" src={business.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <a className="map-tag" href={business.map} target="_blank" rel="noreferrer"><MapPin size={16} /> VILA LAVINIA · MOGI DAS CRUZES</a>
        </div>
        <Reveal className="contact-card">
          <Brand compact />
          <div className="contact-line"><MapPin size={19} /><div><small>ENDEREÇO</small><p>{business.address}</p></div></div>
          <div className="contact-line"><Phone size={18} /><div><small>WHATSAPP</small><a href={whatsappLink()} target="_blank" rel="noreferrer">{business.phoneDisplay}</a></div></div>
          <div className="contact-line"><Camera size={18} /><div><small>INSTAGRAM</small><a href={business.instagram} target="_blank" rel="noreferrer">@savecaroficina</a></div></div>
          <a className="button button-yellow contact-button" href={business.map} target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={17} /></a>
        </Reveal>
      </div>
    </div>
  </section>;
}

export default function App() {
  return <><Header /><main><Hero /><About /><Services /><Callout /><Location /></main><Footer />
    <a className="floating-whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="Falar com a Save Car pelo WhatsApp"><Phone size={21} /></a>
  </>;
}
