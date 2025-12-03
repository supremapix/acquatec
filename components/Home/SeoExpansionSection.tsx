import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CITIES, NEIGHBORHOODS, ADDRESS_STREET, ADDRESS_NEIGHBORHOOD, ADDRESS_CITY, CNPJ, PHONE_LANDLINE } from '../../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SeoExpansionSection: React.FC = () => {
  const [showAllNeighborhoods, setShowAllNeighborhoods] = useState(false);

  // Normalize string for URL friendly format
  const toUrl = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");

  const visibleNeighborhoods = showAllNeighborhoods ? NEIGHBORHOODS : NEIGHBORHOODS.slice(0, 24);

  return (
    <section className="py-16 bg-gray-100 text-gray-600 text-sm border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          {/* Areas Served Text */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-base">Atendimento Especializado em Calhas e Telhados em Curitiba</h4>
            <p className="mb-4 leading-relaxed">
              A Acquatec (Alphaenge) orgulha-se de ser a referência número um em soluções para cobertura no Paraná. Nossas equipes volantes cobrem todos os bairros de Curitiba, incluindo <strong>Batel, Água Verde, Santa Felicidade, Portão e CIC</strong>.
            </p>
            <p className="mb-4 leading-relaxed">
              Expandimos nossa excelência técnica para toda a Região Metropolitana, oferecendo instalação de calhas e reforma de telhados em <strong>São José dos Pinhais, Colombo, Pinhais, Araucária</strong> e demais cidades. Nossa logística permite atendimentos emergenciais rápidos para conter vazamentos e goteiras críticas.
            </p>
          </div>

          {/* Technical Expertise Text */}
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-base">Por que escolher especialistas em Cobertura?</h4>
            <p className="mb-4 leading-relaxed">
              O clima de Curitiba exige materiais de altíssima qualidade. Trabalhamos exclusivamente com chapas de aço galvanizado usinado e alumínio de espessura superior para evitar corrosão precoce. Nossos rufos são vedados com selantes de poliuretano de grau industrial.
            </p>
            <p className="mb-4 leading-relaxed">
              Seja para <strong>telhados de cerâmica, fibrocimento (Brasilit/Eternit), concreto ou telhas shingle</strong>, possuímos o know-how para diagnósticos precisos. Além disso, somos especialistas em estruturas metálicas para barracões e instalação de sistemas de exaustão eólica.
            </p>
          </div>
        </div>

        {/* SEO LINKS - CITIES */}
        <div className="mb-12">
          <h3 className="font-bold text-gray-900 text-lg mb-6 border-b border-gray-300 pb-2">Cidades Atendidas na Região Metropolitana</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {CITIES.map((city) => (
              <Link 
                key={city} 
                to={`/cidade/${toUrl(city)}`}
                className="bg-white border border-gray-200 hover:border-brand-blue hover:text-brand-blue px-3 py-2 rounded text-center transition-colors shadow-sm text-xs font-medium"
              >
                Calhas em {city}
              </Link>
            ))}
          </div>
        </div>

        {/* SEO LINKS - NEIGHBORHOODS */}
        <div className="mb-8">
          <h3 className="font-bold text-gray-900 text-lg mb-6 border-b border-gray-300 pb-2">Bairros Atendidos em Curitiba</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {visibleNeighborhoods.map((neighborhood) => (
              <Link 
                key={neighborhood} 
                to={`/bairro/${toUrl(neighborhood)}`}
                className="text-gray-500 hover:text-brand-blue hover:underline text-xs"
              >
                Telhados em {neighborhood}
              </Link>
            ))}
          </div>
          
          {NEIGHBORHOODS.length > 24 && (
            <button 
              onClick={() => setShowAllNeighborhoods(!showAllNeighborhoods)}
              className="mt-6 flex items-center justify-center gap-2 w-full text-brand-blue font-bold hover:underline"
            >
              {showAllNeighborhoods ? (
                <>Ver menos bairros <ChevronUp size={16}/></>
              ) : (
                <>Ver todos os {NEIGHBORHOODS.length} bairros <ChevronDown size={16}/></>
              )}
            </button>
          )}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-xs text-center text-gray-500">
           <p className="font-bold mb-1">Acquatec Calhas e Telhados (Alphaenge Fabricacao de Calhas e Telhados LTDA)</p>
           <p>CNPJ: {CNPJ} | {ADDRESS_STREET}, {ADDRESS_NEIGHBORHOOD}, {ADDRESS_CITY} - PR | Tel: {PHONE_LANDLINE}</p>
           <p className="mt-2 text-gray-400">Termos de Uso | Política de Privacidade | Mapa do Site</p>
        </div>
      </div>
    </section>
  );
};

export default SeoExpansionSection;