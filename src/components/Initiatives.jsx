import React from 'react';
import './initiativesStyles.css';
import inaugurationPoster from '../images/Yuktivedaclub_inuagration_poster.jpg';
import PitchSpark25 from '../images/PitchSpark25.jpg';

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
          <div className="opportunity-left ">
            <img className="opportunity-left-img" src={PitchSpark25} alt="Inauguration Poster" />
          </div>
          <div className="opportunity-right">
            <h3>PitchSpark'25</h3>
            <p>
              Get ready for our first mini event—<strong>PitchSpark'25 </strong>
               is happening now, on <strong>June 09th, 2025</strong>! Student teams are currently
                presenting their startup ideas to a panel of expert judges in this exciting competition.
                 The event encourages ideation, teamwork, and pitching skills, while providing a platform 
                for students to showcase innovative solutions to real-world problems.
                 Stay tuned and witness the next wave of changemakers in action.
               Don’t miss your chance to shine!
            </p>
          </div>
        </div>

        <div className="opportunity-card">
          <div className="opportunity-left poster-placeholder purple-bg">
            {/* <img className="opportunity-left-img" src={inaugurationPoster} alt="Inauguration Poster" /> */}
          </div>
          <div className="opportunity-right">
            <h3>IDEATHON 2K25 – Innovation Challenge</h3>
            <p>Organized by <strong>Yukti Veda Club</strong> (Dept. of Data Science), IDEATHON 2K25 is happening on <strong>August 7th, 2025</strong>. This event offers a platform for students to pitch their startup ideas, business plans, and prototypes to a panel of expert judges.
                It’s designed to spark innovation, build teamwork, and push participants beyond their comfort zones. Winners receive certificates and a chance to make their ideas count.
                Think big. Pitch smart. Lead the change.
            </p>
             <a href="registration" className="yvclub-registration-button">Register now</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Initiatives;
