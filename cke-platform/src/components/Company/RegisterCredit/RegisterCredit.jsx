import React, { useState } from 'react';
import './RegisterCredit.css';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const RegisterNewCredits = ({ onAddCredit, setActiveTab }) => {
  const [newCredit, setNewCredit] = useState({
    numberOfCredits: '',
    pricePerCredit: '',
    typeOfCredits: '',
    verificationAgency: '',
    verificationDocuments: null
  });

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const creditTypes = [
    "Tree Stored Carbon",
    "Renewable Energy Credits",
    "Water Purification Offset",
    "Wind Energy",
    "Solar Energy",
    "Ocean Conservation Efforts",
    "Nature Reserve Projects",
    "Soil Sequestration",
    "Geothermal Energy",
    "Air Purification Projects",
    "Waste Management"
  ];

  const verificationAgencies = [
    "Verified Carbon Standard",
    "Gold Standard"
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const remainingValue = parseInt(newCredit.numberOfCredits) * parseFloat(newCredit.pricePerCredit);
    onAddCredit({ ...newCredit, remainingValue });
    setNewCredit({
      numberOfCredits: '',
      pricePerCredit: '',
      typeOfCredits: '',
      verificationAgency: '',
      verificationDocuments: null
    });
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCredit({ ...newCredit, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewCredit({ ...newCredit, verificationDocuments: e.target.files[0] });
  };

  const handleAddMore = () => {
    setIsModalOpen(false);
  };

  const handleGoToListings = () => {
    setIsModalOpen(false);
    setActiveTab('currentListings');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="register-credits-form">
        <div className="input-group">
          <label htmlFor="numberOfCredits">Number of credits</label>
          <input
            type="number"
            id="numberOfCredits"
            name="numberOfCredits"
            value={newCredit.numberOfCredits}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="pricePerCredit">Price per credit</label>
          <input
            type="number"
            id="pricePerCredit"
            name="pricePerCredit"
            value={newCredit.pricePerCredit}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="typeOfCredits">Type of credits</label>
          <select
            id="typeOfCredits"
            name="typeOfCredits"
            value={newCredit.typeOfCredits}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose Type of Credits</option>
            {creditTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="verificationAgency">Verified by</label>
          <select
            id="verificationAgency"
            name="verificationAgency"
            value={newCredit.verificationAgency}
            onChange={handleInputChange}
            required
          >
            <option value="">Choose Verification Agency</option>
            {verificationAgencies.map((agency, index) => (
              <option key={index} value={agency}>{agency}</option>
            ))}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="verificationDocuments">Verification Documents</label>
          <input
            type="file"
            id="verificationDocuments"
            name="verificationDocuments"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Register Credit</button>
      </form>
      <ConfirmationModal
        isOpen={isModalOpen}
        onAddMore={handleAddMore}
        onGoToListings={handleGoToListings}
      />
    </div>
  );
};

export default RegisterNewCredits;
