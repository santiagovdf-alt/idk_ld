import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = ({ onRequestProposal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact-form' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <div className="text-2xl md:text-3xl font-bold">
              <span className={`transition-colors ${
                isScrolled ? 'text-[#1F2B35]' : 'text-white'
              }`}>
                IDK
              </span>
              <span className={`transition-colors ml-2 ${
                isScrolled ? 'text-[#2E404F]' : 'text-[#D3D6D9]'
              }`}>
                Interiors
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:opacity-80 ${
                  isScrolled ? 'text-[#1F2B35]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={onRequestProposal}
              className={`transition-all duration-300 hover:scale-105 ${
                isScrolled
                  ? 'bg-[#2E404F] hover:bg-[#1F2B35] text-white'
                  : 'bg-white hover:bg-[#D3D6D9] text-[#1F2B35]'
              }`}
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-[#1F2B35]' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#1F2B35] font-medium hover:text-[#2E404F] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  onRequestProposal();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#2E404F] hover:bg-[#1F2B35] text-white w-full"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;