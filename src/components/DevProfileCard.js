import React from 'react';
import './DevProfileCard.css';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';

const DevProfileCard = ({ name, title, image, linkedin, email, instagram }) => {
  return (
    <div className="dev-card-container-pink">
      <img src={image} alt="Profile_photo" className="dev-card-image-pink" />
      <h3 className="dev-card-title-pink">{name}</h3>
      <p className="dev-card-desc-pink">{title}</p>
      <div className="dev-card-icons-pink">
        {linkedin && (
          <a href={linkedin === "#" ? "#" : linkedin} // Keep original href or #
            className="dev-icon-link"
            onClick={(e) => {
              if (linkedin === "#") e.preventDefault(); // Block if href="#"
              // (Optional) Add other conditions here
            }} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} className="dev-icon-link">
            <FaEnvelope />
          </a>
        )}
        {/* {instagram && (
          <a href={instagram} className="dev-icon-link" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )} */}
      </div>
    </div>
  );
};

export default DevProfileCard;
