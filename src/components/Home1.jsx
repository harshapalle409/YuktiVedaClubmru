// import React, { useState, useEffect } from 'react';
// import './home1Styles.css';
// import landingImage from '../images/landing.jpg';

// const Home1 = () => {
//   const [typedText, setTypedText] = useState('');
//   const [typedSubtext, setTypedSubtext] = useState('');
//   const [showCursor, setShowCursor] = useState(true);

//   const mainText = "Empowering Future Entrepreneurs";
//   const subText = "Where bold ideas meet brilliant minds to create tomorrow's innovations";

//   useEffect(() => {
//     let i = 0, j = 0;

//     const typeMainText = () => {
//       if (i < mainText.length) {
//         setTypedText(mainText.slice(0, i + 1));
//         i++;
//         setTimeout(typeMainText, 150);
//       } else {
//         setTimeout(typeSubText, 500);
//       }
//     };

//     const typeSubText = () => {
//       if (j < subText.length) {
//         setTypedSubtext(subText.slice(0, j + 1));
//         j++;
//         setTimeout(typeSubText, 50);
//       } else {
//         setTimeout(() => setShowCursor(false), 1000);
//       }
//     };

//     setTimeout(typeMainText, 1000);

//     const cursorInterval = setInterval(() => {
//       setShowCursor(prev => !prev);
//     }, 500);

//     return () => clearInterval(cursorInterval);
//   }, []);

//   return (
//     <div className="yvclub-home-container">
//       <div className="yvclub-home-top-header">Innovate -- Collaborate -- Succeed</div>
//       <section className="yvclub-home-hero" style={{ backgroundImage: `url(${landingImage})` }}>
//         <h1 className="yvclub-home-main-slogan">
//           {typedText}
//           {showCursor && typedText.length < mainText.length && <span className="yvclub-home-cursor">|</span>}
//         </h1>
//         <div className="yvclub-home-subtitle">
//           <p>
//             {typedSubtext}
//             {showCursor && typedText.length >= mainText.length && <span className="yvclub-home-cursor">|</span>}
//           </p>
//         </div>
//         <div className="yvclub-home-cta">
//           <a href="/contact" className="yvclub-home-btn-primary">View Members</a>
//           <a href="/about_us" className="yvclub-home-btn-secondary">Learn More</a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home1;


import React, { useState, useEffect } from 'react';
import './home1Styles.css';
import landingImage from '../images/landing.jpg';

const Home1 = () => {
  const [typedText, setTypedText] = useState('');
  const [typedSubtext, setTypedSubtext] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const mainText = "Empowering Future Entrepreneurs";
  const subText = "Where bold ideas meet brilliant minds to create tomorrow's innovations";

  useEffect(() => {
    let i = 0, j = 0;

    const typeMainText = () => {
      if (i < mainText.length) {
        setTypedText(mainText.slice(0, i + 1));
        i++;
        setTimeout(typeMainText, 150);
      } else {
        setTimeout(typeSubText, 500);
      }
    };

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

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="yvclub-home-container">
      <div className="yvclub-home-top-header">Innovate -- Collaborate -- Succeed</div>
      <section className="yvclub-home-hero" style={{ backgroundImage: `url(${landingImage})` }}>
        {/* Running text marquee */}
        <div className="yvclub-home-running-text-container">
          {/* <div className="yvclub-home-running-text">Innovate Create Succeed</div> */}
        </div>
        
        <h1 className="yvclub-home-main-slogan">
          {typedText}
          {showCursor && typedText.length < mainText.length && <span className="yvclub-home-cursor">|</span>}
        </h1>
        <div className="yvclub-home-subtitle">
          <p>
            {typedSubtext}
            {showCursor && typedText.length >= mainText.length && <span className="yvclub-home-cursor">|</span>}
          </p>
        </div>
        <div className="yvclub-home-cta">
          <a href="/contact" className="yvclub-home-btn-primary">View Members</a>
          <a href="/about_us" className="yvclub-home-btn-secondary">Learn More</a>
        </div>
      </section>
    </div>
  );
};

export default Home1;