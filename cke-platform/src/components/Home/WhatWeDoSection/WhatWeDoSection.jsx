import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSearch, faDollarSign, faAward } from '@fortawesome/free-solid-svg-icons';
import './WhatWeDoSection.css';
import CustomLink from '../Navbar/CustomLink';

const WhatWeDo = () => {
    return (
        <div className="what-we-do-container">
            <h2>What we do</h2>
            <div className="steps">
                <div className="step">
                <h3>1</h3>
                    <FontAwesomeIcon icon={faLeaf} size="5x" />
              
                    <p>
                        We have exclusive sales right with companies and projects that develop carbon credits. 
                        in other words, they remove CO2 from the athmosphere.
                    </p>
                </div>
                <div className="step">
                    <h3>2</h3>
                    <FontAwesomeIcon icon={faSearch} size="5x" />
                    <p>
                        We certify suppliers with third-party verifications from Verra and The gold Standard who 
                        independently verifies the removal.

                    </p>
                </div>
                <div className="step">
                <h3>3</h3>
                <FontAwesomeIcon icon={faDollarSign} size="5x" />
                    
                    <p>Companies and private customers buy the verified credits costumers buys the verified credits through
                        our market platform.
                    </p>
                </div>
                <div className="step">
                <h3>4</h3>
                    <FontAwesomeIcon icon={faAward} size="5x" />
                   
                    <p>
                        The purchased credits are then retired. The buyer get their positive verification and
                        builds up their positive sustainable reputation. for them self and on our platform.

                    </p>
                </div>
            </div>
            <div className="cta-button">
                <CustomLink to="/portfolio"> 
                <button className="portfolio-btn" >See our portfolio  <i class="fa-solid fa-arrow-right"></i></button>
                </CustomLink>
            </div>
        </div>
    );
};

export default WhatWeDo;
