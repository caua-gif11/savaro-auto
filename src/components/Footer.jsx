import { ArrowUp, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import Brand from './Brand.jsx';
import { business } from '../data/site.js';

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-main wrap">
      <div className="footer-brand"><Brand /><p>Seu veículo merece as peças certas.<br />Conte com a Brothers para consultar sua necessidade.</p></div>
      <div><h3>Navegue</h3><div className="footer-links"><a href="#empresa">A empresa</a><a href="#pecas">Categorias</a><a href="#servicos">Serviços</a><a href="#galeria">Galeria</a></div></div>
      <div className="footer-contact"><h3>Encontre a gente</h3><a href={business.map} target="_blank" rel="noreferrer"><MapPin size={16} />{business.address}</a><a href={business.whatsapp} target="_blank" rel="noreferrer"><Phone size={16} />{business.phoneDisplay}</a></div>
      <a className="back-top" href="#inicio" aria-label="Voltar ao topo"><ArrowUp size={20} /></a>
    </div>
    <div className="footer-bottom wrap"><span>© {new Date().getFullYear()} Brothers Auto Peças e Serviços. Todos os direitos reservados.</span><span>Mogi das Cruzes · SP <ArrowUpRight size={13} /></span></div>
  </footer>;
}
