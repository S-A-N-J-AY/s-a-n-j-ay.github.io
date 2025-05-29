import React, { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import DarkModeToggle from './DarkModeToggle';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white text-gray-900 dark:bg-[#0f172a] dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}
