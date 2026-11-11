import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function WhatsAppButton({ onOpenWhatsApp }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após 250px de scroll
      setVisible(window.scrollY > 250);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-bounce-short">
      <button
        onClick={() => onOpenWhatsApp(COMPANY_INFO.whatsappMessageDefault)}
        aria-label="Falar pelo WhatsApp com a 3G Marcenaria"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-green-950/40 transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden sm:inline font-semibold text-sm tracking-tight pr-1">
          Falar no WhatsApp
        </span>
      </button>
    </div>
  );
}
