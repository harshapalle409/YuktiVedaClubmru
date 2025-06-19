// Home.js
import React from 'react';
import Inauguration from '../images/inauguration_photo.png';
import './galleryStyles.css';

const Gallery = () => {
  return (
    <div className="gallery_container">
      <div className="gallery_des">
        <h1 className='heading1' >GALLERY</h1>
        <p>Our Gallery showcases Yukti Veda Club’s vibrant journey — from our inspiring inauguration to snapshots and
         AV highlights of events filled with learning, creativity, and collaboration. Each moment reflects the spirit,
          energy, and growth of our club community.
          </p>
          </div>
      <div className="gallery_item">
        <h1>Inauguration</h1>
        {/* <p>
          The inauguration ceremony marked the formal commencement of our annual event.
          Dignitaries, faculty, and students gathered to celebrate this prestigious moment.
        </p> */}
        <img src={Inauguration} alt="Inauguration Event" className="gallery_image" />
      </div>

      <div className="gallery_item">
        <h1>AV</h1>
        {/* <p>
          A short audio-visual presentation showcased our journey, milestones, and future goals.
          The video offered an engaging glimpse into our impactful initiatives.
        </p> */}
        <iframe
          className="gallery_video"
          src="https://www.youtube.com/embed/4PIbIsdV6hU"
          title="AV Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>

  );
};

export default Gallery;
