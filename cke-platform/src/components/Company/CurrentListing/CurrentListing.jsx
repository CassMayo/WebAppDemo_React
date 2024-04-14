import React, { useState, useEffect } from 'react';
import EditCreditModal from '../EditCreditModal/EditCreditModal';
import './CurrentListing.css';

const CurrentListing = () => {
    const [listings, setListings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEditId, setCurrentEditId] = useState(null);

    // get listings linked to .
    useEffect(() => {
        const fetchData = async (userId) => {

            console.log("Fetching company listings")
            const response = await fetch(`http://localhost:5050/portfolio/filter/${userId}`)

            if (!response.ok) {
                const msg = `An error has occured: ${response.statusText}`
                console.error(msg)
                return
            }
            const listings = await response.json()

            if (!listings) {
                console.warn(`User with id: ${userId} not found`)
                navigate("/")
                return
            }
            setListings(listings)
            console.log("Found", listings.length, "listings with id:", userId)
        }

        const userId = localStorage.getItem('userId')
        if (userId) {
            fetchData(userId)
        }


        return
    }, []);





    return (
        <div className="current-listings">
            <h1>Current Listings</h1>
            {listings.map(listing => (
                <div key={listing._id} className="listing-item">
                    <div className="listing-details">
                        <p>Type of Credit: <span className="detail-value">{listing.type}</span></p>
                        <p>Remaining Credits: <span className="detail-value">{listing.credits}</span></p>
                        <p>Remaining Value: <span className="detail-value">${listing.price}</span></p>
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
