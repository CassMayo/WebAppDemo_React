import React from 'react';
import './CurrentListing.css';

const CurrentListing = ({ listings }) => {
  return (
    <div className="current-listings">
      <h1>Current Listings</h1>
      {listings.map((item, index) => (
        <div key={index} className="listing-item">
          <p>{item.projectName}</p>
          <p>Remaining Credits: {item.remainingCredits}</p>
          <p>Remaining Value: ${item.remainingValue}</p>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default CurrentListing;
