import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { PHONE_LANDLINE, PHONE_WHATSAPP } from '../../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVIÇOS', href: '#servicos' },
    { name: 'SOBRE', href: '#sobre' },
    { name: 'CONTATO', href: '#contato' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      {/* Top Bar for Phones (Desktop) */}
      <div className="hidden md:flex justify-end bg-brand-blue text-white py-2 px-6 text-sm gap-6 font-medium">
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <span>{PHONE_LANDLINE}</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle size={16} />
          <span>{PHONE_WHATSAPP}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-brand-blue tracking-tighter leading-none">ACQUATEC</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest leading-none">Calhas e Telhados</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-brand-blue font-semibold transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contato"
            className="bg-brand-blue hover:bg-brand-dark text-white px-5 py-2 rounded-md font-bold transition-colors shadow-lg"
          >
            Orçamento
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 font-medium py-2 border-b border-gray-100"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-2">
               <a href={`tel:${PHONE_LANDLINE.replace(/\D/g, '')}`} className="flex items-center gap-2 text-gray-600">
                  <Phone size={18} className="text-brand-blue"/> {PHONE_LANDLINE}
               </a>
               <a href={`https://wa.me/${PHONE_WHATSAPP.replace(/\D/g, '')}`} className="flex items-center gap-2 text-gray-600">
                  <MessageCircle size={18} className="text-green-500"/> {PHONE_WHATSAPP}
               </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;