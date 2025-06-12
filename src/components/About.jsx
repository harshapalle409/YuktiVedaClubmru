import React from 'react';
import about_image from '../images/about_image.png';
import './aboutStyles.css';

const About = () => {
  return (
    <div className='yvclub-about-main-section'>
    <section className="yvclub-about-section" id="about">
      <div className="yvclub-about-right-container">
        <img src={about_image} alt="about image" />
      </div>
      <div className="yvclub-about-left-container">
        <h2 className="yvclub-about-title">About Yukti Veda</h2>
        <p className="yvclub-about-description">
          Yukti Veda is the official Entrepreneurship and Startup Club of Malla Reddy University, founded with the mission to spark innovation, ignite ambition, and shape student-led ventures. We are a thriving community of forward-thinking students, united by a common goal — to solve real-world problems through entrepreneurial action.
          <br /><br />
          At Yukti Veda, we believe that every idea holds potential, and with the right ecosystem, it can grow into something extraordinary. We foster a culture where creativity meets strategy, and where students are empowered to explore, experiment, and execute.
        </p>

        <h2 className="yvclub-about-title">What We Do</h2>
        <p className="yvclub-about-description">
          <strong>Idea to Startup:</strong> We help students convert their ideas into sustainable startups through guided mentorship, ideation workshops, and business model development.
          <br /><br />
          <strong>Skill Development:</strong> Regular sessions, hands-on events, and challenges that focus on building entrepreneurial, technical, and leadership skills.
          <br /><br />
          <strong>Cross-Team Collaboration:</strong> Our club is structured into core functional teams like Technical, Marketing, Finance, and Content, simulating a real-world startup environment.
          <br /><br />
          <strong>Ecosystem Exposure:</strong> We bring in startup founders, investors, incubators, and innovation leaders to interact with our members and open new doors of possibility.
          <br /><br />
          <strong>Student-led Innovation:</strong> Yukti Veda encourages student-led initiatives, providing a safe and supportive platform to test, fail, learn, and succeed.
          <br /><br />
          <em>"We are not just students — we are future founders, creators, and leaders. At Yukti Veda, we build more than startups — we build mindsets."</em>
        </p>

        <div className="yvclub-about-buttons">
          <a href="contact" className="yvclub-about-button">Contact Our Team</a>
          <a href="gallery" className="yvclub-about-button">Gallery</a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
