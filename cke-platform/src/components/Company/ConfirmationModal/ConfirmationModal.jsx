import React from 'react';
import './ConfirmationModal.css'; 

const ConfirmationModal = ({ isOpen, onAddMore, onGoToListings }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onGoToListings}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <p>Credit registered successfully!</p>
        <button onClick={onAddMore}>Add Another Credit</button>
        <button onClick={onGoToListings}>Go to Current Listings</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
