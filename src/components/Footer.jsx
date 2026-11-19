import { ArrowUpRight, Camera, MapPin, Phone } from 'lucide-react';
import Brand from './Brand.jsx';
import { business, whatsappLink } from '../data/site.js';

export default function Footer() {
  return <footer className="site-footer">
    <div className="wrap footer-main">
      <div className="footer-brand"><Brand /><p>Funilaria, pintura e cuidado automotivo em Mogi das Cruzes.</p></div>
      <div className="footer-nav"><span>NAVEGUE</span><a href="#servicos">Serviços</a><a href="#sobre">A Save Car</a><a href="#contato">Localização</a></div>
      <div className="footer-social"><span>FALE COM A GENTE</span><a href={business.instagram} target="_blank" rel="noreferrer"><Camera size={16} />Instagram <ArrowUpRight size={14} /></a><a href={whatsappLink()} target="_blank" rel="noreferrer"><Phone size={16} />WhatsApp <ArrowUpRight size={14} /></a><a href={business.map} target="_blank" rel="noreferrer"><MapPin size={16} />Como chegar <ArrowUpRight size={14} /></a></div>
    </div>
    <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Save Car Funilaria e Pintura</span><a href="#inicio">Voltar ao topo ↑</a></div>
  </footer>;
}
