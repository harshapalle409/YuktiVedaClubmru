import React from 'react';
import './TeamCard.css';

const TeamCard = ({ name, role, image }) => {
  return (
    <div className="snap-card-container-unique">
      <div className="snap-card-img-wrapper-unique">
        <img src={image} alt={name} className="snap-card-profile-img-unique" />
      </div>
      <div className="snap-card-body-unique">
        <span className="snap-card-dot-unique snap-card-dot-top-unique"></span>
        <h3 className="snap-card-name-unique">{name}</h3>
        <p className="snap-card-role-unique">{role}</p>
        <span className="snap-card-dot-unique snap-card-dot-bottom-unique"></span>
      </div>
    </div>
  );
};

export default TeamCard;
