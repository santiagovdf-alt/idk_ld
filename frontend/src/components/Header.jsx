import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1F2B35]/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-white tracking-tight font-montserrat hover:opacity-80 transition-opacity"
            >
              IDK <span className="text-[#CACACA]">Interiors</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-[#CACACA] hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-[#CACACA] hover:text-white transition-colors text-sm font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-[#CACACA] hover:text-white transition-colors text-sm font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#CACACA] hover:text-white transition-colors text-sm font-medium"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-[#2E404F] hover:bg-[#2E404F]/90 text-white font-medium px-6 py-2 rounded-md transition-all hover:scale-105"
            >
              Get Free Design
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1F2B35] border-t border-white/10">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-[#CACACA] hover:text-white transition-colors py-2 text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-[#CACACA] hover:text-white transition-colors py-2 text-sm font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left text-[#CACACA] hover:text-white transition-colors py-2 text-sm font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-[#CACACA] hover:text-white transition-colors py-2 text-sm font-medium"
            >
              About
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#2E404F] hover:bg-[#2E404F]/90 text-white font-medium mt-2"
            >
              Get Free Design
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
