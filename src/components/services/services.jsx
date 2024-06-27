import React from 'react';
import './services.scss';
import { Img2, Img3 } from '../../assets';
import { Button } from '@aj-codes2020/ui-kit';

// Services data
const servicesData = [
  { id: 1, imgSrc: Img3, title: "Portraits" },
  { id: 2, imgSrc: Img2, title: "Weddings" },
  { id: 3, imgSrc: Img3, title: "Events" },
  { id: 4, imgSrc: Img2, title: "Commercial" },
  { id: 5, imgSrc: Img3, title: "Fashion" },
  { id: 6, imgSrc: Img2, title: "Lifestyle" },
];

const Services = () => {
  return (
    <div className='section-content-center'>
      {/* Section title */}
      <div className='section-title-grouping'>
        <h2 className='section-title'>Services</h2>
        <h3 className='section-subtitle'>Crafting Moments, One Click at a Time</h3>
      </div>
      {/* Services grid */}
      <div className='grid-container'>
        {servicesData.map(service => (
          <div key={service.id} className='service-img-box grid-d-6'>
            {/* Lazy loading for images */}
            <img className='service-img' alt={service.title} src={service.imgSrc} loading="lazy" />
            <div className="group">
              <h3>{service.title}</h3>
              <p className='instruction'>to view more</p>
              <div className='service-details' style={{ transition: '0.5s ease-in-out' }}>
                <p className='service-description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <Button label="Learn More" onClick={() => alert('Button clicked')} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
