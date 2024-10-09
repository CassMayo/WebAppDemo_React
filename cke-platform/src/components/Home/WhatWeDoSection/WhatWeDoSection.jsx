import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSearch, faDollarSign, faAward } from '@fortawesome/free-solid-svg-icons';
import './WhatWeDoSection.css';
import CustomLink from '../../Navbar/CustomLink';


const WhatWeDo = () => {
    return (
        <article className="wwdc">
            <h2>What we do</h2>
            <div className="wwdc__items">
                <section className="wwdc__step">
                <h3>1</h3>
                    <FontAwesomeIcon icon={faLeaf} size="4x" className='icon' />
                    <p>
                        We have exclusive sales right with companies and projects that develop carbon credits. 
                        in other words, they remove CO2 from the athmosphere.
                    </p>
                </section>
                <section className="wwdc__step">
                    <h3>2</h3>
                    <FontAwesomeIcon icon={faSearch} size="4x" className='icon'/>
                    <p>
                        We certify suppliers with third-party verifications from Verra and The gold Standard who 
                        independently verifies the removal.

                    </p>
                </section>
                <section className="wwdc__step">
                <h3>3</h3>
                <FontAwesomeIcon icon={faDollarSign} size="4x" className='icon' />
                    <p>Companies and private customers buy the verified credits costumers buys the verified credits through
                        our market platform.
                    </p>
                </section>
                <section className="wwdc__step">
                <h3>4</h3>
                    <FontAwesomeIcon icon={faAward} size="4x" className='icon'/>
                    <p>
                        The purchased credits are then retired. The buyer get their positive verification and
                        builds up their positive sustainable reputation. for them self and on our platform.

                    </p>
                </section>
            </div>
            <div className="wwdc__button">
                <CustomLink to="/portfolio"> 
                <button className="portfolio-btn" >See our portfolio  <i class="fa-solid fa-arrow-right"></i></button>
                </CustomLink>
            </div>
        </article>
    );
};

export default WhatWeDo;
