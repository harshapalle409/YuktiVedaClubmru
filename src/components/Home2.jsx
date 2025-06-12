import React, { useState, useEffect } from 'react';
import "./Home2Styles.css";
import landingImage from '../images/landing.jpg';

const Home2 = () => {
  const [typedText, setTypedText] = useState('');
  const [typedSubtext, setTypedSubtext] = useState('');
  const [showCursor, setShowCursor] = useState(true);
//   const [animateText, setAnimateText] = useState(false);
  
  const mainText = "Empowering Future Entrepreneurs";
  const subText = "Where bold ideas meet brilliant minds to create tomorrow's innovations";

  useEffect(() => {
    // Start all animations
    setTimeout(() => setAnimateText(true), 300);
    
    // Typing effect for main text
    let i = 0;
    const typeMainText = () => {
      if (i < mainText.length) {
        setTypedText(mainText.slice(0, i + 1));
        i++;
        setTimeout(typeMainText, 150);
      } else {
        setTimeout(typeSubText, 500);
      }
    };

    // Typing effect for subtext
    let j = 0;
    const typeSubText = () => {
      if (j < subText.length) {
        setTypedSubtext(subText.slice(0, j + 1));
        j++;
        setTimeout(typeSubText, 50);
      } else {
        setTimeout(() => setShowCursor(false), 1000);
      }
    };

    setTimeout(typeMainText, 1000);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="page-container">
      <img src={landingImage} alt="landing" className="img" />
      <div className="top-header">Innovate -- Collaborate -- Succeed</div>
      
      <section className="hero-section">
        <h1 className="main-slogan">
          {typedText}
          {showCursor && typedText.length < mainText.length && (
            <span className="cursor">|</span>
          )}
        </h1>
        
        <div className="subtitle">
          <p>
            {typedSubtext}
            {showCursor && typedText.length >= mainText.length && (
              <span className="cursor">|</span>
            )}
          </p>
        </div>
        
        <div className="cta-container">
          <a href='/contact' className="btn-primary">
            View Members
          </a>
          <a href='/about_us' className="btn-secondary">
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home2;