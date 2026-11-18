import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Brand from './Brand.jsx';
import { whatsappLink } from '../data/site.js';

const links = [['Início', 'inicio'], ['Empresa', 'empresa'], ['Peças', 'pecas'], ['Serviços', 'servicos'], ['Galeria', 'galeria'], ['Contato', 'contato']];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);
  const close = () => setOpen(false);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="header-inner"><Brand />
      <nav className={`desktop-nav ${open ? 'nav-open' : ''}`} aria-label="Navegação principal">
        {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={close}>{label}</a>)}
      </nav>
      <a className="header-cta" href={whatsappLink('Olá! Acessei o site da Brothers Auto Peças e gostaria de falar com a equipe.')} target="_blank" rel="noreferrer"><span>Fale conosco</span><ArrowUpRight size={15} /></a>
      <button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
  </header>;
}
