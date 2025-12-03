import React from 'react';
import { PHONE_WHATSAPP_CLEAN } from '../../constants';
import { ShieldCheck, MapPin, ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center mt-16 md:mt-0">
      {/* Background Image with Elegant Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed-bg"
        style={{
          // High quality roofing image
          backgroundImage: 'url("https://loremflickr.com/1920/1080/roof,house,architecture?random=10")', 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-blue-900/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white relative flex flex-col md:flex-row items-center gap-12 pt-20 md:pt-0">
        
        {/* Text Content */}
        <div className="flex-1 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-white/20 shadow-lg animate-fade-in-up">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            <span className="tracking-wide text-gray-100">Líder em Calhas e Telhados em Curitiba</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-xl">
            Proteção e Estilo <br/>
            para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Telhado</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed border-l-4 border-brand-blue pl-6">
            Soluções completas em calhas, rufos e estruturas metálicas. Tecnologia e tradição desde 1996, garantindo segurança contra chuvas e valorização do seu imóvel.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
            <a 
              href="#contato" 
              className="group bg-brand-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_10px_30px_rgba(0,102,204,0.4)] hover:shadow-[0_15px_40px_rgba(0,102,204,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Orçamento Gratuito
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={`https://wa.me/${PHONE_WHATSAPP_CLEAN}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-lg font-bold text-lg transition-all border border-white/30 hover:border-white/50 flex items-center justify-center"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2 text-gray-300 text-sm font-medium">
            <MapPin size={18} className="text-brand-blue" />
            <p>Atendimento Rápido: Curitiba, Colombo, Pinhais, São José e Região.</p>
          </div>
        </div>

        {/* Floating Cards / Visuals (Desktop only) */}
        <div className="hidden lg:flex flex-col gap-6 w-80">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl transform translate-y-8 hover:translate-y-6 transition-transform">
             <ShieldCheck size={40} className="text-blue-400 mb-3" />
             <h3 className="text-xl font-bold mb-1">Garantia Total</h3>
             <p className="text-gray-300 text-sm">5 anos de garantia em instalações e materiais certificados.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl transform -translate-y-4 hover:-translate-y-6 transition-transform ml-8">
             <Star size={40} className="text-yellow-400 fill-yellow-400 mb-3" />
             <h3 className="text-xl font-bold mb-1">Excelência</h3>
             <p className="text-gray-300 text-sm">Mais de 2.000 obras entregues com satisfação máxima.</p>
          </div>
        </div>

      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;