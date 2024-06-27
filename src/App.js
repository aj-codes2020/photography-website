import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@aj-codes2020/ui-kit';
import { Home } from './pages';
import { ColorPicker, NavLinks, Footer } from './components';
import './App.scss';

// Main Logo SVG Component
const MainLogo = () => (
  <div className='main-logo'>
    <div className="svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" width="70" height="70">
        <text className="cls-1" transform="translate(90.04 93.53) rotate(-90) scale(1.19 1)">
          <tspan className="cls-2" x="0" y="0">c</tspan>
          <tspan className="cls-4" x="8.15" y="0">od</tspan>
          <tspan className="cls-5" x="26.38" y="0">e</tspan>
          <tspan x="34.13" y="0">s</tspan>
        </text>
        <g>
          <path className="cls-3" d="M68.93,96.02h-28.17l-6.32,17.59h-9.14l25.67-67.23h7.76l25.72,67.23h-9.1l-6.42-17.59ZM43.44,88.77h22.86l-11.45-31.45-11.4,31.45Z" />
          <path className="cls-3" d="M116.14,45.92h8.91v47.61c0,6.43-1.93,11.46-5.8,15.1-3.86,3.64-9,5.45-15.44,5.45s-11.88-1.71-15.6-5.13c-3.73-3.42-5.59-8.2-5.59-14.36h8.86c0,3.85,1.05,6.85,3.16,9.01,2.11,2.15,5.16,3.23,9.17,3.23,3.66,0,6.63-1.15,8.89-3.46,2.26-2.31,3.41-5.54,3.44-9.69v-47.74Z" />
        </g>
      </svg>
    </div>
  </div>
);

// Scroll to Top Component
const ScrollToTop = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active link based on scroll position
      document.querySelectorAll('section[id]').forEach((section) => {
        const sectionTop = section.offsetTop - 300;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          document.querySelector(`a[href*=${section.id}]`).classList.add('active');
        } else {
          document.querySelector(`a[href*=${section.id}]`).classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar className={scrolled ? 'scrolled' : ''} logoTitle={<MainLogo />} rightColumn={<NavLinks />} menuColumn={<NavLinks />} />
      <ColorPicker />
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
