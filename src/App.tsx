import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Objective from './components/Objective';
import ProfessionalSummary from './components/ProfessionalSummary';
import TechnicalSkills from './components/TechnicalSkills';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Certification from './components/Certification';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Objective />
        <ProfessionalSummary />
        <Education />
        <TechnicalSkills />
        <WorkExperience />
        <Certification />
      </main>
    </div>
  );
}

export default App;