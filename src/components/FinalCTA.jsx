import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '../data/content';
import { getAssetUrl } from '../utils/assets';

export default function FinalCTA({ onOpenWhatsApp }) {
  return (
    <section id="contato" className="relative py-28 md:py-36 bg-[#0D0E10] overflow-hidden">
      
      {/* Imagem de Fundo em tela cheia com overlay escuro idêntico ao protótipo ("Connect With Us") */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetUrl('/images/post_1_DdZjFRcGOTs.jpg')}
          alt="Área gourmet planejada pela 3G Marcenaria"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Camada escura com gradiente garantindo máximo contraste tipográfico */}
        <div className="absolute inset-0 bg-[#0D0E10]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E10] via-transparent to-[#0D0E10]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#181A1E]/80 backdrop-blur-md border border-[#272A30] text-xs uppercase tracking-widest font-bold text-[#BA6D26] mb-6">
            Inicie seu Projeto
          </span>

          {/* Título de forte apelo e elegância */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F4EFEA] tracking-tight leading-[1.15] mb-6">
            Vamos desenhar o próximo ambiente da sua casa?
          </h2>

          <p className="text-base sm:text-xl text-[#C2BEBA] leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
            Converse diretamente com a nossa equipe pelo WhatsApp. Envie suas medidas, planta ou projeto arquitetônico para iniciarmos um atendimento personalizado.
          </p>

          {/* Botão de Destaque Grande idêntico ao protótipo */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenWhatsApp(COMPANY_INFO.whatsappMessageDefault)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#BA6D26] hover:bg-[#A45D1C] text-white px-10 py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 shadow-2xl shadow-orange-950/40 hover:-translate-y-1 hover:shadow-orange-950/60"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Conversar pelo WhatsApp</span>
            </button>

            <a
              href="https://www.instagram.com/3g_marcenaria/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#141619]/90 hover:bg-[#181A1E] text-white border border-[#272A30] hover:border-white/20 px-8 py-5 rounded-2xl font-semibold text-base transition-all duration-300"
            >
              <InstagramIcon className="w-5 h-5 text-[#BA6D26]" />
              <span>Seguir no Instagram</span>
            </a>
          </div>

          <p className="mt-8 text-xs text-[#9B9FA7] tracking-wider uppercase">
            Atendimento em Atibaia, Região e São Paulo Capital
          </p>
        </motion.div>
      </div>

    </section>
  );
}
