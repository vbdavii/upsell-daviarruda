import React, { useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-10">
      <div 
        className="aspect-video bg-gray-900 rounded-xl shadow-2xl overflow-hidden relative group cursor-pointer border-4 border-white"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            {/* Thumbnail Placeholder */}
            <img 
              src="https://picsum.photos/1280/720?grayscale" 
              alt="Vídeo de Apresentação" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-brand-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Play fill="white" className="text-white ml-1" size={32} />
              </div>
            </div>

            {/* Unmute Text */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold backdrop-blur-sm">
              <Volume2 size={16} />
              CLIQUE PARA OUVIR A MENSAGEM DO DAVI
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-black text-white">
            {/* In a real app, this would be an iframe to YouTube/Vimeo/PandaVideo */}
            <p className="font-semibold text-lg">O Vídeo de Vendas (VSL) seria reproduzido aqui.</p>
          </div>
        )}
      </div>
      
      <p className="text-center text-gray-500 text-sm mt-4 italic">
        * Assista a este vídeo curto de 2 minutos para entender sua oportunidade exclusiva.
      </p>
    </div>
  );
};

export default VideoSection;