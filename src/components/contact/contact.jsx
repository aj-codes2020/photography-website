import React from 'react';
import './contact.scss';
import { Button } from '@aj-codes2020/ui-kit';

const Contact = () => {
  return (
    <div className='contact-section grid-container'>
      <div className='section-content-left grid-d-7 grid-s-12'>
        <h2 className='section-title'>Contact Us</h2>
        <h3 className='section-subtitle'>Get in Touch and Let's Create Together</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
        </p>
      </div>
      <div className='contact-form-container grid-d-5 grid-s-12'>
        <input
          className='contact-input'
          type='text'
          id='name'
          name='name'
          placeholder='Enter Name...'
          autoComplete='off'
        />
        <input
          className='contact-input'
          type='email'
          id='email'
          name='email'
          placeholder='Enter Email Address...'
          autoComplete='off'
        />
        <textarea
          className='contact-textarea'
          id='message'
          name='message'
          placeholder='Enter Message...'
          rows='4'
          cols='50'
          autoComplete='off'
        ></textarea>
        <Button label="Submit" onClick={() => alert('Button clicked')} />
      </div>
    </div>
  );
};

export default Contact;