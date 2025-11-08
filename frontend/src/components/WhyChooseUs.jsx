import React from 'react';
import { Layers, TrendingUp, Globe, Wrench, Heart } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  layers: Layers,
  'trending-up': TrendingUp,
  globe: Globe,
  tool: Wrench,
  heart: Heart
};

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2B35] mb-4 font-montserrat">
            Why Work With IDK Interiors
          </h2>
          <p className="text-lg text-[#2E404F] max-w-3xl mx-auto">
            We combine European craftsmanship with strategic design thinking to deliver spaces that are both beautiful and profitable
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.whyChooseUs.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon];
            return (
              <div
                key={pillar.id}
                className="group bg-[#F5F5F5] rounded-lg p-8 hover:bg-gradient-to-br hover:from-[#1F2B35] hover:to-[#2E404F] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-[#2E404F] group-hover:bg-white/20 rounded-lg transition-colors">
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1F2B35] group-hover:text-white mb-3 font-montserrat transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[#2E404F] group-hover:text-[#CACACA] leading-relaxed transition-colors">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
