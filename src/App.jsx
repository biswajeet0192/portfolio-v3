import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;