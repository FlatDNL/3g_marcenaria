import React from 'react';
import { Quote, Sparkles, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PHILOSOPHY, RECOGNIZED_PARTNERS } from '../data/content';

export default function Manifesto() {
  return (
    <section id="manifesto" className="py-24 md:py-32 bg-[#0D0E10] border-t border-[#272A30]/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#BA6D26] mb-3 block">
            Posicionamento & Credibilidade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4EFEA] tracking-tight mb-4">
            Manifesto de Precisão
          </h2>
          <p className="text-base text-[#9B9FA7]">
            O que guia a produção da 3G Marcenaria em cada detalhe, do primeiro corte à montagem final.
          </p>
        </div>

        {/* Bloco Central de Destaque Editorial com citação icônica */}
        <motion.div 
          className="relative max-w-4xl mx-auto rounded-3xl bg-[#141619] border border-[#272A30] p-8 sm:p-12 md:p-16 text-center shadow-2xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Quote className="w-12 h-12 text-[#BA6D26]/40 mx-auto mb-6" />
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug mb-6">
            "{PHILOSOPHY.quote}"
          </h3>

          <p className="text-base sm:text-xl text-[#C2BEBA] font-light leading-relaxed mb-8 max-w-2xl mx-auto">
            {PHILOSOPHY.subquote}
          </p>

          <div className="w-16 h-[2px] bg-[#BA6D26] mx-auto mb-8" />

          <p className="text-sm sm:text-base text-[#9B9FA7] leading-relaxed max-w-2xl mx-auto">
            {PHILOSOPHY.commitment}
          </p>

          <div className="mt-8">
            <span className="text-xs uppercase tracking-widest font-bold text-[#BA6D26]">
              3G Marcenaria • Alto Padrão
            </span>
          </div>
        </motion.div>

        {/* Grid de Parcerias e Arquitetura - O equivalente fiel em cartões do protótipo */}
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest font-semibold text-[#9B9FA7] mb-8">
            Parcerias com Profissionais de Arquitetura & Design
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {RECOGNIZED_PARTNERS.map((partner, idx) => (
              <div 
                key={partner.name}
                className="p-4 rounded-2xl bg-[#181A1E] border border-[#272A30] flex flex-col items-center text-center justify-center hover:border-[#BA6D26]/40 transition-colors"
              >
                <Building2 className="w-5 h-5 text-[#BA6D26] mb-2" />
                <span className="text-xs font-bold text-white tracking-tight">{partner.name}</span>
                <span className="text-[10px] text-[#9B9FA7] mt-0.5">{partner.role}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
