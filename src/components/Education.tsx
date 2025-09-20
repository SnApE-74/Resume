import React from "react";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Masters, Cyber Security",
      institution: "University of Maryland, Baltimore County",
      location: "Maryland, USA",
      gpa: "GPA: 3.91",
    },
    {
      degree: "Bachelors, Computer Science",
      institution: "Rajiv Gandhi University of Knowledge & Technologies",
      location: "India",
      gpa: "GPA: 8.3",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-indigo-100 rounded-xl">
              <GraduationCap className="text-indigo-600" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Education
            </h2>
          </div>

          {/* Education List */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {edu.degree}
                </h3>
                <p className="text-gray-700 font-medium">{edu.institution}</p>
                <p className="text-gray-500 text-sm">{edu.location}</p>
                <p className="text-gray-600 mt-2">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
