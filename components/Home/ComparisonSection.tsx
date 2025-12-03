import React from 'react';
import { Check, X, Info } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare e Escolha o Melhor para Seu Telhado</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entenda as diferenças entre os materiais que utilizamos e faça um investimento consciente para seu imóvel.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="p-4 text-left font-bold w-1/4">Características</th>
                <th className="p-4 text-center font-bold w-1/4 bg-gray-800">Calha Galvanizada</th>
                <th className="p-4 text-center font-bold w-1/4 bg-brand-blue">Calha de Alumínio (Recomendado)</th>
                <th className="p-4 text-center font-bold w-1/4 bg-orange-700">Calha de Cobre</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-700 flex items-center gap-2">
                  <Info size={16} className="text-gray-400" /> Durabilidade
                </td>
                <td className="p-4 text-center text-gray-600">Média (10-15 anos)</td>
                <td className="p-4 text-center text-brand-blue font-bold">Alta (20-50 anos)</td>
                <td className="p-4 text-center text-orange-700 font-bold">Eterna (+100 anos)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-700">Resistência à Ferrugem</td>
                <td className="p-4 text-center text-red-500 font-medium">Baixa (Pode oxidar)</td>
                <td className="p-4 text-center text-green-600 font-bold">Total (Não enferruja)</td>
                <td className="p-4 text-center text-green-600 font-bold">Total (Cria pátina)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-700">Custo x Benefício</td>
                <td className="p-4 text-center text-gray-600">Bom (Mais barato)</td>
                <td className="p-4 text-center text-green-600 font-bold">Excelente</td>
                <td className="p-4 text-center text-gray-600">Premium (Alto custo)</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-700">Manutenção</td>
                <td className="p-4 text-center text-gray-600">Pintura periódica</td>
                <td className="p-4 text-center text-green-600">Limpeza simples</td>
                <td className="p-4 text-center text-green-600">Zero manutenção</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 font-semibold text-gray-700">Estética</td>
                <td className="p-4 text-center text-gray-600">Padrão industrial</td>
                <td className="p-4 text-center text-brand-blue">Moderna (Várias cores)</td>
                <td className="p-4 text-center text-orange-700">Clássica / Sofisticada</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100 text-sm text-gray-700">
           <strong>Nota Técnica da Acquatec:</strong> Para o clima de Curitiba, recomendamos fortemente o uso de <strong>Alumínio 0.5mm ou superior</strong>. Embora o aço galvanizado seja mais barato inicialmente, a umidade constante da nossa região acelera a oxidação, exigindo trocas mais frequentes. O alumínio é um investimento definitivo.
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;