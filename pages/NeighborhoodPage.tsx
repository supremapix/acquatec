import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEIGHBORHOODS, PHONE_WHATSAPP_CLEAN, PHONE_LANDLINE, COMPANY_NAME, ADDRESS_CITY, ADDRESS_STATE } from '../constants';
import { MapPin, Phone, CheckCircle, Shield } from 'lucide-react';
import Socials from '../components/Home/Socials';
import EnhancedSEO from '../components/SEO/EnhancedSEO';

const NeighborhoodPage: React.FC = () => {
  const { neighborhoodName } = useParams<{ neighborhoodName: string }>();

  // Helper to find display name
  const findOriginalName = (slug: string) => {
    return NEIGHBORHOODS.find(n => n.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-") === slug) || slug;
  };

  const displayName = neighborhoodName ? findOriginalName(neighborhoodName) : "Bairro";
  const slug = neighborhoodName || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [neighborhoodName]);

  const seoTitle = `Calheiro em ${displayName}, Curitiba | Instalação e Reparos | Acquatec`;
  const seoDescription = `Precisa de calhas e telhados no bairro ${displayName}? A Acquatec oferece instalação, manutenção e limpeza com atendimento rápido em ${displayName}, Curitiba. Orçamento Grátis!`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${COMPANY_NAME} - Atendimento ${displayName}`,
    "url": `https://www.acquateccalhas.com.br/bairro/${slug}`,
    "telephone": "+554130535740",
    "areaServed": {
      "@type": "Place",
      "name": displayName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Curitiba",
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
          path={`/bairro/${slug}`}
          jsonLd={schema}
          breadcrumbs={[
             { name: "Home", item: "/" },
             { name: "Bairros de Curitiba", item: "/" },
             { name: displayName, item: `/bairro/${slug}` }
          ]}
       />

       {/* Hero Mini */}
       <section className="bg-gray-900 text-white py-12 relative overflow-hidden border-b-4 border-brand-blue">
        <div className="absolute inset-0 bg-brand-blue/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
             <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Atendimento em Curitiba</p>
             <h1 className="text-3xl md:text-4xl font-extrabold">
                Calhas e Telhados no <span className="text-brand-blue">{displayName}</span>
             </h1>
          </div>
          <a 
             href={`https://wa.me/${PHONE_WHATSAPP_CLEAN}?text=Estou%20no%20bairro%20${displayName}%20e%20preciso%20de%20atendimento.`}
             className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse"
          >
             Atendimento Prioritário no Bairro
          </a>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
           <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-8">
                 <div className="bg-blue-100 p-3 rounded-full hidden sm:block">
                    <MapPin size={32} className="text-brand-blue" />
                 </div>
                 <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Serviço Especializado para Moradores do {displayName}</h2>
                    <p className="text-gray-600 leading-relaxed">
                       A Acquatec está presente no dia a dia do <strong>{displayName}</strong>, oferecendo soluções rápidas para reparos de telhados, limpeza de calhas e instalações completas. Conhecemos as características das construções desta região e oferecemos o melhor custo-benefício.
                    </p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Shield size={20} className="text-brand-blue"/> Proteja seu Imóvel</h3>
                    <p className="text-sm text-gray-600 mb-4">
                       O bairro {displayName} possui muitas árvores e construções que exigem calhas com proteção anti-folhas e vazão correta. Evite alagamentos e danos na pintura.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-2">
                       <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Limpeza Técnica de Calhas</li>
                       <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Substituição de Rufos Enferrujados</li>
                       <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500"/> Eliminação de Goteiras</li>
                    </ul>
                 </div>
                 
                 <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                    <img src="https://loremflickr.com/600/400/curitiba,house?random=5" alt={`Casas no bairro ${displayName}`} className="w-full h-full object-cover"/>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                       <p className="text-white font-bold">Obras realizadas no {displayName}</p>
                    </div>
                 </div>
              </div>

              <div className="text-center bg-brand-light p-8 rounded-2xl">
                 <h3 className="text-xl font-bold text-brand-dark mb-2">Precisa de um Calheiro no {displayName}?</h3>
                 <p className="text-gray-700 mb-6">Não cobramos taxa de deslocamento para orçamentos na região.</p>
                 <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                       href={`tel:${PHONE_LANDLINE.replace(/\D/g, '')}`}
                       className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                    >
                       <Phone size={20}/> {PHONE_LANDLINE}
                    </a>
                    <a 
                       href={`https://wa.me/${PHONE_WHATSAPP_CLEAN}`}
                       className="bg-brand-blue text-white hover:bg-brand-dark px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-lg"
                    >
                       Solicitar Visita Agora
                    </a>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Socials />
    </main>
  );
};

export default NeighborhoodPage;