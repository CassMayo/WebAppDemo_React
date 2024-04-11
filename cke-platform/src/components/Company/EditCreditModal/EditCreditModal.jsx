import React, { useState, useEffect } from 'react';
import './EditCreditModal.css';

const EditCreditModal = ({ isOpen, onClose, credit, onSave }) => {
    const [editedCredit, setEditedCredit] = useState({
        numberOfCredits: credit.numberOfCredits || 0, 
        newPrice: credit.pricePerCredit || 0          
    });

    useEffect(() => {
        setEditedCredit({
            numberOfCredits: credit.numberOfCredits || 0,
            newPrice: credit.pricePerCredit || 0
        });
    }, [credit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCredit(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedNumberOfCredits = parseInt(editedCredit.numberOfCredits, 10);
        const updatedPricePerCredit = parseFloat(editedCredit.newPrice);
    
        onSave({
            ...credit,  
            numberOfCredits: updatedNumberOfCredits,
            pricePerCredit: updatedPricePerCredit
        });
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
                            id="numberOfCredits"
                            name="numberOfCredits"
                            value={editedCredit.numberOfCredits}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="newPrice">New price per credit:</label>
                        <input
                            type="number"
                            id="newPrice"
                            name="newPrice"
                            value={editedCredit.newPrice}
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
