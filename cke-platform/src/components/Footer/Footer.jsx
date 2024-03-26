import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/ClearKarbon.PNG" alt="Clear Karbon Exchange" />
          <h2>Clear Karbon Exchange</h2>
        </div>
        <div className="footer-links">
          <div className="link-section">
            <h5>Company</h5>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Portfolio</a></li>
              <li><a href="#invest">invest</a></li>
              <li><a href="#Team">The Team</a></li>
              <li><a href="#WorkinProgress">Work in progress</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#Privacy policy">Privacy policy</a></li>
              
            </ul>
          </div>
        </div>
        <div className="footer-social-media">
          
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>

        </div>
      </div>
      <div className="footer-bottom">
        <p>Org. nr 933 058 042</p>
        <p>Herslebs gate 25, 0561 Oslo, Norge</p>
        <p>post@clearkarbon.com</p>
        <p>© Copyright 2024 Clear Karbon Exchange. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
