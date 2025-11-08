import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2B35] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              IDK <span className="text-[#CACACA]">Interiors</span>
            </h3>
            <p className="text-[#CACACA] leading-relaxed">
              Where design meets intelligence and real-world results. Creating commercial and residential spaces that inspire and perform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-[#CACACA] hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-[#CACACA] hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#process" className="text-[#CACACA] hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#CACACA] hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#CACACA] hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-montserrat">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-[#CACACA] mt-1 flex-shrink-0" />
                <span className="text-[#CACACA]">+44 743 846 2734</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-[#CACACA] mt-1 flex-shrink-0" />
                <span className="text-[#CACACA]">info@idkinteriors.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#CACACA] mt-1 flex-shrink-0" />
                <span className="text-[#CACACA]">Málaga, Spain<br />Serving Europe</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#CACACA] text-sm">
              © {currentYear} IDK Interiors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-[#CACACA] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#CACACA] hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
