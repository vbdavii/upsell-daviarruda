import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { ArrowDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen font-sans bg-black text-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto py-12 md:py-0">
        
        {/* Logo */}
        <img 
          src="https://i.ibb.co/BYgWs0H/icon-y-w.png" 
          alt="Davi Arruda Logo" 
          className="h-12 md:h-16 mb-6 object-contain"
        />

        {/* 1. Headline */}
        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tighter">
          Calma. Tenho mais uma oferta pra você.
        </h1>

        {/* 2. Texto */}
        <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
          Se você quiser continuar no amadorismo, pode fechar essa página.{" "}
          <br className="hidden md:block" />
          Mas se quiser se profissionalizar de verdade, você precisa garantir esse pacote.
        </p>

        {/* 3. Botão */}
        <a 
          href="https://pay.cakto.com.br/pn4zx2q_719794"
          className="animate-cta-pulse bg-white hover:bg-gray-100 text-black font-black text-xl md:text-2xl py-6 px-12 rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-3 uppercase tracking-wider group"
        >
          VER OFERTA
          <ArrowDown className="group-hover:translate-y-1 transition-transform duration-300" size={28} />
        </a>

      </main>

      {/* 4. Rodapé */}
      <Footer />
    </div>
  );
}

export default App;