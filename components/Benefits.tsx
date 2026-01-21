import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  { id: 1, title: "Acesso Vitalício", description: "Nunca perca o acesso ao conteúdo, incluindo todas as atualizações futuras." },
  { id: 2, title: "Masterclass de Aceleração", description: "Uma aula exclusiva de 2h focada apenas em implementação rápida." },
  { id: 3, title: "Pack de Templates Prontos", description: "Copie e cole minhas estratégias sem precisar criar nada do zero." },
  { id: 4, title: "Suporte VIP Prioritário", description: "Fure a fila e tenha suas dúvidas respondidas em até 24h úteis." },
];

const Benefits: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4 mb-12">
      {/* DO THIS */}
      <div className="bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-800">
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-brand-success">
            <CheckCircle2 />
          </span>
          Com esta atualização você leva:
        </h3>
        <ul className="space-y-4">
          {benefits.map((benefit) => (
            <li key={benefit.id} className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-success flex-shrink-0 mt-0.5" size={20} />
              <div>
                <strong className="block text-white">{benefit.title}</strong>
                <span className="text-sm text-gray-400">{benefit.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* NOT THIS (Risk Reversal/Pain) */}
      <div className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 opacity-80">
         <h3 className="text-xl font-bold text-gray-400 mb-6 flex items-center gap-2">
          <span className="text-gray-500">
            <XCircle />
          </span>
          Sem esta atualização:
        </h3>
        <ul className="space-y-4 text-gray-500">
          <li className="flex items-start gap-3">
            <XCircle className="text-gray-600 flex-shrink-0 mt-0.5" size={20} />
            <span>Você terá apenas o acesso padrão (1 ano).</span>
          </li>
          <li className="flex items-start gap-3">
            <XCircle className="text-gray-600 flex-shrink-0 mt-0.5" size={20} />
            <span>Terá que criar seus próprios templates do zero (gasta tempo).</span>
          </li>
          <li className="flex items-start gap-3">
            <XCircle className="text-gray-600 flex-shrink-0 mt-0.5" size={20} />
            <span>Não terá acesso às estratégias avançadas da Masterclass.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;