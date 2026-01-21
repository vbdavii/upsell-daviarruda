import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="w-full">
      {/* Top Warning Banner */}
      <div className="bg-brand-accent text-white text-center py-3 px-4 font-bold text-sm md:text-base flex items-center justify-center gap-2 sticky top-0 z-50 shadow-md">
        <AlertTriangle size={20} className="animate-pulse" />
        <span>ATENÇÃO: Esta oferta expira assim que você fechar esta página!</span>
      </div>
    </div>
  );
};

export default Header;