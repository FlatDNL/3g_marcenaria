import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/content';

export default function Hero({ onOpenWhatsApp }) {
  return (
    <section 
      id="inicio"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-0 overflow-hidden"
    >
      {/* Background glow sutil */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#BA6D26]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Coluna Esquerda: Conteúdo Tipográfico fiel à estrutura do protótipo */}
        <motion.div 
          className="lg:col-span-6 flex flex-col items-start z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo Badge estilizado exatamente como o protótipo (ícone laranja superior) */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181A1E] border border-[#272A30] mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-[#BA6D26] animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-semibold text-[#C2BEBA]">
              Marcenaria Sob Medida • Atibaia & SP
            </span>
          </div>

          {/* Headline Forte, Autêntica e Sofisticada: "Transformamos Medida em Ambiente." */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4EFEA] tracking-tight leading-[1.12] mb-6">
            Transformamos <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F4EFEA] to-[#BA6D26]">
              Medida em Ambiente,
            </span> <br />
            e Ambiente em Rotina.
          </h1>

          {/* Subtítulo autêntico extraído dos conceitos da marca */}
          <p className="text-base sm:text-lg text-[#9B9FA7] leading-relaxed max-w-xl mb-10">
            Do desenho à entrega: marcenaria sob medida de alto padrão onde cada centímetro é projetado para conversar com a arquitetura e acolher sua rotina.
          </p>

          {/* Dupla de botões CTA como no protótipo */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenWhatsApp(COMPANY_INFO.whatsappMessageDefault)}
              className="inline-flex items-center justify-center gap-3 bg-[#BA6D26] hover:bg-[#A45D1C] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-xl shadow-orange-950/20 hover:shadow-orange-950/40 hover:-translate-y-0.5 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </button>

            <a
              href="#projetos"
              className="inline-flex items-center justify-center gap-2.5 bg-[#181A1E] hover:bg-[#1F2227] text-[#F4EFEA] border border-[#272A30] hover:border-[#BA6D26]/40 px-8 py-4 rounded-xl font-medium text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Explorar Projetos</span>
              <ArrowRight className="w-4 h-4 text-[#C2BEBA]" />
            </a>
          </div>

          {/* Quick Metrics / Garantias reais */}
          <div className="mt-12 pt-8 border-t border-[#272A30]/60 grid grid-cols-3 gap-6 w-full">
            <div>
              <span className="block text-2xl font-bold text-white tracking-tight">100%</span>
              <span className="text-xs text-[#9B9FA7] uppercase tracking-wider">Sob Medida</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white tracking-tight">Atibaia & SP</span>
              <span className="text-xs text-[#9B9FA7] uppercase tracking-wider">Atendimento</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-white tracking-tight">Artesanal</span>
              <span className="text-xs text-[#9B9FA7] uppercase tracking-wider">Precisão & Acabamento</span>
            </div>
          </div>
        </motion.div>

        {/* Coluna Direita: Imagem Principal em formato grande com cantos arredondados como no protótipo */}
        <motion.div 
          className="lg:col-span-6 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-3xl overflow-hidden border border-[#272A30] shadow-2xl bg-[#181A1E] aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] group">
            <img
              src="/images/post_17_DVRBbMzAKck.jpg"
              alt="Cozinha integrada de alto padrão - Projeto com 3G Marcenaria"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />
            {/* Gradiente overlay sutil para sofisticação */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E10]/80 via-transparent to-black/20" />
            
            {/* Card flutuante sobre a imagem indicando autoria e ambiente */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#141619]/85 backdrop-blur-md border border-[#272A30]/80 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#BA6D26] font-semibold">Projeto Residencial</p>
                <p className="text-sm font-semibold text-white">Cozinha Integrada & Living</p>
                <p className="text-xs text-[#9B9FA7]">Parceria com @gabimayerinteriores • Atibaia</p>
              </div>
              <span className="px-3 py-1 rounded-lg bg-[#272A30]/60 text-xs font-medium text-[#C2BEBA]">
                Marcenaria 3G
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
