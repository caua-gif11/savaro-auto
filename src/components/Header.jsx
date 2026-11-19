import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './Brand.jsx';
import { whatsappLink } from '../data/site.js';

const links = [['Início', 'inicio'], ['Serviços', 'servicos'], ['A Save Car', 'sobre'], ['Localização', 'contato']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <div className="header-inner">
      <Brand />
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'site-nav nav-open' : 'site-nav'} aria-label="Navegação principal">
        {links.map(([label, id]) => <a href={'#' + id} key={id} onClick={close}>{label}</a>)}
        <a className="nav-mobile-cta" href={whatsappLink()} target="_blank" rel="noreferrer" onClick={close}>Agendar visita <ArrowUpRight size={16} /></a>
      </nav>
      <a className="header-cta" href={whatsappLink()} target="_blank" rel="noreferrer">Agendar visita <ArrowUpRight size={16} /></a>
    </div>
  </header>;
}
