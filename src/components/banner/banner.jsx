import React from 'react';
import './banner.scss';
import { Button } from '@aj-codes2020/ui-kit';

// Sub-content data for the banner
const subContentData = [
  {
    title: 'Art',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.',
  },
  {
    title: 'Lens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.',
  },
  {
    title: 'Dream',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.',
  },
];

const Banner = () => {
  return (
    <div className='banner'>
      <div className='grid-container'>
        <div className='banner-content grid-d-8 grid-m-12'>
          <h1>Art</h1>
          <h1>Lens</h1>
          <h1>Dream</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <Button label="Learn More" onClick={() => alert('Learn More clicked')} />
        </div>
        <div className='banner-sub-content grid-d-4'>
          {subContentData.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
