import React from 'react';
import { Lock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 mt-16 py-10">
      <div className="container mx-auto px-4 text-center">
        
        <div className="flex justify-center items-center gap-2 text-zinc-500 mb-6 text-sm">
          <Lock size={16} />
          <span>Pagamento 100% Seguro e Criptografado</span>
        </div>

        <p className="text-xs text-zinc-700">
          &copy; 2026 Davi Arruda - Soluções Digitais. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;