import React from "react";
import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "QA Automation Engineer",
      company: "Mercy Medical Center | Baltimore, MD",
      duration: "",
      achievements: [
        "Lifted regression coverage from 55% to 90% across patient portals, billing, scheduling, and clinical systems by designing and executing manual test scenarios and test cases and building scalable UI automation with Selenium and Playwright.",
        "Ensured 100% HIPAA compliance by automating validation of ETL healthcare data pipelines, verifying patient data integrity with SQL/API testing, and validating reporting dashboards against warehouse data for accuracy.",
        "Increased team-wide automation adoption by 35% by mentoring 3 QA engineers on BDD practices and embedding test suites into Continuous Integration/Continuous Deployment pipelines with Jenkins and Azure DevOps.",
        "Integrated API testing into automation frameworks using Postman, SoapUI & REST Assured.",
        "Integrated automated test suites into CI/CD pipelines using Jenkins, CircleCI, Travis CI, GitHub Actions, or Bamboo.",
        "Performed accessibility testing (ADA compliance) using screen readers, keyboard navigation, and contrast analyzers.",
        "Applied TCP/IP, HTTP, FTP, SMTP, UDP, DHCP, SSL, and DNS to troubleshoot network-related issues.",
        "Participated in Agile/Scrum meetings and contributed to continuous process improvement.",
        "Prepared test plans, traceability matrices, and defect reports in Jira and TestRail.",
      ],
    },
    {
      role: "QA Automation Engineer",
      company: "Amazon | Baltimore, MD",
      duration: "Apr 2024 - Jan 2025",
      achievements: [
        "Automated system testing for trading transactions, exchange operations, and payment methods using Selenium WebDriver with C# and NUnit.",
        "Performed API testing with Postman, SoapUI, and REST Assured; executed performance testing using JMeter.",
        "Built and executed CI/CD pipelines with Jenkins, GitHub Actions, CircleCI, Travis CI.",
        "Documented and tracked software defects using JIRA and TestRail.",
        "Prepared test cases in Quality Center and mapped requirements to ensure proper coverage.",
        "Led test process improvements integrating BDD/TDD methodologies.",
        "Conducted root cause analysis of critical test failures using logs and debugging.",
        "Wrote SQL queries to validate backend data on MySQL, PostgreSQL, and SQL Server.",
        "Collaborated with DevOps teams to execute tests in containerized environments using Docker, Kubernetes, and Azure cloud platforms.",
      ],
    },
    {
      role: "Test Engineer",
      company: "Infosys | Hyderabad, India",
      duration: "Jan 2021 - Jan 2023",
      achievements: [
        "Developed and executed comprehensive test plans, test cases, and test scripts to ensure functionality, performance, and security of applications.",
        "Implemented automation testing using Selenium and TestNG, reducing manual effort by 40%.",
        "Led the testing lifecycle from test case design to execution and defect reporting.",
        "Identified, tracked, and reported defects using JIRA.",
        "Performed integration, regression, and performance testing on web applications to ensure cross-browser and platform compatibility.",
        "Conducted API testing using Postman for backend validation and third-party integrations.",
      ],
    },
    {
      role: "Software Test Engineer",
      company: "Sify Technologies Limited | Chennai, India",
      duration: "Jun 2019 - Jan 2021",
      achievements: [
        "Developed detailed test plans, test cases, and test scripts aligned with pharmaceutical standards.",
        "Implemented automated test scripts for regression and system integration testing using Selenium, Test Complete, or QTP.",
        "Integrated QA testing into CI/CD pipelines for faster feedback and quicker releases.",
        "Conducted database testing (SQL, Oracle, NoSQL) ensuring regulatory compliance (HIPAA/GDPR).",
        "Performed API security testing using OWASP ZAP and Postman to secure pharmaceutical APIs.",
        "Led Continuous Improvement Process (CIP) initiatives to enhance productivity and efficiency.",
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
                    <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-lg text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 italic mt-2 md:mt-0">{exp.duration}</span>
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
