import React from 'react';

const ProgressBar: React.FC = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 px-4">
      <div className="flex justify-between text-xs md:text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
        <span className="text-brand-success">1. Criação de Conta</span>
        <span className="text-brand-success">2. Pagamento Aprovado</span>
        <span className="text-brand-primary animate-pulse">3. Oferta Especial</span>
        <span className="text-gray-300">4. Acesso Liberado</span>
      </div>
      <div className="h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner relative">
        <div 
          className="h-full bg-gradient-to-r from-green-400 to-green-600 w-[85%] rounded-full shadow-lg flex items-center justify-end pr-2"
        >
          <div className="h-full w-full absolute top-0 left-0 bg-white opacity-20 animate-[pulse_2s_ease-in-out_infinite]"></div>
          <span className="text-[10px] text-white font-bold relative z-10">85%</span>
        </div>
      </div>
      <p className="text-center text-sm text-gray-600 mt-2 font-medium">
        Seu pedido está quase completo...
      </p>
    </div>
  );
};

export default ProgressBar;