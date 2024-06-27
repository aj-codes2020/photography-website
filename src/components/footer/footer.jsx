import React from 'react';
import './footer.scss';

const footerSections = [
  {
    className: 'about',
    title: 'About Us',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    )
  },
  {
    className: 'links',
    title: 'Quick Links',
    content: (
      <ul>
        {['Home', 'About', 'Services', 'Team', 'Faq', 'Contact'].map((link, index) => (
          <li key={index}><a href={`/#${link.toLowerCase()}`}>{link}</a></li>
        ))}
      </ul>
    )
  },
  {
    className: 'social',
    title: 'Follow Us',
    content: (
      <div className='social-icons'>
        <a href='/'>Instagram</a>
        <a href='/'>FaceBook</a>
      </div>
    )
  }
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        {footerSections.map((section, index) => (
          <div key={index} className={`footer-section ${section.className}`}>
            <h2>{section.title}</h2>
            {section.content}
          </div>
        ))}
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
