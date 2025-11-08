import React from 'react';
import { Store, Building2, Palette, Hammer } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  store: Store,
  building: Building2,
  palette: Palette,
  hammer: Hammer
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2B35] mb-4 font-montserrat">
            Our Services
          </h2>
          <p className="text-lg text-[#2E404F] max-w-2xl mx-auto">
            Comprehensive interior design solutions for commercial and residential spaces
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mockData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-[#1F2B35] to-[#2E404F] rounded-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg group-hover:scale-110 transition-transform">
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-montserrat">
                  {service.title}
                </h3>
                <p className="text-[#CACACA] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
