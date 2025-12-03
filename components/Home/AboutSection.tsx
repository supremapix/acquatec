import React from 'react';
import { Award, Leaf, Users, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image/Visual Side */}
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-32 h-32 bg-brand-blue/10 rounded-full z-0"></div>
             <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-gray-100 rounded-full z-0"></div>
             <img 
               src="https://loremflickr.com/600/450/team,construction,happy" 
               alt="Equipe Acquatec Calhas" 
               className="relative z-10 rounded-lg shadow-2xl w-full object-cover h-[450px] hover:scale-[1.01] transition-transform duration-500"
             />
             <div className="absolute -bottom-6 -left-6 bg-white text-brand-blue p-6 rounded-lg shadow-xl z-20 hidden md:flex items-center gap-4 border-l-4 border-brand-blue">
               <div className="bg-blue-50 p-3 rounded-full">
                 <Award size={32} />
               </div>
               <div>
                 <span className="block text-3xl font-bold text-gray-900">Desde 1996</span>
                 <span className="text-sm font-medium text-gray-600">Referência em Curitiba</span>
               </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-brand-blue"></span> Sobre Nossa História
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Excelência em Calhas e Telhados: <br/>
              <span className="text-brand-blue">Tradição de Pai para Filho</span>
            </h3>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed text-justify">
              <p>
                A <strong className="text-brand-blue">Acquatec</strong> não é apenas uma empresa de serviços; é uma história de dedicação que atravessa gerações. Fundada em 1996, somos uma empresa familiar na terceira geração, consolidada como referência absoluta em <strong>calhas, rufos e telhados em Curitiba e Região Metropolitana</strong>.
              </p>
              <p>
                Mantemos a essência do artesanato tradicional combinada com as mais modernas técnicas da construção civil. Nossos profissionais são treinados para entregar não apenas um conserto, mas uma solução definitiva que valoriza seu imóvel e protege sua família.
              </p>
              <p>
                Atuamos com princípios <strong>Eco-Friendly</strong>, priorizando materiais duráveis e o descarte correto de resíduos, assumindo responsabilidade pelo meio ambiente e pela qualidade de vida de nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3">
                <Users className="text-brand-blue" />
                <span className="font-semibold text-gray-800">Equipe Própria e Qualificada</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-blue" />
                <span className="font-semibold text-gray-800">Atendimento em toda Curitiba</span>
              </div>
              <div className="flex items-center gap-3">
                <Leaf className="text-green-500" />
                <span className="font-semibold text-gray-800">Soluções Sustentáveis</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-yellow-500" />
                <span className="font-semibold text-gray-800">Garantia Comprovada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;