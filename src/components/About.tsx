import React from 'react';
import { CheckCircle, Target, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Automation Expertise",
      description:
        "5+ years of experience in QA Automation across web, mobile, and API applications using Selenium, Cypress, Appium, Playwright, and Rest Assured.",
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-600" />,
      title: "Framework Development",
      description:
        "Proficient in creating scalable, data-driven, keyword-driven, and hybrid frameworks using Java, Python, and C#, integrated with TestNG, JUnit, and Cucumber.",
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Team Collaboration",
      description:
        "Strong experience working in Agile/Scrum environments, mentoring junior QA engineers, and collaborating with cross-functional teams.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Continuous Integration",
      description:
        "Hands-on expertise integrating test automation with CI/CD pipelines using Jenkins, GitHub Actions, Docker, and Kubernetes for faster and reliable releases.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Shanmukha Maneeshbabu Uppala – QA Automation Engineer
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              I am a highly skilled and results-driven QA Automation Engineer with over 5 years of experience in
              designing, developing, and executing automated test scripts for web, mobile, and API applications.
              Adept at leveraging tools such as <strong>Selenium WebDriver</strong>, <strong>Cypress</strong>,{" "}
              <strong>Appium</strong>, <strong>Playwright</strong>, <strong>Rest Assured</strong>, and{" "}
              <strong>Postman</strong> to ensure comprehensive functional and regression testing.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              My technical expertise spans across multiple programming languages including{" "}
              <strong>Java</strong>, <strong>Python</strong>, <strong>C#</strong>, and <strong>JavaScript</strong>.
              I have built scalable and reusable automation frameworks such as BDD with <strong>Cucumber</strong>,
              hybrid, and POM, ensuring efficiency and maintainability. Skilled in performance testing using{" "}
              <strong>JMeter</strong> and <strong>LoadRunner</strong>, with strong experience integrating automation
              into CI/CD pipelines using Jenkins, GitHub Actions, Docker, and Kubernetes.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              I have contributed to world-class organizations such as{" "}
              <strong>KeyBank</strong>, <strong>Amazon</strong>, <strong>Infosys</strong>, and{" "}
              <strong>Sify Technologies</strong>, where I played key roles in enhancing QA processes, implementing
              innovative automation solutions, and mentoring junior engineers. My strong understanding of{" "}
              <strong>Agile/Scrum</strong> methodologies, combined with expertise in test management tools like{" "}
              <strong>Jira</strong>, <strong>TestRail</strong>, and <strong>Azure DevOps</strong>, ensures
              effective collaboration and delivery of high-quality software.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Selenium",
                "Cypress",
                "Appium",
                "Playwright",
                "Rest Assured",
                "Java",
                "Python",
                "C#",
                "CI/CD",
                "Jenkins",
                "Docker",
                "Kubernetes",
                "Agile",
                "TestNG",
                "Cucumber",
                "JMeter",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">{highlight.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
