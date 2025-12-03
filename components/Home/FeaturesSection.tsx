import React from 'react';
import { ShieldCheck, UserCheck, Clock, MapPin, Search, Wrench, ThumbsUp, Leaf } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    { icon: <Clock />, title: "25+ Anos de Experiência" },
    { icon: <UserCheck />, title: "Equipe Certificada" },
    { icon: <Wrench />, title: "Materiais de 1ª Qualidade" },
    { icon: <ShieldCheck />, title: "Garantia de até 5 Anos" },
    { icon: <MapPin />, title: "Curitiba e Região" },
    { icon: <Search />, title: "Vistorias Gratuitas" },
    { icon: <ThumbsUp />, title: "Orçamento sem Compromisso" },
    { icon: <Leaf />, title: "Foco em Sustentabilidade" },
  ];

  return (
    <section className="py-16 bg-brand-blue text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a Acquatec?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Não arrisque a segurança do seu imóvel. Escolha quem tem tradição e garantia comprovada no mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-brand-blue transition-all duration-300">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 className="font-bold text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;