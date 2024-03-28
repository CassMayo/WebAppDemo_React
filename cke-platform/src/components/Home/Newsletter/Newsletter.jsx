import React from 'react';
import './Newsletter.css';
import { useInputField } from '../../Hooks/useInputField';



const NewsletterSection = () => {
    const [email, handleEmailChange, resetEmail] = useInputField('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for subscribing! We will keep you updated on the latest news and insights on carbon removal.`);
        resetEmail();
    };
    
    return (
        <section className="newsletter-section">
            <div className='newsletter-box'>
                <h2>Want to get updates on carbon credits?</h2>
                <p>Sign up to our newsletter for the latest news and insights on carbon removal</p>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                <label htmlFor="email-input">Your mail:</label>
                <input 
                    type="email" 
                    id="email-input" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={handleEmailChange}  
                />
                <button type="submit" className="subscribe-button">Subscribe</button>
            </form>
            </div>
        </section>
    );
};

export default NewsletterSection;
