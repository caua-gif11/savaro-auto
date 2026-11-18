export const business = {
  name: 'Brothers Auto Peças e Serviços',
  phone: '5511916552888',
  phoneDisplay: '(11) 91655-2888',
  address: 'Av. Japão, 4987 - Vila Ipiranga, Mogi das Cruzes - SP, 08743-540',
  map: 'https://www.google.com/maps/search/?api=1&query=Brothers%20Auto%20Pe%C3%A7as%20e%20Servi%C3%A7os&query_place_id=ChIJKTzpMIF3zpQR0XEIIUeMnP8',
  whatsapp: 'https://wa.me/5511916552888',
};

export const categories = [
  { name: 'Motor', description: 'Componentes para o sistema do motor.', icon: 'engine', image: 'photo-1486262715619-67b85e0b08d3' },
  { name: 'Freios', description: 'Itens relacionados ao sistema de freios.', icon: 'disc', image: 'photo-1486262715619-67b85e0b08d3' },
  { name: 'Suspensão', description: 'Componentes para suspensão e direção.', icon: 'settings', image: 'photo-1487754180451-c456f719a1fc' },
  { name: 'Filtros', description: 'Filtros para diferentes necessidades do veículo.', icon: 'filter', image: 'photo-1486262715619-67b85e0b08d3' },
  { name: 'Sistema elétrico', description: 'Peças e componentes elétricos automotivos.', icon: 'zap', image: 'photo-1486262715619-67b85e0b08d3' },
  { name: 'Embreagem', description: 'Componentes do conjunto de embreagem.', icon: 'circle', image: 'photo-1487754180451-c456f719a1fc' },
  { name: 'Acessórios', description: 'Acessórios e itens para seu veículo.', icon: 'sparkles', image: 'photo-1492144534655-ae79c964c9d7' },
  { name: 'Componentes automotivos', description: 'Consulte outros componentes para seu veículo.', icon: 'car', image: 'photo-1486262715619-67b85e0b08d3' },
];

export const gallery = [
  { image: 'photo-1492144534655-ae79c964c9d7', alt: 'Veículo em destaque em cenário escuro', label: 'Universo automotivo' },
  { image: 'photo-1486262715619-67b85e0b08d3', alt: 'Detalhe de componentes de um motor automotivo', label: 'Detalhes que movem' },
  { image: 'photo-1487754180451-c456f719a1fc', alt: 'Mecânico trabalhando em um automóvel', label: 'Cuidado automotivo' },
  { image: 'photo-1503376780353-7e6692767b70', alt: 'Automóvel esportivo visto de frente', label: 'Paixão por carros' },
  { image: 'photo-1489824904134-891ab64532f1', alt: 'Carro em estrada ao entardecer', label: 'Pronto para seguir' },
  { image: 'photo-1493238792000-8113da705763', alt: 'Carro clássico em ambiente urbano', label: 'Feito para durar' },
];

// Confirm these details with the business before replacing the public placeholder.
export const serviceContent = {
  status: 'Informações em confirmação',
  description: 'Os serviços oferecidos pela empresa ainda precisam ser confirmados. Fale com a equipe para conhecer as opções disponíveis.',
};

export function whatsappLink(message) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export function imageUrl(id, width = 1000) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
}
