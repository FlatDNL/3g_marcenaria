import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export default function Header({ onOpenWhatsApp }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'A 3G', href: '#sobre' },
    { label: 'Processo', href: '#processo' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Contato', href: '#contato' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0D0E10]/90 backdrop-blur-md border-b border-[#272A30]/60 py-4 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo exatamente como protótipo: ícone estilizado da marca + nome */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#BA6D26] flex items-center justify-center text-white font-extrabold text-lg tracking-wider shadow-md group-hover:scale-105 transition-transform duration-300">
            3G
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white">
            3G <span className="font-light text-[#C2BEBA]">Marcenaria</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#C2BEBA] hover:text-white transition-colors duration-200 relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#BA6D26] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onOpenWhatsApp(COMPANY_INFO.whatsappMessageDefault)}
            className="inline-flex items-center gap-2 bg-[#BA6D26] hover:bg-[#A45D1C] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-md hover:shadow-orange-950/30 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Solicitar Orçamento</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="md:hidden p-2 rounded-lg bg-[#181A1E] border border-[#272A30] text-[#E5E7EB] hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-[#0D0E10]/98 backdrop-blur-xl border-t border-[#272A30] z-50 flex flex-col justify-between p-8 animate-fadeIn">
          <div className="flex flex-col gap-6 pt-4">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-semibold text-[#F4EFEA] hover:text-[#BA6D26] transition-colors flex items-center justify-between border-b border-[#272A30]/50 pb-3"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#9B9FA7]" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#272A30]">
            <p className="text-xs text-[#9B9FA7] uppercase tracking-widest font-semibold">
              Atendimento Exclusivo • Atibaia & SP
            </p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp(COMPANY_INFO.whatsappMessageDefault);
              }}
              className="w-full flex items-center justify-center gap-3 bg-[#BA6D26] hover:bg-[#A45D1C] text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Solicitar Orçamento via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
