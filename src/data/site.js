export const business = {
  name: 'Save Car Funilaria e Pintura',
  phone: '5511972158334',
  phoneDisplay: '(11) 97215-8334',
  address: 'R. José de Carlo, 181 - Vila Lavinia, Mogi das Cruzes - SP, 08737-050',
  instagram: 'https://www.instagram.com/savecaroficina/',
  map: 'https://www.google.com/maps/search/?api=1&query=-23.5380295%2C-46.208521',
  mapEmbed: 'https://maps.google.com/maps?q=-23.5381853%2C-46.2084817&z=16&output=embed',
};

export const services = [
  { name: 'Funilaria', description: 'Reparos de carroceria e cuidado com os detalhes.', icon: 'wrench' },
  { name: 'Pintura', description: 'Serviços de pintura automotiva para renovar seu veículo.', icon: 'paint' },
  { name: 'Polimento', description: 'Polimento automotivo para realçar o acabamento.', icon: 'shine' },
  { name: 'Martelinho de ouro', description: 'Técnica especializada para reparo de pequenos amassados.', icon: 'car' },
];

export function whatsappLink(message = 'Oi! Gostaria de agendar minha visita.') {
  return 'https://wa.me/' + business.phone + '?text=' + encodeURIComponent(message);
}
