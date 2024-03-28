import React from 'react';
import './Newsletter.css'; 

const NewsletterSection = () => (
  <section className="newsletter-section">
    <div className='newsletter-box'>
    <h2>Want to get updates on carbon credits?</h2>
    <p>Sign up to our newsletter for the latest news and insights on carbon removal</p>
    <form className="newsletter-form">
      <label htmlFor="email-input">Your mail:</label>
      <input type="email" id="email-input" placeholder="Enter your email" />
      <button type="submit" className="subscribe-button">Subscribe</button>
    </form>
    </div>
  </section>
);

export default NewsletterSection;
