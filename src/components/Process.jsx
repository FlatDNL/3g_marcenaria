import React from 'react';
import { MessageSquareText, Compass, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/content';

export default function Process() {
  const icons = [
    <MessageSquareText className="w-8 h-8 text-[#BA6D26]" />,
    <Compass className="w-8 h-8 text-[#BA6D26]" />,
    <Hammer className="w-8 h-8 text-[#BA6D26]" />
  ];

  return (
    <section id="processo" className="py-24 md:py-32 bg-[#0D0E10] border-t border-[#272A30]/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho da Seção idêntico à composição do protótipo */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#BA6D26] mb-3 block">
            Como Trabalhamos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4EFEA] tracking-tight mb-6">
            Do desenho à entrega.
          </h2>
          <p className="text-base sm:text-lg text-[#9B9FA7] leading-relaxed">
            Cada decisão começa no alinhamento rigoroso. A marcenaria sob medida acompanha a rotina da casa para que o espaço seja sentido em harmonia e máxima funcionalidade.
          </p>
        </div>

        {/* Grid de 3 Cards exatamente como o protótipo (OUR PROCCESS: 1, 2, 3) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              className="group relative bg-[#181A1E] hover:bg-[#1F2227] border border-[#272A30] hover:border-[#BA6D26]/50 rounded-2xl p-8 lg:p-10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                {/* Ícone no topo com animação sutil */}
                <div className="w-16 h-16 rounded-2xl bg-[#141619] border border-[#272A30] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#BA6D26]/40 transition-all duration-300">
                  {icons[idx]}
                </div>

                {/* Número e Título do Step com a cor ocre característica do protótipo */}
                <div className="flex items-baseline gap-2.5 mb-4">
                  <span className="text-xl font-black text-[#BA6D26] tracking-tight">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-[#F4EFEA] tracking-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Descrição objetiva baseada nos dados do Instagram */}
                <p className="text-sm text-[#9B9FA7] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Indicador inferior estético */}
              <div className="mt-8 pt-6 border-t border-[#272A30]/60 flex items-center justify-between text-xs text-[#C2BEBA]">
                <span className="uppercase tracking-widest font-semibold text-[10px] text-[#BA6D26]">Etapa 0{idx + 1}</span>
                <span className="w-8 h-[2px] bg-[#272A30] group-hover:bg-[#BA6D26] group-hover:w-12 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
