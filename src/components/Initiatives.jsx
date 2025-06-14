import React from 'react';
import './initiativesStyles.css';
import inaugurationPoster from '../images/Yuktivedaclub_inuagration_poster.jpg';

const Initiatives = () => {
  return (
    <div className="initiatives_main_section">
      <h2>INITIATIVES</h2>
      <p>
        At Yukti Veda Club, Malla Reddy University, we believe that entrepreneurship is the driving force
        behind India’s progress. To support this vision, we have designed and executed a range of impactful
        initiatives that empower students, emerging entrepreneurs, and professionals throughout their entrepreneurial journey.
      </p>

      <div className="opportunity-section">
        {/* Inauguration */}
        <div className="opportunity-card">
          <div className="opportunity-left poster-placeholder purple-bg">
            <img className="opportunity-left-img" src={inaugurationPoster} alt="Inauguration Poster" />
          </div>
          <div className="opportunity-right">
            <h3>Inauguration: Yukti Veda Club</h3>
            <p>
              The <strong>Yukti Veda Club</strong>, the official Entrepreneurship and Startup Club of
              Malla Reddy University, was successfully inaugurated on <strong>April 11th, 2025</strong>.
              This club is a platform to foster innovation, entrepreneurship, and real-world problem-solving
              among students. The inauguration marked the beginning of a journey to build a strong community
              of future founders and changemakers at MRU.
            </p>
          </div>
        </div>

        {/* Startup Idea Pitch */}
        <div className="opportunity-card">
          <div className="opportunity-left poster-placeholder dark-bg">
            {/* Add image here if available */}
          </div>
          <div className="opportunity-right">
            <h3>PitchSpark'25</h3>
            <p>
              Get ready for our first major event—<strong>PitchSpark'25</strong>
               is happening now, on <strong>June 12th, 2025</strong>! Student teams are currently
                presenting their startup ideas to a panel of expert judges in this exciting competition.
                 The event encourages ideation, teamwork, and pitching skills, while providing a platform 
                for students to showcase innovative solutions to real-world problems.
                 Stay tuned and witness the next wave of changemakers in action.
               Don’t miss your chance to shine!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
