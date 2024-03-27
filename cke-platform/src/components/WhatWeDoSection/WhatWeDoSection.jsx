import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSearch, faRecycle, faAward } from '@fortawesome/free-solid-svg-icons';
import './WhatWeDoSection.css'; 
import CustomLink from '../Navbar/CustomLink';

const WhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <h2>What we do</h2>
      <div className="steps">
        <div className="step">
          <FontAwesomeIcon icon={faLeaf} size="5x" />
          <h3>1</h3>
          <p>We have exclusive sales right with companies and projects that develop carbon credits...</p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faSearch} size="5x" />
          <h3>2</h3>
          <p>We certify suppliers with third-party verifications...</p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faRecycle} size="5x" />
          <h3>3</h3>
          <p>Companies and private customers buy the verified credits...</p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faAward} size="5x" />
          <h3>4</h3>
          <p>The purchased credits are then retired...</p>
        </div>
      </div>
      <div className="cta-button">
        <CustomLink to="/portfolio"><button>See our portfolio</button></CustomLink>
      </div>
    </div>
  );
};

export default WhatWeDo;
