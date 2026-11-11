import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { COMPANY_INFO } from '../data/content';

export default function Footer({ onOpenWhatsApp }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0C0E] border-t border-[#272A30] text-[#9B9FA7] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Linha Principal do Footer com a mesma distribuição elegante do protótipo */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#272A30]/60">
          
          {/* Logo 3G Marcenaria */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#BA6D26] flex items-center justify-center text-white font-extrabold text-base tracking-wider shadow">
              3G
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight">3G Marcenaria</span>
              <span className="text-[11px] text-[#9B9FA7]">Móveis Sob Medida • Alto Padrão</span>
            </div>
          </div>

          {/* Links de Navegação */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#C2BEBA]">
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#sobre" className="hover:text-white transition-colors">A 3G</a>
            <a href="#processo" className="hover:text-white transition-colors">Processo</a>
            <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
            <a href="#manifesto" className="hover:text-white transition-colors">Manifesto</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/3g_marcenaria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da 3G Marcenaria"
              className="p-2.5 rounded-xl bg-[#141619] border border-[#272A30] hover:text-[#BA6D26] hover:border-[#BA6D26]/40 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenWhatsApp(COMPANY_INFO.whatsappMessageDefault)}
              aria-label="WhatsApp da 3G Marcenaria"
              className="p-2.5 rounded-xl bg-[#141619] border border-[#272A30] hover:text-[#BA6D26] hover:border-[#BA6D26]/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
            <button
              onClick={scrollToTop}
              aria-label="Voltar ao topo da página"
              className="p-2.5 rounded-xl bg-[#141619] border border-[#272A30] hover:text-white hover:bg-[#181A1E] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Linha inferior de Copyright fiel ao protótipo */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-[#9B9FA7]/70">
          <p>© {new Date().getFullYear()} 3G Marcenaria. Todos os direitos reservados.</p>
          <p>Atibaia e São Paulo • Móveis sob medida do desenho à entrega.</p>
        </div>

      </div>
    </footer>
  );
}
