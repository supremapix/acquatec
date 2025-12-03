import React from 'react';
import { Facebook, Instagram, Phone, Mail, Globe, MapPin, Heart } from 'lucide-react';
import { 
  SERVICES, 
  PHONE_LANDLINE, 
  PHONE_WHATSAPP, 
  EMAIL_CONTACT, 
  WEBSITE_URL, 
  SOCIAL_LINKS,
  ADDRESS_STREET,
  ADDRESS_NEIGHBORHOOD,
  ADDRESS_CITY,
  ADDRESS_STATE,
  CNPJ,
  COMPANY_NAME
} from '../../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 text-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center text-white font-bold">A</div>
               <span className="text-xl font-bold text-white">ACQUATEC</span>
            </div>
            <p className="text-gray-400 mb-4">
              Referência em calhas e telhados desde 1996. Tradição, qualidade e compromisso com sua obra.
            </p>
            <div className="text-xs text-gray-500 mt-4">
              <p className="font-bold">{COMPANY_NAME}</p>
              <p>CNPJ: {CNPJ}</p>
            </div>
          </div>

          {/* Col 2: Contacts */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">Contatos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-blue shrink-0" />
                <div className="flex flex-col">
                  <span>{PHONE_LANDLINE}</span>
                  <span>{PHONE_WHATSAPP}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue shrink-0" />
                <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-brand-blue break-all">{EMAIL_CONTACT}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <div className="flex flex-col">
                  <span>{ADDRESS_STREET}, {ADDRESS_NEIGHBORHOOD}</span>
                  <span>{ADDRESS_CITY} - {ADDRESS_STATE}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-brand-blue shrink-0" />
                <span>{WEBSITE_URL}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Services with photos (Simulated via grid) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">Nossos Serviços</h3>
            <div className="grid grid-cols-2 gap-2">
              {SERVICES.map((service) => (
                <a key={service.id} href={`/#servicos`} className="group flex items-center gap-2 hover:bg-gray-800 p-1 rounded transition-colors">
                  <img src={service.image} alt={service.title} className="w-10 h-10 object-cover rounded" />
                  <span className="text-xs group-hover:text-brand-blue transition-colors line-clamp-2">{service.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Location & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">Área de Atuação</h3>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
              <p>Atendemos toda Curitiba (Fanny, Batel, Água Verde, CIC, etc), Região Metropolitana (Pinhais, Colombo, São José) e Litoral.</p>
            </div>
            
            <h3 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">Redes Sociais</h3>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700 transition">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-full text-white hover:bg-pink-700 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p className="mb-2">© {currentYear} {COMPANY_NAME} - Todos os direitos reservados</p>
          <div className="flex items-center justify-center gap-1 text-xs">
            <span>Desenvolvido com</span>
            <Heart size={12} className="text-red-500 fill-red-500" />
            <span>por</span>
            <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
              Suprema Sites Express
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;