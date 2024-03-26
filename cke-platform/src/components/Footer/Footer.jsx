
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo-contact">
          <div className="footer-logo">
            <img src="/images/ClearKarbon.PNG" alt="Clear Karbon Exchange" />
            <div className="logo-text">
              <span>Clear</span>
              <span>Karbon</span>
              <span>Exchange</span>
            </div>
          </div>
          <address className="footer-contact">
            <p>Org. nr 933 058 042</p>
            <p><a href="https://www.google.com/maps/place/Herslebs+gate+25,+0561+Oslo/@59.9173199,10.7621423,17z/data=!3m1!4b1!4m6!3m5!1s0x46416e5de36207bf:0x6ff4fe82679a8d3a!8m2!3d59.9173199!4d10.7647172!16s%2Fg%2F11c5pgtf56?entry=ttu"> Herslebs gate 25, 0561 Oslo, Norge</a></p>
            <a href="mailto:post@clearkarbon.com">post@clearkarbon.com</a>
          </address>
        </div>
        <nav className="footer-links">
          <div className="link-section">
            <h5>Company</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/invest">Invest</Link></li>
              <li><Link to="/team">The Team</Link></li>
              <li><Link to="/workinprogress">Work in progress</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <div className="footer-social-media">

          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
          <a href="https://www.linkedin.com/company/clear-karbon-exchange/"><i className="fab fa-linkedin-in"></i></a>

        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2024 Clear Karbon Exchange. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
