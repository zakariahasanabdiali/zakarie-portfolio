import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const App = () => (
  <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
    <Navbar />
    <main className="flex-1">
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
