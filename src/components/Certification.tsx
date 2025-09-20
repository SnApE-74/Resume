import React from "react";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "ISTQB – International Software Testing Qualifications Board",
    },
    {
      name: "CompTIA Security+",
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 min-h-screen text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-gradient-to-tr from-yellow-500 via-yellow-400 to-yellow-600 rounded-xl shadow-lg backdrop-blur-md">
              <Award className="text-yellow-100 drop-shadow-[0_0_6px_#facc15]" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-200 tracking-tight">
              Certifications
            </h2>
          </div>

          {/* Certification List */}
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md border border-blue-700/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-100">
                  {cert.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
