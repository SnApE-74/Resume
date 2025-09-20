import React from 'react';
import { Target } from 'lucide-react';

const Objective = () => {
  return (
    <section id="objective" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Target className="text-blue-600" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Objective
            </h2>
          </div>
          
          {/* Content Card */}
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Highly skilled and results-driven <span className="font-semibold text-blue-700">QA Automation Engineer</span> 
              with <span className="font-semibold">5+ years of experience</span> in designing, developing, and executing 
              automated test scripts across diverse applications. Adept at leveraging tools like 
              <span className="text-gray-900 font-medium"> Selenium, Jenkins, and TestNG</span> to ensure seamless 
              software quality. Equipped with a strong understanding of 
              <span className="font-medium"> SDLC, Agile methodologies</span>, and modern DevOps practices, with a 
              passion for delivering reliable, scalable, and impactful solutions that align with business goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
