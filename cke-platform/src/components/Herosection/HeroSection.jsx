import React from 'react';
import './HeroSection.css'; 
import CustomLink from '../Navbar/CustomLink';

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ marginTop: '-90px', paddingTop: '70px' }}>
      <h1>Incentivizing the green shift with carbon credits from removal</h1>
      <CustomLink to="/portfolio">
      <button className="portfolio-btn" >See our portfolio  <i class="fa-solid fa-arrow-right"></i></button>
      </CustomLink>

    </div>
  );
};

export default HeroSection;