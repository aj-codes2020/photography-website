import React from 'react';
import { MeetTeam, Faq, Services, About, Contact, Banner } from '../../components';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Banner Section */}
      <div id='home' className='home-banner'>
        <Banner />
      </div>

      <div className='container'>
        {/* About Section */}
        <section className='about-section' id='about'>
          <About />
        </section>

        {/* Services Section */}
        <section className="services-section" id='service'>
          <Services />
        </section>

        {/* Team Section */}
        <section className="team-section" id='team'>
          <MeetTeam />
        </section>

        {/* FAQ Section */}
        <section className="faq-section" id='faq'>
          <Faq />
        </section>

        {/* Contact Section */}
        <section className="contact-section" id='contact'>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Home;
