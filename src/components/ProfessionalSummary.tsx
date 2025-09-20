import React from "react";
import { Briefcase } from "lucide-react";

const ProfessionalSummary = () => {
  return (
    <section
      id="summary"
      className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 min-h-screen text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-purple-800/50 rounded-xl backdrop-blur-md">
              <Briefcase className="text-purple-300" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-200 tracking-tight">
              Professional Summary
            </h2>
          </div>
          
          {/* Content Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-purple-700/30 hover:shadow-xl transition-all duration-300">
            <p className="text-lg md:text-xl text-purple-100 leading-relaxed">
              Experienced and detail-oriented{" "}
              <span className="font-semibold text-purple-300">
                QA Automation Engineer
              </span>{" "}
              with a proven track record of ensuring software quality across
              multiple domains including <span className="font-medium text-purple-200">e-commerce, fintech, and enterprise applications</span>.  
              Adept at designing and implementing robust test automation
              frameworks using <span className="font-medium text-purple-100">Selenium, TestNG, Jenkins, and Git</span>.  
              Skilled in both <span className="font-medium text-purple-200">manual and automated testing</span>, with expertise in Agile
              methodologies, continuous integration pipelines, and end-to-end
              quality assurance processes.  
            </p>

            <p className="text-lg md:text-xl text-purple-100 leading-relaxed mt-6">
              Recognized for a strong analytical mindset, collaborative
              problem-solving skills, and the ability to bridge the gap between
              business needs and technical execution. Passionate about driving
              innovation in testing practices and delivering{" "}
              <span className="font-semibold text-purple-300">
                reliable, scalable, and high-performance software solutions
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
