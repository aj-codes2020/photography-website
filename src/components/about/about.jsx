import React from 'react';
import './about.scss';
import { ImgAbout } from '../../assets';
import { Button } from '@aj-codes2020/ui-kit';

// About component
const About = () => {
  return (
    <div className='about-section grid-container'>
      <div className='about-image-container grid-d-5 grid-s-12'>
        <img className='about-image' src={ImgAbout} alt='About Us' loading="lazy" />
      </div>
      <div className='section-content-right grid-d-7 grid-s-12'>
        <h2 className='section-title'>About Us</h2>
        <h3 className='section-subtitle'>Capturing Dreams Through the Art of Photography</h3>
        <div className='mobile-about-image-container'>
          <img className='mobile-about-image' src={ImgAbout} alt='About Us' loading="lazy" />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
        </p>
        <p>
          Suspendisse ultrices gravida dictum fusce. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Purus semper eget duis at. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Felis bibendum ut tristique et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Ut sem viverra aliquet eget sit amet. Purus ut faucibus pulvinar elementum. Non odio euismod lacinia at quis. Vel risus commodo viverra maecenas accumsan lacus vel. Dolor morbi non arcu risus quis varius.
        </p>
        <Button label="Learn More" onClick={() => alert('Button clicked')} />
      </div>
    </div>
  );
};

export default About;
