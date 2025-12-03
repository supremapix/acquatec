import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="bg-brand-light text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
            Expertise Técnica
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Soluções Completas em Coberturas
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Da instalação de calhas residenciais a grandes coberturas industriais. Nossa equipe utiliza tecnologia de ponta e materiais de primeira linha para garantir a proteção do seu patrimônio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white font-bold text-xl drop-shadow-md">{service.title}</h3>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <ul className="space-y-4 mb-8 flex-grow">
                  {service.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                      <CheckCircle size={18} className="text-brand-blue shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    {service.price && (
                       <>
                        <p className="text-xs text-gray-500 uppercase font-semibold">Investimento</p>
                        <p className="text-base font-bold text-brand-blue">{service.price}</p>
                       </>
                    )}
                  </div>
                  <a href="#contato" className="text-brand-blue hover:text-brand-dark font-semibold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Solicitar <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Não encontrou o que precisa? Realizamos projetos especiais sob medida.</p>
          <a 
            href="#contato" 
            className="inline-block bg-brand-blue text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-brand-dark hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Fale com um Especialista Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;