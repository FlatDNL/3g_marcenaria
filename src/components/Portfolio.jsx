import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../data/content';

export default function Portfolio({ onSelectProject }) {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-[#0D0E10] border-t border-[#272A30]/60 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Cabeçalho da Seção idêntico ao protótipo: Título editorial à esquerda e "Ver Todos" à direita */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#BA6D26] mb-3 block">
              Projetos Executados
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4EFEA] tracking-tight mb-4">
              Explore nossos projetos
            </h2>
            <p className="text-base sm:text-lg text-[#9B9FA7] leading-relaxed">
              Cada ambiente é o resultado da união entre materiais nobres, acabamento preciso e a personalização completa da marcenaria em harmonia com o projeto de interiores.
            </p>
          </div>

          <a 
            href="https://www.instagram.com/3g_marcenaria/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#BA6D26] hover:text-[#D58334] uppercase tracking-wider transition-colors pb-1 border-b border-[#BA6D26]/40 hover:border-[#BA6D26] shrink-0"
          >
            <span>Ver Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid 2 linhas x 3 colunas = 6 cards verticais com cantos arredondados e botão central como no protótipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden bg-[#181A1E] border border-[#272A30] hover:border-[#BA6D26]/60 transition-all duration-500 flex flex-col justify-end aspect-[3/4] shadow-xl cursor-pointer"
              onClick={() => onSelectProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Imagem de Fundo com zoom suave no hover */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Overlay escuro em degradê que preserva a legibilidade exatamente como no JPG */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E10] via-[#0D0E10]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Tag de ambiente no topo */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-[#141619]/80 backdrop-blur-md border border-[#272A30] text-[11px] font-semibold uppercase tracking-wider text-[#C2BEBA]">
                  {project.location}
                </span>
              </div>

              {/* Conteúdo inferior do card */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-3">
                <p className="text-xs uppercase tracking-widest text-[#BA6D26] font-bold">
                  {project.environment}
                </p>
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#F4EFEA] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Botão idêntico ao protótipo ("EXPLORE NOW" / "VER DETALHES") com formato pill arredondado */}
                <div className="mt-2">
                  <div className="w-full py-3 px-4 rounded-xl bg-white/10 group-hover:bg-[#BA6D26] text-white text-xs font-bold uppercase tracking-widest text-center backdrop-blur-sm border border-white/15 group-hover:border-transparent transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Ver Projeto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
