import React, { useState, useEffect } from 'react';
import './EditCreditModal.css';

const EditCreditModal = ({ isOpen, onClose, credit, onSave }) => {
    const [editedCredit, setEditedCredit] = useState({
        ...credit,
        changeInCredits: 0, 
        newPrice: credit.pricePerCredit || 0
    });

    useEffect(() => {
        setEditedCredit({
            ...credit,
            changeInCredits: 0, 
            newPrice: credit.pricePerCredit || 0
        });
    }, [credit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCredit({ ...editedCredit, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({
            ...credit,
            numberOfCredits: parseInt(editedCredit.numberOfCredits),
            pricePerCredit: parseFloat(editedCredit.pricePerCredit)
        });
    };


    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
                        <label htmlFor="pricePerCredit">New price per credit:</label>
                        <input
                            type="number"
                            id="pricePerCredit"
                            name="pricePerCredit"
                            value={editedCredit.pricePerCredit}
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
