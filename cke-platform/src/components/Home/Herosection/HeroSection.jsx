import React from 'react';
import './HeroSection.css';
import CustomLink from '../../Navbar/CustomLink';

const HeroSection = () => {
  const isLoggedIn = localStorage.getItem('username') !== null;

  return (
    <div className="hero-container" style={{ marginTop: '-90px', paddingTop: '70px' }}>
      <h1>Incentivizing </h1>
      <h1>the green shift with</h1>
      <h1>carbon credits from removal</h1>
      <CustomLink to={isLoggedIn ? "/portfolio" : "/login"}>
        <button className="portfolio-btn">
          {isLoggedIn ? 'Portfolio' : 'Login'} <i className="fa-solid fa-arrow-right"></i>
        </button>
      </CustomLink>
    </div>
  );
};

export default HeroSection;
