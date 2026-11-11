import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Sparkles, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { getAssetUrl } from '../utils/assets';

export default function ProjectModal({ project, onClose, onOpenWhatsApp }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Fecha no Esc e bloqueia scroll do body
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, activeImageIndex]);

  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      {/* Backdrop com blur escuro */}
      <div 
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#141619] border border-[#272A30] rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col lg:flex-row">
        
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#181A1E]/80 border border-[#272A30] text-[#E5E7EB] hover:text-white hover:bg-[#BA6D26] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Lado Esquerdo: Carrossel de Fotos de Alta Resolução */}
        <div className="lg:w-3/5 bg-black relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] lg:min-h-full">
          <img
            src={getAssetUrl(images[activeImageIndex])}
            alt={`${project.title} - Foto ${activeImageIndex + 1}`}
            className="w-full h-full object-cover max-h-[55vh] lg:max-h-[85vh]"
          />

          {/* Controles de Navegação no Carrossel */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 p-2 rounded-full bg-[#141619]/80 border border-[#272A30] text-white hover:bg-[#BA6D26] transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 p-2 rounded-full bg-[#141619]/80 border border-[#272A30] text-white hover:bg-[#BA6D26] transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Indicadores / Thumbnails inferiores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#141619]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#272A30]">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeImageIndex ? 'w-6 bg-[#BA6D26]' : 'w-2 bg-[#9B9FA7]/40 hover:bg-white'
                    }`}
                    aria-label={`Ir para imagem ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Lado Direito: Informações Editoriais e Ficha Técnica Real */}
        <div className="lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-[85vh]">
          <div>
            {/* Header com Localização e Ambiente */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BA6D26] mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>{project.location} • {project.environment}</span>
            </div>

            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              {project.title}
            </h3>

            <p className="text-sm text-[#C2BEBA] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Materiais & Soluções Reais */}
            {project.materials && project.materials.length > 0 && (
              <div className="mb-6">
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#9B9FA7] mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#BA6D26]" />
                  <span>Destaques & Materiais</span>
                </h4>
                <ul className="space-y-2">
                  {project.materials.map((mat, i) => (
                    <li key={i} className="text-xs text-[#E5E7EB] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BA6D26] mt-1.5 shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Equipe / Parceiros Reais */}
            {project.partners && project.partners.length > 0 && (
              <div className="mb-6 p-4 rounded-2xl bg-[#181A1E] border border-[#272A30]">
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#9B9FA7] mb-2.5 flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-[#BA6D26]" />
                  <span>Parcerias do Projeto</span>
                </h4>
                <div className="space-y-1">
                  {project.partners.map((partner, i) => (
                    <div key={i} className="text-xs flex items-center justify-between">
                      <span className="text-[#9B9FA7]">{partner.role}:</span>
                      <span className="text-[#F4EFEA] font-semibold">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA Comercial Específico para este Projeto */}
          <div className="pt-4 border-t border-[#272A30] mt-4">
            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp(COMPANY_INFO.whatsappProjectMessage(project.title));
              }}
              className="w-full flex items-center justify-center gap-3 bg-[#BA6D26] hover:bg-[#A45D1C] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-orange-950/20 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar Sobre um Projeto Assim</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
