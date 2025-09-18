import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Insights from './components/Insights';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProposalG5499 from './components/ProposalG5499';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HomePage = () => (
    <>
      <Hero />
      <Services />
      <Industries />
      <Insights />
      <About />
      <CTA />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/propuestaG5499" element={<ProposalG5499 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
