import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StartProjectModal from './components/StartProjectModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950 text-slate-900 dark:text-slate-300 font-sans selection:bg-primary-500 selection:text-white transition-colors duration-300">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio onOpenModal={openModal} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      <StartProjectModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;