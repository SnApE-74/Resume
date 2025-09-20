import React from "react";
import { Code, Database, Settings, Monitor } from "lucide-react";

const TechnicalSkills = () => {
  const skills = [
    {
      category: "Programming & Scripting",
      icon: <Code className="text-white" size={24} />,
      items: ["Java", "Python", "JavaScript", "SQL"],
    },
    {
      category: "Automation Tools",
      icon: <Settings className="text-white" size={24} />,
      items: ["Selenium WebDriver", "TestNG", "JUnit", "Cucumber"],
    },
    {
      category: "CI/CD & Version Control",
      icon: <Monitor className="text-white" size={24} />,
      items: ["Jenkins", "Git/GitHub", "Maven", "Docker (basic)"],
    },
    {
      category: "Databases",
      icon: <Database className="text-white" size={24} />,
      items: ["MySQL", "PostgreSQL", "Oracle"],
    },
    {
      category: "Testing & Methodologies",
      icon: <Settings className="text-white" size={24} />,
      items: ["Manual Testing", "Agile/Scrum", "Regression Testing", "API Testing (Postman, REST Assured)"],
    },
    {
      category: "Other Tools & Platforms",
      icon: <Monitor className="text-white" size={24} />,
      items: ["JIRA", "Confluence", "VS Code", "Eclipse"],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 min-h-screen text-white"
      style={{
        background: "linear-gradient(135deg, #2a0a3e 0%, #4b0082 50%, #6a0dad 100%)",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 rounded-xl shadow-lg bg-white/20 backdrop-blur-md">
              <Code className="text-white" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
              Technical Skills
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 border border-white/30 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.15))",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold text-white drop-shadow-sm">
                    {skill.category}
                  </h3>
                </div>
                <ul className="list-disc list-inside space-y-1 text-white">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
