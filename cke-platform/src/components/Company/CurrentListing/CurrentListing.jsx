import React, { useState, useEffect } from 'react';
import EditCreditModal from '../EditCreditModal/EditCreditModal';
import './CurrentListing.css';

const CurrentListing = () => {
    const [listings, setListings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEditId, setCurrentEditId] = useState(null);

    useEffect(() => {
        const fetchListings = () => {
            const storedListings = JSON.parse(localStorage.getItem('listings'));
            setListings(storedListings || []);
        };

        fetchListings();
    }, []);
    const handleSaveChanges = (updatedCredit) => {
      const updatedListings = listings.map(credit => {
          if (credit.id === updatedCredit.id) {
              const remainingValue = updatedCredit.numberOfCredits * updatedCredit.pricePerCredit;
              return {...updatedCredit, remainingValue}; 
          }
          return credit;
      });
      setListings(updatedListings);
      localStorage.setItem('listings', JSON.stringify(updatedListings));
  };
  
    const openModal = (id) => {
        setCurrentEditId(id);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        const updatedListings = listings.filter(item => item.id !== id);
        setListings(updatedListings);
        localStorage.setItem('listings', JSON.stringify(updatedListings));
    }


    return (
        <div className="current-listings">
            <h1>Current Listings</h1>
            {listings.map(item => (
                <div key={item.id} className="listing-item">
                    <div className="listing-details">
                        <p>Type of Credit: <span className="detail-value">{item.typeOfCredits}</span></p>
                        <p>Remaining Credits: <span className="detail-value">{item.numberOfCredits}</span></p>
                        <p>Remaining Value: <span className="detail-value">${item.remainingValue.toFixed(2)}</span></p>
                    </div>
                    <div className="listing-actions">
                    <button onClick={() => openModal(item.id)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                </div>
            ))}
            {isModalOpen && currentEditId !== null && (
                <EditCreditModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    credit={listings.find(item => item.id === currentEditId)}
                    onSave={handleSaveChanges}
                />
            )}
        </div>
    );
};

export default CurrentListing;
