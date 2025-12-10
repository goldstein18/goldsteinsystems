import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Industries from './components/Industries';
import Insights from './components/Insights';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ProposalG5499 from './components/ProposalG5499';
import SEOHead from './components/SEOHead';
import DataDeletionRequest from './components/DataDeletionRequest';
import DataDeletionRequestCent from './components/DataDeletionRequestCent';
import Accessibility from './components/Accessibility';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import CookiePolicy from './components/CookiePolicy';
import Login from './components/Login';
import Careers from './components/Careers';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const HomePage = () => (
    <>
      <Hero />
      <Clients />
      <Services />
      <Industries />
      {/* <Insights /> */}
      <About />
      <CTA />
    </>
  );

  return (
    <Router>
      <div className="App">
        <SEOHead />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/propuestaG5499" element={<ProposalG5499 />} />
          <Route path="/request" element={<DataDeletionRequest />} />
          <Route path="/request-cent" element={<DataDeletionRequestCent />} />
          <Route path="/accessibility" element={
            <>
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <Accessibility />
              <Footer />
            </>
          } />
          <Route path="/terms" element={
            <>
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <Terms />
              <Footer />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <Privacy />
              <Footer />
            </>
          } />
          <Route path="/cookies" element={
            <>
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <CookiePolicy />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/careers" element={
            <>
              <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <Careers />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
