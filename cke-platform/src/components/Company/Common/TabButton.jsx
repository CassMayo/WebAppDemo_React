import React from 'react';
import './TabButton.css'; 

const TabButton = ({ isActive, onClick, children }) => {
  return (

    <div className="tab-buttonDiv">
    <button
      className={`tab-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
    </div>
  );
};

export default TabButton;
