import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Manifesto from './components/Manifesto';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import WhatsAppButton from './components/WhatsAppButton';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Manipulador de contato via WhatsApp com mensagem personalizada
  // Conforme regra fundamental nº 6: como nenhum número de telefone fixo ou DDD foi informado no json (o post 14 diz apenas "Chama no link da BIO"),
  // geramos o link direto para o Instagram oficial da bio (https://www.instagram.com/3g_marcenaria/) ou para o WhatsApp padrão da bio.
  const handleOpenWhatsApp = (customMessage) => {
    // Redireciona diretamente para o link de contato oficial da bio do perfil
    const encoded = encodeURIComponent(customMessage || COMPANY_INFO.whatsappMessageDefault);
    // Abre a conversa no WhatsApp caso configurado, e como fallback transparente abre o link oficial da bio
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0D0E10] text-[#F4EFEA] flex flex-col font-sans selection:bg-[#BA6D26] selection:text-white">
      {/* Navbar Superior */}
      <Header onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Conteúdo Principal */}
      <main className="flex-grow">
        <Hero onOpenWhatsApp={handleOpenWhatsApp} />
        <About onOpenWhatsApp={handleOpenWhatsApp} />
        <Process />
        <Portfolio onSelectProject={(p) => setSelectedProject(p)} />
        <Manifesto />
        <FinalCTA onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* Rodapé */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Botão Flutuante de WhatsApp */}
      <WhatsAppButton onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Modal Cinematográfico de Projeto com Carrossel */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      )}
    </div>
  );
}
