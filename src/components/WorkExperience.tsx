import React from "react";
import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Senior QA Automation Engineer",
      company: "TechSolutions Inc.",
      duration: "Jan 2021 – Present",
      achievements: [
        "Led a team of 4 engineers to design and implement robust test automation frameworks.",
        "Improved regression test efficiency by 60% by integrating Selenium with CI/CD pipelines (Jenkins).",
        "Enhanced test coverage from 65% to 90% across web, mobile, and API platforms.",
        "Collaborated with developers and product managers in Agile/Scrum teams to deliver high-quality releases.",
      ],
    },
    {
      role: "QA Automation Engineer",
      company: "NextGen Software Pvt Ltd.",
      duration: "Jul 2018 – Dec 2020",
      achievements: [
        "Developed automated test scripts using Java, TestNG, and Maven, reducing manual testing by 40%.",
        "Performed API testing with Postman and REST Assured for microservices-based applications.",
        "Implemented parallel test execution in Selenium Grid, cutting execution time by 50%.",
        "Contributed to release planning and defect triage meetings, ensuring timely bug resolution.",
      ],
    },
    {
      role: "QA Analyst",
      company: "Innovative Systems",
      duration: "Jun 2016 – Jun 2018",
      achievements: [
        "Performed manual and functional testing for web-based applications.",
        "Documented and executed detailed test cases, reporting defects via JIRA.",
        "Collaborated with cross-functional teams to validate business requirements and system workflows.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-indigo-100 rounded-xl">
              <Briefcase className="text-indigo-600" size={28} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Work Experience
            </h2>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-indigo-600 font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-500 italic mt-2 md:mt-0">
                    {exp.duration}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
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

export default WorkExperience;
