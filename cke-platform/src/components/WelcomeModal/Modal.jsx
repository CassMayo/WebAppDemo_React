import React from 'react';
import './Modal.css';

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Welcome to Our Demo!</h2>
        <p className='warn'>NB: This application serves as a demo. Not the final version!</p>
        <p className='start'>Get started by registering as a seller or a buyer to fully explore our features:</p>
        <ul>
          <li>
            Sellers: post your products and earn credits.
          </li>
          <li>
            Purchase credits to buy products.
          </li>
          <li>
            Explore: our portfolio to see what's available or showcase your products.
          </li>
        </ul>
        <p className='last'>Register now to begin your journey with us!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
