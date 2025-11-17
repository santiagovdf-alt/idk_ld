import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyIDK from './components/WhyIDK';
import Process from './components/Process';
import Results from './components/Results';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Toaster } from './components/ui/sonner';
import { mockData } from './mock';

function App() {
  const formRef = useRef(null);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsApp = () => {
    // Track conversion in Google Analytics
    if (window.gtag_report_conversion_whatsapp) {
      window.gtag_report_conversion_whatsapp();
    }
    const message = encodeURIComponent('Hello! I\'d like to discuss a 3D interior design project.');
    window.open(`https://wa.me/${mockData.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="App">
      <Header onRequestProposal={scrollToForm} />
      
      <main>
        <Hero onRequestProposal={scrollToForm} onWhatsApp={handleWhatsApp} />
        <div id="projects">
          <Projects onRequestProposal={scrollToForm} />
        </div>
        <div id="services">
          <Services onRequestProposal={scrollToForm} />
        </div>
        <WhyIDK />
        <div id="process">
          <Process />
        </div>
        <Results />
        <LeadForm ref={formRef} />
      </main>

      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default App;