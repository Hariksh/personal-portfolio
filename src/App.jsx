import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import OpenSource from './components/OpenSource';

const Home = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <OpenSource />
    <Education />
    <Contact />
  </>
);

const ProjectsPage = () => (
  <div style={{ paddingTop: '80px' }}>
    <Projects />
    <Contact />
  </div>
);

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
