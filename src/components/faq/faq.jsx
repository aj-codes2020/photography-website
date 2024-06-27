import React from 'react';
import './faq.scss';
import { Accordion } from '@aj-codes2020/ui-kit';

// FAQ items data
const items = [
  {
    title: 'What types of photography services do you offer?',
    content: 'Suspendisse ultrices gravida dictum fusce. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Purus semper eget duis at. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Felis bibendum ut tristique et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Ut sem viverra aliquet eget sit amet. Purus ut faucibus pulvinar elementum. Non odio euismod lacinia at quis. Vel risus commodo viverra maecenas accumsan lacus vel. Dolor morbi non arcu risus quis varius.'
  },
  {
    title: 'How do I book a session, and what is the process?',
    content: 'Suspendisse ultrices gravida dictum fusce. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Purus semper eget duis at. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Felis bibendum ut tristique et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Ut sem viverra aliquet eget sit amet. Purus ut faucibus pulvinar elementum. Non odio euismod lacinia at quis. Vel risus commodo viverra maecenas accumsan lacus vel. Dolor morbi non arcu risus quis varius.'
  },
  {
    title: 'How long does it take to receive the edited photos?',
    content: 'Suspendisse ultrices gravida dictum fusce. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Purus semper eget duis at. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Felis bibendum ut tristique et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Ut sem viverra aliquet eget sit amet. Purus ut faucibus pulvinar elementum. Non odio euismod lacinia at quis. Vel risus commodo viverra maecenas accumsan lacus vel. Dolor morbi non arcu risus quis varius.'
  },
  {
    title: 'Can we customize our photo packages to suit our needs?',
    content: 'Suspendisse ultrices gravida dictum fusce. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Purus semper eget duis at. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Felis bibendum ut tristique et. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Ut sem viverra aliquet eget sit amet. Purus ut faucibus pulvinar elementum. Non odio euismod lacinia at quis. Vel risus commodo viverra maecenas accumsan lacus vel. Dolor morbi non arcu risus quis varius.'
  }
];

const Faq = () => {
  return (
    <div className='faq-section'>
      {/* Section title */}
      <div className='section-title-grouping'>
        <h2 className='section-title'>FAQ</h2>
        <h3 className='section-subtitle'>Your Questions, Answered</h3>
      </div>
      {/* FAQ accordion */}
      <div className='faq-accordion'>
        <Accordion items={items} />
      </div>
    </div>
  );
};

export default Faq;
