import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { mockData } from '../mock';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Track conversion in Google Analytics
    if (window.gtag_report_conversion_whatsapp) {
      window.gtag_report_conversion_whatsapp();
    }
    window.open(`https://wa.me/${mockData.contact.whatsapp}`, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-14 h-14 shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      <span className="absolute right-full mr-3 bg-[#1F2B35] text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        Chat with us!
      </span>
    </Button>
  );
};

export default WhatsAppButton;