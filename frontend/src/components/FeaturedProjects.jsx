import React from 'react';
import { mockData } from '../mock';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1F2B35] mb-4 font-montserrat">
            Featured Projects
          </h2>
          <p className="text-lg text-[#2E404F] max-w-2xl mx-auto">
            Transformative design solutions that deliver measurable results
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#2E404F] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1F2B35] mb-3 font-montserrat">
                  {project.title}
                </h3>
                <p className="text-[#2E404F] mb-4 leading-relaxed">
                  {project.outcome}
                </p>
                <div className="flex items-center text-[#2E404F] font-semibold group-hover:text-[#1F2B35] transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
