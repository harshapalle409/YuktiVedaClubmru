import React from 'react';
import './EventPostersStyles.css';
import inauration_poster from '../images/Yuktivedaclub_inuagration_poster.jpg'
const EventPosters = () => {
  return (
    <div className="opportunity-section">
      {/* Entrepreneurship Bootcamp */}
      <div className="opportunity-card">
        <div className="opportunity-left poster-placeholder purple-bg">
          <img className='opportunity-left-img' src={inauration_poster} alt='inauration_poster' />
        </div>
        <div className="opportunity-right">
           <h3>Inauguration: Yukti Veda Club</h3>
          <p>
           The <strong>Yukti Veda Club</strong>, the official Entrepreneurship and Startup Club of 
            Malla Reddy University, was successfully inaugurated on <strong>June 1st, 2025</strong>. 
            This club is a platform to foster innovation, entrepreneurship, and real-world problem-solving 
            among students. The inauguration marked the beginning of a journey to build a strong community 
            of future founders and changemakers at MRU.
            </p>
        </div>
      </div>

      {/* Musketeers */}
      <div className="opportunity-card">
        <div className="opportunity-left poster-placeholder dark-bg"></div>
        <div className="opportunity-right">
           <h3>Event: Startup Idea Pitch</h3>
          <p>
            Get ready for our first major event—<strong>Startup Idea Pitch</strong>—happening on 
            <strong> June 9th, 2025</strong>! In this exciting competition, student teams will 
            present their startup ideas to a panel of expert judges. The event aims to encourage 
            ideation, teamwork, and pitching skills, while giving students a platform to launch 
            innovative solutions to real-world problems. Don’t miss your chance to shine!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventPosters;
