import React from 'react';
import './Teamcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const Teamcard = ({ name, title, description, imageSrc, linkedin, instagram }) => {
  const isUrl = (description) => /^https?:\/\//.test(description);

  return (
      <div className="teamMemberCard">
          <div className="memberImageContainer">
              <img src={imageSrc} alt={`Profile of ${name}`} className="memberImage" />
          </div>
          <h3 className="memberName">{name}</h3>
          <p className="memberTitle">{title}</p>
          <p className="memberDescription">
              {/* Render "Visit Website" text instead of the URL if description is a URL */}
              {isUrl(description) ? (
                  <a href={description} target="_blank" rel="noopener noreferrer">Visit Website</a>
              ) : (
                  description
              )}
          </p>
          <div className="socialLinks">
              <a href={linkedin} target="_blank" rel="noopener noreferrer" className="socialLink">
                  <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href={instagram} target="_blank" rel="noopener noreferrer" className="socialLink">
                  <FontAwesomeIcon icon={faInstagram} />
              </a>
          </div>
      </div>
  );
};

export default Teamcard;