import React from 'react';
import { mockData } from '../mock';
import { Check } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-br from-[#1F2B35] via-[#2E404F] to-[#1F2B35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-montserrat">
            Our Process
          </h2>
          <p className="text-lg text-[#CACACA] max-w-2xl mx-auto">
            A seamless journey from concept to completion
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {mockData.process.map((step, index) => (
            <div
              key={step.id}
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector Line (hidden on last item) */}
              {index < mockData.process.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-[#CACACA]/30"></div>
              )}

              {/* Step Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                {/* Step Number */}
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full border-2 border-white/20 group-hover:border-white/40 transition-colors">
                  <span className="text-white text-2xl font-bold font-montserrat">{step.step}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 font-montserrat">
                  {step.title}
                </h3>
                <p className="text-[#CACACA] leading-relaxed">
                  {step.description}
                </p>

                {/* Check Icon */}
                <div className="mt-6 inline-flex items-center text-[#CACACA] text-sm">
                  <Check className="mr-2" size={18} />
                  <span>Included in service</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
