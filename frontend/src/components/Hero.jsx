import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Gift } from 'lucide-react';
import { mockData } from '../mock';

const Hero = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    const bounded = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(bounded);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchend', handleTouchEnd);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('touchmove', handleTouchMove);
    }

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isDragging]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#1F2B35] pt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2E404F]/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Free Offer Banner */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2E404F] to-[#1F2B35] border border-[#CACACA]/20 rounded-full px-6 py-3 shadow-lg">
            <Gift className="text-[#CACACA]" size={20} />
            <span className="text-white text-sm font-medium">Free 3D Room Design with your proposal this week</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white space-y-6 animate-slide-in-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-montserrat">
              {mockData.hero.headline}
            </h1>
            <p className="text-lg sm:text-xl text-[#CACACA] leading-relaxed max-w-2xl">
              {mockData.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                className="bg-[#2E404F] hover:bg-[#2E404F]/90 text-white font-semibold px-8 py-6 text-lg rounded-md transition-all hover:scale-105 hover:shadow-xl group"
              >
                Request Your Free Room Design
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                onClick={() => window.open(`https://wa.me/${mockData.whatsapp}`, '_blank')}
                variant="outline"
                className="border-2 border-[#CACACA] text-white hover:bg-white hover:text-[#1F2B35] font-semibold px-8 py-6 text-lg rounded-md transition-all hover:scale-105"
              >
                Contact on WhatsApp
              </Button>
            </div>
          </div>

          {/* Right: Before/After Slider */}
          <div className="animate-slide-in-right">
            <div
              ref={containerRef}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl cursor-col-resize select-none"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* After Image (background) */}
              <div className="absolute inset-0">
                <img
                  src={mockData.hero.afterImage}
                  alt="After renovation"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[#1F2B35] font-bold text-sm">AFTER</span>
                </div>
              </div>

              {/* Before Image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={mockData.hero.beforeImage}
                  alt="Before renovation"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-[#1F2B35] font-bold text-sm">BEFORE</span>
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-6 bg-[#2E404F] rounded-full"></div>
                    <div className="w-0.5 h-6 bg-[#2E404F] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
