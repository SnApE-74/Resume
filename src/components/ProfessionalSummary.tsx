import React from "react";
import { Briefcase } from "lucide-react";

const ProfessionalSummary = () => {
  const points = [
    "5+ years of experience in QA Automation and Manual Testing for web, mobile, and API applications across multiple domains.",
    "Strong expertise in Selenium WebDriver, Cypress, Appium, Playwright, Rest Assured, Postman, and SoapUI, ensuring end-to-end functional and regression test coverage.",
    "Strong experience in developing test automation scripts with object-oriented programming languages such as Java using Eclipse/IntelliJ IDE.",
    "Proficient in creating data-driven, keyword-driven, and hybrid automation frameworks to enhance test efficiency and coverage.",
    "Proficient in building scalable and reusable automation frameworks using Java, Python, C#, TestNG, JUnit, Mocha, and BDD tools like Cucumber.",
    "Skilled in Continuous Integration and Continuous Deployment (CI/CD) integration with Jenkins, GitHub Actions, Maven, Docker, and Kubernetes, enabling faster release cycles and reliable continuous testing pipelines.",
    "Experienced in performance, load, and stress testing using JMeter and LoadRunner, analysing results and providing optimization insights to development teams.",
    "Strong understanding of Agile/Scrum and Waterfall methodologies, actively collaborating in sprint ceremonies, retrospectives, and cross-functional project planning.",
    "Familiar with test management tools like TestRail, Jira, and Azure DevOps to track test cases, issues, and reporting.",
    "Experience in mobile testing using Appium, BrowserStack, and Sauce Labs for cross-platform mobile applications.",
    "Experienced in mentoring junior QA engineers, promoting best practices in automation, test strategy, and defect management to strengthen overall team productivity.",
    "Exposure to cloud technologies (AWS, Azure) and containerized applications, verifying scalability, reliability, and deployment correctness."
  ];

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
            <ul className="list-disc list-inside space-y-3 text-lg md:text-xl text-purple-100 leading-relaxed">
              {points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
