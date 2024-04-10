import './CurrentListing.css';
import React, { useState } from 'react';
import EditCreditModal from '../EditCreditModal/EditCreditModal';

const CurrentListing = ({ listings, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  const openModal = (index) => {
    setCurrentEditIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveChanges = (editedCredit) => {
    onEdit(currentEditIndex, editedCredit);
    closeModal();
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
        onDelete(index);
    }
};


  return (
    <div className="current-listings">
      <h1>Current Listings</h1>
      {listings.map((item, index) => (
        <div key={index} className="listing-item">
          <div className="listing-details">
            <p>Type of Credit: <span className="detail-value">{item.typeOfCredits}</span></p>
            <p>Remaining Credits: <span className="detail-value">{item.numberOfCredits}</span></p>
            <p>Remaining Value: <span className="detail-value">${item.remainingValue.toFixed(2)}</span></p>
          </div>
          <div className="button-container">
            <button onClick={() => openModal(index)}>Edit</button>
           <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
      {currentEditIndex != null && (
        <EditCreditModal
          isOpen={isModalOpen}
          onClose={closeModal}
          credit={listings[currentEditIndex] || {}}
          onSave={saveChanges}
        />
      )}
    </div>
  );
};

export default CurrentListing;
