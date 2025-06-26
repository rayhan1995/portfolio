import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <About />
        <Experience />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;