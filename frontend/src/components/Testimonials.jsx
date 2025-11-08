import React from 'react';
import { mockData } from '../mock';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2B35] mb-4 font-montserrat">
            Client Success Stories
          </h2>
          <p className="text-lg text-[#2E404F] max-w-2xl mx-auto">
            Hear from the businesses and individuals we've helped transform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-[#F5F5F5] rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={64} className="text-[#2E404F]" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#2E404F] text-[#2E404F]" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-[#2E404F] mb-6 leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-[#CACACA]/30 pt-4 relative z-10">
                <p className="font-bold text-[#1F2B35] font-montserrat">{testimonial.name}</p>
                <p className="text-sm text-[#2E404F]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
