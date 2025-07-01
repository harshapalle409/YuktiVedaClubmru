import React from 'react';
import './Location.css';

const Location = () => {
  const lat = 17.562731;
  const lng = 78.441336;

  // Predefined app links with coordinates
  const directionLinks = [
    {
      name: 'Google Maps',
      url: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
    },
    // {
    //   name: 'Ola',
    //   url: `https://book.olacabs.com/?pickup=My+Location&drop=${lat},${lng}`,
    // },
    // {
    //   name: 'Uber',
    //   url: `https://m.uber.com/ul/?action=setPickup&drop[latitude]=${lat}&drop[longitude]=${lng}`,
    // },
    // {
    //   name: 'Rapido',
    //   url: `https://apps.apple.com/in/app/rapido-bike-taxi/id1198464607`, // Fallback to store (no direct ride link available)
    // },
  ];
  return (
    <div className="location-page">
      <h2 className='location-heading1'>Our Location</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          title="MRU Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.8415064861356!2d78.44133607429488!3d17.56273108335469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ff8652b6823%3A0x981713dbb4b708c3!2sMalla%20Reddy%20University!5e0!3m2!1sen!2sin!4v1751290253700!5m2!1sen!2sin"
          width="90%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Direction options shown only on mobile */}
      <div className="direction-buttons">
        <h3>Get Directions:</h3>
        {directionLinks.map((app, index) => (
          <a key={index} href={app.url} target="_blank" rel="noopener noreferrer">
            <button className="direction-btn">{app.name}</button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Location;
