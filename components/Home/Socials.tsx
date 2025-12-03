import React from 'react';
import { Instagram, Facebook, Heart, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../../constants';

const Socials: React.FC = () => {
  // STRICTLY Construction/Roofing themed images for the simulated feed
  // NOTE: For a real-time feed, you would need to use a widget service like Elfsight, LightWidget, or SnapWidget
  // and paste their embed code in place of the map loop below.
  const instaImages = [
    { src: "https://loremflickr.com/400/400/roofing,worker,tool?random=101", alt: "Instalação de telhado novo" },
    { src: "https://loremflickr.com/400/400/gutter,rain,house?random=102", alt: "Calha de alumínio sem emendas" },
    { src: "https://loremflickr.com/400/400/construction,site,roof?random=103", alt: "Obra em andamento Curitiba" },
    { src: "https://loremflickr.com/400/400/metalroof,factory?random=104", alt: "Cobertura metálica industrial" },
    { src: "https://loremflickr.com/400/400/roofer,man,safety?random=105", alt: "Equipe com EPI em altura" },
    { src: "https://loremflickr.com/400/400/tiles,clay,roof?random=106", alt: "Reforma de telhas cerâmicas" },
    { src: "https://loremflickr.com/400/400/chimney,flashing,metal?random=107", alt: "Acabamento de rufos em chaminé" },
    { src: "https://loremflickr.com/400/400/skylight,window,roof?random=108", alt: "Instalação de clarabóia" },
    { src: "https://loremflickr.com/400/400/clean,roof,pressure?random=109", alt: "Limpeza de telhado pós obra" },
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
             <Instagram className="text-pink-600" />
             <span className="font-bold text-gray-800">@_acquatec_</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Acompanhe Nossas Obras</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparência total: veja fotos reais de "Antes e Depois", dia a dia da equipe e o padrão de qualidade Acquatec em obras por toda Curitiba.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
          
          {/* Instagram Column - Simulated High-Fidelity Feed */}
          {/* To make this "LIVE", paste a 3rd party widget script here (e.g. <script src="https://snapwidget.com/js/snapwidget.js"></script>) */}
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-gradient-to-tr from-yellow-400 to-purple-600 text-white p-1 rounded-md"><Instagram size={20}/></span>
              Últimas do Instagram
            </h3>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                {/* Header mimicking Instagram App */}
                <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px] rounded-full">
                        <div className="w-full h-full bg-white rounded-full p-[2px]">
                           <img src="https://loremflickr.com/100/100/logo,roof?random=1" alt="Logo" className="w-full h-full object-cover rounded-full"/>
                        </div>
                      </div>
                      <div className="leading-tight">
                        <h3 className="font-bold text-gray-900 text-sm">_acquatec_</h3>
                        <p className="text-xs text-gray-500">Curitiba, Brazil</p>
                      </div>
                   </div>
                   <a 
                     href={SOCIAL_LINKS.instagram} 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="bg-[#0095F6] hover:bg-[#0085db] text-white text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors"
                   >
                     Seguir
                   </a>
                </div>
                
                {/* Photo Grid - 3x3 */}
                <div className="grid grid-cols-3 gap-0.5 bg-gray-100">
                   {instaImages.map((img, idx) => (
                     <a key={idx} href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="aspect-square overflow-hidden block group relative cursor-pointer">
                       <img 
                         src={img.src} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                         alt={img.alt} 
                       />
                       {/* Hover Overlay */}
                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white font-bold">
                          <div className="flex items-center gap-4">
                             <div className="flex items-center gap-1"><Heart size={20} fill="white" /> <span>{30 + idx * 7}</span></div>
                             <div className="flex items-center gap-1"><MessageCircle size={20} fill="white" /> <span>{2 + idx}</span></div>
                          </div>
                       </div>
                     </a>
                   ))}
                </div>
                
                <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
                   <a 
                     href={SOCIAL_LINKS.instagram}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-brand-blue font-semibold hover:underline text-sm"
                   >
                     Ver todas as publicações
                   </a>
                </div>
            </div>
          </div>

          {/* Facebook Column - Real Iframe */}
          <div className="flex flex-col h-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="bg-[#1877F2] text-white p-1 rounded-md"><Facebook size={20}/></span>
              Facebook
            </h3>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex-grow h-full min-h-[500px]">
               <div className="w-full h-full bg-gray-50">
                 <iframe 
                   src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Facquateccalhas%2F&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                   width="100%" 
                   height="100%" 
                   style={{border: 'none', overflow: 'hidden', minHeight: '500px'}} 
                   scrolling="no" 
                   frameBorder="0" 
                   allowFullScreen={true} 
                   allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                   title="Facebook Feed"
                 ></iframe>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Socials;