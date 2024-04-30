import React from 'react';
import './Modal.css';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to Our Demo!</h2>
        <p className='warn'>NB: This application serves as a demo. Not the final version! please refrain from refreshing the page.</p>
        <p className='start'>Get started by registering as a seller or a buyer to fully explore our features:</p>
        <ul>
          <li>
            <h3>Sellers:</h3>
            <span>Post your products and earn credits.</span>
          </li>
          <li>
            <h3>Buyers:</h3>
            <span>Purchase credits to buy products.</span>
          </li>
          <li>
            <h3>Explore:</h3>
            <span>Our extensive portfolio to see what's available or showcase your products.</span>
          </li>
        </ul>
        <p className='last'>Register now to begin your journey with us!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
