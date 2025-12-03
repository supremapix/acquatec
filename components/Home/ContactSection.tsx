import React, { useState } from 'react';
import { Send, Plus, Minus } from 'lucide-react';
import { FAQS } from '../../constants';

const ContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate generic submission
    setTimeout(() => {
      setFormStatus('success');
      alert("Obrigado! Sua mensagem foi simulada. Entre em contato pelo WhatsApp para resposta imediata.");
    }, 1500);
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <div className="mb-8">
               <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Contato Rápido</h2>
               <h3 className="text-3xl font-bold text-gray-900">Solicite seu Orçamento</h3>
               <p className="text-gray-600 mt-2">Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input type="text" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="Seu nome" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                    <input type="tel" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="(41) 99999-9999" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="seu@email.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                  <textarea id="message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none" placeholder="Descreva o serviço que você precisa..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus !== 'idle'}
                  className="w-full bg-brand-blue hover:bg-brand-dark text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : formStatus === 'success' ? 'Enviado!' : 'Solicitar Orçamento'}
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Perguntas Frequentes</h3>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-semibold text-gray-800 pr-4">{faq.question}</span>
                    {openFaqIndex === idx ? <Minus size={20} className="text-brand-blue shrink-0" /> : <Plus size={20} className="text-gray-400 shrink-0" />}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-gray-600 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;