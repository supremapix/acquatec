import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CITIES, PHONE_WHATSAPP_CLEAN, PHONE_LANDLINE, COMPANY_NAME } from '../constants';
import { MapPin, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Socials from '../components/Home/Socials';
import EnhancedSEO from '../components/SEO/EnhancedSEO';

const CityPage: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();

  // Helper to find display name
  const findOriginalName = (slug: string) => {
    return CITIES.find(c => c.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-") === slug) || slug;
  };

  const displayName = cityName ? findOriginalName(cityName) : "Região";
  const slug = cityName || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [cityName]);

  const seoTitle = `Calhas e Telhados em ${displayName} | Instalação e Manutenção | Acquatec`;
  const seoDescription = `Serviços de calhas, rufos e telhados em ${displayName}. Atendemos toda a região com equipe especializada, materiais de qualidade e garantia. Solicite seu orçamento!`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${COMPANY_NAME} - ${displayName}`,
    "url": `https://www.acquateccalhas.com.br/cidade/${slug}`,
    "telephone": "+554130535740",
    "areaServed": {
      "@type": "City",
      "name": displayName,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "PR",
        "addressCountry": "BR"
      }
    },
    "description": seoDescription,
    "priceRange": "$$"
  };

  return (
    <main className="pt-20">
      <EnhancedSEO 
          title={seoTitle}
          description={seoDescription}
          path={`/cidade/${slug}`}
          jsonLd={schema}
          breadcrumbs={[
             { name: "Home", item: "/" },
             { name: "Cidades Atendidas", item: "/" },
             { name: displayName, item: `/cidade/${slug}` }
          ]}
      />

      {/* Hero Mini */}
      <section className="bg-brand-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-0">
             <img src="https://loremflickr.com/1200/400/roofing,city?random=20" alt={`Telhados em ${displayName}`} className="w-full h-full object-cover opacity-40"/>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <p className="text-brand-accent font-bold uppercase tracking-widest text-sm mb-2">Região Metropolitana de Curitiba</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Instalação de Calhas e Telhados em <span className="text-brand-blue bg-white px-2 rounded">{displayName}</span>
          </h1>
          <p className="text-xl max-w-2xl text-gray-200">
            A Acquatec leva sua tradição e qualidade para {displayName}. Atendimento rápido, orçamento gratuito e equipe especializada na sua região.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Serviços de Calharia e Coberturas em {displayName}</h2>
            
            <div className="prose prose-lg text-gray-600 mb-8 text-justify">
              <p>
                Procurando por uma empresa de confiança para resolver problemas de goteiras, instalar calhas novas ou reformar o telhado em <strong>{displayName}</strong>? A Acquatec é a sua melhor escolha. Com sede estratégica e logística eficiente, conseguimos atender {displayName} com agilidade e os mesmos preços praticados na capital.
              </p>
              <p>
                Nossa equipe técnica conhece as particularidades arquitetônicas de {displayName}, sejam em áreas residenciais, comerciais ou zonas industriais. Oferecemos soluções personalizadas que resistem às fortes chuvas e ventos característicos da nossa região.
              </p>
              <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Por que contratar a Acquatec em {displayName}?</h3>
              <p>
                Diferente de profissionais autônomos sem garantia, a Acquatec (Alphaenge) é uma empresa estabelecida com CNPJ, endereço fixo e mais de 25 anos de história. Ao contratar nossos serviços em {displayName}, você recebe:
              </p>
              <ul className="list-none space-y-2 mt-4 pl-0">
                 <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> <strong>Vistoria Técnica Gratuita:</strong> Vamos até seu imóvel em {displayName} sem custo.</li>
                 <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> <strong>Garantia Estendida:</strong> Segurança total em materiais e mão de obra.</li>
                 <li className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500"/> <strong>Materiais de 1ª Linha:</strong> Aço galvanizado e alumínio de alta espessura.</li>
              </ul>
              <p className="mt-6">
                Não deixe que infiltrações desvalorizem seu imóvel em {displayName}. A prevenção é sempre mais barata que a reforma estrutural. Entre em contato hoje mesmo.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
               <div>
                  <h4 className="text-xl font-bold text-brand-dark mb-1">Mora em {displayName}?</h4>
                  <p className="text-gray-600">Nossa equipe está próxima de você. Solicite um orçamento agora.</p>
               </div>
               <a 
                 href={`https://wa.me/${PHONE_WHATSAPP_CLEAN}?text=Olá,%20sou%20de%20${displayName}%20e%20gostaria%20de%20um%20orçamento.`}
                 className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform whitespace-nowrap"
               >
                 <Phone size={20}/> Chamar no WhatsApp
               </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                   <MapPin className="text-brand-blue"/> Serviços na Região
                </h3>
                <ul className="space-y-3">
                   <li>
                      <Link to="/" className="flex items-center justify-between text-gray-600 hover:text-brand-blue p-2 bg-white rounded shadow-sm">
                         Instalação de Calhas <ArrowRight size={16}/>
                      </Link>
                   </li>
                   <li>
                      <Link to="/" className="flex items-center justify-between text-gray-600 hover:text-brand-blue p-2 bg-white rounded shadow-sm">
                         Reforma de Telhados <ArrowRight size={16}/>
                      </Link>
                   </li>
                   <li>
                      <Link to="/" className="flex items-center justify-between text-gray-600 hover:text-brand-blue p-2 bg-white rounded shadow-sm">
                         Limpeza e Manutenção <ArrowRight size={16}/>
                      </Link>
                   </li>
                   <li>
                      <Link to="/" className="flex items-center justify-between text-gray-600 hover:text-brand-blue p-2 bg-white rounded shadow-sm">
                         Estruturas Metálicas <ArrowRight size={16}/>
                      </Link>
                   </li>
                </ul>
                
                <div className="mt-8">
                   <p className="text-xs text-gray-500 mb-2 font-bold uppercase">Atendimento Central</p>
                   <p className="text-2xl font-bold text-brand-blue">{PHONE_LANDLINE}</p>
                   <p className="text-sm text-gray-600">Seg a Sex: 08:00 - 18:00</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <Socials />
    </main>
  );
};

export default CityPage;