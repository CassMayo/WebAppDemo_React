import React, { useState, useEffect } from 'react';
import { BASE_API_URL } from '../../../config';

const EditCreditModal = ({ isOpen, onClose, listing }) => {
    const [newListing, setNewListing] = useState({
        title: listing.title,
        price: listing.price,
        credits: listing.credits,
        type: listing.type,
        imageUrl: listing.imageUrl,
        imageAlt: listing.imageAlt,
        location: listing.location,
        description: listing.description,
        ownerId: listing.ownerId,
        ownerName: listing.ownerName

    });

    async function handleSaveChanges() {
        try{
            const response = await fetch(`${BASE_API_URL}/portfolio/${listing._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newListing)
            })
        } catch(err) {
            console.error(err)
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewListing(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSaveChanges()
        onClose();  
    };

    if (!isOpen) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="numberOfCredits">Number of credits:</label>
                        <input
                            type="number"
                            id="credits"
                            name="credits"
                            value={newListing.credits}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="newPrice">New price per credit:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={newListing.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default EditCreditModal;
