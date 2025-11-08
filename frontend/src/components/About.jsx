import React from 'react';
import { Award, Users, Globe2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2B35] font-montserrat">
              Where Design Meets Intelligence
            </h2>
            <p className="text-lg text-[#2E404F] leading-relaxed">
              IDK Interiors was founded on a simple belief: design should be both beautiful and financially intelligent. Every space has the potential to inspire, perform, and deliver real value.
            </p>
            <p className="text-lg text-[#2E404F] leading-relaxed">
              With a European perspective that blends Polish craftsmanship, Northern reliability, and Southern warmth, we create interiors that are timeless, functional, and uniquely tailored to each client's story.
            </p>
            <p className="text-lg text-[#2E404F] leading-relaxed">
              From retail spaces that drive sales to offices that enhance productivity, we manage every detail—from initial concept and cost planning to renovation and final installation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2E404F] rounded-lg mb-3">
                  <Award className="text-white" size={24} />
                </div>
                <p className="text-2xl font-bold text-[#1F2B35] font-montserrat">10+</p>
                <p className="text-sm text-[#2E404F]">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2E404F] rounded-lg mb-3">
                  <Users className="text-white" size={24} />
                </div>
                <p className="text-2xl font-bold text-[#1F2B35] font-montserrat">150+</p>
                <p className="text-sm text-[#2E404F]">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2E404F] rounded-lg mb-3">
                  <Globe2 className="text-white" size={24} />
                </div>
                <p className="text-2xl font-bold text-[#1F2B35] font-montserrat">5+</p>
                <p className="text-sm text-[#2E404F]">Countries</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_2bdab0b2-cfbc-429b-8426-eafee70a6f52/artifacts/wlcpnyws_enscape_2025-05-22-14-59-55-high-zxfrtv.webp"
                alt="IDK Interiors workspace"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#2E404F]/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
