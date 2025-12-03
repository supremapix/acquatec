import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { PHONE_WHATSAPP_CLEAN, PHONE_LANDLINE } from '../../constants';

const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Left Side: Contact Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Phone Call Button */}
        <a
          href={`tel:${PHONE_LANDLINE.replace(/\D/g, '')}`}
          className="bg-brand-blue hover:bg-brand-dark text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
          title="Ligar Agora"
          aria-label="Ligar para Acquatec"
        >
          <Phone size={24} fill="currentColor" />
        </a>

        {/* WhatsApp Button (Main) */}
        <a
          href={`https://wa.me/${PHONE_WHATSAPP_CLEAN}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
          title="Falar no WhatsApp"
          aria-label="Conversar no WhatsApp"
        >
          <MessageCircle size={28} fill="white" className="text-green-500" />
        </a>
      </div>

      {/* Right Side: Scroll to Top */}
      <div className={`fixed bottom-6 right-6 z-40 transition-opacity duration-300 ${showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button
          onClick={scrollToTop}
          className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg shadow-xl transition-all hover:-translate-y-1"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </>
  );
};

export default FloatingActions;