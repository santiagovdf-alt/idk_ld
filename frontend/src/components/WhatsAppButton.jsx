import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { mockData } from '../mock';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi! I\'m interested in learning more about your interior design services.');
    window.open(`https://wa.me/${mockData.whatsapp}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="hidden md:inline-block font-semibold pr-2 opacity-0 group-hover:opacity-100 transition-opacity max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
