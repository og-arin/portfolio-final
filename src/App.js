import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorFirefly from './components/CursorFirefly'; // Import karle

function App() {
  return (
    <div className="bg-[#010409] min-h-screen selection:bg-ember selection:text-black"> 
      <CursorFirefly />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;