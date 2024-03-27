import React from 'react';
import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ marginTop: '-90px', paddingTop: '70px' }}>
      <h1>Incentivizing the green shift with carbon credits from removal</h1>
      <button className="portfolio-btn" >See our portfolio  <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  );
};

export default HeroSection;