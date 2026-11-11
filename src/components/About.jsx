import React from 'react';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/content';
import { getAssetUrl } from '../utils/assets';

export default function About({ onOpenWhatsApp }) {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#0D0E10] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Coluna Esquerda: Imagem com cantos arredondados (como no protótipo "We blend expert woodworking") */}
          <motion.div 
            className="lg:col-span-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#272A30] shadow-2xl bg-[#181A1E] aspect-[4/5] sm:aspect-[4/4] group">
              <img 
                src={getAssetUrl('/images/post_3_Dc1VNxkIDS1.jpg')} 
                alt="Detalhes construtivos e acabamento artesanal da 3G Marcenaria"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E10]/70 via-transparent to-transparent" />
              
              {/* Badge na imagem com citação real */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#141619]/90 backdrop-blur-md border border-[#272A30]">
                <p className="text-xs uppercase tracking-widest text-[#BA6D26] font-bold mb-1">
                  Filosofia Construtiva
                </p>
                <p className="text-sm italic text-[#E5E7EB] font-serif">
                  "São os detalhes que transformam uma casa. E é exatamente isso que o móvel sob medida entrega."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Texto e Hierarquia idênticos ao protótipo */}
          <motion.div 
            className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Tagline superior como no protótipo (ABOUT US) */}
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#BA6D26] mb-4">
              A 3G Marcenaria
            </span>

            {/* Título da seção fiel ao estilo do protótipo */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4EFEA] tracking-tight leading-tight mb-6">
              Há uma diferença entre mobiliar e projetar.
            </h2>

            {/* Texto editorial autêntico da marca */}
            <p className="text-base sm:text-lg text-[#C2BEBA] leading-relaxed mb-6 font-medium">
              Mobiliar é ocupar o espaço. Projetar é decidir como ele será percebido: onde a luz incide, onde o olhar descansa, onde a marcenaria termina.
            </p>

            <p className="text-sm sm:text-base text-[#9B9FA7] leading-relaxed mb-8">
              Investir em móveis sob medida é decidir que a sua casa não vai ser adaptada — vai ser projetada. Cada centímetro milimetricamente calculado, cada acabamento escolhido sem nenhum improviso. Atuamos em sintonia com escritórios de arquitetura e clientes exigentes em Atibaia e São Paulo.
            </p>

            {/* Pilares Reais destacados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#181A1E]/80 border border-[#272A30]/80">
                <CheckCircle2 className="w-5 h-5 text-[#BA6D26] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F4EFEA] font-medium">Sem improvisos na execução</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#181A1E]/80 border border-[#272A30]/80">
                <CheckCircle2 className="w-5 h-5 text-[#BA6D26] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F4EFEA] font-medium">Sintonia fina com arquitetura</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#181A1E]/80 border border-[#272A30]/80">
                <CheckCircle2 className="w-5 h-5 text-[#BA6D26] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F4EFEA] font-medium">Materiais nobres & ferragens premium</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#181A1E]/80 border border-[#272A30]/80">
                <CheckCircle2 className="w-5 h-5 text-[#BA6D26] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F4EFEA] font-medium">Atendimento direto pelos proprietários</span>
              </div>
            </div>

            {/* Dupla de botões idêntica ao protótipo */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onOpenWhatsApp("Olá! Li sobre a filosofia da 3G Marcenaria e gostaria de agendar uma conversa sobre o meu projeto.")}
                className="inline-flex items-center justify-center gap-2.5 bg-[#BA6D26] hover:bg-[#A45D1C] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-orange-950/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com a Equipe</span>
              </button>

              <a
                href="#processo"
                className="inline-flex items-center justify-center gap-2 bg-[#181A1E] hover:bg-[#1F2227] text-[#C2BEBA] hover:text-white border border-[#272A30] px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Conhecer o Processo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
