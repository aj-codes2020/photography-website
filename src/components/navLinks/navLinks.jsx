import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NavLinks = () => {
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Link className={activeSection === 'home' ? 'active' : ''} to="/#home" onClick={() => handleNavClick('home')}>Home</Link>
      <Link className={activeSection === 'about' ? 'active' : ''} to="/#about" onClick={() => handleNavClick('about')}>About</Link>
      <Link className={activeSection === 'hosting' ? 'active' : ''} to="/#service" onClick={() => handleNavClick('service')}>Service</Link>
      <Link className={activeSection === 'templates' ? 'active' : ''} to="/#team" onClick={() => handleNavClick('team')}>Team</Link>
      <Link className={activeSection === 'contact' ? 'active' : ''} to="/#faq" onClick={() => handleNavClick('faq')}>Faq</Link>
      <Link className={activeSection === 'contact' ? 'active' : ''} to="/#contact" onClick={() => handleNavClick('contact')}>Contact</Link>
    </>
  );
};

export default NavLinks;
