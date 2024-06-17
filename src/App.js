import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ConsultingServices from './components/ConsultingServices';
import JoinOurTeam from './components/JoinOurTeam';
import ContactUs from './components/ContactUs';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Router>
      <div className="app">
      <header className="app-header">
          <nav>
            <div className="logo">
              <Link to="/">Logo</Link>
            </div>
            <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="hamburger"></div>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              </li>
              <li>
                <Link to="/consulting-services" onClick={() => setIsMenuOpen(false)}>Consulting Services</Link>
              </li>
              <li>
                <Link to="/join-our-team" onClick={() => setIsMenuOpen(false)}>Join Our Team</Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              </li>
            </ul>
            <button className='navbutton'>Getstarted</button>
          </nav>
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about-us" element={<AboutUs/>} />
            <Route exact path="/consulting-services" element={<ConsultingServices/> } />
            <Route exact path="/join-our-team" element={<JoinOurTeam/>} />
            <Route exact path="/contact-us" element={<ContactUs/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
