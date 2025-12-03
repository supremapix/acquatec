import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que nossos clientes dizem</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação de quem confia na Acquatec é nossa maior garantia. Veja relatos reais de clientes em Curitiba.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12 rotate-180 group-hover:text-blue-50 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow">"{t.text}"</p>
              
              <div className="mt-auto">
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-brand-blue flex items-center gap-1">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://loremflickr.com/100/100/person,face?random=1" alt="User" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://loremflickr.com/100/100/person,face?random=2" alt="User" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://loremflickr.com/100/100/person,face?random=3" alt="User" />
                </div>
                <span className="text-sm font-medium text-gray-700">Junte-se a mais de 2.000 clientes satisfeitos!</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;