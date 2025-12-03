import React from 'react';
import { AlertTriangle, Droplets } from 'lucide-react';

const PreventionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
             <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-red-500 w-8 h-8" />
                <h2 className="text-3xl font-bold text-gray-900">Previna Criadouros de Dengue</h2>
             </div>
             
             <p className="text-lg text-gray-700 mb-6">
               A manutenção adequada do telhado não protege apenas sua casa de infiltrações, mas previne doenças graves. Fique atento a:
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow-sm border border-red-100">
                   <h4 className="font-bold text-red-600 mb-1">Calhas entupidas</h4>
                   <p className="text-sm text-gray-600">Acumulam água parada ideal para larvas.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm border border-red-100">
                   <h4 className="font-bold text-red-600 mb-1">Telhas mal posicionadas</h4>
                   <p className="text-sm text-gray-600">Permitem infiltrações e poças internas.</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm border border-red-100">
                   <h4 className="font-bold text-red-600 mb-1">Telhas rachadas</h4>
                   <p className="text-sm text-gray-600">Criam pontos de acúmulo de água.</p>
                </div>
             </div>
             
             <p className="font-bold text-gray-800">A Acquatec realiza inspeções preventivas para sua segurança!</p>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
             <div className="w-48 h-48 bg-red-100 rounded-full flex items-center justify-center animate-pulse">
                <Droplets size={80} className="text-red-400" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreventionSection;